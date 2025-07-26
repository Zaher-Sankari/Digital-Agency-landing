import About from "./About/About"
import Hero from "./Hero/Hero"
import Navbar from "./Navbar/Navbar"
import Trusted from "./Trusted/Trusted"

function App() {
  return (
    <> 
    <header>
      <Navbar/>
      <Hero />
    </header>
    <Trusted />
    <About 
        title="Branding & Design System"
        desc="Commonly used in the graphic, print & publishing industries for previewing visual layout and mockups"
        img="assets/img/pencil.png"
        aboutInfo="aboutInfo"
    />
    <About 
        title="Custome & Plugin Development"
        desc="Commonly used in the graphic, print & publishing industries for previewing visual layout and mockups"
        img="assets/img/analyze.png"
        reverse
        aboutInfo="aboutInfo"
    />
    </>
  )
}

export default App
