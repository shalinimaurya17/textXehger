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
        document.getSelection().removeAllRanges();
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
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>Convert to uppercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLOClick}>Convert to lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
         <button disabled={text.length===0} onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
         <button disabled={text.length===0} onClick={copyText} className="btn btn-primary mx-2 my-2">Copy</button>
         </div>
         <div className='container my-4'style={{color:props.mode==='dark'?'white':'#042743' }}>
            <h2>Your text Summery</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
             <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
             <h3>Preview</h3>
             <p>{text.length>0?text:'Enter text to analyze'}</p>
         </div>
        
    </>
  )
}  
