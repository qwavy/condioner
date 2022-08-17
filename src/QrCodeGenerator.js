import {useState} from 'react'
import QRCode from 'qrcode'
import './qrCode.css'

const QrCodeGenerator = () => {
    const [url,setUrl] = useState('');
    const [ qrCode,setQrCode] = useState('')

    const generateQr = () =>{
        QRCode.toDataURL(url,(err,url) => {
            if(err) return console.log(err)
            setQrCode(url)
        })
    }
    return(
        <div>
            <h1 className='h'>QR code generator</h1>
            <div>
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder='URL'/>
                <button onClick={generateQr}>Generate</button>
            </div>
            <img src={qrCode} className='img'/>
        </div>
    )
}
export default QrCodeGenerator