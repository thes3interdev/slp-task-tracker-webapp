import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Doctors appointmant', day: 'Feb 5th at 2:30pm', reminder: true },
		{ id: 2, text: 'PTA meeting', day: 'Feb 6th at 5:30pm', reminder: true },
		{ id: 3, text: 'Shopping', day: 'Feb 7th at 10:30am', reminder: false },
	]);

	/** delete task */
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="container">
			<Header title="Task Manager" />
			<Tasks tasks={tasks} onDelete={deleteTask} />
		</div>
	);
};

export default App;
