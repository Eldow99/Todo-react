import { React, useEffect, useState, useReducer } from 'react'
import ErrorModal from '../UI/ErrorModal'

const inputReducer = (state, action) => {
	if (action.type === 'TODO__INPUT') {
		return {
			value: action.val,
		}
	}
	return {
		value: '',
	}
}
function InputForm(props) {
	const [input, dispatchInput] = useReducer(inputReducer, {
		value: '',
	})

	const [error, setError] = useState(null)

	const inpChangeHandler = (event) => {
		dispatchInput({ type: 'TODO__INPUT', val: event.target.value })
	}
	const formSubmitHandler = (event) => {
		event.preventDefault()
		if (input.value.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please Enter  a value of input',
			})
			return
		}
		const formData = {
			title: input.value,
			id: Math.random().toString(),
			date: new Date(),
			completed: false,
		}

		props.getTodos(formData)
		console.log(input.value)
		dispatchInput({ type: 'TODO__INPUT', val: '' })
	}
	const errorHandler = () => {
		setError(null)
	}
	return (
		<div>
			{error && (
				<ErrorModal
					onConfirm={errorHandler}
					title={error.title}
					message={error.message}
				/>
			)}
			<div>
				<form onSubmit={formSubmitHandler}>
					<div>
						<input
							value={input.value}
							onChange={inpChangeHandler}
							type='text'
						/>
						<button type='submit'>Ok</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default InputForm
