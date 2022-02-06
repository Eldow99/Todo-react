import React from 'react'
import './ErrorModal.Module.css'
import Card from './Card'
import classes from './ErrorModal.Module.css'
function ErrorModal(props) {
	return (
		<div>
			<div onClick={props.onConfirm} className={'backdrop'} />
			<Card className={'modal'}>
				<header className='header'>
					<h2>{props.title}</h2>
				</header>
				<div className='content'>
					<p>{props.message}</p>
				</div>
				<footer className='actions'>
					<button onClick={props.onConfirm}>OK</button>
				</footer>
			</Card>
		</div>
		// className={classes.modal}
		// className={classes.header}
		// className={classes.content}
		// className={classes.actions}
	)
}

export default ErrorModal
