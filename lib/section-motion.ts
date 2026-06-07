export const calmViewport = {
  once: true,
  amount: 0.25,
} as const;

export const gentleSectionReveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.05,
    ease: [0.22, 1, 0.36, 1],
  },
} as const;

export function gentleContentReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
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
      ease: [0.22, 1, 0.36, 1],
    },
  } as const;
}

export const ambientFloat = {
  animate: {
    y: [0, -8, 0] as number[],
  },
  transition: {
    duration: 9,
    repeat: Infinity,
    ease: "easeInOut",
  },
} as const;
