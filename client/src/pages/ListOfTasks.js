import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ListOfTasks.css'; // Import your CSS styles as needed

const ListOfTasks = () => {
  const { projectId } = useParams(); // Get projectId from URL
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectName, setProjectName] = useState('');
  useEffect(() => {

    const fetchProject = async () => {
      try {
        const projectResponse = await fetch(`/api/projects/${projectId}`); // Adjust the URL as per your API
        if (!projectResponse.ok) {
          throw new Error('Failed to fetch project');
        }
        const projectData = await projectResponse.json();
        setProjectName(projectData.projectName); // Assuming the response has a 'projectName' field
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/tasks/${projectId}`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        // Handle error, e.g., show an error message to the user
      }
      setIsLoading(false);
    };
    fetchProject();
    fetchTasks();
  }, [projectId]);

  if (isLoading) {
    return <div>Loading tasks...</div>; // Or any loading spinner
  }
  

  return (
   <>
<div className="list-of-tasks">
        <img className="maxperformance1-2-icon" alt="" src="/maxperformance1-2@2x.png"></img>
        <div className="navbar-icon">
          <input type="search" className="Search-task" />
        </div>
        <div className="background-task"></div>
        </div>
        
<div >
<ul className="task-list">
    {tasks.map(task => (
      <li key={task._id}>
            <h3>{task.taskName}</h3>
            <p className='description-task'>{task.description}</p>
            <p className='compexity-task'>{task.complexity}</p>
            <p className='state-task'>{task.state}</p>
            <p className='comment-task'>{task.comment}</p>
            <p className='priority-task'>{task.priority}</p>
            {/* Display other task details as needed */}
          </li>    
      ))
    }
  </ul>
  <button className='createTask'>
  <Link to={`/projects/${projectId}/create-task`}>Create Task</Link>
  </button>
</div>
</>
);
};

export default ListOfTasks;
