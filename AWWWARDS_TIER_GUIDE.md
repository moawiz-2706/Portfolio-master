# Awwwards-Tier Portfolio Implementation Guide

## Overview
This portfolio implements advanced animation techniques used by award-winning designers and developers, combining physics simulations, scroll-driven effects, and GPU-accelerated animations.

## Architecture Stack

### 1. Scroll System
- **Lenis**: Smooth inertia scrolling with velocity tracking
- **GSAP ScrollTrigger**: Scroll-driven animations
- **Custom Hooks**: useScrollProgress tracks scroll velocity and position

### 2. Animation Libraries
- **Framer Motion**: Component-level spring animations
- **GSAP**: Timeline animations, kinetic text, parallax
- **React Three Fiber**: 3D scenes and WebGL

### 3. 3D & Physics
- **Three.js**: WebGL rendering
- **React Three Fiber**: React component wrapper
- **Cannon-es**: Physics simulation (ready to integrate)

## Key Features

### Hero Section (HeroWith3D)
- Floating particle system with gravity-like behavior
- Animated wireframe sphere with rotating geometry
- Gradient background with grid overlay
- 3D canvas blended with content (40% opacity on desktop, 15% on mobile)
- Mobile optimization: Disables 3D on screens < 480px

### Kinetic Text Animation
- Scroll-driven text reveals with spring physics
- Letter-by-letter animations with staggered timing
- Blur effects on entrance, clarity on scroll

### Smooth Scroll
- Lenis integration for smooth, inertia-based scrolling
- Velocity tracking enables scroll-responsive animations
- Works with GSAP ScrollTrigger for scroll events

### Spring Physics
- SpringButton component with magnetic hover effects
- Framer Motion variants for natural motion curves
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1) for bounciness

### GSAP Animations
- **Reveal Animations**: Staggered entrance with fade + slide
- **Parallax Animations**: Scroll-driven depth effects
- **Kinetic Text**: Letter reveal with blur
- **Counter Animations**: Number counting with GSAP tweens

## Component Structure

```
src/
├── components/
│   ├── VisualEffects/
│   │   ├── HeroWith3D.js (3D hero wrapper)
│   │   ├── HeroWith3D.css
│   │   ├── ShaderGradient.js (canvas gradients)
│   │   └── ParallaxScroll.js
│   ├── AnimatedElements/
│   │   ├── LiquidCursor.js (physics cursor)
│   │   ├── SpringButton.js (spring physics)
│   │   ├── TextReveal.js
│   │   ├── NumberCounter.js
│   │   └── SectionTitle.js
│   └── UI/
│       └── PremiumCard.js (optimized card)
├── hooks/
│   ├── useScrollProgress.js
│   ├── useMousePosition.js
│   └── useLenis.js (context hook)
├── contexts/
│   └── LenisContext.js
└── utils/
    ├── animationVariants.js (Framer Motion)
    ├── gsapAnimations.js (GSAP utilities)
    └── easing.js
```

## Performance Optimizations

1. **GPU Acceleration**
   - `will-change: transform` on animated elements
   - `transform: translateZ(0)` for hardware acceleration
   - `backface-visibility: hidden` to prevent flickering

2. **Mobile Optimizations**
   - Disables complex animations on small screens
   - Reduces particle count on mobile
   - Lighter shader effects
   - Removes 3D canvas below 480px

3. **Code Splitting**
   - React Three Fiber components load on demand
   - 3D scene only renders when visible
   - Suspense boundaries for lazy loading

4. **Prefers Reduced Motion**
   - Respects `prefers-reduced-motion` media query
   - Disables animations for accessibility

## CSS Custom Properties

```css
/* Animation keyframes */
@keyframes gradientShift - 15s looping gradient
@keyframes gridPulse - pulsing grid overlay
@keyframes kineticSlide - kinetic text reveal
@keyframes textGlow - text shadow glow effect
```

## Usage Examples

### 1. Using Kinetic Text
```jsx
const headingRef = useRef(null);

useEffect(() => {
  kineticTextAnimation(headingRef.current, {
    yPercent: 50,
    duration: 1,
  });
}, []);

<div ref={headingRef} className="kinetic-text">Your text</div>
```

### 2. Scroll-Triggered Reveal
```jsx
const cardsRef = useRef([]);

useEffect(() => {
  revealAnimation(cardsRef.current, {
    delay: 0.15,
    duration: 0.8,
    startTrigger: 'top 75%',
  });
}, []);
```

### 3. Spring Button
```jsx
<SpringButton 
  onClick={() => console.log('clicked')}
  text="Explore"
/>
```

### 4. 3D Hero
```jsx
<HeroWith3D>
  {/* Your content here */}
</HeroWith3D>
```

## Browser Support

- Chrome/Edge: Full support (WebGL, GPU acceleration)
- Firefox: Full support
- Safari: Full support (with some shader limitations)
- Mobile: Optimized experience, complex effects disabled

## Future Enhancements

1. **Advanced Shaders**: Custom GLSL shaders for gradients
2. **Physics Particles**: Cannon.js integration for realistic physics
3. **Audio Reactivity**: Sound-driven animations
4. **Gesture Controls**: Touch and swipe animations
5. **Advanced Cursors**: Custom cursor with physics

## Performance Metrics

Target metrics:
- Lighthouse Performance: > 85
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Cumulative Layout Shift: < 0.1

## Debugging

Enable GSAP debug mode:
```js
gsap.config({ force3D: true, autoSleep: 60 });
ScrollTrigger.normalizeScroll(true);
```

Toggle 3D canvas visibility:
```js
document.querySelector('.hero-3d-canvas').style.display = 'none';
```

## References

- GSAP Documentation: https://greensock.com
- Lenis: https://github.com/darkroom-labs/lenis
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber
- Three.js: https://threejs.org
