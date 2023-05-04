import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Coverted To UpperCase!","success");
    }
    const handleLoClick = () =>{
      // console.log("LowerCase Was Clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert(" Coverted To LowerCarse!","success");
  }
  const handleClearClick = () =>{
    // console.log("LowerCase Was Clicked");
    let newText = '';
    setText(newText);
    props.showAlert(" Text Cleared!","success")
}
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);

    }
    const hndlecopy = () =>{
      console.log(" I am a copy");
      var text = document.getElementById("myBox");
      text.select()
      navigator.clipboard.writeText(text.value);
      props.showAlert(" Text Copyed!","success");
    }
    const handleExtarctSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" Extra Spaces Removed!","success");
    }


    const [text, setText] = useState("");
    // text = "Swasthik" //Wrong Way to change the text state
    // setText("New Text "); //correct Way to Change the Text 
  return (
    <>
    <div className='container' style={{color:props.Mode === 'dark'? 'white':'#042743'}}>
        <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode === 'light'? 'white':'gray',color:props.Mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={hndlecopy}>copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtarctSpaces}>Remove Extra Space</button>




    </div>
    <div className="container my-4" style={{color:props.Mode === 'dark'? 'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008*text.split(' ').length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Enetr Something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
