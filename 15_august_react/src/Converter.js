import { useState } from 'react'
function Converter({ rus_eng }) {



    // return (

    // )
    const [russian, setRussian] = useState('')
    // const [englsih, setEnglish] = useState('')
    const [english, setEnglish] = useState('')
    const [result, setResult] = useState('')

    const translate_rus = () => {
        // switch (russian) {
        //     case 'привет':
        //         setResult('hello')
        //         break;
        //     case 'пока':
        //         setResult('bye')
        //         break;
        //     default:
        //         alert('нет такого слова')
        //         setResult('')
        // }
        for (let i = 0; i < rus_eng.length; i++) {
            if (rus_eng[i].rus == russian.toLowerCase()) {
                setResult(rus_eng[i].eng)
                break;

            } else if (russian == '') {
                console.log('введите значение')
            } else {
                console.log('нету такого слова')
                break;

            }
        }

    }
    const translate_eng = () => {
        for (let i = 0; i < rus_eng.length; i++) {
            if (rus_eng[i].eng == english.toLowerCase()) {
                setResult(rus_eng[i].rus)
                break;


            } else if (english == '') {
                console.log('введите значение')
            } else {
                console.log('нету такого слова')
                break;
            }
        }
    }
    const [amount, setAmount] = useState('')
    const [res, setRes] = useState(0)
    const [chet, setChet] = useState('')
    const [nechet, setNechet] = useState('')
    let sum2 = 0
    const [sum1, setSum1] = useState('')
    let sum234 = 0
    let sum345 = 0
    const [total1, setTotal1] = useState()
    const [total2, setTotal2] = useState()

    const [chetArray, setChetArray] = useState([])
    const [nechetArray, setNechetArray] = useState([])

    const handleCheck = () => {
        for (let i = 0; i < amount.length; i++) {
            if (amount[i] % 2 === 0) {
                chetArray.push(amount[i])
                sum234 += Number(amount[i])
                setTotal1(sum234)
                console.log(total1)
            }else if(amount[i] % 2 === 1){
                nechetArray.push(amount[i])
                sum345 += Number(amount[i])
                setTotal2(sum345)
            }
        }
    }
    return (
        <div>
            <div className='container'>
                <h1>Вычеслить сумму чисел</h1>
                <input type="number" value={amount} onChange={event => setAmount(event.target.value)}></input>
                <div>


                    <ul>
                        {chetArray.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    total  {total1}
                    <div>
                        <ul>
                            {nechetArray.map(item => <li key={item}>{item}</li>)}
                        </ul>
                        total  {total2}
                    </div>
                </div>
                <button onClick={handleCheck}>click</button>
            </div>
        </div>
    )
}
export default Converter
