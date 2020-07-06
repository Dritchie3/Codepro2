import React, {useState, useEffect, } from "react";
import API from "../../utils/API";
import SubmitProject from "../../components/SubmitProject/submit-project";
import { set } from "mongoose";





function ProjectBoard() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
        }, []);

function loadProjects(){
    API.getProjects()
        .then(res => {
            setProjects(res.data)
    })
}

function addProject(newProject){
    setProjects(newProject);
}


    


return(
        
            <div className="project-board">
                <h2>Project Board</h2>
                {console.log(projects)}
                {projects.map(project =>(
                    <p key={project._id}>{project.projectName}</p>
                ))}
                
                <SubmitProject value={projects} onClick={addProject}  />

            </div>
       
    )   

}

export default ProjectBoard;