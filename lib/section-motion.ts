export const calmViewport = {
  once: true,
  amount: 0.25,
} as const;

export const gentleSectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.15,
    ease: [0.22, 1, 0.36, 1],
  },
} as const;

export function gentleContentReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.95,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  } as const;
}

export function gentleItemReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  } as const;
}
