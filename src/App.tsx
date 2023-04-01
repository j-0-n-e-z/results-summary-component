import './App.css'
import reaction from '../public/images/icon-reaction.svg'
import memory from '../public/images/icon-memory.svg'
import verbal from '../public/images/icon-verbal.svg'
import visual from '../public/images/icon-visual.svg'

function App() {
	return (
		<div className='w-full min-h-screen bg-white grid place-items-center'>
			<div className='flex w-[735px] h-[512px] bg-white shadow-xl rounded-[30px]'>
				<div className='flex flex-col rounded-[30px] items-center w-1/2 bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue'>
					<p className='text-lightLavender text-2xl mb-8 mt-[39px] mr-[6px]'>
						Your Result
					</p>
					<div className='grid place-items-center content-center mb-5 rounded-full w-52 h-52 bg-gradient-to-b from-violetBlue to-persianBlue'>
						<p className='text-[70px] font-bold text-white leading-[5rem]'>
							76
						</p>
						<p className='text-md font-bold text-[#8f8afa]'>of 100</p>
					</div>
					<p className='font-bold text-white text-[32px] mb-2 mr-2'>Great</p>
					<p className='w-2/3 text-lightLavender leading-6 text-center'>
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>
				<div className='flex flex-col w-1/2 px-10 pt-9 pb-11'>
					<div className='text-darkGrayBlue font-bold text-2xl mb-8'>
						Summary
					</div>
					<div className='flex bg-lightRed/10 px-4 py-3 rounded-xl mb-5'>
						<img src={reaction} alt='reaction' />
						<p className='text-lightRed ml-3'>Reaction</p>
						<div className='ml-auto flex'>
							<p className='mr-2 font-bold'>80</p>
							<p className='text-[#8f8afa]'>/ 100</p>
						</div>
					</div>
					<div className='flex bg-orangeyYellow/10 px-4 py-3 rounded-xl mb-5'>
						<img src={memory} alt='memory' />
						<p className='text-orangeyYellow ml-3'>Memory</p>
						<div className='ml-auto flex'>
							<p className='mr-2 font-bold'>92</p>
							<p className='text-[#8f8afa]'>/ 100</p>
						</div>
					</div>
					<div className='flex bg-greenTeal/10 px-4 py-3 rounded-xl mb-5'>
						<img src={verbal} alt='verbal' />
						<p className='text-greenTea ml-3'>Verbal</p>
						<div className='ml-auto flex'>
							<p className='mr-2 font-bold'>61</p>
							<p className='text-[#8f8afa] font-medium'>/ 100</p>
						</div>
					</div>
					<div className='flex bg-lightRoyalBlue/10 px-4 py-3 rounded-xl'>
						<img src={visual} alt='visual' />
						<p className='text-darkGrayBlue ml-3'>Visual</p>
						<div className='ml-auto flex'>
							<p className='mr-2 font-bold'>72</p>
							<p className='text-[#8f8afa]'>/ 100</p>
						</div>
					</div>
					<button className='rounded-full p-4 w-full bg-darkGrayBlue text-white cursor-pointer mt-auto hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue transition'>
						Continue
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
