import './App.css';
import { GoToTop } from './components/goTopBtn/GoTopBtn';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Contact } from './layout/sections/contacts/Contacts';
import { Home } from './layout/sections/home/Home';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';



function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <GoToTop />
        </div>
    );
}

export default App;