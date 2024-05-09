function saveData(){
    let name,email,password;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    let user_records=new Array();
    user_records= JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    if(user_records.some((v)=>{
        return v.email==email
    })){
        alert("Duplicate");
    }
    else{
        user_records.push({
            "name":name,
            "email":email,
            "password":password,
        })
        localStorage.setItem("user",JSON.stringify(user_records));
    }
}
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
function submitAndRedirect() {
    saveData(); 
    window.location.href = "login.html"; 
}

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href="login.html";
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