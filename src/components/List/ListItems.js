import React, { useState, useContext } from 'react'
import { Context } from '../Context/Context'
import Card from '../UI/Card'
import ListDate from './ListDate'
import './ListItems.css'
import { useEffect } from 'react'
function ListItems(props) {
	const { toggleTodo, removeTodo } = useContext(Context)
	let cls = 'li'

	if (props.completed) {
		cls += ' checked'
	}
	const setCheckHandler = () => {
		toggleTodo(props.id)
	}
	const delHandler = () => {
		removeTodo(props.id)
	}

	return (
		<Card className='block'>
			<li className={cls} key={props.id}>
				<input
					onChange={setCheckHandler}
					type='checkbox'
					checked={props.completed}
				/>
				{props.title}
			</li>
			<button onClick={delHandler}>delete</button>

			<ListDate date={props.date} />
		</Card>
	)
}

export default ListItems
