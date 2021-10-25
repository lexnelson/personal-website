import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <h1 style={{float: 'left', marginLeft: '3%', marginTop: '28px', color: 'pink', fontSize: '50px'}}>Lex Nelson</h1>
            <nav style={{float: 'right', marginRight: '3%', marginTop: '60px'}}>
                <NavLink style={{ textDecoration:'none', color: 'rgb(203, 253, 255)', fontWeight: 'bold', fontSize: '30px'}} activeStyle={{color: "pink"}} exact to='/'>Home</NavLink>
                <NavLink style={{ textDecoration:'none', color: 'rgb(203, 253, 255)', fontWeight: 'bold', fontSize: '30px', paddingLeft: '10px'}} activeStyle={{color: "pink"}} to='/about'>About</NavLink>
            </nav>
            
        </div>
    )
}

export default Navbar