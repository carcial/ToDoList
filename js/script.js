

let paraf = document.getElementById("show");
let inputElemt = document.getElementById("input-element");
let saveBtn = document.getElementById("btn-click");
let newList = document.getElementById("new-list");
let test = []
let allPlans = []


//this is use to display the localstorage 
//even if the window is refreshed
let st = JSON.parse(localStorage.getItem("allPlans"))

if(st){
    allPlans = st
    render()
}


// to save a task
saveBtn.addEventListener("click", () => {
    
    let todo = localStorage.getItem("todo")

    let elemList = {name : inputElemt.value}
    if (todo == null) {
        allPlans = []
    }
    else{
        allPlans = JSON.parse(todo)
    }
    
    if (inputElemt.value != "") {
        allPlans.push(inputElemt.value);
    inputElemt.value =""
    localStorage.setItem("todo",JSON.stringify(allPlans))
    render();
    }
})



function render(){
     let todo = localStorage.getItem("todo")

    if (todo == null) {
        allPlans = []
    }
    else{
        allPlans = JSON.parse(todo)
    }
    let listen = ""


    for(let i = 0; i < allPlans.length; i++){

        if(allPlans[i] != test[i]){
                    listen +=` <div id="list-btn">${allPlans[i]}
                                  <button id="deleteFunc" onclick = "remove(${i})">Delete</button>
                               </div> `;

                   test.push(inputElemt)            
                   inputElemt.value =""            
        }
    }
    console.log("hello")
    newList.innerHTML = listen

}



function remove(i){

    let todo = localStorage.getItem("todo")
    allPlans = JSON.parse(todo)
    allPlans.splice(i, 1)
    localStorage.setItem("todo",JSON.stringify(allPlans))
    render();
}
