import { useState } from 'react'
function Converter({rus_eng}) {
    const [amount, setAmount] = useState('')
    const [res, setRes] = useState(0)
    const [chet,setChet] = useState('')
    // // // console.log(amount)
    // // return (
    // //     <div className='container'>
    // //         <h1>Converter</h1>
    // //         <div className='form1'>
    // //             <input type="text" placeholder="$" value={amount} onChange={event => setAmount(event.target.value)}></input>
    // //             {/* <button>check</button> */}
    // //         </div>
    // //         <div className='form2'>
    // //             <h3>Result {amount * 476}</h3>
    // //             {/* <input type="text" placeholder="₸"></input> */}
    // //         </div>
    // //     </div>
    // // )
    let sum = 0
    const handleCheck = () => {
        if (amount % 2 === 0){
            setChet('нечетное')
        }else{
            setChet('четное')
        }

            for (let i = 0; i < amount.length; i++) {
                sum += +amount[i]
                setRes(sum)
                // console.log(sum)
            }
        console.log(res)
        // return (res)

    }
    // return (

    // )
    const [russian, setRussian] = useState('')
    // const [englsih, setEnglish] = useState('')
    const [english,setEnglish] = useState('')
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
        for(let i = 0;i < rus_eng.length;i++){
            if(rus_eng[i].rus == russian.toLowerCase()){
                setResult(rus_eng[i].eng)
                break;
                
            }else if(russian == ''){
                console.log('введите значение')
            }else{
                console.log('нету такого слова')
                break;

            }
        }

    }
    const translate_eng = () => {
        for(let i = 0;i < rus_eng.length;i++){
            if(rus_eng[i].eng == english.toLowerCase()){
                setResult(rus_eng[i].rus)
                break;

                
            }else if(english == ''){
                console.log('введите значение')
            }else{
                console.log('нету такого слова')
                break;
            }
        }
    }
    return (
        <div>
            <div>
                <input type='text' value={russian} onChange={event => setRussian(event.target.value)} placeholder='русское'>

                </input>

                <button onClick={translate_rus}>
                    перевести на англиский
            </button>
            <input type='text' value={english} onChange={event => setEnglish(event.target.value)} placeholder='англиское'>
                </input>
            <button onClick={translate_eng}>
                    перевести на русский
            </button>
                <p>
                    {result}
                    {/* {rus_eng.map((rus) => <li>
                        {rus}
                    </li>)} */}
                </p>
            </div>
            <div className='container'>
            <h1>Вычеслить сумму чисел</h1>
            <input type="number" value={amount} onChange={event => setAmount(event.target.value)}></input>
            <p>{res}</p>
            <p>{chet}</p>

            <button onClick={handleCheck}>click</button>
        </div>
        </div>
    )
}
export default Converter
