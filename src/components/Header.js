import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1 className="title">{title}</h1>
			<Button buttonText={showAdd ? 'Cancel' : 'Add Task'} onClick={onAdd} />
		</header>
	);
};

Header.defaultProps = {
	title: 'Simple Task Manager',
};

Header.propTypes = {
	text: PropTypes.string,
};

export default Header;
