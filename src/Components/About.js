import AboutCards from './AboutCards'


function About(){

    const info =[{title: 'Hobbies', notes: ['loves to read', 'hiking!']}, {title: 'Personality', notes: ['team player', 'attentive to details']}, , {title: "What I'm looking for", notes: ['collaborative environment', 'Mentorship', 'Growth opportunities']}, {title: 'Background', notes: ['XXX', 'XXX']}]
    return(
        <div className='about-container' style={{borderWidth: '5px', borderColor: 'black'}}>
            <p>About me</p>
            {info.map((info =>{
                return(
                    <div >
                        <AboutCards info={info} />
                    </div>
                )
            }))}
        </div>
    )
}

export default About