import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
	type,
	name,
	onChange,
	placeholder,
	value,
	checked,
	className,
	style,
	onKeyDown,
}) => {
	return (
		<>
			<input
				type={type}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				checked={checked}
				className={className}
				style={style}
				onKeyDown={onKeyDown}
			/>
		</>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	className: PropTypes.any,
	onKeyDown: PropTypes.any,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool,
}

Input.defaultProps = {
	placeholder: null,
	checked: null,
	value: '',
	className: '',
	onKeyDown: null,
}

export default Input
