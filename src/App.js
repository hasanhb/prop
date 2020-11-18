import React from "react"
import Profilcomponent from "./Profile/Profil component/Profilcomponent";
import Navbarcomponent from "./Profile/Profil component/Navbar";
import Bio from "./Profile/Profil component/bio"

import myImg from "./Profile/image.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
            <Navbarcomponent />
<br/>
<Bio/>
      <Profilcomponent name="hbh" myimg={myImg}/>
      

    </div>
  );
}

export default App;
