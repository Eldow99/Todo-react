import React from 'react'
import InputForm from './InputForm'
function Input(props) {
	const getTodos = (inputValue) => {
		const inpVal = {
			...inputValue,
		}

		props.onGetInpValue(inpVal)
	}

	return (
		<div>
			<h1>TODO</h1>
			<InputForm getTodos={getTodos} />
		</div>
	)
}

export default Input
