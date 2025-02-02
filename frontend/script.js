async function addTask() {
    const task = document.getElementById("task").value;
    await fetch('http://localhost:5000/task', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({task})
    });
    loadTasks();
}

async function loadTasks() {
    const response = await fetch('http://localhost:5000/tasks');
    const tasks = await response.json();
    document.getElementById("tasks").innerHTML = tasks.map(t => `<p>${t.task}</p>`).join("");
}

document.addEventListener("DOMContentLoaded", loadTasks);
