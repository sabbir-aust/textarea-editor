window.onload=function(){
var boldText = document.getElementById("textBold");

boldText.onclick = function(){
    var text = document.getElementById("editor1");
    if(text.style.fontWeight == "bolder"){
        text.style.fontWeight = "normal";
    }else{
        text.style.fontWeight = "bolder";
    }
}
}


function makeBold(){
    var text = document.getElementById("editor1");
    if(text.style.fontWeight == "bolder"){
        text.style.fontWeight = "normal";
    }else{
        text.style.fontWeight = "bolder";
    }
}

function makeItalic(){
    var text = document.getElementById("editor1");
    if(text.style.fontStyle == "italic"){
        text.style.fontStyle = "normal";
    }else{
        text.style.fontStyle = "italic";
    }
}

function makeUnderline(){
    var text = document.getElementById("editor1");
    if(text.style.textDecoration == "underline"){
        text.style.textDecoration = "none";
    }else{
        text.style.textDecoration = "underline";
    }
}

// document.querySelectorAll("[data-edit]").forEach(btn =>
//     btn.addEventListener("click", edit)
//   );
  
//   function edit(ev) {
//     //ev.preventDefault();
//     const cmd_val = this.getAttribute("data-edit").split(":");
//     document.execCommand(cmd_val[0], false, cmd_val[1]);
//   }
//   console.log(edit());

// window.addEventListener("load",function(){
//     var editor = editText.document;
//     editor.designMode = "on";

//     boldButton.addEventListener("click",function(){
//         editor.execCommand("Bold",false,"null");
//     },false);
// },false);

