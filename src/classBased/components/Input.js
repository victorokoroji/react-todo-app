import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, name, onChange, placeholder, value, checked }) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				checked={checked}
			/>
		</div>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool,
}

Input.defaultProps = {
	placeholder: null,
	checked: null,
	value: '',
}

export default Input
