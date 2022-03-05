import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [showAddTask, setShowAddTask] = useState(false);

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();

			setTasks(tasksFromServer);
		};

		getTasks();
	}, []);

	/** fetch tasks */
	const fetchTasks = async () => {
		const res = await fetch('/tasks');
		const data = await res.json();

		return data;
	};

	/** fetch single task */
	const fetchTask = async (id) => {
		const res = await fetch(`/tasks/${id}`);
		const data = await res.json();

		return data;
	};

	/** add a task */
	const addTask = async (task) => {
		// const id = Math.floor(Math.random() * 10000) + 1;
		// const newTask = { id, ...task };

		// setTasks([...tasks, newTask]);

		const res = await fetch('/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();

		setTasks([...tasks, data]);
	};

	/** delete a task */
	const deleteTask = async (id) => {
		await fetch(`/tasks/${id}`, {
			method: 'DELETE',
		});
		setTasks(tasks.filter((task) => task.id !== id));
	};

	/** toggle reminder */
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updatedTask),
		});

		const data = await res.json;

		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
	};

	return (
		<div className="container">
			<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'There are currently no tasks are available...'
			)}
		</div>
	);
};

export default App;
