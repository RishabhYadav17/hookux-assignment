# HookUX Landing Page Clone

A modern and responsive recreation of the HookUX landing page built using React, Tailwind CSS, and Framer Motion.

The goal of this project was to recreate one of the key screens of the HookUX website while focusing on:

- Clean and scalable code.
- Responsive design.
- Component reusability.
- Performance.
- Accessibility.
- Modern animations and micro-interactions.

---

## Live Demo

https://your-vercel-link.vercel.app

---

## Repository

https://github.com/yourusername/hookux-clone

---

# Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

---

# Features

- Responsive navigation bar.
- Hero section with animated elements.
- Floating service cards.
- Interactive testimonial cards.
- Animated footer marquee.
- Smooth hover interactions.
- Reusable component architecture.
- Mobile-friendly layouts.
- Accessible interactive elements.

---

# Project Structure

```text
src/

assets/

components/
│
├── AnnouncementBar
├── Navbar
├── Hero
├── BrandSlider
├── Services
├── FloatingCard
├── Testimonials
├── FloatingTestimonial
└── Footer

data/
├── brands.js
├── services.js
└── testimonials.js

pages/
└── Home.jsx

App.jsx
main.jsx
```

---

# Design Approach

The original HookUX website focuses heavily on:

- Typography.
- Motion.
- Visual hierarchy.
- Minimalism.

While recreating the design, special attention was given to:

- Layout accuracy.
- Spacing consistency.
- Component reusability.
- Responsive behavior.

---

# Improvements Over Original

Several enhancements were added:

- Floating card animations.
- Interactive hover effects.
- Animated footer marquee.
- Better mobile responsiveness.
- Smooth transitions using Framer Motion.
- Reusable data-driven components.

---

# Responsiveness

The website was tested across:

- Mobile devices.
- Tablets.
- Laptops.
- Desktop screens.

Responsive utilities used:

- `sm:`
- `md:`
- `lg:`
- `xl:`

---

# Performance Considerations

- Reusable components reduce code duplication.
- Framer Motion animations are lightweight.
- Data-driven rendering improves maintainability.
- Minimal third-party dependencies.
- Optimized component structure.

---

# Accessibility

Accessibility improvements include:

- Semantic HTML.
- Button labels.
- Keyboard-accessible interactions.
- Proper color contrast.
- Responsive typography.

---

# Challenges Faced

### Recreating floating service cards

The original design uses custom positioning and animation. This was implemented using absolute positioning and Framer Motion.

### Large animated typography

The footer branding animation required careful handling to ensure smooth infinite scrolling.

### Responsiveness

The floating layouts required additional adjustments to work correctly on smaller screens.

---

# Future Improvements

- Dark/light theme support.
- Additional page sections.
- CMS integration.
- Contact form functionality.
- Advanced animations.

---

# Installation

```bash
git clone https://github.com/yourusername/hookux-clone

cd hookux-clone

npm install

npm run dev
```

---

# Build

```bash
npm run build
```

---

# Deployment

The project is deployed using Vercel.

---

# Author

Rishabh Yadav

Frontend Developer
