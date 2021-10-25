import './styles/Projects.css'

function ProjectCard({proj}){
    console.log(proj)
    return(
        <div className='project'>
            <h3>{proj.title}</h3>
            <img src='https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg'/>
            <p>{proj.github}</p>
            <p>{proj.youtube}</p>
        
        </div>
    )
}

export default ProjectCard