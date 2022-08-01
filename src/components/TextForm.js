import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleTextChange= (event) => { //updates text entered in textbox to useState variable "text".
        // console.log("The text's state has changed!");
        setText(event.target.value);
    }

    const handleUpBtnClick= () => {
        let textUpperCase=text.toUpperCase();
        setText(textUpperCase);
        props.showAlert("Converted to UPPERCASE!", "success")
    }

    const handleLowBtnClick = () => {
        let textLowerCase=text.toLowerCase();
        setText(textLowerCase);
        props.showAlert("Converted to lowercase!", "success")
    }

    //function to change given text to sentence case by changing first letter of first word of every sentence to uppercase and adding space before first word of every sentence.
    const handleSentenceBtnClick = () => {
        let arraySentence=text.split(/[.]+/); //creates an array of sentences
        console.log(arraySentence)
        if(arraySentence[arraySentence.length-1] === "") arraySentence.pop();
        for(let chartrIndex in arraySentence) {
            let charValue=arraySentence[chartrIndex].split("");
            let beginningSpaceCount=0;
            for(let element of charValue) {
                if(element !== " " && element !== '\n') break;
                beginningSpaceCount++;
            }
            if(beginningSpaceCount < charValue.length){ 
                if(beginningSpaceCount === 0 && chartrIndex.toString() !== "0") {
                    charValue.unshift(" ");
                    beginningSpaceCount++;
                }
                charValue[beginningSpaceCount]=charValue[beginningSpaceCount].toUpperCase();
            }
            // let sentenceCase=charValue.slice(beginningSpaceCount+1,charValue.length)
            // for(let elemIndex in sentenceCase) {
            //     sentenceCase[elemIndex]=sentenceCase[elemIndex].toLowerCase();
            // }
            // sentenceCase=charValue.slice(0,beginningSpaceCount+1).join("")+sentenceCase.join("");
            // arraySentence[chartrIndex]=sentenceCase;
            arraySentence[chartrIndex]=charValue.join("");
        }
        arraySentence=arraySentence.join(".");
        if(text.split("")[text.length-1] === ".") arraySentence+=".";
        setText(arraySentence);
        props.showAlert("Converted to Sentence case!", "success")
    }

    const handleRemoveExtraSpaces= () => {
        const textNew=text.split(/[ ]+/).join(" ");
        setText(textNew)
        props.showAlert("Extra spaces have been removed!", "success")
    }

    const handleCopy= () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to Clipboard!", "success")
    }

    const handleClearBtnClick = () => {
        let textCleared="";
        setText(textCleared);
        props.showAlert("Text Cleared!", "success")
    }

    // this function returns text length as 0 if textarea is empty. This also emits the error of extra space or full stops being counted as words.
    const handleWordLength = () => {
        let textToAnalyze = text;
        let wordsArray=textToAnalyze.split(/[\s.,]+/);
        let wordCount=wordsArray.length;   
        if(wordsArray[0] === "") {
            if(wordCount ===1 || wordsArray[1] === "") {
                wordCount=0;
                return wordCount;
            } else wordCount--;
        }
        if (wordsArray[wordsArray.length-1] === "") {
            wordCount--
        }
        return wordCount;
    }
    
  return (
    <>
    <div className='container' style={{color:(props.mode==="dark")?"white":"black"}}>
        <h1 className='my-3'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:(props.mode==="dark")?"rgb(60 93 146)":"white", color:(props.mode==="dark")?"white":"black"}} onChange={handleTextChange} rows="8"></textarea>
      </div>
      <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpBtnClick}>Convert to UPPERCASE</button>
      <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLowBtnClick}>Convert to lowercase</button>
      <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleSentenceBtnClick}>Convert to Sentence case</button>
      <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleRemoveExtraSpaces}>Remove Extra spaces</button>
      <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy text</button>
      <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleClearBtnClick}>Clear text</button>
    </div>
    <div className="container" style={{color:(props.mode==="dark")?"white":"black"}}>
        <h2 className='my-3'>Text Summary</h2>
        <p><b>{handleWordLength()} words</b> and <b>{text.length} characters</b></p>
        <p><b>{(0.008 * (handleWordLength())).toFixed(3)} minutes</b> to read</p>
        <h2>Preview Text</h2>
        <p>{(text.length !==0)?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
