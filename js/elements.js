export default function elements(){
 const ButtonAddTask = document.querySelector('#add-task');
 const InputText = document.querySelector('#InputText');
 const taskArea = document.querySelector('.task-list')
const ButtonRemoveTask = document.querySelector('.remove-item')


  return{
    ButtonAddTask,
    InputText,
    taskArea,
    ButtonRemoveTask
  }
}