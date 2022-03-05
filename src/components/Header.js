import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	const onClick = () => {
		console.log('A new task was added.');
	};

	return (
		<header className="header">
			<h1>{title}</h1>
			<Button onClick={onClick} buttonText="Add Task" />
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
