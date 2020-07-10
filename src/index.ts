import * as PIXI from 'pixi.js'
import * as mysql from 'promise-mysql'

let connection;

window.onload = () => {
	const app = new PIXI.Application({width:480, height:800});
	document.body.append(app.view);


	get_connection();


	app.stage.addChild(new PIXI.Text("asfasf", new PIXI.TextStyle({
		fontSize: 26,
		fill: 0xffffff,
		padding: 22
	})))
}

function get_connection():void {
	console.log("mysql : ",mysql)
	console.log("mysql.createConnection", mysql.createConnection)

	connection = mysql.createConnection({
		host: "host",
        user: "user",
        password: "password",
        database: "database"
	}).then(conn => {
		console.log('promise-mysql createConnection.');
	    connection = conn;
	    return conn;
	}).catch(err => {
		console.log("promise失敗:",err)
	})
}
