export interface Smoothie {
  id: string
  title: string
  tagline: string
  description: string
  calories: number
  prepTime: string
  servings: number
  image: string
  bgColor: string
  accentColor: string
  benefits: string[]
  ingredients: string[]
  instructions: string[]
  tags: string[]
}

export const smoothies: Smoothie[] = [
  {
    id: 'tropical-green-goddess',
    title: 'Green Goddess',
    tagline: 'Detox & Radiance',
    description:
      'This vibrant green powerhouse blends spinach, mango, and ginger to detoxify your system and give you an instant energy surge. Feel the difference after your very first glass.',
    calories: 210,
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=600&q=80',
    bgColor: '#d8f3dc',
    accentColor: '#2d6a4f',
    benefits: ['Detoxifying', 'Energy Boost', 'Skin Glow'],
    ingredients: [
      '2 large handfuls baby spinach',
      '1 cup frozen mango chunks',
      '1/2 banana, frozen',
      '1-inch fresh ginger, peeled',
      '1/2 cup coconut water',
      '1/2 cup almond milk',
      'Juice of 1/2 lime',
    ],
    instructions: [
      'Add liquid ingredients to blender first.',
      'Add frozen fruits and spinach.',
      'Blend on high for 60 seconds until completely smooth.',
      'Add more coconut water for a thinner consistency.',
      'Pour into a chilled glass and serve immediately.',
    ],
    tags: ['Vegan', 'Detox', 'Gluten-Free'],
  },
  {
    id: 'berry-blast-antioxidant',
    title: 'Berry Blast',
    tagline: 'Antioxidant Shield',
    description:
      'Loaded with anthocyanins from wild blueberries and pomegranate, this deep-purple smoothie fights inflammation and keeps your brain firing on all cylinders.',
    calories: 245,
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1487530811015-691a05c2e57d?auto=format&fit=crop&w=600&q=80',
    bgColor: '#f3d8f0',
    accentColor: '#6b2d6a',
    benefits: ['Anti-Inflammatory', 'Brain Health', 'Immune Boost'],
    ingredients: [
      '1 cup frozen wild blueberries',
      '1/2 cup frozen raspberries',
      '1/4 cup pomegranate juice',
      '1/2 cup Greek yogurt',
      '1 tbsp chia seeds',
      '1 tbsp raw honey',
      '1/2 cup oat milk',
    ],
    instructions: [
      'Combine all ingredients in a high-speed blender.',
      'Blend for 45–60 seconds until silky smooth.',
      'Taste and adjust sweetness with honey.',
      'Pour into a glass and top with fresh berries.',
    ],
    tags: ['Vegetarian', 'Brain Food', 'High-Antioxidant'],
  },
  {
    id: 'sunrise-mango-turmeric',
    title: 'Golden Sunrise',
    tagline: 'Anti-Inflammatory Magic',
    description:
      'Turmeric and black pepper activate each other\'s power in this golden smoothie. Mango and pineapple add tropical sweetness to this proven anti-inflammatory morning ritual.',
    calories: 280,
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1579722821273-0e60b9e6e512?auto=format&fit=crop&w=600&q=80',
    bgColor: '#fef3c7',
    accentColor: '#d4a853',
    benefits: ['Anti-Inflammatory', 'Joint Health', 'Immunity'],
    ingredients: [
      '1 cup frozen mango',
      '1/2 cup frozen pineapple',
      '1 tsp turmeric powder',
      'Pinch of black pepper (activates turmeric)',
      '1/2 tsp cinnamon',
      '1/2 cup orange juice',
      '1/2 cup coconut milk',
      '1 tsp fresh ginger',
    ],
    instructions: [
      'Place all ingredients into blender.',
      'Blend on high for 60 seconds.',
      'Check consistency — add more orange juice if needed.',
      'Pour and garnish with a pinch of turmeric and cinnamon.',
    ],
    tags: ['Vegan', 'Anti-Inflammatory', 'Tropical'],
  },
  {
    id: 'chocolate-peanut-butter-protein',
    title: 'Choco PB Power',
    tagline: 'Post-Workout Recovery',
    description:
      'Rich, thick, and indulgent — yet entirely whole-food based. This high-protein smoothie refuels muscles after training with a taste that makes healthy eating effortless.',
    calories: 385,
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1577803645773-f96470509e82?auto=format&fit=crop&w=600&q=80',
    bgColor: '#fdf3e7',
    accentColor: '#c4622d',
    benefits: ['Muscle Recovery', 'High-Protein', 'Sustained Energy'],
    ingredients: [
      '1 large frozen banana',
      '2 tbsp natural peanut butter',
      '1 tbsp raw cacao powder',
      '1 scoop plant protein powder (chocolate)',
      '1 cup oat milk',
      '1 tbsp flaxseeds',
      '4 ice cubes',
    ],
    instructions: [
      'Add all ingredients to blender.',
      'Blend on high for 60 seconds until thick and creamy.',
      'If too thick, add oat milk tablespoon by tablespoon.',
      'Pour into a large glass and top with cacao nibs.',
    ],
    tags: ['Vegan', 'Post-Workout', 'High-Protein'],
  },
  {
    id: 'strawberry-banana-classic',
    title: 'Classic Sunrise',
    tagline: 'Vitamin C Boost',
    description:
      'Sometimes the classics are classics for a reason. This vibrant pink smoothie delivers a serious vitamin C punch alongside gut-friendly probiotics from kefir.',
    calories: 220,
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=600&q=80',
    bgColor: '#ffe4e1',
    accentColor: '#c4622d',
    benefits: ['Vitamin C', 'Gut Health', 'Immune Support'],
    ingredients: [
      '1 cup frozen strawberries',
      '1 ripe banana',
      '1/2 cup kefir or coconut yogurt',
      '1/4 cup orange juice',
      '1 tsp vanilla extract',
      '1 tsp raw honey',
    ],
    instructions: [
      'Add all ingredients to blender.',
      'Blend until completely smooth, about 45 seconds.',
      'Taste and add honey if more sweetness needed.',
      'Serve immediately in a chilled glass.',
    ],
    tags: ['Vegetarian', 'Gut Health', 'Kid-Friendly'],
  },
  {
    id: 'matcha-collagen-latte',
    title: 'Matcha Vitality',
    tagline: 'Calm Energy & Focus',
    description:
      'Ceremonial grade matcha provides L-theanine for focused calm without the caffeine jitters. Collagen-boosting ingredients make this the ultimate beauty smoothie.',
    calories: 190,
    prepTime: '5 min',
    servings: 1,
    image:
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80',
    bgColor: '#ecfdf5',
    accentColor: '#2d6a4f',
    benefits: ['Mental Clarity', 'Anti-Aging', 'Sustained Focus'],
    ingredients: [
      '1 tsp ceremonial grade matcha powder',
      '1/2 frozen banana',
      '1 cup unsweetened oat milk',
      '1 tbsp collagen peptides (or hemp seeds)',
      '1 tsp MCT oil or coconut oil',
      '1/2 tsp vanilla extract',
      '4 ice cubes',
    ],
    instructions: [
      'Whisk matcha powder with 2 tbsp warm water until smooth paste.',
      'Add all ingredients including matcha paste to blender.',
      'Blend 45 seconds until frothy and well combined.',
      'Pour over ice and enjoy your focused, calm morning.',
    ],
    tags: ['Vegan', 'Keto-Friendly', 'Focus'],
  },
]
