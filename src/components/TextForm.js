import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(prop) {
    const [text , setText]=useState("");
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        if(text===""){
            prop.showAlert("Empty Box!!Nothing To Convert","warning")
        }
        else{
            prop.showAlert("Converted To UPPERCASE","success");
        }
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        if(text===""){
            prop.showAlert("Empty Box!!Nothing To Convert","warning")
        }
        else{
            prop.showAlert("Converted To lowercase","success");
        }
    }
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        if(text===""){
            prop.showAlert("Empty Box!!Nothing To Convert","warning")
        }
        else{
            prop.showAlert("Converted To camelCase","success");
        }
   }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        msg.rate=0.9;
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
        if(text===""){
            prop.showAlert("Empty Box!!","warning")
        }
        else{
            prop.showAlert("Speaking","success")
        }
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
        if(text===""){
            prop.showAlert("Empty Box!!Nothing To Copy","warning")
        }
        else{
            prop.showAlert("File Downloading","success")
        }
}
const clearTextArea = () => {
    setText("")
    if(text===""){
        prop.showAlert("Empty Box!!Nothing To Clear","warning")
    }
    else{
        prop.showAlert("Cleared","success")
    }
};
const copyText=()=>{
    var text1=document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    if(text===""){
        prop.showAlert("Empty Box!!Nothing To Copy","warning")
    }
    else{
        prop.showAlert("Text Copied","success");
    }

}
  return (
    <>
    <div className='container' style={{color: prop.mode==='dark'?"white":"black"}}>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}  style={{backgroundColor: prop.mode==='dark'?'#648AB1':'white' , color: prop.mode==='dark'?"white":"black" }} placeholder="Enter your text"></textarea>
            <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleLoClick}>Convert to lowercase</button>
            <button className='btn btn-primary my-3 mx-1' onClick={handleCapitalize}>Convert to CamelCase</button>
            <button className='btn btn-primary my-3 mx-1' onClick={downloadTxtFile}>Download Text</button>
            <button className='btn btn-primary my-3 mx-1' onClick={copyText}>Copy Text</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-1 my-3" id="toggle">Speak</button>
            <button className='btn btn-danger my-3 mx-1' onClick={clearTextArea}>Clear Text</button>

        </div>
    </div>
    <div className='container' style={{color: prop.mode==='dark'?"white":"black"}}>
        <h2>Summary</h2>
        <b><u>{text.split(" ").length}</u> Words & <u>{text.length}</u> Characters</b>
        <p>{0.0008 * text.length} minutes read.</p>
    </div>
    </>
  )
}
TextForm.propTypes={
    heading: PropTypes.string
}
 