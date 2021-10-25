

function AboutCards({info}){

    return(
        <div className='aboutCard'>
            <ul>
             <p>{info.title}</p>
                       
                        {info.notes.map((note)=> {
                            return(<li>{note}</li>)
                        })} </ul> 
        </div>
    )
}

export default AboutCards