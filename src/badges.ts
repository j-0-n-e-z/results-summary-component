export type Badge = { color: string; value: number }

export const badges: Record<string, Badge> = {
	reaction: { color: 'lightRed', value: 80 },
	memory: { color: 'orangeyYellow', value: 92 },
	verbal: { color: 'greenTeal', value: 61 },
	visual: { color: 'lightRoyalBlue', value: 72 }
} as const
