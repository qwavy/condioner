import {useState} from 'react'
import "./styles.css";


function PowerBtn(props){

    const handleStatus = () =>{
        if(props.powerStatus.status){
          console.log('on')
          props.setTempColor(null)
    
          props.setPowerStatus({
            status:false,
            statusName:'on',
            statusColor: 'power-btn-on'
            
          })
        }else{
        //   props.setTempColor('normal')
    
          props.setPowerStatus({
            status:true,
            statusName:'off',
            statusColor: 'power-btn-off'
    
          })
        }
        // setPowerStatus({
        //   status:!powerStatus
        //   // status:true
        // })
      }
    return(
        <button className={` ${props.powerStatus.statusColor}`} onClick={handleStatus}>{props.powerStatus.statusName}</button>
    )
}
export default PowerBtn