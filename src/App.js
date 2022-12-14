import Navbar from "./components/Navbar";
import Contact from "./components/Contactform";
import icon from './images/icon.png'

function App() {
  return (
    <>
      <link rel="icon" href={icon} />
      <Navbar />
      <Contact />
    </>
  )
}


export default App;
