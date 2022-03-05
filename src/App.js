import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [tasks, setTasks] = useState([
		{ id: 1, text: 'Doctors appointmant', day: 'Feb 5th at 2:30pm', reminder: true },
		{ id: 2, text: 'PTA meeting', day: 'Feb 6th at 5:30pm', reminder: true },
		{ id: 3, text: 'Shopping', day: 'Feb 7th at 10:30am', reminder: false },
	]);

	/** delete a task */
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	/** toggle reminder */
	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	return (
		<div className="container">
			<Header title="Simple Task Manager" />
			<AddTask />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'There are currently no tasks are available...'
			)}
		</div>
	);
};

export default App;
