const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(inputBox.value== ''){
        alert("You must write something");
    }else{
        //List item created and appended to the list.
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);

        // Cross icon just after list item.
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    // After hitting add button the input box text is cleared.
    inputBox.value= "";
    saveData();
}

listContainer.addEventListener("click", function(e){  //e is the event object automatically passed by browser when a click occurs.
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName== "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);

// e.target - The actual element that was clicked (the LI or SPAN)
// e.tagName - The HTML tag name of the clicked element

// using local storage to save data to survive refreshing whole page.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// After closing and reopening browser the stored data is fetched.
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}

showTask();
