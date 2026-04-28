/** Shared motion tokens — keep animations consistent across the app */

export const easings = {
  /** Cinematic ease-out — smooth deceleration */
  cinema: [0.22, 1, 0.36, 1] as const,
  /** Snappy — quick response with soft landing */
  snappy: [0.25, 0.46, 0.45, 0.94] as const,
} as const;

export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
} as const;

export const fadeUp = {
  initial: { opacity: 0, y: 18, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -10, filter: 'blur(8px)' },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
} as const;
