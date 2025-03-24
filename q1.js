function addTask() {
    let input = document.getElementById("task-input");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    let span = document.createElement("span"); 
    span.textContent = taskText;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        let newText = prompt("Edit task:", span.textContent);
        if (newText) span.textContent = newText;
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById("task-list").appendChild(li);

    input.value = "";
}