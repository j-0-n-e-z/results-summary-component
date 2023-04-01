import './App.css'
import reaction from '../public/images/icon-reaction.svg'
import memory from '../public/images/icon-memory.svg'
import verbal from '../public/images/icon-verbal.svg'
import visual from '../public/images/icon-visual.svg'

function App() {
	return (
		<div className='w-full min-h-screen bg-white grid place-items-center'>
			<div className='flex lg:flex-row flex-col lg:w-[735px] lg:h-[512px] w-full h-screen bg-white lg:shadow-xl rounded-[30px]'>
				<div className='flex flex-col lg:rounded-[30px] rounded-[0_0_30px_30px] items-center lg:w-1/2 w-full bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue'>
					<p className='text-lightLavender lg:text-2xl text-lg lg:mb-8 mb-6 lg:mt-[39px] mt-5 mr-[6px]'>
						Your Result
					</p>
					<div className='grid place-items-center content-center lg:mb-6 mb-5 rounded-full lg:w-52 w-36 lg:h-52 h-36 bg-gradient-to-b from-violetBlue to-persianBlue'>
						<p className='lg:text-[70px] text-[55px] font-bold text-white lg:leading-[5rem] leading-[4.2rem]'>
							76
						</p>
						<p className='lg:text-md text-base font-bold text-[#8f8afa]'>
							of 100
						</p>
					</div>
					<p className='font-bold text-white lg:text-[32px] text-2xl lg:mb-6 mb-2 mr-2'>
						Great
					</p>
					<p className='lg:w-2/3 w-[70%] text-lightLavender lg:leading-6 leading-5 text-center lg:mb-0 mb-10 lg:text-[18px] text-[16px]'>
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>
				<div className='flex flex-col lg:w-1/2 w-full lg:px-10 px-8 lg:pt-9 pt-5 pb-11'>
					<div className='text-darkGrayBlue font-bold lg:text-2xl text-lg lg:mb-8 mb-6'>
						Summary
					</div>
					<div className='flex bg-lightRed/10 px-4 py-3 rounded-xl lg:mb-5 mb-[25px] items-center'>
						<img src={reaction} alt='reaction' />
						<p className='text-lightRed lg:ml-3 ml-3 lg:text-[18px] text-[16px]'>
							Reaction
						</p>
						<div className='ml-auto flex items-center'>
							<p className='mr-2 font-bold lg:text-[18px] text-base'>80</p>
							<p className='text-[#8f8afa] lg:text-[18px] text-base'>/ 100</p>
						</div>
					</div>
					<div className='flex bg-orangeyYellow/10 px-4 py-3 rounded-xl lg:mb-5 mb-[25px]'>
						<img src={memory} alt='memory' />
						<p className='text-orangeyYellow ml-3 lg:text-[18px] text-[16px]'>
							Memory
						</p>
						<div className='ml-auto flex'>
							<p className='mr-2 font-bold lg:text-[18px] text-base'>92</p>
							<p className='text-[#8f8afa] lg:text-[18px] text-base'>/ 100</p>
						</div>
					</div>
					<div className='flex bg-greenTeal/10 px-4 py-3 rounded-xl lg:mb-5 mb-[25px]'>
						<img src={verbal} alt='verbal' />
						<p className='text-greenTeal ml-3 lg:text-[18px] text-[16px]'>
							Verbal
						</p>
						<div className='ml-auto flex'>
							<p className='mr-2 font-bold lg:text-[18px] text-base'>61</p>
							<p className='text-[#8f8afa] lg:text-[18px] text-base'>/ 100</p>
						</div>
					</div>
					<div className='flex bg-lightRoyalBlue/10 px-4 py-3 rounded-xl'>
						<img src={visual} alt='visual' />
						<p className='text-darkGrayBlue ml-3 lg:text-[18px] text-[16px]'>
							Visual
						</p>
						<div className='ml-auto flex'>
							<p className='mr-2 font-bold lg:text-[18px] text-base'>72</p>
							<p className='text-[#8f8afa] lg:text-[18px] text-base'>/ 100</p>
						</div>
					</div>
					<button className='rounded-full p-4 w-full bg-darkGrayBlue text-white cursor-pointer lg:mt-auto mt-7 hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue transition'>
						Continue
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
