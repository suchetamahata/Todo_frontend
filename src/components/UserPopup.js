import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from './UserPopup.module.css';


const UserPopup = () => {
    

const checkUname=(e)=>{

}

return(
  <Popup trigger={<button>Set Username</button>} className={styles.divstyle} >
    <div className={styles.divstyle}>
        <form>
            <input placeholder='enter username' className={styles.inputs} onChange={checkUname}></input>
            <button type='submit' className={styles.submitBtn}>Save</button>
        </form>
    </div>
  </Popup>)
}

export default UserPopup