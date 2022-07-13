import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class App extends React.Component {
	render() {
		return (
			<div>
				<h3>Hello World</h3>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
