export interface Ingredient {
  item: string
  /** Estimated cost in Rand of the quantity used, based on typical SA supermarket prices */
  costZar: number
}

export interface Recipe {
  id: string
  title: string
  description: string
  intro: string
  prepTime: string
  cookTime: string
  servings: number
  calories: number
  category: string
  cuisine: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  image: string
  tags: string[]
  ingredients: Ingredient[]
  instructions: string[]
  tips: string[]
  storage: string
  featured: boolean
  datePublished: string
  dateModified: string
  nutritionFacts: {
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
}

export const recipes: Recipe[] = [
  {
    id: 'rainbow-quinoa-bowl',
    title: 'Rainbow Quinoa Buddha Bowl',
    description:
      'A colourful vegan bowl of fluffy quinoa, crispy paprika chickpeas, fresh vegetables and a zesty lemon-tahini dressing.',
    intro:
      'This bowl is our go-to weekday lunch because almost everything can be made ahead. Quinoa and chickpeas together give you a good amount of plant protein and fibre, and the raw vegetables add crunch and colour. Swap in whatever vegetables are in season or on special.',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 3,
    calories: 540,
    category: 'Bowls',
    cuisine: 'Modern',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vegan', 'High-Fibre', 'Meal-Prep'],
    ingredients: [
      { item: '1 cup (170g) quinoa, rinsed', costZar: 20 },
      { item: '2 cups vegetable stock (1 stock cube)', costZar: 4 },
      { item: '1 can (400g) chickpeas, drained and rinsed', costZar: 18 },
      { item: '2 cups mixed salad greens', costZar: 12 },
      { item: '1 ripe avocado, sliced', costZar: 15 },
      { item: '1 cup cherry tomatoes, halved', costZar: 15 },
      { item: '1 English cucumber, diced', costZar: 12 },
      { item: '2 tbsp tahini', costZar: 8 },
      { item: '1 lemon, juiced', costZar: 5 },
      { item: '2 cloves garlic, minced', costZar: 2 },
      { item: '1 tbsp olive oil', costZar: 4 },
      { item: 'Salt, pepper and smoked paprika', costZar: 2 },
    ],
    instructions: [
      'Preheat the oven to 200°C. Pat the chickpeas dry with a clean tea towel, toss with the olive oil, paprika and a pinch of salt, and spread on a baking tray.',
      'Roast the chickpeas for 20–25 minutes, shaking the tray halfway, until golden and crisp.',
      'Meanwhile, bring the quinoa and stock to the boil in a saucepan. Cover, reduce the heat and simmer for 15 minutes until the liquid is absorbed. Rest, covered, for 5 minutes, then fluff with a fork.',
      'Whisk the tahini, lemon juice and garlic with 2–3 tbsp water until smooth and pourable. Season to taste.',
      'Divide the greens and quinoa between three bowls. Top with chickpeas, avocado, tomatoes and cucumber, then drizzle with the dressing.',
    ],
    tips: [
      'Check the stock label if you need the bowl to be gluten-free — some stock cubes contain wheat.',
      'No tahini? Use 2 tbsp plain yoghurt (not vegan) or smooth peanut butter thinned with lemon juice.',
      'Butternut, sweet potato or beetroot can be roasted on the same tray as the chickpeas for a heartier bowl.',
    ],
    storage:
      'Store the quinoa, chickpeas and dressing in separate airtight containers in the fridge for up to 3 days. Slice the avocado just before serving.',
    featured: true,
    datePublished: '2025-05-02',
    dateModified: '2026-09-28',
    nutritionFacts: { protein: '19g', carbs: '68g', fat: '23g', fiber: '16g' },
  },
  {
    id: 'mediterranean-power-salad',
    title: 'Mediterranean Greek-Style Salad',
    description:
      'A crisp, no-cook salad of leafy greens, tomato, cucumber, olives and feta with a simple red wine vinaigrette.',
    intro:
      'Ready in ten minutes and built from ingredients you can find in any South African supermarket, this salad works as a light lunch or as a side for grilled chicken or fish. Using good olive oil and ripe tomatoes makes the biggest difference to flavour.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    calories: 385,
    category: 'Salads',
    cuisine: 'Mediterranean',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vegetarian', 'Low-Carb', 'No-Cook'],
    ingredients: [
      { item: '4 cups mixed greens (rocket, spinach, cos lettuce)', costZar: 25 },
      { item: '1 cup cherry tomatoes, halved', costZar: 15 },
      { item: '1 English cucumber, sliced into half-moons', costZar: 12 },
      { item: '½ red onion, thinly sliced', costZar: 3 },
      { item: '½ cup kalamata olives', costZar: 25 },
      { item: '100g feta, crumbled', costZar: 22 },
      { item: '2 tbsp extra virgin olive oil', costZar: 8 },
      { item: '2 tbsp red wine vinegar', costZar: 3 },
      { item: '1 tsp dried oregano', costZar: 1 },
      { item: 'Handful fresh basil leaves', costZar: 10 },
    ],
    instructions: [
      'Soak the sliced red onion in cold water for 5 minutes to soften its bite, then drain well.',
      'Combine the greens, tomatoes, cucumber and onion in a large salad bowl.',
      'Whisk the olive oil, red wine vinegar and oregano together and season with salt and pepper.',
      'Toss the salad with the dressing just before serving so the leaves stay crisp.',
      'Scatter over the feta, olives and basil, and serve straight away.',
    ],
    tips: [
      'To make it vegan, replace the feta with ½ cup roasted chickpeas or a handful of toasted sunflower seeds.',
      'Kalamata olives are pricey — regular black olives work well and roughly halve the cost.',
      'Add a tin of drained tuna or a sliced boiled egg per person for a more filling meal.',
    ],
    storage:
      'Best eaten fresh. Undressed salad keeps in the fridge for 1 day; keep the dressing in a separate jar for up to a week.',
    featured: true,
    datePublished: '2025-05-06',
    dateModified: '2026-09-28',
    nutritionFacts: { protein: '10g', carbs: '14g', fat: '32g', fiber: '4g' },
  },
  {
    id: 'avocado-toast-supreme',
    title: 'Avocado Toast with Poached Eggs',
    description:
      'Wholegrain toast piled with lemony smashed avocado, softly poached eggs, chilli flakes and microgreens.',
    intro:
      'A weekend breakfast that takes 15 minutes. Eggs add protein and avocado provides mostly unsaturated fat and fibre, so this keeps most people full well into the morning. When avocados are in season in South Africa (roughly March to September) this is also one of the cheapest ways to enjoy them.',
    prepTime: '10 min',
    cookTime: '5 min',
    servings: 2,
    calories: 495,
    category: 'Breakfast',
    cuisine: 'Modern',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vegetarian', 'High-Fibre', 'Quick'],
    ingredients: [
      { item: '2 thick slices wholegrain or seed bread', costZar: 10 },
      { item: '2 ripe avocados', costZar: 30 },
      { item: '4 large eggs', costZar: 16 },
      { item: '1 lemon, juiced', costZar: 5 },
      { item: '½ tsp dried chilli flakes', costZar: 1 },
      { item: '1 tsp mixed seeds or seasoning', costZar: 2 },
      { item: 'Handful microgreens or rocket', costZar: 10 },
      { item: 'Salt and freshly ground black pepper', costZar: 1 },
    ],
    instructions: [
      'Bring a wide pan of water to a gentle simmer and add a splash of vinegar.',
      'Halve and pit the avocados. Mash the flesh with the lemon juice, salt and pepper, keeping some texture.',
      'Toast the bread until deep golden.',
      'Crack each egg into a cup, swirl the water and slide the eggs in. Poach for 3–4 minutes for runny yolks, then lift out with a slotted spoon.',
      'Spread the avocado thickly onto the toast and top each slice with two eggs, the microgreens, chilli flakes and seeds.',
    ],
    tips: [
      'If an avocado is still firm, put it in a paper bag with a banana overnight to speed up ripening.',
      'Not keen on poaching? Fried or soft-boiled eggs (6½ minutes) work just as well.',
      'For a gluten-free version, use a certified gluten-free bread.',
    ],
    storage:
      'Best eaten immediately. Leftover mashed avocado can be pressed into a container, covered with a thin layer of lemon juice and refrigerated for 1 day.',
    featured: true,
    datePublished: '2025-05-09',
    dateModified: '2026-09-28',
    nutritionFacts: { protein: '20g', carbs: '34g', fat: '33g', fiber: '13g' },
  },
  {
    id: 'golden-chickpea-curry',
    title: 'Golden Chickpea & Spinach Curry',
    description:
      'A budget-friendly coconut curry with chickpeas, tomato, turmeric, ginger and spinach — ready in 40 minutes.',
    intro:
      'This mild, creamy curry costs less than R30 a serving and is made almost entirely from pantry staples. It freezes well, so it is ideal for batch cooking. Serve it with basmati rice, roti or cauliflower rice.',
    prepTime: '10 min',
    cookTime: '30 min',
    servings: 4,
    calories: 455,
    category: 'Mains',
    cuisine: 'Indian-inspired',
    difficulty: 'Medium',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vegan', 'Budget', 'Meal-Prep'],
    ingredients: [
      { item: '1 tbsp sunflower or coconut oil', costZar: 2 },
      { item: '1 large onion, diced', costZar: 4 },
      { item: '4 cloves garlic, minced', costZar: 3 },
      { item: '1 tbsp fresh ginger, grated', costZar: 3 },
      { item: '2 tsp ground turmeric', costZar: 2 },
      { item: '1 tbsp mild curry powder', costZar: 3 },
      { item: '1 can (400g) chopped tomatoes', costZar: 17 },
      { item: '1 can (400ml) coconut milk', costZar: 28 },
      { item: '2 cans (400g each) chickpeas, drained', costZar: 36 },
      { item: '2 cups baby spinach', costZar: 8 },
      { item: 'Fresh coriander and 1 lime, to serve', costZar: 12 },
    ],
    instructions: [
      'Heat the oil in a large pot over medium heat. Sauté the onion for 5–7 minutes until soft and golden.',
      'Add the garlic and ginger and cook for 1 minute. Stir in the turmeric and curry powder and cook for 30 seconds until fragrant.',
      'Pour in the tomatoes and coconut milk, stir well and bring to a gentle simmer.',
      'Add the chickpeas and simmer uncovered for 15 minutes, stirring occasionally, until thickened. Season with salt.',
      'Stir in the spinach until just wilted. Serve with rice, coriander and a squeeze of lime.',
    ],
    tips: [
      'Nutrition values exclude rice. ¾ cup cooked basmati rice adds roughly 150 kcal and R3 per serving.',
      'Use lite coconut milk to reduce the fat by about a third.',
      'Add a diced potato or butternut with the tomatoes for a more filling curry (add 10 minutes to the simmer).',
    ],
    storage:
      'Keeps in the fridge for up to 4 days or frozen for up to 3 months. Reheat until piping hot throughout.',
    featured: false,
    datePublished: '2025-05-13',
    dateModified: '2026-09-28',
    nutritionFacts: { protein: '14g', carbs: '43g', fat: '27g', fiber: '11g' },
  },
  {
    id: 'berry-overnight-oats',
    title: 'Mixed Berry Overnight Oats',
    description:
      'Creamy no-cook oats soaked overnight with yoghurt and chia, topped with berries and almond butter.',
    intro:
      'Five minutes of prep the night before means a ready breakfast in the morning. Oats are a good source of beta-glucan, a soluble fibre, and frozen berries are a cheaper alternative to fresh that work perfectly here. The recipe makes one jar, but it scales easily — make five jars on Sunday for the work week.',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: 1,
    calories: 480,
    category: 'Breakfast',
    cuisine: 'Modern',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    tags: ['Vegetarian', 'Meal-Prep', 'High-Fibre'],
    ingredients: [
      { item: '½ cup (40g) rolled oats (not instant)', costZar: 2 },
      { item: '½ cup unsweetened almond milk or regular milk', costZar: 5 },
      { item: '¼ cup full-fat Greek yoghurt', costZar: 5 },
      { item: '1 tbsp chia seeds', costZar: 3 },
      { item: '1 tbsp honey or maple syrup', costZar: 6 },
      { item: '½ tsp vanilla essence', costZar: 1 },
      { item: '½ cup frozen mixed berries', costZar: 10 },
      { item: '1 tbsp almond or peanut butter', costZar: 6 },
    ],
    instructions: [
      'Add the oats, milk, yoghurt, chia seeds, honey and vanilla to a jar or container.',
      'Stir thoroughly, making sure the chia seeds are not clumped together.',
      'Seal and refrigerate for at least 6 hours or overnight.',
      'In the morning, stir well and loosen with a splash of milk if it is too thick.',
      'Top with the berries (thawed or straight from frozen) and the nut butter.',
    ],
    tips: [
      'Peanut butter costs about half as much as almond butter and tastes just as good here.',
      'Grated apple and cinnamon make a cheap, seasonal alternative to berries.',
      'Use certified gluten-free oats if you are avoiding gluten.',
    ],
    storage: 'Keeps in a sealed jar in the fridge for up to 4 days. Add toppings on the day.',
    featured: false,
    datePublished: '2025-05-16',
    dateModified: '2026-09-28',
    nutritionFacts: { protein: '15g', carbs: '61g', fat: '20g', fiber: '13g' },
  },
  {
    id: 'teriyaki-salmon-bowl',
    title: 'Teriyaki Salmon Rice Bowl',
    description:
      'Oven-baked honey-tamari salmon on brown rice with edamame, cucumber ribbons, avocado and sesame.',
    intro:
      'Oily fish such as salmon is one of the best food sources of the omega-3 fats EPA and DHA. Salmon is expensive in South Africa, so we have included cheaper swaps — rainbow trout, snoek or tinned pilchards all work with this marinade.',
    prepTime: '15 min',
    cookTime: '20 min',
    servings: 2,
    calories: 770,
    category: 'Bowls',
    cuisine: 'Japanese-inspired',
    difficulty: 'Medium',
    image:
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=80',
    tags: ['High-Protein', 'Omega-3', 'Dairy-Free'],
    ingredients: [
      { item: '2 salmon fillets (150g each)', costZar: 135 },
      { item: '3 tbsp tamari or soy sauce', costZar: 6 },
      { item: '2 tbsp honey', costZar: 6 },
      { item: '1 tsp sesame oil', costZar: 2 },
      { item: '1 clove garlic, minced', costZar: 1 },
      { item: '½ cup (95g) brown rice', costZar: 4 },
      { item: '½ cup frozen edamame or peas', costZar: 10 },
      { item: '1 English cucumber, ribboned', costZar: 12 },
      { item: '1 avocado, sliced', costZar: 15 },
      { item: 'Sesame seeds and spring onions, to serve', costZar: 6 },
    ],
    instructions: [
      'Whisk the tamari, honey, sesame oil and garlic together. Pour over the salmon and marinate for 15 minutes.',
      'Cook the brown rice according to the packet instructions (usually 25–30 minutes).',
      'Preheat the oven to 200°C. Place the salmon on a lined tray, spoon over a little marinade and bake for 12–15 minutes until it flakes easily.',
      'Meanwhile, simmer the remaining marinade in a small pan for 2 minutes until syrupy, and cook the edamame in boiling water for 2 minutes.',
      'Assemble the bowls with rice, flaked salmon, edamame, cucumber and avocado. Drizzle with the reduced sauce and scatter with sesame seeds and spring onion.',
    ],
    tips: [
      'Swap salmon for rainbow trout or hake to bring the cost down to roughly R45–R60 per serving.',
      'Use tamari labelled gluten-free if you need the dish to be gluten-free; regular soy sauce contains wheat.',
      'Cook the fish to an internal temperature of 63°C if you have a thermometer.',
    ],
    storage:
      'Cooked salmon and rice keep in separate containers in the fridge for up to 2 days. Cool rice quickly and reheat until steaming hot.',
    featured: false,
    datePublished: '2025-05-20',
    dateModified: '2026-09-28',
    nutritionFacts: { protein: '43g', carbs: '65g', fat: '37g', fiber: '9g' },
  },
]
