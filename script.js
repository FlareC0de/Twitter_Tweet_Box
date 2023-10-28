const wrapper = document.querySelector(".wrapper"),
 editableInput = wrapper.querySelector(".editable"),
 readonlyInput = wrapper.querySelector(".readonly"),
 placeholder = wrapper.querySelector(".placeholder"),
 counter = wrapper.querySelector(".counter"),
 button = wrapper.querySelector("button");

 editableInput.onkeyup = (e) => {
     let element = e.target; //getting keyup element
     checkInput(element); //calling function
 }


 editableInput.onkeypress = (e) => {
     let element = e.target; //getting keyup element
     checkInput(element); //calling function
     placeholder.style.display = "none";
 }
 function checkInput(element){
    let maxLength = 400;
    let currentlength = element.innerText.length; //getting text length of keypressed element
    let textTag;

    if(currentlength <= 0){ //if currentLength is less than or equal to 0
        placeholder.style.display = "block";
        counter.style.display = "none";
        button.classList.remove("active");
    }else{
        counter.style.display = "block";
        placeholder.style.display = "none";
        button.classList.add("active");
    }
    counter.innerText = maxLength - currentlength;

    if(currentlength > maxLength){
       let overText = element.innerText.substr(maxLength); //extracting over texts
       overText = `<span class="highlight">${overText}</span>`; // creating new span and passing over texts
       textTag = element.innerText.substr(0, maxLength) + overText; //replacing innerHtml of editable div with new span with overText
       readonlyInput.style.zIndex = "1";
       counter.style.color = "#e0245e";
       button.classList.remove("active");
    }else{
        readonlyInput.style.zIndex = "-1";
        counter.style.color = "#333";
    }

    readonlyInput.innerHTML = textTag; //replacing
 }
 
 
 