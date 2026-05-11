import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Kinetic text animation - text that moves based on scroll velocity
export const kineticTextAnimation = (element, options = {}) => {
  const {
    yPercent = 100,
    duration = 0.8,
    ease = 'power3.out',
  } = options;

  return gsap.fromTo(
    element,
    {
      yPercent: yPercent,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 0.5,
        markers: false,
      },
      yPercent: 0,
      opacity: 1,
      duration: duration,
      ease: ease,
    }
  );
};

// Scroll skew effect
export const scrollSkewAnimation = () => {
  gsap.set('body', { transformOrigin: 'center center', force3D: true });

  let proxy = { skew: 0, skewSetter: (x) => { gsap.set('body', { skewY: x }); }, skewGetter: () => parseFloat(gsap.getProperty('body', 'skewY')), onUpdate: () => {},},
    clamp = gsap.utils.clamp(-20, 20),
    rawSequence = gsap.timeline(),
    seamlessLoop = gsap.timeline({
      onUpdate: () => {
        if (rawSequence.progress() === 1) {
          rawSequence.progress(0);
        }
        let skew = clamp(gsap.getProperty('body', 'skewY'));
        gsap.set(proxy, { skew: skew }, 0);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          proxy.onUpdate();
        }
      },
    });

  return { proxy, clamp, rawSequence, seamlessLoop };
};

// Parallax effect with scroll trigger
export const parallaxAnimation = (element, options = {}) => {
  const {
    speed = 0.5,
    startTrigger = 'top 100%',
  } = options;

  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: startTrigger,
      end: 'bottom 0%',
      scrub: 1,
      markers: false,
    },
    y: (i, el) => -window.innerHeight * speed,
    ease: 'none',
  });
};

// Reveal animation with stagger
export const revealAnimation = (elements, options = {}) => {
  const {
    delay = 0.1,
    duration = 0.8,
    startTrigger = 'top 85%',
  } = options;

  return gsap.to(elements, {
    scrollTrigger: {
      trigger: elements[0]?.parentElement,
      start: startTrigger,
      markers: false,
    },
    opacity: 1,
    y: 0,
    duration: duration,
    stagger: delay,
    ease: 'power3.out',
  });
};

// Magnetic button effect
export const magneticButtonEffect = (button) => {
  const xTo = gsap.quickTo(button, 'x', { duration: 1, ease: 'elastic.out(1.3)' });
  const yTo = gsap.quickTo(button, 'y', { duration: 1, ease: 'elastic.out(1.3)' });

  button.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = button.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    xTo(x * 0.35);
    yTo(y * 0.35);
  });

  button.addEventListener('mouseleave', () => {
    xTo(0);
    yTo(0);
  });
};

// Liquid swipe animation
export const liquidSwipe = (element, options = {}) => {
  const { duration = 0.6, ease = 'power3.inOut' } = options;

  return gsap.to(element, {
    backgroundPosition: '200% 0',
    duration: duration,
    ease: ease,
  });
};

// Text line animation
export const textLineAnimation = (element) => {
  const lines = element.querySelectorAll('.line-text');
  
  return gsap.to(lines, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      markers: false,
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  });
};

// Split text reveal
export const splitTextReveal = (element) => {
  const text = element.innerText;
  element.innerHTML = text
    .split('')
    .map((char) => `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${char === ' ' ? '\u00A0' : char}</span>`)
    .join('');

  return gsap.to(element.querySelectorAll('span'), {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      markers: false,
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.02,
    ease: 'power3.out',
  });
};

// Counter animation
export const counterAnimation = (element, targetValue, duration = 2) => {
  const numericValue = parseInt(targetValue);
  
  return gsap.to({ value: 0 }, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
      markers: false,
    },
    value: numericValue,
    duration: duration,
    onUpdate: function() {
      element.innerText = Math.ceil(this.targets()[0].value);
    },
    ease: 'power2.out',
  });
};

// Horizontal scroll animation
export const horizontalScroll = (container, options = {}) => {
  const { duration = 1 } = options;
  const panels = gsap.utils.toArray(container.querySelectorAll('[data-panel]'));

  return gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (panels.length - 1),
      end: `+=${container.offsetWidth}`,
      markers: false,
    },
  });
};

// Blob morphing animation
export const blobMorph = (element) => {
  return gsap.to(element, {
    attr: { d: generateRandomBlobPath() },
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

// Generate random blob SVG path
const generateRandomBlobPath = () => {
  const points = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 50 + Math.random() * 30;
    const x = Math.cos(angle) * radius + 100;
    const y = Math.sin(angle) * radius + 100;
    points.push([x, y]);
  }

  let path = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const nextI = (i + 1) % points.length;
    const cpX = (points[i][0] + points[nextI][0]) / 2;
    const cpY = (points[i][1] + points[nextI][1]) / 2;
    path += ` Q ${points[i][0]},${points[i][1]} ${cpX},${cpY}`;
  }
  path += ' Z';
  return path;
};
