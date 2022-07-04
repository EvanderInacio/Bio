import logo from './assets/perfil.jpg'
import { FiGithub, FiTwitter } from "react-icons/fi";
import { ImFacebook2, ImLinkedin2, ImWhatsapp } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import './App.css'

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <img src={logo} className="App-logo" alt="perfil do Github" />
        <h1>Evander Inácio</h1>
        <p className='description'>Front end Developer</p>
        <div className='Container'>
          <a
            className="App-link Portfolio"
            href="https://www.evanderinacio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgProfile size={32}/> Portfolio 
          </a>
          <a
            className="App-link Github"
            href="https://github.com/EvanderInacio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={32}/> Github
          </a>
          <a
            className="App-link Linkedin"
            href="https://www.linkedin.com/in/evander-inacio/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <ImLinkedin2 size={32}/> Linkedin
          </a>
          <a
            className="App-link WhatsApp"
            href="https://api.whatsapp.com/send?phone=+5511995085916&text=Olá Evander!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImWhatsapp size={32}/> WhatsApp
          </a>
          <a
            className="App-link Twitter"
            href="https://twitter.com/Evander_Inacio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter size={32}/> Twitter
          </a>
          <a
            className="App-link Facebook"
            href="https://www.facebook.com/evandder.lopes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook2 size={32}/> Facebook
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
