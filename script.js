const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

 function addTask() {
    const text = inputBox.value.trim();
    if (text === "") {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");

    let textDiv = document.createElement("div");
    textDiv.className = "task-text";
    textDiv.textContent = text;

    let btnBox = document.createElement("div");
    btnBox.className = "btn-box";

    let editBtn = document.createElement("span");
    editBtn.className = "edit";
    editBtn.textContent = "Edit";

    let delBtn = document.createElement("span");
    delBtn.className = "delete";
    delBtn.textContent = "Delete";

    btnBox.appendChild(editBtn);
    btnBox.appendChild(delBtn);

    li.appendChild(textDiv);
    li.appendChild(btnBox);

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;


    if (e.target.classList.contains("task-text")) {
        li.classList.toggle("checked");
        saveData();
        return;
    }

    if (e.target.classList.contains("delete")) {
        li.remove();
        saveData();
        return;
    }

    if (e.target.classList.contains("edit")) {
        const text = li.querySelector(".task-text").textContent;
        inputBox.value = text;
        li.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data") || "";
}
showTask();

