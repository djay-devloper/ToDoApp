📝 To-Do List Web App

A simple and responsive To-Do List application built using HTML, CSS, and JavaScript.
It allows users to add, mark as completed, delete tasks, and saves data using Local Storage so tasks remain even after refreshing the page.

🚀 Features

➕ Add new tasks

✅ Mark tasks as completed (toggle checked state)

❌ Delete tasks

💾 Persistent storage using browser Local Storage

🎨 Clean and responsive UI with gradient background

🛠️ Tech Stack

HTML5 – Structure

CSS3 – Styling & Layout

Vanilla JavaScript – Functionality & DOM Manipulation

Local Storage API – Data persistence

⚙️ How It Works
1️⃣ Adding a Task

User enters text in the input box.

Clicking the Add button:

Creates a new <li> element.

Appends it to the task list.

Adds a delete (×) button.

Saves data to Local Storage.

2️⃣ Marking as Completed

Clicking on a task toggles the checked class.

Updates visual style (line-through + checkbox image).

Saves updated state.

3️⃣ Deleting a Task

Clicking the × icon removes the task.

Updates Local Storage.

4️⃣ Data Persistence

Tasks are saved using:

localStorage.setItem("data", listContainer.innerHTML);


On page reload:

listContainer.innerHTML = localStorage.getItem("data");
