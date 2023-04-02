export type Badge = {
	color: {
		text: string
		background: string
	}
	value: number
}

export const badges: Record<string, Badge> = {
	reaction: {
		color: {
			text: 'text-lightRed',
			background: 'bg-lightRed/10'
		},
		value: 80
	},
	memory: {
		color: {
			text: 'text-orangeyYellow',
			background: 'bg-orangeyYellow/10'
		},
		value: 92
	},
	verbal: {
		color: {
			text: 'text-greenTeal',
			background: 'bg-greenTeal/10'
		},
		value: 61
	},
	visual: {
		color: {
			text: 'text-lightRoyalBlue',
			background: 'bg-lightRoyalBlue/10'
		},
		value: 72
	}
} as const
