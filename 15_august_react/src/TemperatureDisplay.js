import PowerBtn from './PowerBtn'
import {useState} from 'react'
import "./styles.css";



function TemperatureDisplay(props){
    const [count,setCount] = useState(25)
    const [tempColor,setTempColor] = useState('normal')
    const plus = () => {
        if(props.powerStatus.status){
          if(count >= 30){
            setTempColor('hot')
          }
          if(count === 35) return;
          setCount(count => count + 1);
        }else{
          console.log('disable')
        }
    
      }
      const minus = () => {
        if(props.powerStatus.status){
          if(count < 30){
            setTempColor('normal')
          }
          if(count === 20) return;
      
          setCount(count => count - 1);
        }else{
          console.log('disable')
        }
    
      }
      
    return(
        <div className='display-temperature-container'>
        <div className={ props.powerStatus.status ? `temprature  ${tempColor}` : `temprature`}>{props.powerStatus.status ? `${count}` : null}
          <div className='buttons-container'>
            <button className='button' onClick={plus}>+</button>
            <button className='button' onClick={minus}>-</button>
          </div>
        </div>
    </div>
    )
}
export default TemperatureDisplay