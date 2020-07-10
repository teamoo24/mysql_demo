import * as PIXI from 'pixi.js'
import * as MySQL from 'my'

window.onload = () => {
	const app = new PIXI.Application({width:480, height:800});
	document.body.append(app.view);

	const text = new PIXI.Text('Hello World!');
	text.style.fill = "#ffffff";
	app.stage.addChild(text)
}

