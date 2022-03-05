import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation();

	return (
		<header className="header">
			<h1 className="title">{title}</h1>
			{location.pathname === '/' && <Button buttonText={showAdd ? 'Cancel' : 'Add Task'} onClick={onAdd} />}
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
