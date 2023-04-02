import './App.css'
import { Result } from './components/Result'
import { Summary } from './components/Summary'

export default function App() {
	return (
		<div className='App'>
			<div className='flex lg:flex-row flex-col lg:w-[735px] lg:h-[512px] w-full h-screen bg-white lg:shadow-xl rounded-[30px]'>
				<Result />
				<Summary />
			</div>
		</div>
	)
}
