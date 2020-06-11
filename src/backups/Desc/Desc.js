import React from 'react'
import './Desc.css'

const desc = (props) => {
	return (
		<div className="desc-container">
			<p>This Webapp made from {props.apps}</p>
			<input type="text" value={props.apps} onChange={props.rename}/>
			<button className="btn btn-danger" onClick={props.delete}>Delete</button>
		</div>
		);

}

export default desc
