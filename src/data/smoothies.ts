import type { Ingredient } from './recipes'

export interface Smoothie {
  id: string
  title: string
  tagline: string
  description: string
  intro: string
  calories: number
  protein: string
  fiber: string
  prepTime: string
  servings: number
  image: string
  bgColor: string
  accentColor: string
  benefits: string[]
  ingredients: Ingredient[]
  instructions: string[]
  tips: string[]
  tags: string[]
  datePublished: string
  dateModified: string
}

export const smoothies: Smoothie[] = [
  {
    id: 'tropical-green-goddess',
    title: 'Green Goddess',
    tagline: 'Fresh & Green',
    description:
      'Spinach, mango, banana and fresh ginger blended with coconut water and a squeeze of lime.',
    intro:
      'A beginner-friendly green smoothie: the mango and banana mask the spinach completely, and ginger and lime keep it bright. It is an easy way to add a portion of leafy greens to your day.',
    calories: 210,
    protein: '4g',
    fiber: '6g',
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1000&q=80',
    bgColor: '#d8f3dc',
    accentColor: '#2d6a4f',
    benefits: ['Leafy Greens', 'Vitamin C', 'Fibre'],
    ingredients: [
      { item: '2 large handfuls baby spinach (60g)', costZar: 6 },
      { item: '1 cup frozen mango chunks', costZar: 15 },
      { item: '½ banana, frozen', costZar: 2 },
      { item: '2cm piece fresh ginger, peeled', costZar: 2 },
      { item: '½ cup coconut water', costZar: 8 },
      { item: '½ cup unsweetened almond milk', costZar: 5 },
      { item: 'Juice of ½ lime', costZar: 3 },
    ],
    instructions: [
      'Pour the coconut water, almond milk and lime juice into the blender first.',
      'Add the spinach, ginger and frozen fruit.',
      'Blend on high for 60 seconds until completely smooth.',
      'Add a little more coconut water if you prefer a thinner smoothie.',
      'Pour into a chilled glass and drink straight away.',
    ],
    tips: [
      'Buy mango when in season (December to March) and freeze it in chunks to save money.',
      'Swap coconut water for plain water to cut the cost by R8.',
    ],
    tags: ['Vegan', 'Dairy-Free', 'Gluten-Free'],
    datePublished: '2025-05-03',
    dateModified: '2026-09-28',
  },
  {
    id: 'berry-blast-antioxidant',
    title: 'Berry Blast',
    tagline: 'Berries & Yoghurt',
    description:
      'Blueberries and raspberries blended with Greek yoghurt, chia seeds and a splash of pomegranate juice.',
    intro:
      'Deep purple and naturally sweet, this smoothie gets its colour from anthocyanins, the pigments found in dark berries. Greek yoghurt adds protein and chia seeds add fibre, which makes it more filling than a fruit-only smoothie.',
    calories: 360,
    protein: '15g',
    fiber: '12g',
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1487530811015-691a05c2e57d?auto=format&fit=crop&w=1000&q=80',
    bgColor: '#f3d8f0',
    accentColor: '#6b2d6a',
    benefits: ['Protein', 'Fibre', 'Anthocyanins'],
    ingredients: [
      { item: '1 cup frozen blueberries', costZar: 25 },
      { item: '½ cup frozen raspberries', costZar: 12 },
      { item: '¼ cup pomegranate or red grape juice', costZar: 6 },
      { item: '½ cup low-fat Greek yoghurt', costZar: 10 },
      { item: '1 tbsp chia seeds', costZar: 3 },
      { item: '1 tsp honey (optional)', costZar: 1 },
      { item: '½ cup oat milk', costZar: 5 },
    ],
    instructions: [
      'Add all the ingredients to a blender.',
      'Blend for 45–60 seconds until silky smooth.',
      'Taste and add a little more honey only if needed — ripe berries are often sweet enough.',
      'Pour into a glass and top with a few whole berries.',
    ],
    tips: [
      'Frozen mixed berries are usually cheaper than buying blueberries and raspberries separately.',
      'Let it stand for 5 minutes after blending if you like a thicker texture — the chia seeds will absorb liquid.',
    ],
    tags: ['Vegetarian', 'High-Protein', 'Gluten-Free'],
    datePublished: '2025-05-07',
    dateModified: '2026-09-28',
  },
  {
    id: 'sunrise-mango-turmeric',
    title: 'Golden Sunrise',
    tagline: 'Turmeric & Tropical Fruit',
    description:
      'Mango, pineapple, orange juice and a warming hit of turmeric, ginger, cinnamon and black pepper.',
    intro:
      'A sunny, tropical smoothie with a gentle spice. Black pepper contains piperine, which research shows can increase how much curcumin (the main active compound in turmeric) the body absorbs. The amounts in a smoothie are small, so think of it as flavour first.',
    calories: 235,
    protein: '3g',
    fiber: '5g',
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1579722821273-0e60b9e6e512?auto=format&fit=crop&w=1000&q=80',
    bgColor: '#fef3c7',
    accentColor: '#b8892f',
    benefits: ['Vitamin C', 'Warming Spices', 'Dairy-Free'],
    ingredients: [
      { item: '1 cup frozen mango chunks', costZar: 15 },
      { item: '½ cup fresh or frozen pineapple', costZar: 5 },
      { item: '1 tsp ground turmeric', costZar: 1 },
      { item: 'Pinch of black pepper', costZar: 1 },
      { item: '½ tsp ground cinnamon', costZar: 1 },
      { item: '½ cup orange juice', costZar: 4 },
      { item: '½ cup coconut milk drink (from a carton)', costZar: 5 },
      { item: '1 tsp fresh ginger, grated', costZar: 1 },
    ],
    instructions: [
      'Place all the ingredients in the blender.',
      'Blend on high for 60 seconds.',
      'Check the consistency and add a splash more orange juice if needed.',
      'Pour and garnish with a pinch of cinnamon.',
    ],
    tips: [
      'Turmeric stains — rinse your blender jug straight after use.',
      'Fresh pineapple is very affordable in South Africa in summer; peel, chop and freeze it for smoothies.',
    ],
    tags: ['Vegan', 'Dairy-Free', 'Gluten-Free'],
    datePublished: '2025-05-10',
    dateModified: '2026-09-28',
  },
  {
    id: 'chocolate-peanut-butter-protein',
    title: 'Choco PB Power',
    tagline: 'Post-Workout',
    description:
      'A thick chocolate-peanut butter smoothie with banana, cacao, plant protein and flaxseed.',
    intro:
      'This tastes like a milkshake but provides around 30g of protein, which makes it a convenient option after training. Pairing protein with carbohydrate from banana and oat milk helps refuel after exercise.',
    calories: 530,
    protein: '30g',
    fiber: '10g',
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1577803645773-f96470509e82?auto=format&fit=crop&w=1000&q=80',
    bgColor: '#fdf3e7',
    accentColor: '#c4622d',
    benefits: ['High-Protein', 'Post-Workout', 'Filling'],
    ingredients: [
      { item: '1 large banana, frozen', costZar: 3 },
      { item: '1 tbsp smooth peanut butter', costZar: 3 },
      { item: '1 tbsp cacao or cocoa powder', costZar: 4 },
      { item: '1 scoop (30g) chocolate plant protein powder', costZar: 15 },
      { item: '1 cup oat milk', costZar: 10 },
      { item: '1 tbsp ground flaxseed', costZar: 2 },
      { item: '4 ice cubes', costZar: 0 },
    ],
    instructions: [
      'Add all the ingredients to the blender.',
      'Blend on high for 60 seconds until thick and creamy.',
      'If too thick, add more oat milk a tablespoon at a time.',
      'Pour into a large glass and enjoy.',
    ],
    tips: [
      'No protein powder? Use ½ cup plain double-cream yoghurt or 100g silken tofu instead (adds roughly 10g protein).',
      'Regular cocoa powder is far cheaper than cacao and works just as well.',
    ],
    tags: ['Vegan', 'High-Protein', 'Post-Workout'],
    datePublished: '2025-05-14',
    dateModified: '2026-09-28',
  },
  {
    id: 'strawberry-banana-classic',
    title: 'Strawberry Banana Classic',
    tagline: 'Kid-Friendly',
    description:
      'Strawberries, banana and kefir (or amasi) blended with a little orange juice and vanilla.',
    intro:
      'A classic for good reason. Strawberries are rich in vitamin C, and fermented milk such as kefir or South African amasi contains live cultures. It is mild and sweet, so it is popular with children.',
    calories: 290,
    protein: '8g',
    fiber: '6g',
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1000&q=80',
    bgColor: '#ffe4e1',
    accentColor: '#c4622d',
    benefits: ['Vitamin C', 'Fermented Dairy', 'Kid-Friendly'],
    ingredients: [
      { item: '1 cup frozen strawberries', costZar: 15 },
      { item: '1 ripe banana', costZar: 3 },
      { item: '½ cup kefir, amasi or coconut yoghurt', costZar: 6 },
      { item: '¼ cup orange juice', costZar: 2 },
      { item: '1 tsp vanilla essence', costZar: 3 },
      { item: '1 tsp honey (optional)', costZar: 1 },
    ],
    instructions: [
      'Add all the ingredients to the blender.',
      'Blend until completely smooth, about 45 seconds.',
      'Taste and add honey only if you need extra sweetness.',
      'Serve immediately in a chilled glass.',
    ],
    tips: [
      'Amasi is usually the cheapest fermented milk on South African shelves and works perfectly.',
      'Use coconut yoghurt to make it dairy-free and vegan (skip the honey or use maple syrup).',
    ],
    tags: ['Vegetarian', 'Gluten-Free', 'Kid-Friendly'],
    datePublished: '2025-05-17',
    dateModified: '2026-09-28',
  },
  {
    id: 'matcha-collagen-latte',
    title: 'Matcha Vitality',
    tagline: 'Green Tea & Banana',
    description:
      'Matcha green tea blended with banana, oat milk, hemp seeds and vanilla for a creamy, gently caffeinated drink.',
    intro:
      'Matcha is powdered green tea, so you consume the whole leaf. One teaspoon (about 2g) contains roughly 40–80mg of caffeine depending on the brand — generally less than a mug of filter coffee — along with L-theanine, an amino acid naturally found in tea.',
    calories: 275,
    protein: '7g',
    fiber: '4g',
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1000&q=80',
    bgColor: '#ecfdf5',
    accentColor: '#2d6a4f',
    benefits: ['Natural Caffeine', 'Plant Protein', 'Dairy-Free'],
    ingredients: [
      { item: '1 tsp culinary-grade matcha powder', costZar: 12 },
      { item: '½ frozen banana', costZar: 2 },
      { item: '1 cup unsweetened oat milk', costZar: 10 },
      { item: '1 tbsp hulled hemp seeds', costZar: 5 },
      { item: '1 tsp coconut oil', costZar: 1 },
      { item: '½ tsp vanilla essence', costZar: 3 },
      { item: '4 ice cubes', costZar: 0 },
    ],
    instructions: [
      'Whisk the matcha with 2 tbsp warm (not boiling) water until it forms a smooth paste.',
      'Add the matcha paste and all other ingredients to the blender.',
      'Blend for 45 seconds until frothy.',
      'Pour over ice and serve.',
    ],
    tips: [
      'Culinary-grade matcha is much cheaper than ceremonial grade and ideal for blending.',
      'Avoid this smoothie in the late afternoon if you are sensitive to caffeine.',
    ],
    tags: ['Vegan', 'Dairy-Free', 'Contains Caffeine'],
    datePublished: '2025-05-21',
    dateModified: '2026-09-28',
  },
]
