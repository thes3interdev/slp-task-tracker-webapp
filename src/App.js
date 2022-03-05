import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';

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
		const res = await fetch(`/tasks/${id}`, {
			method: 'DELETE',
		});

		/** we should control the response status to decide if we shall change the state or not */
		res.status === 200
			? setTasks(tasks.filter((task) => task.id !== id))
			: alert('There was an error while deleting the task.');
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
		<Router>
			<div className="container">
				<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
				<Routes>
					<Route
						path="/"
						element={
							<>
								{showAddTask && <AddTask onAdd={addTask} />}
								{tasks.length > 0 ? (
									<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
								) : (
									'There are currently no tasks are available...'
								)}
							</>
						}
					/>
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
