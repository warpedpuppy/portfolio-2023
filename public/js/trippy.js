(function(){
	const app = new PIXI.Application({ width: 600, height: 400 }), dotQ = 500, lineQ = 500;
	document.getElementById('object-pooling').appendChild(app.view);
	app.ticker.add(animate);
	const lineCont = new PIXI.Container(),  lines = [], dotCont = new PIXI.Container(), dots = [];
	app.stage.addChild(lineCont);
	app.stage.addChild(dotCont);
	createLines();
	createDots();

	function animate() {
		for (let i = 0; i < lineQ; i++) {
			let line = lines[i];
			line.scale.y = cosWave(line.scaleValue, line.scaleDiff, line.speed);
		}
		for (let i = 0; i < dotQ; i++) {
			let dot = dots[i];
			dot.x = cosWave(dot.startX, dot.xDiff, dot.speed);
			dot.y = cosWave(dot.startY, dot.yDiff, dot.speed);
		}
		lineCont.rotation += 0.005;
	}

	function createLines() {
		lineCont.x = 300;
		lineCont.y = 200;
		for (let i = 0; i < lineQ; i++) {
			let line = new PIXI.Graphics();
			line.beginFill(0xFFA500);
			line.drawRect(0, 0, 1, 100);
			line.endFill();
			line.scale.y = line.scaleValue = randomNumberBetween(0.25, 1);
			line.scaleDiff = randomNumberBetween(0.5, 1);
			line.alpha = 0.5; 
			line.speed = randomNumberBetween(0.0005, 0.001);
			line.rotation = deg2rad(i * (360 / lineQ));
			line.x = 0; 
			line.y = 0; 
			lineCont.addChildAt(line, 0);
			lines.push(line);
		}
	}

	function deg2rad(degree) {
		return degree * (Math.PI / 180);
	}

	function cosWave(startPoint, differential, speed) {
			let currentDate = new Date();
			return startPoint + (Math.cos(currentDate.getTime() * speed) * differential);
		}

	function randomNumberBetween(min, max) {
			return Math.random() * (max - min) + min;
	}

	function createDots() {
		dotCont.x = 300;
		dotCont.y = 200;
		for (let i = 0; i < dotQ; i++) {
			let dot = new PIXI.Graphics();
			dot.beginFill(0xFFA500);
			dot.drawCircle(0, 0, 2);
			dot.endFill();
			dot.radius = 100;
			dot.x = dot.startX = 100 * Math.cos((2 * Math.PI) * i / dotQ)
			dot.y = dot.startY = 100 * Math.sin((2 * Math.PI) * i / dotQ)
			dot.xDiff = dot.startX;
			dot.yDiff = dot.startY;
			dot.alpha = 0.5;
			dot.speed = randomNumberBetween(0.0005, 0.001);
			dotCont.addChildAt(dot, 0);
			dots.push(dot);
		}
	}
})()