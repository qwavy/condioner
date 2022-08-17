import { useState } from 'react'
function ListMap() {
    // const cities = [{id:0,name:'Нью Йорк', city:53334},{id:1,name:'Киев' , city:8627},{id:2,name:'Пекин', city:23121},{id:3,name:'Москва', city:23499},{id:4,name:'Одесса', city:28483}]
    const [result, setResult] = useState('')
    const [chet, SetChet] = useState('')
    const [nechet, SetNechet] = useState('')
    const [val, setVal] = useState('')

    const calculate = () => {
        let sum = 0
        for (let i = 0; i < result.length; i++) {
            if (result[i] % 2 == 0) {
                SetChet(result[i])
            }else{
                SetNechet(result[i])
            }
        }
    }
    return (
        // <ul>{cities.map((city) => (
        //     <li key={city.id}>{city.name}</li>
        // ))}</ul>
        <div>
            <input value={result} onChange={event => setResult(event.target.value)}></input>
            <button onClick={calculate}>
                calculate
            </button>
            <div>
                <p>Четные {chet}</p>
                <p>Нечетные {nechet}</p>
            </div>
        </div>

    )
}
export default ListMap