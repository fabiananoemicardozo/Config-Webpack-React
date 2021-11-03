
import ReactDOM from "react-dom"; //importamos ReactDOM que es un paquete que proporciona metodos del DOM
import App from "./app"; //importamos el archivo app.jsx

ReactDOM.render(<App/>, document.getElementById("root"));
//ReactDOM.render toma dos argumentos, en este caso, 
//el primero renderizar app.jsx, el segundo ¿donde lo queremos renderizar?
//en el elemento "root" que se encuentra en el document(./public/index.html)
//entonces: app se renderiza y se inyecta en root