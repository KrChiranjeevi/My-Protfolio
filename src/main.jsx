console.log("TRACE: main.jsx start");
console.log("TRACE: root element:", document.getElementById("root"));
import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
import "./index.css"
// import ErrorBoundary from "./components/ErrorBoundary.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
    <div style={{ background: 'white', color: 'black', padding: '50px', fontSize: '3rem' }}>
      HELLO WORLD - React is working!
    </div>
	</React.StrictMode>
);
console.log("TRACE: Minimal Render called");
锋
