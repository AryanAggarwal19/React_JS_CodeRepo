import {Link} from 'react-router-dom'

function Header()
{
    return(
        <nav className='nav'>
      <ul>
         <li>
          <Link to="/about">About</Link>
         </li>
         <li>
          <Link to="/service">Service</Link>
         </li>
         <li>
          <Link to="/product">Product</Link>
         </li>
         <li>
          <Link to="/">Home</Link>
         </li>

         
      </ul>
    </nav>
    )
}

export default Header;