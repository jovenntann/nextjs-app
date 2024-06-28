import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Todo App</h1>
        <form className="mb-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-600 transition duration-300">
            Add
          </button>
        </form>
        <ul>
          <li className="flex items-center mb-4">
            <input type="checkbox" className="mr-3" />
            <span className="flex-1 text-gray-800">Sample Task 1</span>
            <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300">Delete</button>
          </li>
          <li className="flex items-center mb-4">
            <input type="checkbox" className="mr-3" />
            <span className="flex-1 text-gray-800">Sample Task 2</span>
            <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300">Delete</button>
          </li>
        </ul>
      </div>
    </main>
  );
}