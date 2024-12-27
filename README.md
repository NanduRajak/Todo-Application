# Task Manager Application

This project is a simple **Task Manager** implemented using vanilla JavaScript, HTML, and CSS. It allows users to add, delete, and mark tasks as completed, with persistence using `localStorage`.

## Features
- **Add Tasks**: Users can type a task and add it to the task list.
- **Delete Tasks**: Tasks can be removed using a delete button.
- **Mark as Completed**: Clicking on a task toggles its completion status.
- **Persistent Storage**: Tasks are saved in the browser's `localStorage` to ensure they persist across page reloads.

## Usage
1. **Adding a Task**:
   - Type a task into the input field.
   - Click the "Add Task" button or press the Enter key.
   - The task will appear in the task list.

2. **Marking a Task as Completed**:
   - Click on a task in the list.
   - The task will toggle between completed and not completed, visually distinguished by a `completed` CSS class.

3. **Deleting a Task**:
   - Click the "delete" button next to a task.
   - The task will be removed from the list and `localStorage`.

## How It Works
### Core Functions
1. **`saveTasks()`**:
   - Collects all tasks from the DOM.
   - Saves them as an array of objects in `localStorage`.

2. **`loadTasks()`**:
   - Retrieves tasks from `localStorage`.
   - Renders them in the task list upon page load.

3. **`addTasks()`**:
   - Creates a new list item with the input task.
   - Appends a delete button and attaches event listeners.
   - Saves the updated task list to `localStorage`.

### Event Listeners
- **`DOMContentLoaded`**:
  - Calls `loadTasks()` to populate tasks from `localStorage` when the page loads.
- **Button Click (`add-task-btn`)**:
  - Triggers `addTasks()` to add a new task.
- **Keypress (Enter key)**:
  - Allows tasks to be added using the Enter key.
- **Task Click**:
  - Toggles the `completed` class for tasks.

## File Structure
```
.
├── index.html
├── style.css
└── script.js
```

### `index.html`
The HTML structure includes:
- An input field for tasks.
- A button to add tasks.
- An unordered list to display tasks.

### `style.css`
Defines styles for:
- Task items.
- Completed tasks (e.g., strikethrough).
- Buttons and overall layout.

### `script.js`
Contains all the JavaScript logic for the Task Manager.

## Example
### Adding a Task
1. Input: `Buy groceries`
2. Result:
   ```
   - Buy groceries [delete]
   ```

### Marking as Completed
1. Click on the task: `Buy groceries`
2. Result:
   ```
   - ~~Buy groceries~~ [delete]
   ```

### Deleting a Task
1. Click the delete button next to `Buy groceries`.
2. Result: The task is removed from the list and `localStorage`.

## Requirements
- A modern browser that supports `localStorage`.

## How to Run
1. Clone or download the repository.
2. Open the `index.html` file in a web browser.

## Notes
- Ensure `localStorage` is enabled in your browser for task persistence.
- The application does not support task editing yet.

## Future Improvements
- Add functionality to edit tasks.
- Implement drag-and-drop reordering of tasks.
- Improve UI/UX with additional animations and styles.

---
This Task Manager is a great starting point to explore JavaScript DOM manipulation and `localStorage`. Customize it to suit your needs and enhance your JavaScript skills!

