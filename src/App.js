import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="profile-app">
        <Navigation />
        <Header />
        <Project />
        <Footer />

    </div>

  );
}

export default App;
