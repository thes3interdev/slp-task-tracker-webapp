import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
	return (
		<div className="task">
			<h3 className="task-text">
				{task.text} <FaTimes className="task-close" onClick={() => onDelete(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
