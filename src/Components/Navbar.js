import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <h1 style={{float: 'left', marginLeft: '3%', marginTop: '40px', color: 'white'}}>Lex Nelson</h1>
            <nav style={{float: 'right', marginRight: '3%', marginTop: '80px'}}>
                <NavLink to='/'>Home</NavLink>
                
                <NavLink to='/about'>About</NavLink>
            </nav>
            
        </div>
    )
}

export default Navbar