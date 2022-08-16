import { useState } from 'react'
function Converter() {
    // const [amount, setAmount] = useState('')
    // const [res, setRes] = useState(0)
    // const [chet,setChet] = useState('')
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
    // let sum = 0
    // const handleCheck = () => {
    //     if (amount % 2 === 0){
    //         setChet('нечетное')
    //     }else{
    //         setChet('четное')
    //     }

    //         for (let i = 0; i < amount.length; i++) {
    //             sum += +amount[i]
    //             setRes(sum)
    //             // console.log(sum)
    //         }
    //     console.log(res)
    //     // return (res)

    // }
    // return (
    //     <div className='container'>
    //         <h1>Вычеслить сумму чисел</h1>
    //         <input type="number" value={amount} onChange={event => setAmount(event.target.value)}></input>
    //         <p>{res}</p>
    //         <p>{chet}</p>

    //         <button onClick={handleCheck}>click</button>
    //     </div>
    // )
    const [russian, setRussian] = useState('')
    const [result, setResult] = useState('')

    const translate = () => {
        // if(russian == 'привет'){
        //     setResult('hello')
        // }else{
        //     alert('нет такого слова')
        //     setResult('')

        // }
        switch (russian) {
            case 'привет':
                setResult('hello')
                break;
            case 'пока':
                setResult('good bye')
                break;
            default:
                alert('нет такого слова')
                setResult('')
        }
    }
    // const [russian,setRussian] = useState('')
    return (
        <div>
            <div>
                <input type='text' value={russian} onChange={event => setRussian(event.target.value)} placeholder='русское'>

                </input>
                <button onClick={translate}>
                    перевести
            </button>
                <p>
                    {result}
                </p>
            </div>
        </div>
    )
}
export default Converter