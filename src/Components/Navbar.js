import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <h2 style={{float: 'left'}}>Lex Nelson</h2>
            <nav style={{float: 'right'}}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            
        </div>
    )
}

export default Navbar