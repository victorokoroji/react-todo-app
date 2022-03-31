import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, name, id, checked, onChange, placeholder, value }) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				id={id}
				checked={checked}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	checked: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default Input
