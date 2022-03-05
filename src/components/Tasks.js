const tasks = [
	{ id: 1, text: 'Doctors appointmant', day: 'Feb 5th as 2:30pm', reminder: true },
	{ id: 2, text: 'PTA meeting', day: 'Feb 6th as 5:30pm', reminder: true },
	{ id: 3, text: 'Shopping', day: 'Feb 7th as 10:30am', reminder: false },
];

const Tasks = () => {
	return (
		<>
			{tasks.map((task) => (
				<h3 key={task.id}>{task.text}</h3>
			))}
		</>
	);
};

export default Tasks;
