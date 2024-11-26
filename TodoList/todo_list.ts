const taskInput = document.getElementById('taskInput') as HTMLInputElement;


const addTaskBtn = document.getElementById('addTaskbtn') as HTMLInputElement;


const taskList = document.getElementById("taskList") as HTMLInputElement;

const clearCompletedBtn = document.getElementById("clearCompletedBtn") as HTMLInputElement;

let tasks : any[] = [];



function addTask():void{
    const taskText : string = taskInput.value.trim();
    if (taskText != ""){
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}


function displayTasks():void{
    taskList.innerHTML = "";
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ?"checked":""}>
            <label for="task-${index}">${task.text}</label>`;
        (li.querySelector("input") as HTMLInputElement).addEventListener("change",()=> toggleTask(index));
        taskList.appendChild(li);
    })
}

function toggleTask(index: number): void{
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks(): void{
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}


addTaskBtn.addEventListener("click",addTask);
clearCompletedBtn.addEventListener("click",clearCompletedTasks);

displayTasks();