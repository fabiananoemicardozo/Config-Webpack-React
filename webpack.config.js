const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
//importamos el modulo path


/**@type {import('webpack').Configuration} */

//el fragmento de codigo de arriba sirve para el snippet
module.exports = {
	entry: "./src/index.js", //este es el punto de entrada
	
	output: { //este es el punto de salida
		path:	path.resolve(__dirname, "../dist"),
		//Path es un módulo de node.js (se encuentra en node_modules) y contiene utilidades para trabajar con rutas de fichero.
		//Path: Utilice require('path') para utilizarlo (lo hemos hecho arriba)
		//con __dirname pasamos la dirección absoluta donde se encuentra el archivo que queremos de salida
		//con dist especificamos cual es la carpeta donde queremos que se meta el empaquetado que yo genere
		//resolve tambien es un modulo de node
		filename:"[name].[contenthash].js",
		//creamos un nombre para el empaquetado que generemos
		//al ponerlo entre corchetes le decimos que tome el nombre de entry (por defecto main)
		//con contenthash cada vez que realizamos cambio en nuestro contenido, nos genera un numero aleatorio diferente
		//esto es util para que quede archivada la información en los cache de los navegadores, es util para los usuarios
		publicPath:"",
		//publicPath permite especificar la ruta base para todos los activos dentro de la aplicación.
		//si lo dejamos vacio " " estamos especificando que es por ejemplo tutorialR (el nombre del proyecto)
	},

	module:{ //configuramos los loaders
		rules: [ //creamos un array para todos los loades que queremos pasar
			{
				use: "babel-loader", //nombre del loader que vamos a usar (se encuentra en Json)
				test: /.(js|jsx)$/, //quiero que todos los archivos que tengan extencion js o jsx utilicen este loader
				exclude: /node_modules/, //ademas quiero excluir lo que se encuentre en node_modules
			},
			{
			use: ["style-loader", "css-loader", "sass-loader"], //implementamos los loader para que webpack comprenda los archivos css, sass, scss
			test: /.(css|sass|scss)$/,
			},
			{
				type: "asset", //implementa todos los archivos de imagenes (asset tambien se puede usar para otro tipo de archivos, por ejemplo archivos de texto, fuentes, etc)
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			}
		],
	},

	resolve: {
		extensions: [".js", ".jsx", ".json"], //para que webpack comprenda todas estas extensiones
	},

	plugins:[
		new CleanWebpackPlugin(),//al escribir esto, automaticamente me llama arriba al plugin para que pueda ser implementado en este archivo
		new HtmlWebpackPlugin({ //lo mismo aqui, al escribir este codigo, es llamado automaticamente arriba para que pueda ser implementado en este archivo
			template: "./public/index.html",
		}),
		new ReactRefreshWebpackPlugin()
	].filter(Boolean),

	devtool: "eval-source-map",

	devServer: {
		static:{
			directory: path.join(__dirname, "dist"),
		},
		hot: true,
	},
};
