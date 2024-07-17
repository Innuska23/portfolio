import './App.css';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main';
import { Project } from './layout/sections/project/Project';
import { Skills } from './layout/sections/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Skills />
            <Project />
        </div>
    );
}

export default App;
