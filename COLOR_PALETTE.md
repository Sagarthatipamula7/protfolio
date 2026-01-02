# Color Palette Guide

## Primary Color Scheme (Current - Modern Blue)

```css
/* Primary Colors */
--primary: #3b82f6;        /* Blue-500 */
--primary-dark: #2563eb;   /* Blue-600 */
--primary-light: #60a5fa;  /* Blue-400 */

/* Secondary Colors */
--secondary: #8b5cf6;      /* Purple-500 */
--secondary-dark: #7c3aed; /* Purple-600 */

/* Accent Colors */
--accent: #06b6d4;         /* Cyan-500 */

/* Neutral Colors */
--dark: #1e293b;           /* Slate-800 */
--dark-light: #334155;     /* Slate-700 */
--light: #f8fafc;          /* Slate-50 */
--gray: #64748b;           /* Slate-500 */
```

## Tailwind CSS Usage

### Backgrounds
```jsx
bg-blue-600        // Primary
bg-purple-600      // Secondary
bg-cyan-500        // Accent
bg-gradient-to-r from-blue-600 to-purple-600  // Gradients
```

### Text Colors
```jsx
text-blue-600      // Primary text
text-purple-600    // Secondary text
text-gray-700      // Body text
text-white         // Light backgrounds
```

### Borders
```jsx
border-blue-600
border-purple-600
```

## Alternative Color Schemes

### Option 2: Professional Dark
```css
--primary: #6366f1;    /* Indigo-500 */
--secondary: #ec4899;  /* Pink-500 */
--accent: #14b8a6;     /* Teal-500 */
```

### Option 3: Vibrant Gradient
```css
--primary: #f59e0b;    /* Amber-500 */
--secondary: #ef4444;  /* Red-500 */
--accent: #10b981;     /* Green-500 */
```

## Gradient Combinations

1. **Hero Background**: `from-blue-600 via-purple-600 to-cyan-500`
2. **Text Gradient**: `from-blue-600 to-purple-600`
3. **Button Gradient**: `from-blue-600 to-purple-600`
4. **Card Gradient**: `from-blue-50 to-white`

## Color Psychology

- **Blue**: Trust, professionalism, technology
- **Purple**: Creativity, innovation, premium
- **Cyan**: Modern, fresh, forward-thinking
- **Gray**: Balance, neutrality, professionalism

## Accessibility

All color combinations meet WCAG AA contrast ratios:
- Text on backgrounds: 4.5:1 minimum
- Large text: 3:1 minimum

