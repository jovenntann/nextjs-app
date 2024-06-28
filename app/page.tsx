import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="border rounded p-2 mr-2 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full mt-2">
            Add
          </button>
        </form>
        <ul>
          <li className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="flex-1">Sample Task 1</span>
            <button className="bg-red-500 text-white p-1 rounded">Delete</button>
          </li>
          <li className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="flex-1">Sample Task 2</span>
            <button className="bg-red-500 text-white p-1 rounded">Delete</button>
          </li>
        </ul>
      </div>
    </main>
  );
}