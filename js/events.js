import Elements from "./elements.js";
import Task from "./task.js";

const task = Task();
const element = Elements();
export default function Events(){


  element.ButtonAddTask.addEventListener('click',() =>{
task.AddNewTask(element.InputText.value)


})
 



}

