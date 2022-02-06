import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/Input/Input'
import List from './components/List/List'
import { Context } from './components/Context/Context'
// const DATA = [
// 	{
// 		id: '1',
// 		title: 'TODO',
// 		completed: false,
// 		date: new Date(),
// 	},
// 	{
// 		id: '2',
// 		title: '3ODO',
// 		completed: false,
// 		date: new Date(),
// 	},
// ]

function App() {
	const [data, setData] = useState(() => {
		// getting stored value
		const saved = localStorage.getItem('data')
		const initialValue = JSON.parse(saved)
		return initialValue || []
	})

	// useEffect(() => {
	// 	//Здесь мы изпользуем useEffect для того
	// 	// чтобы при загрузке компонента стянулись даггые с localstorage
	// 	const raw = localStorage.getItem('data') || [] //
	// 	setData(JSON.parse(raw))
	// }, [])
	useEffect(() => {
		//Здесь мы изпользуем useEffect для того чтобы при изменениеек состояния даблялялист данные состояния в localstorage
		localStorage.setItem('data', JSON.stringify(data))
	}, [data])

	const onGetInpValue = (inpVal) => {
		const dataInp = {
			...inpVal,
		}

		setData([dataInp, ...data])
	}
	const removeTodo = (id) => {
		setData(
			data.filter((el) => {
				return el.id !== id
			}),
		)
	}

	const toggleTodo = (id) => {
		setData(
			data.map((el) => {
				if (el.id === id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}

	return (
		<Context.Provider value={{ toggleTodo, removeTodo }}>
			<div className='App'>
				<Input onGetInpValue={onGetInpValue} />
				<List data={data} />
			</div>
		</Context.Provider>
	)
}

export default App
