import './styles/Projects.css'
import HiddenTrails from './images/HiddenTrails.jpg'

function ProjectCard() {

    const projects = [{title: 'Hidden Trails', photo: 'empty so far', notes: ['note 1', 'note2'], github: 'https://github.com/lexnelson/hidden-trail', youtube: 'https://www.youtube.com/watch?v=e02Kf7YWAdQ'}, {title: 'Hidden Trails', photo: 'empty so far', notes: ['note 1', 'note2'], github: 'githublink', youtube: 'youtubelink'}, {title: 'Hidden Trails', photo: 'empty so far', notes: ['note 1', 'note2'], github: 'githublink', youtube: 'youtubelink'}]
    return (
        <div >
            <div className='project'>
                <h3>Hidden Trails</h3>
                <img src={HiddenTrails} />
                <p>
                    <a href={`https://github.com/lexnelson/hidden-trail`}>
                        <p>Github</p>
                    </a>
                </p>
                <p>
                    <a href={'https://www.youtube.com/watch?v=e02Kf7YWAdQ'} >
                        <p>Youtube</p>
                    </a>
                </p>
            </div>
            <div className='project'>
                <h3>Potatoes Portal</h3>
                <img src={HiddenTrails} />
                <p>
                    <a href={`https://github.com/lexnelson/hidden-trail`}>
                        <p>Github</p>
                    </a>
                </p>
                <p>
                    <a href={'https://www.youtube.com/watch?v=e02Kf7YWAdQ'} >
                        <p>Youtube</p>
                    </a>
                </p>
            </div>
            <div className='project'>
                <h3>Starbooks</h3>
                <img src={HiddenTrails} />
                <p>
                    <a href={`https://github.com/lexnelson/hidden-trail`}>
                        <p>Github</p>
                    </a>
                </p>
                <p>
                    <a href={'https://www.youtube.com/watch?v=e02Kf7YWAdQ'} >
                        <p>Youtube</p>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ProjectCard