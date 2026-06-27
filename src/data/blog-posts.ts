export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  categoryColor: string
  image: string
  date: string
  readTime: string
  author: {
    name: string
    title: string
    avatar: string
  }
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'science-backed-reasons-eat-more-greens',
    title: '7 Science-Backed Reasons to Eat More Leafy Greens Every Day',
    excerpt:
      'Research keeps stacking up. From reducing chronic inflammation to enhancing cognitive performance, leafy greens are the single most impactful food group you can add to your plate.',
    category: 'Nutrition Science',
    categoryColor: '#2d6a4f',
    image:
      'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80',
    date: 'May 28, 2025',
    readTime: '6 min',
    author: {
      name: 'Dr. Nadia Patel',
      title: 'Registered Dietitian & Nutritionist',
      avatar:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80',
    },
    tags: ['Greens', 'Anti-Inflammatory', 'Research'],
    content: `
<h2>Why Leafy Greens Are Non-Negotiable</h2>
<p>Every decade, nutrition science reveals something new — but the one constant across hundreds of studies is this: leafy green vegetables are among the most powerful foods on the planet. Whether you're trying to boost energy naturally, lose weight, or protect your brain from aging, the evidence points to the same answer.</p>
<h2>1. They Transform Your Cardiovascular Health</h2>
<p>A landmark study from Harvard tracked 130,000 adults over 24 years and found that those who ate the most leafy greens had a 16% lower risk of cardiovascular disease. The nitrates in greens like spinach and rocket are converted to nitric oxide in the body, relaxing blood vessels and lowering blood pressure.</p>
<h2>2. They Feed Your Gut Microbiome</h2>
<p>Leafy greens contain a unique sulfur-containing sugar molecule called sulfoquinovose (SQ), which feeds specific beneficial bacteria in your gut. These bacteria produce short-chain fatty acids that keep the gut lining intact and reduce inflammation throughout the body.</p>
<h2>3. They Protect Your Brain from Aging</h2>
<p>A 2018 study in Neurology followed 960 older adults for 5 years. Those who ate one serving of leafy greens per day had the cognitive age of someone 11 years younger than those who ate none. Vitamin K, folate, lutein, and beta-carotene are the key neuroprotective compounds.</p>
<blockquote><p>"Eating one serving of leafy greens a day could be a simple way to foster brain health." — Martha Clare Morris, PhD, Rush University Medical Center</p></blockquote>
<h2>4. They Regulate Blood Sugar</h2>
<p>The magnesium and fiber in dark leafy greens slow glucose absorption and improve insulin sensitivity. Regular consumption is linked to a 14% lower risk of developing type 2 diabetes — a finding replicated across multiple large cohort studies.</p>
<h2>5. They Are Anti-Cancer Powerhouses</h2>
<p>Cruciferous greens (kale, broccoli, Brussels sprouts) contain glucosinolates, which are broken down into compounds like sulforaphane that activate the body's natural detoxification enzymes and have been shown in lab and observational studies to inhibit cancer cell growth.</p>
<h2>6. They Boost Energy Naturally Through Iron and B Vitamins</h2>
<p>Fatigue is one of the most common complaints in modern life, and greens are a direct antidote. Spinach provides non-heme iron (absorb it better by pairing with vitamin C), while dark greens are rich in folate and B vitamins essential for cellular energy production.</p>
<h2>7. They Support Radiant Skin</h2>
<p>Lutein and zeaxanthin, concentrated in kale and spinach, protect skin cells from UV radiation. Vitamin C in greens stimulates collagen synthesis, while the high water content of leafy greens contributes to cellular hydration and skin elasticity.</p>
<h2>How to Eat More Greens Without Effort</h2>
<ul>
<li>Add a handful of spinach to every smoothie — you won't taste it</li>
<li>Use romaine or butter lettuce wraps instead of bread</li>
<li>Stir chopped kale into soups, curries, and pasta sauces in the last 2 minutes</li>
<li>Keep a bag of pre-washed mixed greens in the fridge for instant salads</li>
<li>Blend frozen spinach into sauces and dips for an invisible nutrient boost</li>
</ul>
<p>The goal is not perfection — it's consistency. One serving of leafy greens per day is where the research shows meaningful benefits begin.</p>
    `,
  },
  {
    slug: 'meal-prep-healthy-week',
    title: 'The Ultimate Sunday Meal Prep Guide for a Healthy, Stress-Free Week',
    excerpt:
      'Stop letting a busy week derail your healthy eating. This battle-tested 90-minute Sunday prep routine sets you up for 5 days of nourishing meals without a second thought.',
    category: 'Meal Planning',
    categoryColor: '#c4622d',
    image:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
    date: 'May 21, 2025',
    readTime: '8 min',
    author: {
      name: 'Marcus Chen',
      title: 'Certified Nutrition Coach',
      avatar:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    },
    tags: ['Meal Prep', 'Time-Saving', 'Batch Cooking'],
    content: `
<h2>Why Most Meal Prep Advice Fails You</h2>
<p>You've seen the Instagram posts — perfectly matching glass containers filled with identical chicken-rice-broccoli bowls lined up in the fridge. It looks organised, but by Wednesday you're bored, and by Thursday the containers are abandoned. The problem isn't meal prep. The problem is the wrong meal prep system.</p>
<h2>The Building-Blocks Method</h2>
<p>Instead of preparing complete meals, prepare components. This gives you variety all week while doing the cooking work only once. Here's the framework that thousands of our community members swear by.</p>
<h2>Your 90-Minute Sunday Blueprint</h2>
<p>The key is running multiple things simultaneously. Here's the sequence:</p>
<h3>Minutes 0–10: Get Everything Started</h3>
<ul>
<li>Put a large pot of water on to boil (for grains)</li>
<li>Preheat oven to 400°F (200°C)</li>
<li>Take proteins out of the fridge to come to room temperature</li>
</ul>
<h3>Minutes 10–40: Hands-Off Cooking</h3>
<ul>
<li>Cook your grain of choice (quinoa, brown rice, farro)</li>
<li>Roast a tray of mixed vegetables with olive oil and seasoning</li>
<li>Bake or poach your proteins</li>
</ul>
<h3>Minutes 40–70: Active Prep</h3>
<ul>
<li>Wash and chop all raw vegetables for salads and snacking</li>
<li>Make 2 sauces or dressings</li>
<li>Hard-boil a batch of eggs if using</li>
</ul>
<h3>Minutes 70–90: Pack and Store</h3>
<ul>
<li>Let everything cool completely before storing</li>
<li>Portion grains and proteins into separate containers</li>
<li>Store washed greens with a paper towel to absorb moisture</li>
</ul>
<h2>The Weekly Menu (Built from Your Prep)</h2>
<p>With your components ready, assembling meals takes under 5 minutes:</p>
<ul>
<li>Monday lunch: Grain bowl with roasted veg and tahini</li>
<li>Tuesday dinner: Protein with fresh salad and sauce</li>
<li>Wednesday lunch: Wrap using grain as a base with raw veg</li>
<li>Thursday dinner: Stir-fry using roasted veg with added sauce</li>
<li>Friday lunch: Protein over greens with dressing</li>
</ul>
<blockquote><p>The best meal prep isn't about eating the same thing five times. It's about having the pieces ready to build something new every day.</p></blockquote>
<h2>The 5 Non-Negotiable Components to Always Have Ready</h2>
<ul>
<li>One cooked whole grain (quinoa, brown rice, or farro)</li>
<li>One roasted or steamed vegetable medley</li>
<li>One lean protein (baked salmon, chicken, or chickpeas)</li>
<li>One versatile sauce (tahini, pesto, vinaigrette)</li>
<li>One washed, ready-to-eat leafy green</li>
</ul>
<p>With this system, healthy eating becomes the path of least resistance. When a nourishing meal is easier to assemble than ordering takeout, you naturally make better choices — every single day.</p>
    `,
  },
  {
    slug: 'smoothies-vs-juices-truth',
    title: 'Smoothies vs. Juices: The Truth Your Body Needs to Know',
    excerpt:
      'Both are vibrantly coloured, both feel virtuous. But the difference in how they affect your blood sugar, hunger hormones, and gut microbiome is significant. Here\'s the complete picture.',
    category: 'Health Guide',
    categoryColor: '#d4a853',
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=80',
    date: 'May 14, 2025',
    readTime: '5 min',
    author: {
      name: 'Dr. Nadia Patel',
      title: 'Registered Dietitian & Nutritionist',
      avatar:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80',
    },
    tags: ['Smoothies', 'Juicing', 'Blood Sugar'],
    content: `
<h2>The Core Difference: Fibre</h2>
<p>When you juice a fruit or vegetable, you extract the liquid and discard the fibrous pulp. When you blend, you keep everything. This seemingly small difference has profound implications for how your body processes the resulting drink.</p>
<h2>What Happens to Your Blood Sugar</h2>
<p>Fibre slows the absorption of natural sugars. Without it (as in juice), sugars enter the bloodstream rapidly, triggering a significant insulin response. Over time, regular juice consumption — even 100% fruit juice — has been associated with increased type 2 diabetes risk in multiple large studies.</p>
<p>Smoothies, particularly those built with a base of vegetables, seeds, and protein, tend to produce a much more gradual blood sugar rise and a longer period of satiety.</p>
<h2>The Gut Microbiome Angle</h2>
<p>Your gut bacteria need fibre to thrive. Removing it through juicing effectively starves the microbiome of its preferred fuel. Regular consumption of whole-food blended smoothies feeds the diversity of your gut bacteria in a way that juices cannot replicate.</p>
<h2>When Juicing Makes Sense</h2>
<p>This isn't to say juicing is without merit. Cold-pressed vegetable juices (low fruit, high greens) can deliver a concentrated dose of micronutrients and phytocompounds. During periods of digestive stress or illness, the reduced fibre load can be beneficial. And some nutrients like certain carotenoids may actually be more bioavailable when cell walls are broken down through juicing.</p>
<h2>The Verdict</h2>
<ul>
<li>For daily nutrition: Choose smoothies — they preserve fibre, support gut health, and stabilise blood sugar</li>
<li>For targeted micronutrient loading: Low-sugar green juices can complement a whole-food diet</li>
<li>For weight management: Smoothies win due to their significantly higher satiety index</li>
<li>For children and sensitive digestive systems: Smoothies are generally the safer, more nutritionally complete choice</li>
</ul>
<blockquote><p>Eat your fruit, drink your vegetables — and when you do blend, keep every single fibre-rich component in the glass.</p></blockquote>
<h2>How to Build the Perfect Smoothie</h2>
<p>The formula our nutritionists recommend: 50% vegetables (spinach, cucumber, zucchini) + 30% fruit (frozen for thickness) + 10% healthy fat (avocado, nut butter) + 10% protein (seeds, protein powder, Greek yogurt) + liquid base. This ratio guarantees satiety, blood sugar stability, and complete nutrition in every glass.</p>
    `,
  },
  {
    slug: 'anti-inflammatory-foods-guide',
    title: 'The Complete Anti-Inflammatory Foods Guide: Eat to Heal',
    excerpt:
      'Chronic inflammation is the root of most modern disease. The good news: your fork is your most powerful medicine. Here are the foods that dial down inflammation at the cellular level.',
    category: 'Nutrition Science',
    categoryColor: '#2d6a4f',
    image:
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=80',
    date: 'May 7, 2025',
    readTime: '7 min',
    author: {
      name: 'Dr. Nadia Patel',
      title: 'Registered Dietitian & Nutritionist',
      avatar:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80',
    },
    tags: ['Anti-Inflammatory', 'Healing Foods', 'Chronic Disease'],
    content: `
<h2>Understanding Inflammation</h2>
<p>Acute inflammation is your friend — it's the swelling and redness that signals your immune system is fighting off an infection or healing an injury. Chronic low-grade inflammation is the silent enemy, linked to heart disease, cancer, diabetes, Alzheimer's, and depression.</p>
<h2>The Top Anti-Inflammatory Foods</h2>
<ul>
<li>Wild-caught fatty fish (salmon, sardines, mackerel) — omega-3s EPA and DHA directly reduce inflammatory markers</li>
<li>Turmeric — curcumin inhibits NF-kB, a key inflammatory signalling molecule</li>
<li>Wild blueberries — among the highest antioxidant capacity of any food</li>
<li>Extra virgin olive oil — oleocanthal has effects similar to ibuprofen</li>
<li>Dark leafy greens — vitamin K and lutein are potent inflammation modulators</li>
</ul>
    `,
  },
  {
    slug: 'gut-health-beginners-guide',
    title: "Your Gut Health Beginner's Guide: Feed the Right Bacteria",
    excerpt:
      "95% of your serotonin is produced in your gut. Your microbiome influences everything from mood to metabolism. Here's what the science says about nourishing it.",
    category: 'Gut Health',
    categoryColor: '#6b7c93',
    image:
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=80',
    date: 'April 30, 2025',
    readTime: '6 min',
    author: {
      name: 'Marcus Chen',
      title: 'Certified Nutrition Coach',
      avatar:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    },
    tags: ['Gut Health', 'Probiotics', 'Prebiotics'],
    content: `
<h2>The Gut–Brain Axis</h2>
<p>Your gut and brain are in constant bidirectional communication via the vagus nerve. The 100 trillion microorganisms in your digestive tract produce neurotransmitters, hormones, and metabolites that influence every system in your body — including your mental health.</p>
<h2>What Damages Your Microbiome</h2>
<ul>
<li>Antibiotics (necessary sometimes, but disruptive)</li>
<li>Ultra-processed foods and emulsifiers</li>
<li>Chronic stress and poor sleep</li>
<li>Low dietary diversity</li>
</ul>
<h2>What Heals It</h2>
<ul>
<li>Diversity: eat 30+ different plant foods per week</li>
<li>Fermented foods daily: kefir, yogurt, sauerkraut, kimchi</li>
<li>Prebiotic fibre: garlic, onions, leeks, asparagus, green bananas</li>
<li>Polyphenols: dark berries, dark chocolate, green tea</li>
</ul>
    `,
  },
  {
    slug: 'healthy-eating-on-budget',
    title: 'Eat Well on $50 a Week: The Budget Nutrition Master Plan',
    excerpt:
      "Healthy eating doesn't have to be expensive. With the right strategy, a family of two can eat nutrient-dense, delicious food for under $50 per week. Here's exactly how.",
    category: 'Budget Eating',
    categoryColor: '#c4622d',
    image:
      'https://images.unsplash.com/photo-1490818387583-1d2ce1c7b1f8?auto=format&fit=crop&w=900&q=80',
    date: 'April 22, 2025',
    readTime: '7 min',
    author: {
      name: 'Marcus Chen',
      title: 'Certified Nutrition Coach',
      avatar:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
    },
    tags: ['Budget', 'Meal Planning', 'Frugal Eating'],
    content: `
<h2>The Budget Nutrition Myth</h2>
<p>The narrative that eating healthily is expensive is, largely, a myth perpetuated by our cultural bias toward expensive health foods and wellness products. The most nutrient-dense foods on the planet — lentils, beans, oats, eggs, frozen vegetables, canned fish — are among the most affordable foods in any grocery store.</p>
<h2>Your $50 Weekly Shopping List</h2>
<ul>
<li>Dried lentils and chickpeas (2kg bag) — $3.50</li>
<li>Rolled oats (1kg) — $2.00</li>
<li>Eggs (12) — $3.50</li>
<li>Frozen spinach (1kg) — $2.50</li>
<li>Frozen mixed berries (1kg) — $4.50</li>
<li>Canned tomatoes (6 cans) — $4.00</li>
<li>Brown rice (2kg) — $3.00</li>
<li>Seasonal vegetables — $12.00</li>
<li>Bananas (bunch) — $1.50</li>
<li>Olive oil, spices — $6.00</li>
</ul>
<p>Total: approximately $43. Remaining $7 gives you flexibility for whatever's on sale or seasonal.</p>
    `,
  },
]
