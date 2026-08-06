// Minimal JS for core client-side tools
(function(){
  // Utilities
  function countWords(text){
    if(!text) return 0;
    return (text.trim().match(/\S+/g)||[]).length;
  }
  function countChars(text){return text.length}
  function countCharsNoSpace(text){return (text.replace(/\s/g,'')||'').length}
  function countSentences(text){return (text.match(/[.!?]+(\s|$)/g)||[]).length}
  function countParagraphs(text){return (text.trim().length===0)?0:(text.replace(/\r/g,'').split(/\n+/).filter(Boolean).length)}
  function readingMinutes(words){return Math.max(0,Math.round(words/200))}
  function speakingMinutes(words){return Math.max(0,Math.round(words/130))}

  // Hero live counter
  var heroText = document.getElementById('hero-text');
  var statWords = document.getElementById('stat-words');
  var statChars = document.getElementById('stat-chars');
  var statCharsNo = document.getElementById('stat-chars-nospace');
  var statSent = document.getElementById('stat-sentences');
  var statPar = document.getElementById('stat-paragraphs');
  var statRead = document.getElementById('stat-reading');
  var statSpeak = document.getElementById('stat-speaking');

  function updateHero(){
    var text = heroText.value || '';
    var words = countWords(text);
    statWords.textContent = words;
    statChars.textContent = countChars(text);
    statCharsNo.textContent = countCharsNoSpace(text);
    statSent.textContent = countSentences(text);
    statPar.textContent = countParagraphs(text);
    statRead.textContent = readingMinutes(words);
    statSpeak.textContent = speakingMinutes(words);
    // store recent tool
    try{let r=JSON.parse(localStorage.getItem('lc-recent')||'[]');if(!r.includes('Word Counter')){r.unshift('Word Counter');r=r.slice(0,5);localStorage.setItem('lc-recent',JSON.stringify(r))}}catch(e){}
    renderRecent();
  }
  if(heroText){heroText.addEventListener('input',updateHero);window.addEventListener('load',updateHero)}

  // Recent tools
  function renderRecent(){
    var el = document.getElementById('recent-tools');
    if(!el) return;
    var list = JSON.parse(localStorage.getItem('lc-recent')||'[]');
    el.textContent = list.length? list.join(' · '): '—';
  }
  renderRecent();

  // Copy & download
  function downloadText(filename, text){
    var blob = new Blob([text], {type:'text/plain'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
  }
  var dl = document.getElementById('download-txt');
  if(dl){dl.addEventListener('click',function(){downloadText('lexicount.txt',heroText.value||'')} )}
  var copyBtn = document.getElementById('copy-result');
  if(copyBtn){copyBtn.addEventListener('click',function(){navigator.clipboard.writeText(heroText.value||'').then(function(){copyBtn.textContent='Copied';setTimeout(()=>copyBtn.textContent='Copy',1500)})})}

  // Word counter page
  var wcText = document.getElementById('wc-text');
  if(wcText){
    var wcWords = document.getElementById('wc-words');
    var wcChars = document.getElementById('wc-chars');
    var wcCharsNo = document.getElementById('wc-chars-nospace');
    var wcSent = document.getElementById('wc-sentences');
    var wcPar = document.getElementById('wc-paragraphs');
    var wcRead = document.getElementById('wc-reading');
    function updateWC(){
      var t = wcText.value||'';
      var w = countWords(t);
      wcWords.textContent = w;wcChars.textContent = countChars(t);wcCharsNo.textContent=countCharsNoSpace(t);wcSent.textContent=countSentences(t);wcPar.textContent=countParagraphs(t);wcRead.textContent=readingMinutes(w);
    }
    wcText.addEventListener('input',updateWC);window.addEventListener('load',updateWC);
    var wcDl = document.getElementById('wc-download');if(wcDl) wcDl.addEventListener('click',()=>downloadText('lexicount-wordcount.txt',wcText.value||''));
    var wcCopy = document.getElementById('wc-copy'); if(wcCopy) wcCopy.addEventListener('click',()=>navigator.clipboard.writeText(wcText.value||'').then(()=>{wcCopy.textContent='Copied';setTimeout(()=>wcCopy.textContent='Copy',1500)}));
  }

  // Unscrambler (simple dictionary approach: small builtin list)
  var unscr = document.getElementById('unscramble-input');
  var unscrResults = document.getElementById('unscramble-results');
  var minlen = document.getElementById('minlen');
  // small sample dictionary for scaffold
  var DICT = ['art','rate','tear','eat','tea','are','ear','tare','crate','react','trace','race','caret'];
  function sortedLetters(s){return s.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('')}
  function matchUnscramble(input){
    if(!input) return [];
    var key = sortedLetters(input);
    var min = parseInt(minlen?minlen.value:2,10)||2;
    return DICT.filter(w=>w.length>=min && sortedLetters(w)===key).sort((a,b)=>a.length-b.length);
  }
  if(unscr){unscr.addEventListener('input',function(){var r=matchUnscramble(this.value);unscrResults.textContent = r.length? r.join(', '): 'No matches found. (Scaffold dictionary)';});}

  // Text-to-speech wiring
  var ttsText = document.getElementById('tts-text');
  var ttsPlay = document.getElementById('tts-play');
  var ttsStop = document.getElementById('tts-stop');
  var ttsVoice = document.getElementById('tts-voice');
  var ttsRate = document.getElementById('tts-rate');
  var synth = window.speechSynthesis;
  function populateVoices(){
    if(!ttsVoice) return;
    var voices = synth.getVoices();
    ttsVoice.innerHTML='';voices.forEach(v=>{var o=document.createElement('option');o.value=v.name;o.textContent=v.name + (v.lang? ' — '+v.lang:'');ttsVoice.appendChild(o)});
  }
  if(synth){populateVoices();synth.onvoiceschanged=populateVoices}
  if(ttsPlay){ttsPlay.addEventListener('click',function(){if(!ttsText) return;var utter=new SpeechSynthesisUtterance(ttsText.value||'');utter.rate=parseFloat(ttsRate.value||1);var vname=ttsVoice?ttsVoice.value:null;if(vname){var v=synth.getVoices().find(x=>x.name===vname);if(v)utter.voice=v;}synth.cancel();synth.speak(utter)})}
  if(ttsStop){ttsStop.addEventListener('click',function(){synth.cancel()})}

  // Voice-to-text (basic)
  var vtText = document.getElementById('vt-text');
  var vtMic = document.getElementById('vt-mic');
  var recognizing=false;
  if(window.SpeechRecognition || window.webkitSpeechRecognition){
    var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    var rec = new Rec();rec.continuous=true;rec.interimResults=true;rec.lang='en-US';
    rec.onresult=function(e){var t='';for(var i=e.resultIndex;i<e.results.length;i++){t+=e.results[i][0].transcript}vtText.value = vtText.value + '\n' + t;};
    if(vtMic){vtMic.addEventListener('click',function(){if(!recognizing){rec.start();recognizing=true;vtMic.textContent='Stop';localStorage.setItem('lc-recent',JSON.stringify(['Voice to Text'].concat(JSON.parse(localStorage.getItem('lc-recent')||'[]')).slice(0,5)))}else{rec.stop();recognizing=false;vtMic.textContent='Start';}})}
  }else{
    if(vtMic) vtMic.addEventListener('click',function(){alert('Speech recognition not supported in this browser.')});
  }

  // Command palette (open with /)
  var search = document.getElementById('tool-search');
  window.addEventListener('keydown',function(e){if(e.key==='/' && document.activeElement.tagName!=='INPUT' && document.activeElement.tagName!=='TEXTAREA'){e.preventDefault();search.focus();}});

  // Cookie consent & AdSense initialization
  function initAdsIfConsent(){
    try{
      var consent = localStorage.getItem('lc-cookie-consent');
      if(consent === 'all'){
        // initialize ads by pushing to adsbygoogle for each ins
        var ins = document.querySelectorAll('ins.adsbygoogle');
        ins.forEach(function(i){try{(adsbygoogle = window.adsbygoogle || []).push({});}catch(e){console.warn('adsbygoogle push failed',e)}});
      }
    }catch(e){console.warn(e)}
  }

  function showCookieBanner(){
    if(localStorage.getItem('lc-cookie-consent')) return; // already chosen
    var banner = document.createElement('div');
    banner.id = 'lc-cookie-banner';
    banner.innerHTML = '\n      <div style="position:fixed;left:0;right:0;bottom:0;background:#fff;border-top:1px solid #eee;padding:12px;display:flex;justify-content:space-between;align-items:center;gap:12px;z-index:10000">\n        <div style="max-width:70%">\n          <strong>We use cookies</strong> — to serve ads and improve the site. You can accept all cookies or use essential only.\n        </div>\n        <div style="display:flex;gap:8px">\n          <button id="lc-cookie-essential" style="background:#fff;border:1px solid #ddd;padding:8px;border-radius:8px">Essential only</button>\n          <button id="lc-cookie-accept" style="background:var(--accent);color:#fff;border:none;padding:8px 12px;border-radius:8px">Accept all</button>\n        </div>\n      </div>';
    document.body.appendChild(banner);
    document.getElementById('lc-cookie-accept').addEventListener('click',function(){localStorage.setItem('lc-cookie-consent','all');document.getElementById('lc-cookie-banner').remove();initAdsIfConsent();});
    document.getElementById('lc-cookie-essential').addEventListener('click',function(){localStorage.setItem('lc-cookie-consent','essential');document.getElementById('lc-cookie-banner').remove();});
  }

  // Run cookie banner on load and try to init ads (only if accepted)
  window.addEventListener('load',function(){showCookieBanner();initAdsIfConsent();});

})();
