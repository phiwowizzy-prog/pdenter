export interface Recipe {
  id: string
  title: string
  description: string
  prepTime: string
  cookTime: string
  servings: number
  calories: number
  category: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
  image: string
  tags: string[]
  ingredients: string[]
  instructions: string[]
  featured: boolean
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
      'A nutrient-packed powerhouse featuring roasted vegetables, creamy tahini, and protein-rich quinoa. This science-backed nutrition meal transforms your body from the inside out.',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 2,
    calories: 485,
    category: 'Bowls',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    tags: ['Vegan', 'Gluten-Free', 'High-Protein'],
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable broth',
      '1 can chickpeas, drained and rinsed',
      '2 cups mixed greens',
      '1 ripe avocado, sliced',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, diced',
      '2 tbsp tahini',
      '1 lemon, juiced',
      '2 cloves garlic, minced',
      '2 tbsp olive oil',
      'Salt, pepper, paprika to taste',
    ],
    instructions: [
      'Cook quinoa in vegetable broth over medium heat for 15 minutes until fluffy.',
      'Toss chickpeas in olive oil, paprika, and salt. Roast at 400°F for 20 minutes.',
      'Whisk together tahini, lemon juice, garlic, and 2–3 tbsp water until smooth.',
      'Arrange greens, quinoa, chickpeas, avocado, tomatoes, and cucumber in bowls.',
      'Drizzle generously with tahini dressing and serve immediately.',
    ],
    featured: true,
    nutritionFacts: { protein: '18g', carbs: '62g', fat: '16g', fiber: '11g' },
  },
  {
    id: 'mediterranean-power-salad',
    title: 'Mediterranean Power Salad',
    description:
      'Feel amazing every day with this vibrant Mediterranean salad packed with antioxidants, healthy fats, and proven ingredients for lasting energy and glowing skin.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    calories: 320,
    category: 'Salads',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
    tags: ['Vegetarian', 'Low-Carb', 'Heart-Healthy'],
    ingredients: [
      '4 cups mixed greens (arugula, spinach, romaine)',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, sliced into half-moons',
      '1/2 red onion, thinly sliced',
      '1/2 cup kalamata olives',
      '100g feta cheese, crumbled',
      '3 tbsp extra virgin olive oil',
      '2 tbsp red wine vinegar',
      '1 tsp dried oregano',
      'Handful of fresh basil leaves',
    ],
    instructions: [
      'Combine all vegetables in a large salad bowl.',
      'Whisk olive oil, red wine vinegar, and oregano together.',
      'Season dressing with salt and pepper to taste.',
      'Toss salad with dressing just before serving.',
      'Top with feta, olives, and fresh basil. Serve immediately.',
    ],
    featured: true,
    nutritionFacts: { protein: '9g', carbs: '14g', fat: '24g', fiber: '4g' },
  },
  {
    id: 'avocado-toast-supreme',
    title: 'Supreme Avocado Toast',
    description:
      'Transform your breakfast routine with this protein-rich, nutrient-dense avocado toast that supercharges your morning and keeps you fuelled for hours.',
    prepTime: '10 min',
    cookTime: '5 min',
    servings: 2,
    calories: 390,
    category: 'Breakfast',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    tags: ['Vegetarian', 'High-Fiber', 'Brain Food'],
    ingredients: [
      '2 slices whole grain sourdough bread',
      '2 ripe avocados',
      '4 large eggs',
      '1 lemon, juiced',
      '1/2 tsp red pepper flakes',
      'Everything bagel seasoning',
      'Handful of microgreens',
      'Sea salt and cracked black pepper',
    ],
    instructions: [
      'Toast bread until deep golden and crispy.',
      'Halve and pit avocados. Mash with lemon juice, salt, and pepper.',
      'Poach eggs in simmering water with a splash of vinegar for 3–4 minutes.',
      'Spread avocado generously and thickly on each toast slice.',
      'Top with poached egg, microgreens, red pepper flakes, and seasoning.',
    ],
    featured: true,
    nutritionFacts: { protein: '22g', carbs: '36g', fat: '22g', fiber: '9g' },
  },
  {
    id: 'golden-chickpea-curry',
    title: 'Golden Chickpea Curry',
    description:
      'A warming, anti-inflammatory curry bursting with turmeric and ginger. Join thousands of success stories who have made this their go-to weekly meal prep.',
    prepTime: '10 min',
    cookTime: '30 min',
    servings: 4,
    calories: 425,
    category: 'Mains',
    difficulty: 'Medium',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    tags: ['Vegan', 'Anti-Inflammatory', 'Meal-Prep'],
    ingredients: [
      '2 cans (400g) chickpeas, drained',
      '1 can (400ml) full-fat coconut milk',
      '1 can (400g) diced tomatoes',
      '1 large onion, diced',
      '4 cloves garlic, minced',
      '1 tbsp fresh ginger, grated',
      '2 tsp turmeric powder',
      '1 tbsp curry powder',
      '2 cups fresh spinach',
      'Fresh coriander and lime to serve',
    ],
    instructions: [
      'Heat oil in a large pot. Sauté onion for 5 minutes until soft and golden.',
      'Add garlic and ginger, cook 1 minute. Add turmeric and curry powder, stir 30 seconds.',
      'Pour in diced tomatoes and coconut milk. Stir and bring to a simmer.',
      'Add chickpeas and cook uncovered for 15 minutes, stirring occasionally.',
      'Stir in spinach until wilted. Serve over basmati rice with fresh coriander.',
    ],
    featured: false,
    nutritionFacts: { protein: '14g', carbs: '52g', fat: '18g', fiber: '13g' },
  },
  {
    id: 'berry-overnight-oats',
    title: 'Triple Berry Overnight Oats',
    description:
      'Prep five days of breakfasts in 10 minutes. These creamy, fiber-rich overnight oats boost energy naturally and keep you satisfied until midday.',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: 1,
    calories: 340,
    category: 'Breakfast',
    difficulty: 'Easy',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
    tags: ['Vegetarian', 'Meal-Prep', 'High-Fiber'],
    ingredients: [
      '1/2 cup rolled oats (not instant)',
      '1/2 cup unsweetened almond milk',
      '1/4 cup Greek yogurt (full-fat)',
      '1 tbsp chia seeds',
      '1 tbsp pure maple syrup',
      '1/2 tsp vanilla extract',
      '1/2 cup mixed berries (blueberry, raspberry, strawberry)',
      '1 tbsp almond butter',
    ],
    instructions: [
      'Add oats, almond milk, yogurt, chia seeds, maple syrup, and vanilla to a jar.',
      'Stir thoroughly until well combined.',
      'Seal the jar and refrigerate for at least 6 hours or overnight.',
      'In the morning, give it a good stir — add a splash of milk if too thick.',
      'Top with fresh berries and a dollop of almond butter. Enjoy.',
    ],
    featured: false,
    nutritionFacts: { protein: '14g', carbs: '48g', fat: '10g', fiber: '8g' },
  },
  {
    id: 'teriyaki-salmon-bowl',
    title: 'Teriyaki Salmon Power Bowl',
    description:
      'Omega-3 rich salmon meets vibrant vegetables in this proven recipe for sustained energy, sharp focus, and cellular renewal. A complete meal in one beautiful bowl.',
    prepTime: '15 min',
    cookTime: '20 min',
    servings: 2,
    calories: 560,
    category: 'Bowls',
    difficulty: 'Medium',
    image:
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=80',
    tags: ['High-Protein', 'Omega-3', 'Gluten-Free'],
    ingredients: [
      '2 salmon fillets (150g each)',
      '3 tbsp tamari or soy sauce',
      '2 tbsp raw honey',
      '1 tsp sesame oil',
      '1 clove garlic, minced',
      '1 cup brown rice',
      '1/2 cup frozen edamame, thawed',
      '1 small cucumber, ribboned',
      '1 avocado, sliced',
      'Sesame seeds and green onions',
    ],
    instructions: [
      'Whisk tamari, honey, sesame oil, and garlic. Marinate salmon 15 minutes.',
      'Cook brown rice according to package directions.',
      'Bake salmon on a lined tray at 400°F for 12–15 minutes.',
      'Warm edamame in boiling water for 2 minutes.',
      'Assemble bowls: rice base, flaked salmon, edamame, cucumber, and avocado.',
    ],
    featured: false,
    nutritionFacts: { protein: '38g', carbs: '54g', fat: '18g', fiber: '6g' },
  },
]
