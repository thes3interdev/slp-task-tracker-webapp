import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	return (
		<header className="header">
			<h1 className="title">{title}</h1>
			<Button buttonText="Add Task" />
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	text: PropTypes.string,
};

export default Header;
