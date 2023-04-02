type BadgeProps = {
	color: string
	name: string
	value: number
}

export function Badge({ color, name, value }: BadgeProps) {
	return (
		<li
			className={`flex bg-${color}/10 px-4 py-3 rounded-xl items-center`}
		>
			<img src={`./images/icon-${name}.svg`} alt={name} />
			<p
				className={`text-${color} lg:ml-3 ml-3 lg:text-[18px] text-[16px] capitalize`}
			>
				{name}
			</p>
			<div className='ml-auto flex items-center'>
				<p className='mr-2 font-bold lg:text-[18px] text-base'>{value}</p>
				<p className='text-[#8f8afa] lg:text-[18px] text-base'>/ 100</p>
			</div>
		</li>
	)
}
