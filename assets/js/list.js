function insertTask() {
  let lista = document.getElementById("taskLista");
  let testoInput = document.getElementById("taskInput").value;
  let contenitoreTask = document.createElement("div");
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML="Elimina";
  contenitoreTask.className = "task";
  contenitoreTask.appendChild(deleteButton);
  contenitoreTask.innerHTML = testoInput;
  lista.appendChild(contenitoreTask);
}

document.addEventListener("click", function (e) {
  let contenitoreCliccato = e.target;
  if (contenitoreCliccato.className == "task") {
    contenitoreCliccato.className = "task taskCancellato";
  }
});

function deleteElement(elemento){
    elemento.remove();
}
