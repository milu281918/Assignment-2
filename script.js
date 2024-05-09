const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href="index.html";
}
function sortList(){
    let list, i , switching, listitems, shouldSwitch;
    list = document.getElementById("list-container");
    switching = true;

    while(switching){
        switching = false;
        listitems = list.getElementsByTagName("li");
        for(i=0; i< (listitems.length-1); i++){
            shouldSwitch = false;
            if(listitems[i].innerHTML.toLowerCase() > listitems[i+1].innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if(shouldSwitch){
            listitems[i].parentNode.insertBefore(listitems[i+1], listitems[i]);
            switching = true;
        }
    }
}