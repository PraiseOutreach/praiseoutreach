import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import '../csscomponents/Navbar.css';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  // return (
  //   <>
  //     <nav className='navbar'>
  //       <div className='navbar-container'>
  //         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
  //         OccupaTracker
  //         </Link>
  //
  //         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  //         <li className='nav-item'>
  //           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
  //             Home
  //           </Link>
  //         </li>
  //
  //         // <LoginButton />
  //         // <LogoutButton />
  //         <li className='nav-item'>
  //           <Link
  //             to='/admin'
  //             className='nav-links'
  //             onClick={closeMobileMenu}
  //           >
  //            Admin
  //           </Link>
  //         </li>
  //
  //         </ul>
  //         </div>
  //       </nav>
  //     </>
  //   );
}

export default Navbar;
