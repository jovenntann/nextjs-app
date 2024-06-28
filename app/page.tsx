'use client';

import { useState } from "react";

// Home component is the main component for the Todo App
export default function Home() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState<string[]>([]);
  // State to store the new task input value
  const [newTask, setNewTask] = useState<string>("");

  // Function to handle adding a new task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (newTask.trim() !== "") { // Check if the new task is not empty
      setTasks([...tasks, newTask]); // Add the new task to the tasks array
      setNewTask(""); // Clear the input field
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index: number) => {
    // Filter out the task that needs to be deleted based on its index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Update the tasks state with the filtered tasks
  };

  return (
    <main className="p-4 flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Todo App</h1>
        <form className="mb-6" onSubmit={handleAddTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-600 transition duration-300">
            Add
          </button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center mb-4">
              <input type="checkbox" className="mr-3" />
              <span className="flex-1 text-gray-800">{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-2 text-gray-200 text-sm">App Version: 1.0.0</p>
    </main>
  );
}