const Header = ({ title }) => {
	return (
		<header className="header">
			<h2>{title}</h2>
			<button className="btn">Add Task</button>
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

export default Header;
