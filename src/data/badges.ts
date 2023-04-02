export type Badge = {
	textColor: string
	bgColor: string
	value: number
}

export const badges: Record<string, Badge> = {
	reaction: {
		textColor: 'text-lightRed',
		bgColor: 'bg-lightRed/10',
		value: 80
	},
	memory: {
		textColor: 'text-orangeyYellow',
		bgColor: 'bg-orangeyYellow/10',
		value: 92
	},
	verbal: {
		textColor: 'text-greenTeal',
		bgColor: 'bg-greenTeal/10',
		value: 61
	},
	visual: {
		textColor: 'text-lightRoyalBlue',
		bgColor: 'bg-lightRoyalBlue/10',
		value: 72
	}
} as const
