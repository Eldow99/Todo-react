import React from 'react'
import { useEffect } from 'react'
import './ListDate.css'
function ListDate(props) {
	let month
	let day
	let year

	month = new Date(props.date).toLocaleString('en-Us', { month: 'long' })
	day = new Date(props.date).getUTCDate()
	year = new Date(props.date).getFullYear()
	let min = new Date(props.date).getMinutes()
	let hours = new Date(props.date).getHours()

	return (
		<div className='block-date'>
			<h2>{day}</h2>
			<h3>{month}</h3>
			<p>{year}</p>
			<p>
				{hours}:<span>{min}</span>
			</p>
		</div>
	)
}

export default ListDate
