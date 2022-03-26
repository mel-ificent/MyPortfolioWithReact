import React, { useState } from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation.js';
import Project from './Project/Project.js';
import Footer from './Footer/Footer.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';

export default function ProfileContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return(
        <div>
        <Header />
        <Footer />
        </div>
      );
    }
    if (currentPage === 'About') {
        return(
            <div>
            <About />
            <Footer />
            </div>
          );
    }
    if (currentPage === 'Portfolio') {
        return(
            <div>
            <Project />
            <Footer />
            </div>
          );
    }
    return(
        <div>
        <Contact />
        <Footer />
        </div>
      );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
