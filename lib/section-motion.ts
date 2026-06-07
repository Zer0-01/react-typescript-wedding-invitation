export const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const calmViewport = {
  once: true,
  amount: 0.25,
} as const;

export const heroReveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.2,
    ease: editorialEase,
  },
} as const;

export const gentleSectionReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.08,
    ease: editorialEase,
  },
} as const;

export function gentleContentReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.94,
      delay,
      ease: editorialEase,
    },
  } as const;
}

export function gentleItemReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.82,
      delay,
      ease: editorialEase,
    },
  } as const;
}

export function ornamentReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 1,
      delay,
      ease: editorialEase,
    },
  } as const;
}

export function softPanelReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 18, scale: 0.985 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 0.98,
      delay,
      ease: editorialEase,
    },
  } as const;
}

export function editorialStaggerContainer(delay = 0, staggerChildren = 0.1) {
  return {
    initial: "hidden",
    whileInView: "show",
    viewport: calmViewport,
    transition: {
      delayChildren: delay,
      staggerChildren,
    },
    variants: {
      hidden: {},
      show: {},
    },
  } as const;
}

export const editorialStaggerItem = {
  variants: {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.86,
        ease: editorialEase,
      },
    },
  },
} as const;

export const ambientFloat = {
  animate: {
    x: [0, 2, 0] as number[],
    y: [0, -6, 0] as number[],
    opacity: [0.72, 0.96, 0.72] as number[],
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  },
} as const;

export const ambientGlow = {
  animate: {
    opacity: [0.42, 0.58, 0.42] as number[],
    scale: [1, 1.04, 1] as number[],
  },
  transition: {
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut",
  },
} as const;
