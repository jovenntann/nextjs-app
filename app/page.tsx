'use client';

import { useState, useEffect } from "react";
import mermaid from "mermaid";

// Home component is the main component for the Mermaid Diagram Generator App
export default function Home() {
  // State to store the Mermaid diagram syntax
  const [diagramSyntax, setDiagramSyntax] = useState<string>("");
  // State to store the new diagram input value
  const [newDiagram, setNewDiagram] = useState<string>("");

  // Function to handle generating a new diagram
  const handleGenerateDiagram = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (newDiagram.trim() !== "") { // Check if the new diagram input is not empty
      // Placeholder mermaid syntax for rendering
      const placeholderDiagram = `
        sequenceDiagram
          participant User
          participant Cognito
          participant App
          User->>Cognito: Sign Up / Sign In
          Cognito-->>User: Authentication Token
          User->>App: Access with Token
          App->>Cognito: Validate Token
          Cognito-->>App: Token Valid
          App-->>User: Access Granted
      `;
      setDiagramSyntax(placeholderDiagram); // Set the placeholder diagram syntax
      setNewDiagram(""); // Clear the input field
    }
  };

  useEffect(() => {
    if (diagramSyntax) {
      mermaid.contentLoaded();
    }
  }, [diagramSyntax]);

  return (
  <main className="p-4 flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Mermaid Diagram Generator</h1>
      <p className="mb-4 text-sm text-gray-700">
        To use this app, simply enter a description of your desired Mermaid diagram in the input field below and click &quot;Generate&quot;. 
        The app will create a sequence diagram based on the provided description.
      </p>
      <form className="mb-6" onSubmit={handleGenerateDiagram}>
        <input
          type="text"
          value={newDiagram}
          onChange={(e) => setNewDiagram(e.target.value)}
          placeholder="Enter diagram description"
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-600 transition duration-300">
          Generate
        </button>
      </form>
      <div className="bg-gray-100 p-4 rounded-lg">
        {diagramSyntax ? (
          <div className="mermaid">{diagramSyntax}</div>
        ) : (
          <p className="text-gray-500 text-sm">Your generated diagram will appear here.</p>
        )}
      </div>
    </div>
    <p className="mt-2 text-gray-200 text-sm">App Version: 1.0.0</p>
  </main>
  );
}
