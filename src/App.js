import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Doctors appointmant', day: 'Feb 5th as 2:30pm', reminder: true },
		{ id: 2, text: 'PTA meeting', day: 'Feb 6th as 5:30pm', reminder: true },
		{ id: 3, text: 'Shopping', day: 'Feb 7th as 10:30am', reminder: false },
	]);

	return (
		<div className="container">
			<Header title="Task Manager" />
			<Tasks tasks={tasks} />
		</div>
	);
};

export default App;
