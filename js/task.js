import Elements from "./elements.js";
const element = Elements();

export default function Task() {

let TaskList = []


function Load(){
  TaskList = JSON.parse(localStorage.getItem("@TodoList:")) || [];
  ShowDiv();
}

function Save(){
 localStorage.setItem("@TodoList:", JSON.stringify(TaskList))
}

function DeleteTask(value){

  TaskList = TaskList.filter(x => x !== value);
  console.log(value,TaskList);
  Save();
  Load();
  ShowDiv();
}

function ShowDiv(){
  let NewDiv = UpdateDiv();
  element.taskArea.innerHTML = ''
for (let div of NewDiv) {
  element.taskArea.appendChild(div) 
};
Save();
}

function UpdateDiv(){
  let divList= [];
  for (let content of TaskList) {
    const div = document.createElement("div");

    div.classList.add("task");
    div.innerHTML = ` 
  <span>Conteudo da task</span>
  <button class="remove-item">x</button>
  `;
    div.querySelector("span").textContent = content;
    div.querySelector("button").addEventListener("click", () =>{
      DeleteTask(content)
    })
    divList.push(div);
  }
return divList;

}

  function AddNewTask(text) {
    Load();
    TaskList = [text, ...TaskList]
    ShowDiv();
  }



  return {
    AddNewTask,
    Load,
  };
}
