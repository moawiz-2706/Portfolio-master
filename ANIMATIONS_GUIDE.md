# Animation & Motion Effects - Implementation Guide

## Overview

Your portfolio has been enhanced with modern, sophisticated animations and motion effects using **Framer Motion**. This guide explains what was added and how to customize it further.

---

## What's New

### 🎨 Visual Enhancements

#### 1. **Custom Animated Cursor** ✨
- A glowing blue circle follows your mouse cursor smoothly
- Location: `src/components/AnimatedElements/CursorFollower.js`
- Enabled globally in `App.js`
- **Customization**: Edit size, color, or smoothness in the component

#### 2. **Animated Number Counters** 🔢
- Stats now count up from 0 when you scroll to the section
- Used in the Home section for stats display
- Location: `src/components/AnimatedElements/NumberCounter.js`
- **Customization**: Adjust duration, delay, or easing

#### 3. **Staggered Animations** ⚡
- Cards and items animate in sequence for visual flow
- Creates a coordinated "wave" effect
- Applied to: Projects, Services, About sections
- **Customization**: Change delay timing in `animationVariants.js`

#### 4. **Enhanced Navbar** 🎭
- Logo bounces on hover
- Navigation links slide in with staggered timing
- Background blurs when you scroll down
- GitHub button scales smoothly
- **Customization**: Edit motion timings in `src/components/Navbar.js`

#### 5. **Smooth Modal Animations** 📱
- Project detail modal fades in smoothly
- Backdrop provides visual focus
- Location: `src/components/Projects/Projects.js`

#### 6. **Parallax & Scroll Effects** 🌊
- Depth perception as you scroll
- Elements respond to scroll position
- Uses custom `useScrollAnimation` hook

---

## Custom Hooks

### `useScrollAnimation(triggerPercentage)`
Triggers animations when elements enter the viewport.

```javascript
import { useScrollAnimation } from '@hooks/useScrollAnimation';

function MyComponent() {
  const { ref, isVisible } = useScrollAnimation(0.3); // 30% visible
  
  return (
    <motion.div
      ref={ref}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    >
      Content
    </motion.div>
  );
}
```

### `useMousePosition()`
Gets current mouse coordinates for interactive effects.

```javascript
import { useMousePosition } from '@hooks/useMousePosition';

function Interactive() {
  const mouse = useMousePosition();
  return <div style={{ left: mouse.x, top: mouse.y }} />;
}
```

### `useSmoothMousePosition(smoothness)`
Smooth, throttled mouse tracking for better performance.

```javascript
const smoothMouse = useSmoothMousePosition(0.15); // 0 = instant, 1 = very slow
```

---

## Animation Variants Library

Pre-built animation configurations in `src/utils/animationVariants.js`:

### Entrance Animations
- `fadeInUp` - Fade while moving up
- `fadeInDown` - Fade while moving down
- `fadeInLeft` - Fade while moving left
- `fadeInRight` - Fade while moving right
- `scaleIn` - Scale from small to normal

### Special Animations
- `flipCard` - 3D flip effect
- `slideInFromLeft` / `slideInFromRight` - Directional slides
- `pulseAnimation` - Pulsing scale effect
- `floatingAnimation(offset)` - Gentle floating motion
- `rotatingAnimation` - Continuous rotation

### Containers & Items
```javascript
import { staggerContainer, staggerItem } from '@utils/animationVariants';

<motion.div {...staggerContainer(0.1, 0.2)}>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## CSS Animations

Added to `src/style.css`:

- `@shimmer` - Gradient shimmer effect
- `@gradientShift` - Animated color gradients
- `@float` - Floating motion
- `@glowPulse` - Pulsing glow effect
- `@slideInFromLeft` / `@slideInFromRight` - CSS slide animations
- `@scaleIn` - CSS scale entrance

### Usage Example
```css
.my-element {
  animation: shimmer 3s linear infinite;
}
```

---

## How to Customize

### Change Animation Speed
Edit `transition` duration in animation configs:
```javascript
export const fadeInUp = {
  transition: { duration: 1.0 } // Change 0.6 to any value
};
```

### Change Stagger Timing
Adjust delay between items:
```javascript
<motion.div {...staggerContainer(0.15, 0.3)}>
  {/* First param: 0.15s between items, Second: 0.3s before starting */}
