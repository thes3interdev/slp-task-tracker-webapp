import PropTypes from 'prop-types';

const Button = ({ buttonText }) => {
	return <button className="btn">{buttonText}</button>;
};

Button.defaultProps = {
	buttonText: 'Add Task',
};

Button.propTypes = {
	text: PropTypes.string,
};

export default Button;
