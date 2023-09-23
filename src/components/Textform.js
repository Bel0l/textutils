import React, {useState} from 'react'



export default function Textform (props) {
    const handleUpClick =()=>{
       // console.log('upper case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        // console.log('upper case was clicked' + text);
         let newText = text.toLowerCase();
         setText(newText);
     }
    const handleClearClick =()=>{
         let newText = "";
         setText(newText);
     }
     const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const handleOnChange =(event)=>{
       // console.log('on Changed');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
    <div className='container' style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    </div>
    <div className='Container my-2' style={{color: props.mode=== 'dark'?'white':'black'}} >
        <h2>This is summary</h2>
        <p>{text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: 'Enter text to preview it here'}</p>
    </div>
    </>
  )
}
