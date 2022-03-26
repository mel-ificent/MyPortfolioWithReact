import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="profile-app">
        <Navigation />
        <Header />
        <About />
        <Project />
        <Footer />

    </div>

  );
}

export default App;
