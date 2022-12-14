import Navbar from "./components/Navbar";
import Contact from "./components/Contactform";
import icon from './images/icon.png'

import { initializeApp } from 'firebase/app'
import { initializeAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCET,
  messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
  measurementId: process.env.REACT_APP_FIRE_BASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const analytics = initializeAnalytics(app)

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
