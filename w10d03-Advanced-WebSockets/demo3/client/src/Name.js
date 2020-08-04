import React, { useEffect } from 'react';


export default function Name (props) {
	useEffect(() => {
		console.log(props)
		props.socket.on('WITHIN_COMPONENT', msg => {
			console.log(msg)
		})

	}, [])


	return (<div>
		WTF
		</div>
		)
}