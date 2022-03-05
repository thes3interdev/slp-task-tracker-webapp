const Header = ({ title }) => {
	return <header>{title}</header>;
};

Header.defaultProps = {
	title: 'Task Tracker',
};

export default Header;