</motion.div>
```

### Customize Cursor Follower
```javascript
<CursorFollower 
  size={30}              // Change size
  color="rgba(255,0,0,0.3)"  // Change color
/>
```

### Modify Number Counter Duration
```javascript
<NumberCounter
  end={100}
  duration={3}           // Slower or faster counting
  suffix="+"
  delay={0.5}
/>
```

---

## Performance Tips

### 1. **Lazy Animation Trigger**
Only animate elements when they're visible using `useScrollAnimation`

### 2. **Throttle Mouse Tracking**
Use `useSmoothMousePosition(smoothness)` instead of raw mouse events

### 3. **GPU Acceleration**
Animations use `transform` and `opacity` for best performance

### 4. **IntersectionObserver**
Automatically removes animations from off-screen elements

### 5. **Code Splitting**
Animation components are ready for lazy loading

---

## Browser Compatibility

✅ Works on:
- Chrome/Edge 89+
- Firefox 87+
- Safari 14+
- Mobile browsers

---

## Accessibility

All animations maintain accessibility:
- Focus states preserved
- Keyboard navigation works
- Ready to implement `prefers-reduced-motion` support

---

## Advanced Customization

### Create a New Stagger Animation
```javascript
export const customStagger = (timing = 0.12) => staggerContainer(timing, 0.2);
```

### Add Parallax Scroll Effect
```javascript
import { useParallaxScroll } from '@hooks/useScrollAnimation';

function ParallaxElement() {
  const { ref, style } = useParallaxScroll(50); // 50px parallax offset
  return <div ref={ref} style={style}>Parallax content</div>;
}
```

### Custom Easing Functions
```javascript
export const easeOutCubic = [0.215, 0.61, 0.355, 1];
export const easeInOutCubic = [0.645, 0.045, 0.355, 1];

// Use in animations:
transition: { duration: 0.6, ease: easeOutCubic }
```

---

## File Structure

```
src/
├── components/
│   ├── AnimatedElements/
│   │   ├── NumberCounter.js
│   │   └── CursorFollower.js
│   ├── Home/
│   ├── About/
│   ├── Projects/
│   ├── Services/
│   ├── Navbar.js
│   └── ...
├── hooks/
│   ├── useScrollAnimation.js
│   └── useMousePosition.js
├── utils/
│   └── animationVariants.js
├── style.css (enhanced with keyframes)
└── App.js (includes CursorFollower)
```

---

## Next Steps

### Optional Enhancements:

1. **Add SVG Animations**
   ```javascript
   import { motion } from 'framer-motion';
   // Animate SVG elements
   ```

2. **Gesture Animations**
   ```javascript
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.95 }}
   ```

3. **Page Transitions**
   ```javascript
   import { AnimatePresence } from 'framer-motion';
   // Add page transition animations
   ```

4. **Scroll Progress Indicator**
   ```javascript
   import { useScrollProgress } from '@hooks/useScrollAnimation';
   // Show scroll progress bar
   ```

---

## Troubleshooting

### Animations Not Playing?
1. Check if component is wrapped with Framer Motion
2. Verify `animate` prop matches `initial` state
3. Check browser console for errors

### Performance Issues?
1. Reduce animation complexity
2. Use `will-change` CSS property sparingly
3. Implement `useScrollAnimation` for viewport triggers

### Cursor Follower Lag?
1. Increase `smoothness` value (0.2 instead of 0.1)
2. Reduce cursor size
3. Check browser DevTools for GPU acceleration

---

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt)
- [Web Animation Performance](https://web.dev/animations/)

---

**Happy animating! 🎉**
