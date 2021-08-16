
import styles from './viewUuid.module.css'
import React,{useState} from 'react'
import {Link} from 'react-router-dom';


function ViewUuid ({disabled}) {
   // const [uuid,setUuid] = useState("")
    const [uname,setUname] = useState("")

    return(
        <div className={styles.divstyle}>
            <input value={uname} onChange={(e)=>{setUname(e.target.value)}} type='text'
                   className={`${styles.inputs}`} placeholder='enter uname'>    
             </input>
            <Link to={`/view/${uname}`} className={styles.submitBtn}>ok</Link>
        </div>
    )
}
export default ViewUuid