import { useState } from 'react';
import Popup from './components/Popup.js';
import style from './components/Popup.module.css';





function App() {
  const [openPopup, setPopup] = useState(false);
  return (

    <div className={style.app} >

      <div className={style.btnshow}>
        <button className={style.ppshow} onClick={() => { setPopup(true); }}>show popup</button>
      </div>

      {openPopup && <Popup trigger={openPopup} setTrigger={setPopup}></Popup>}
    </div >


  );
}

export default App;
