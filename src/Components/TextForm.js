import React, {useState} from 'react';

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    setText(event.target.value);
}
  const handleUpClick=()=>{
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase','success');
  }

  function handleLowClick(){
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase','success');
  }

  const handleRemoveSpaces=()=>{
    // setText(text.replace(/\s+/g,' '));
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed','success');
  }
  
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to clipboard','success');
  }

  const handleClearText=()=>{
    setText("");
    props.showAlert('Text is cleared','success');
  }
  
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'darkblue':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-4">                    
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'#ebebe0':'#ccccb3', color:props.mode==='light'?'darkblue':'black'}} value={text} rows="8" id="myBox" placeholder='Enter text here'></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>Change to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length===0}>Change to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces} disabled={text.length===0}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearText} disabled={text.length===0}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'light'?'darkblue':'white'}}>
      <h1>Your text summary</h1>
      
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      {/* <p>{text.length === 0?'0':text.split(/[ ]\b/).length} words and {text.length} characters</p> */}
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
      <div className='my-4'><h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p></div>
    </div>
    </>
  );
}
             