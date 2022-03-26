import React from 'react';

function Navigation({ currentPage, handlePageChange }) {

  return (
    <header>
    <h1>Melissa Donato</h1>
          <nav>

            <ul>
                 <li>
                 <a href="#"           
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}
                     >Home</a>
                </li>
                <li>
                    <a href="#About"           
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                     >About Me</a>
                </li>
                <li>
                <a href="#Portfolio"           
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                     >Portfolio</a>
                </li>
                <li>
                <a href="#Contact"           
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                     >Connect</a>
                </li>
            </ul>

        </nav>
 

    </header>
  );
}

export default Navigation;