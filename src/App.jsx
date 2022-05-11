import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Profile />
            <Skills />
            <Education />
            <Contact />
        </div>
    );
}

export default App;
