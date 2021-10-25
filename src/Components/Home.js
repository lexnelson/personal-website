import ProjectCard from './ProjectCard'
import './styles/Home.css'

function Home() {

    const projects = [{title: 'Hidden Trails', photo: 'empty so far', notes: ['note 1', 'note2'], github: 'githublink', youtube: 'youtubelink'}]
    return (
        <div className='home-container'>
            <div className='home-inner-container'>
                <h2>Hey there, my name is Lex and I'm a newly made Software Engineer. </h2>
                <h2>Portfolio</h2>
                <div className='portfolio-container'>
                    {projects.map((proj)=>{
                        return( <ProjectCard proj={proj}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home