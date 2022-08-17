
import "./styles.css";
import TemperatureDisplay from './TemperatureDisplay'
import PowerBtn from './PowerBtn'
import {useState} from 'react'


function AirCoinditioner(){


  

    const [powerStatus,setPowerStatus] = useState({
        status:false,
        statusName:'on',
        statusColor: 'power-btn-on'
      })

    return(

            <div className='container'>
              <h1>Air</h1>

                <TemperatureDisplay powerStatus={powerStatus}/>
                <PowerBtn powerStatus={powerStatus} setPowerStatus={setPowerStatus}/>
            </div>
          
    )
}

export default AirCoinditioner