import React, {useState, useEffect} from "react";
import API from "../utils/API";



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


return(
    <div className="project-board">
        <h2>Project Board</h2>
        {console.log(projects)}
        {projects.map(project =>(
            <p key={project._id}>{project.projectName}</p>
        ))}

    </div>
)

}

export default ProjectBoard;