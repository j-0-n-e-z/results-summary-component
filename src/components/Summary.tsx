import { Badge } from './Badge'
import { badges } from '../data/badges'

export const Summary = () => {
	return (
		<div className='flex flex-col lg:w-1/2 w-full lg:px-10 px-8 lg:pt-9 pt-5 lg:pb-11'>
			<div className='text-darkGrayBlue font-bold lg:text-2xl text-lg lg:mb-8 mb-6'>
				Summary
			</div>
			<ul className='lg:space-y-5 space-y-4'>
				{Object.keys(badges).map(badge => (
					<Badge
						key={badge}
						name={badge}
            color={badges[badge].color}
						value={badges[badge].value}
					/>
				))}
			</ul>
			<button className='rounded-full p-4 w-full bg-darkGrayBlue text-white cursor-pointer lg:mt-auto mt-7 hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue transition'>
				Continue
			</button>
		</div>
	)
}
