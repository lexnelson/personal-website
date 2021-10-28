import ProjectCard from './ProjectCard'
import './styles/Home.css'

function Home() {

  
    return (
        <div className='home-container'>
            <div className='home-inner-container'>
                <h2>Hey there, my name is Lex and I'm a newly made Software Engineer. </h2>
                <h2 style={{paddingTop:'20px', color: 'white'}}>Portfolio</h2>
                <div className='portfolio-container'>
                
                   <ProjectCard />
                </div>
                <br/>
                <div>
                <h3>Get in touch!</h3>
            </div>
            </div>
            
        </div>
    )
}

export default Home