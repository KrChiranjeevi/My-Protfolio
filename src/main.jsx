console.log("TRACE: main.jsx start");
console.log("TRACE: root element:", document.getElementById("root"));
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ErrorBoundary from "./components/ErrorBoundary.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
console.log("TRACE: App Render called");
