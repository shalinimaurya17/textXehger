import React , {useState} from 'react'

export default function Textform(props) {
    const handleUPClick =() =>{
        //console.log("Upper Case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("Converted to UpperCase","success");
    }
    const handleLOClick =() =>{
        //console.log("Upper Case was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert("Converted to LowerCase","success");
    }
    const handleclearClick =() =>{
        //console.log("Upper Case was clicked" + text);
        let newText='';
        setText(newText)
        props.showalert("Text Cleared","success");
    }
    const handleOnChange =(event) =>{
        console.log("OnChange");
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Text Copied","success");
 }
    

    const [text,setText]= useState('');
  
    return (

    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743' }}>
          <h1 className='my-3' >{props.heading}</h1>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white' ,color:props.mode==='dark'?'white':'black'}} id='myBox' rows='8'></textarea>
        </div>
         <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to uppercase</button>
         <button className="btn btn-primary mx-2" onClick={handleLOClick}>Convert to lowercase</button>
         <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
         <button onClick={speak} className="btn btn-primary mx-2">Speak</button>
         <button onClick={copyText} className="btn btn-primary mx-2">Copy</button>
         </div>
         <div className='container my-4'style={{color:props.mode==='dark'?'white':'#042743' }}>
            <h2>Your text Summery</h2>
            <p>{text.split(" ").length} and {text.length}</p>
             <p>{0.008* text.split(" ").length} minutes to read</p>
             <h3>Preview</h3>
             <p>{text.length>0?text:'Enter text to analyze'}</p>
         </div>
        
    </>
  )
}  
