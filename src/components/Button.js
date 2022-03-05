import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick }) => {
	return (
		<button className="btn" onClick={onClick}>
			{buttonText}
		</button>
	);
};

Button.defaultProps = {
	buttonText: 'Add Task',
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
