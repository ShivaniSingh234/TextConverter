import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const [text, setText] = useState(""); //this will count space as a word but that can be removed using javascript logic
  const handleLowClick = () => {
    console.log("Lowercase was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("mybox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/); //regex logic
    setText(newText.join(" "));
  };

  // const CapitalizedText = function(){
  //   let str=text.split(" ");
  //   for(let i=0;i<str.length;i++)
  //   {
  //     str[i]=str[i][0].toUpperCase()+str[i].substring(1);
  //   }
  //   return str.join(" ");
  // }
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  // from chatgpt
//   function capitalizeFirstLetterOfSentence(text) {
//   var sentences = text.split(/[ ]+/);
//   // Iterate over each sentence
//   for (var i = 0; i < sentences.length; i++) {
//       // Trim the sentence and capitalize the first letter
//       sentences[i] = sentences[i].trim();
//       if (sentences[i].length > 0) {
//           sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
//       }
//   }
//   // Join the sentences back together with a period
//   return sentences.join(' ');
// }

// function capitalizeFirstLetterOfSentence() {
//   if (text.toString.length === 0) {
//     console.log("Input is not a non-empty string.");
//     // return text// Return text as is if it's not a string or empty
// }
// console.log(text, text.replace('h','y'));
    //  return text.replace(/(^|\.\s*)([a-z])/g, function(match) {
    //   console.log("Match found:", match);
    //     return match.toUpperCase();
    // }); 
    // var captializeString=(str)=> str[0].toUpperCase()+str.slice(1).toLowerCase;
    // var captializeWords=(str)=>str.match(/\s+/).map(captializeString).join(' ');
    // // return captializeWords();
    // console.log(captializeWords())
    
const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
}
    
  const handleinverseclick = () => {
    // console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  };


//   function textToSpeech(){
//     const Speech= new SpeechSynthesisUtterance(text);
//     const message= document.getElementById("myBox").value;
//     Speech.lang='eng';
//     Speech.text= message;
//     window.speechSynthesis.speak(Speech);
// }


// from chatgpt
const speak =()=> {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[4]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
};





  // text="hello";      wrong way to change the state
  //  setText("hello");  correct way

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 style={{ fontFamily: "serif" }}>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="theString"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#EEF0E5" : "white",
              color: props.mode === "dark" ? "black" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-success mx-2"
          onClick={handleLowClick}
          // style={{
          //   backgroundColor: props.mode === "light" ? "sky" : "#79AC78",
          // }}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={handleClearClick}
          
        >
          Clear Text
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={handleCopy}
          
        >
          Copy text
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={handleExtraSpace} 
        >
          Remove Extra Space
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={handleCapitalize}
        >
          Captalized Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleinverseclick}>Handle inverse</button>
        <button className="btn btn-success mx-2" onClick={speak}>Text to speech</button>
        
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 style={{ fontFamily: "serif" }}>Your text summary</h3>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.0008 * text.split(" ").length} Minutes read</p>
        <h3 style={{ fontFamily: "serif" }}>Preview Text</h3>
        <p>
          {text.length > 0
            ? text
            : "enter something in the textbox above to preview"}
        </p>
      </div>
    </>
  );
}
