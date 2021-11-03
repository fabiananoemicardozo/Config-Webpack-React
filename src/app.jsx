import {useState} from "react";
import "./app.css";
import "./app.scss";
import logo from "./Planet.svg";

function App(){
	const [name, setName] = useState ("");
	return(
		<div className="app">
			<h1>
				Ciao React!! <img src={logo} width="25" alt="Planet logo" />
			</h1>
			<div>
				<label htmlFor="name">Nome:</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default App;

//aqui solo hay un texto y un input para poder ensayar con las modificaciones de react
