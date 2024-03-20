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
    function capitalizeFirstLetter(text) {
      return text.replace(/^./, text[0].toUpperCase());
  }
    






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
              backgroundColor: props.mode === "light" ? "white" : "#FBFADA",
              color: props.mode === "dark" ? "#436850" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-info mx-2"
          onClick={handleLowClick}
          style={{
            backgroundColor: props.mode === "light" ? "sky" : "#EBD9B4",
          }}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={handleUpClick}
          style={{
            backgroundColor: props.mode === "light" ? "sky" : "#EBD9B4",
          }}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={handleClearClick}
          style={{
            backgroundColor: props.mode === "light" ? "sky" : "#EBD9B4",
          }}
        >
          Clear Text
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={handleCopy}
          style={{
            backgroundColor: props.mode === "light" ? "sky" : "#EBD9B4",
          }}
        >
          Copy text
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={handleExtraSpace}
          style={{
            backgroundColor: props.mode === "light" ? "sky" : "#EBD9B4",
          }}
        >
          Remove Extra Space
        </button>
        <button
          className="btn btn-info mx-2"
          onClick={capitalizeFirstLetter}
          style={{
            backgroundColor: props.mode === "light" ? "sky" : "#EBD9B4",
          }}
        >
          Captalized Text
        </button>
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
            : "enter something int the textbox above to preview"}
        </p>
      </div>
    </>
  );
}
