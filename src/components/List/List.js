import React from 'react'
import ListItems from './ListItems'
function List(props) {
	return (
		<ul>
			{props.data.map((el) => (
				<ListItems
					id={el.id}
					completed={el.completed}
					key={el.id}
					title={el.title}
					date={el.date}
				/>
			))}
		</ul>
	)
}

export default List
