function addTask() {
    var nameInput = document.getElementById("nameInput");
    var contentInput = document.getElementById("contentInput");
    var taskList = document.getElementById("taskList");

    if (nameInput.value.trim() !== "" && contentInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = "<strong>" + nameInput.value + ":</strong> " + contentInput.value;
        taskList.appendChild(li);
        nameInput.value = "";
        contentInput.value = "";
    } else {
        alert("Veuillez entrer un nom et un contenu valides pour la tâche !");
    }
}
