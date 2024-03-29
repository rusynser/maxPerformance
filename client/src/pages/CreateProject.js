// CreateUnifiedProject.js
import React, { useState, useCallback } from 'react';
import Frame from '../components/Frame';
import PortalPopup from '../components/PortalPopup';
import './CreateProject.css';
import { Link } from 'react-router-dom';

const CreateProject = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const onProjectNameText1Click = useCallback(() => {
    // Please sync "List of Projects" to the project
  }, []);

  const onFixedButtonContainerClick = useCallback(() => {
    // Please sync "Task View" to the project
  }, []);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFixedButtonContainer1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onFixedButtonContainer2Click = useCallback(() => {
    // Please sync "List of Projects" to the project
  }, []);

  const createProject = async () => {
    try {
      const response = await fetch('http://localhost:3000/projects/create-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectName, projectDescription }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Error creating project. Please check the console for details.');
    }
  };

  return (
    <>
      <div className="create-project">
        <div className="navbar-icon">
          <input type="search" className="Search-create-project" />
        </div>
        <div className="background-icon"></div>
        <div className="rec" />
        <div className="social-media-post-cardyesno-parent">
          <div className="social-media-post-cardyesno">
            <div className="task-name" />
            <img
              className="social-media-post-cardyesno-child"
              alt=""
              src="/vector-12.svg"
            />
            <div className="footer">
              <div className="share-button">
                <img
                  className="share-android-icon"
                  alt=""
                  src="/vector-12.svg"
                />
                <div className="label">Share</div>
              </div>
            </div>
          </div>
          <input
            className="description"
            placeholder="Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <img
            className="avatar-icon"
            alt=""
            src="/avatar.svg"
            onClick={openFrame}
          />
          <input
            className="project-name"
            placeholder="Project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <div className="header-info">
            <div className="project-name1" onClick={onProjectNameText1Click}></div>
          </div>
          <Link to="/">
            <button
              className="cansel"
              onClick={onFixedButtonContainer2Click}

            >
              <div className="canselText">Cancel</div>
            </button>
          </Link>
        </div>
        <Link to="/login">
          <button className="SignButton" onClick={onFixedButtonContainer1Click}>
            <div className="Sign">Sign in</div>
          </button>
        </Link>
        <img
          className="maxperformance1-2-icon"
          alt=""
          src="/maxperformance1-2@2x.png"
        />
        <button
          className="createNewProject"
          onClick={() => {
            if (!projectName || !projectDescription) {
              alert('Project name and description are required');
              return;
            }
            createProject();
          }}
        >
          <div className="createProjectText">Create Project</div>
        </button>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreateProject;
