import './styles/Footer.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='link-icons'>
            <a target='_blank' rel="noreferrer" href='https://github.com/lexnelson'>
                    <img className="icon-github" src='https://img.icons8.com/ios-glyphs/2x/ffffff/github.png' alt='github' ></img>
                </a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/lexnelson/'>
                    <img className="icon-linkedin" src='https://img.icons8.com/ios-glyphs/2x/ffffff/linkedin-circled.png' alt='linked in' ></img>
                </a>
                <a target='_blank' rel="noreferrer" href='https://docs.google.com/document/d/10CcjqT_hRJ2KI6czFt1jg6Wdh3DrrgKnEltup8W0lOk/edit?usp=sharing'>
                    <img className="icon-resume" src='https://img.icons8.com/fluent-systems-regular/2x/ffffff/regular-document.png' alt="resume and cover letter" ></img>
                </a>
            </div>
        </div>
    )
}

export default Footer