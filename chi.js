// <!--Name: Chi Ming Lai
//     Student id: 158400200
//     Email: cmlai@myseneca.ca
//     Date: 07-04-2022-->
function addTextArea(){
    var locate = document.getElementById("Action");
    locate.innerHTML = "";
    var lb = document.createElement("label");
    lb.for = "mes";
    lb.appendChild(document.createTextNode("Message:"));
    var e = document.createElement("textarea");
    e.name = "Message";
    e.id = "mes";
    e.cols = "40";
    e.rows = "6";
    e.required = true;
    locate.appendChild(lb);
    locate.appendChild(e);
}

function addNumberTag(){
    var locate = document.getElementById("Action");
    locate.innerHTML = "";
    var lb = document.createElement("label");
    lb.for = "salary";
    lb.appendChild(document.createTextNode("Hourly rate:"));
    var e = document.createElement("input");
    e.type = "number";
    e.id = "salary";
    e.name = "Hourly-rate";
    e.min = "15";
    e.required = true;
    locate.appendChild(lb);
    locate.appendChild(e);
}



function validateText(frm){
  
    if (frm.Name.value.trim().length == 0) {
        alert("No input! Do not Enter space only.\n");
        frm.Name.value = "";
        frm.Name.focus();
        return false;
    }
    if (frm.address1.value.trim().length == 0) {
        alert("No input! Do not Enter space only.\n");
        frm.address1.value = "";
        frm.address1.focus();
        return false;
    }
    if (frm.city.value.trim().length == 0) {
        alert("No input! Do not Enter space only.\n");
        frm.city.value = "";
        frm.city.focus();
        return false;
    }
       
    return true;
}


window.onload = function(){
    document.getElementById("question").onclick = function(){
        addTextArea();   // Create text area for questions
    }
    document.getElementById("comment").onclick = function(){
        addTextArea();  // Create text area for comment
    }
    document.getElementById("hiring").onclick = function(){
        addNumberTag()  // Create number input for hourly-rate
    } 
   
    

}