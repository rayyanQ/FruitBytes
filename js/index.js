$(document).ready(function(){
	
	document.getElementById('body').setAttribute('width', screen.width);
	document.getElementById('body').setAttribute('height', screen.height);
	var width = screen.width;
	var height = screen.height;
	
	var d = new Date();
	var h = d.getHours();
	if(h > 7 && h < 16){
		$(".body").css({"background":"url('./img/bg1.jpg') no-repeat center fixed", "background-size":"100% 100%"});
	}
	else if(h > 15 && h < 19){
		$(".body").css({"background":"url('./img/bg2.jpg') no-repeat center fixed", "background-size":"100% 100%"});
	}
	else if(h > 18 && h < 24){
		$(".body").css({"background":"url('./img/bg3.jpg') no-repeat center fixed", "background-size":"100% 100%"});
	}
	else if(h > -1 && h < 4){
		$(".body").css({"background":"url('./img/bg3.jpg') no-repeat center fixed", "background-size":"100% 100%"});
	}
	else if(h > 3 && h < 8){
		$(".body").css({"background":"url('./img/bg2.jpg') no-repeat center fixed", "background-size":"100% 100%"});
	}
	
	var stage;
	var canvas;
	var queue;
	var apple;
	var apple_cut;
	var grapes;
	var grapes_cut1;
	var grapes_cut2;
	var grapes_cut3;
	var grapes_cut4;
	var mango;
	var mango_cut;
	var organge;
	var orange_cut;
	var pomegranate;
	var pomegranate_cut;
	var strawberry;
	var strawberry_cut;
	var scroll_dark;
	var scroll_light;
	var scroll_light2;
	var scroll_light3;
	var game;
	var s;
	var a;
	init();
	function init(){
		canvas = document.getElementById("body");
		stage = new createjs.Stage(canvas);
		queue = new createjs.LoadQueue(true);
		queue.addEventListener("complete", ready);
		queue.loadManifest([
			{id:"apple", src:"./img/apple.png"},
			{id:"apple_cut", src:"./img/apple_cut.png"},
			{id:"grapes", src:"./img/grapes.png"},
			{id:"grapes_cut1", src:"./img/grapes_cut_1.png"},
			{id:"grapes_cut2", src:"./img/grapes_cut_2.png"},
			{id:"grapes_cut3", src:"./img/grapes_cut_3.png"},
			{id:"grapes_cut4", src:"./img/grapes_cut_4.png"},
			{id:"mango", src:"./img/mango.png"},
			{id:"mango_cut", src:"./img/mango_cut.png"},
			{id:"orange", src:"./img/orange.png"},
			{id:"orange_cut", src:"./img/orange_cut.png"},
			{id:"pomegranate", src:"./img/pomegranate.png"},
			{id:"pomegranate_cut", src:"./img/pomegranate_cut.png"},
			{id:"strawberry", src:"./img/strawberry.png"},
			{id:"strawberry_cut", src:"./img/strawberry_cut.png"},
			{id:"scroll_dark", src:"./img/scroll_dark.png"},
			{id:"scroll_light", src:"./img/scroll_light.png"},
			{id:"game", src:"./img/game.png"}
		]);
	}
	function ready(event){
		apple = new createjs.Bitmap(queue.getResult("apple"));
		apple.regX = apple.image.width/2;
		apple.regY = 0;
		apple.x = width * 0.666;
		apple.y = height * 0.38;
		apple.scaleX = 0.05;
		apple.scaleY = 0.05;
		stage.addChild(apple);
		grapes = new createjs.Bitmap(queue.getResult("grapes"));
		grapes.regX = grapes.image.width/2;
		grapes.regY = 0;
		grapes.x = width * 0.196;
		grapes.y = height * 0.31;
		grapes.scaleX=0.05;
		grapes.scaleY=0.05;
		stage.addChild(grapes);
		mango = new createjs.Bitmap(queue.getResult("mango"));
		mango.regX = mango.image.width/2;
		mango.regY = 0;
		mango.x = width * 0.586;
		mango.y = height * 0.65;
		mango.scaleX=0.05;
		mango.scaleY=0.05;
		stage.addChild(mango);
		orange = new createjs.Bitmap(queue.getResult("orange"));
		orange.regX = orange.image.width/2;
		orange.regY = 0;
		orange.x = width * 0.356;
		orange.y = height * 0.31;
		orange.scaleX=0.05;
		orange.scaleY=0.05;
		stage.addChild(orange);
		pomegranate = new createjs.Bitmap(queue.getResult("pomegranate"));
		pomegranate.regX = pomegranate.image.width/2;
		pomegranate.regY = 0;
		pomegranate.x = width * 0.256;
		pomegranate.y = height * 0.62;
		pomegranate.scaleX=0.05;
		pomegranate.scaleY=0.05;
		stage.addChild(pomegranate);
		strawberry = new createjs.Bitmap(queue.getResult("strawberry"));
		strawberry.regX = strawberry.image.width/2;
		strawberry.regY = 0;
		strawberry.x = width * 0.506;
		strawberry.y = height *	0.21;
		strawberry.scaleX=0.05;
		strawberry.scaleY=0.05;
		stage.addChild(strawberry);
		stage.update();
		
		//cutfruits
		apple_cut = new createjs.Bitmap(queue.getResult("apple_cut"));
		apple_cut.x = width * 0.05;
		apple_cut.y = 0;
		apple_cut.scaleX = 0.6;
		apple_cut.scaleY = 0.6;
		grapes_cut1 = new createjs.Bitmap(queue.getResult("grapes_cut1"));
		grapes_cut1.x = width * 0.05;
		grapes_cut1.y = 0;
		grapes_cut1.scaleX = 0.6;
		grapes_cut1.scaleY = 0.6;
		grapes_cut2 = new createjs.Bitmap(queue.getResult("grapes_cut2"));
		grapes_cut2.x = width * 0.05;
		grapes_cut2.y = 0;
		grapes_cut2.scaleX = 0.6;
		grapes_cut2.scaleY = 0.6;
		grapes_cut3 = new createjs.Bitmap(queue.getResult("grapes_cut3"));
		grapes_cut3.x = width * 0.05;
		grapes_cut3.y = 0;
		grapes_cut3.scaleX = 0.6;
		grapes_cut3.scaleY = 0.6;
		grapes_cut4 = new createjs.Bitmap(queue.getResult("grapes_cut4"));
		grapes_cut4.x = width * 0.05;
		grapes_cut4.y = 0;
		grapes_cut4.scaleX = 0.6;
		grapes_cut4.scaleY = 0.6;
		mango_cut = new createjs.Bitmap(queue.getResult("mango_cut"));
		mango_cut.x = width * 0.05;
		mango_cut.y = 0;
		mango_cut.scaleX = 0.6;
		mango_cut.scaleY = 0.6;
		orange_cut = new createjs.Bitmap(queue.getResult("orange_cut"));
		orange_cut.x = width * 0.05;
		orange_cut.y = 0;
		orange_cut.scaleX = 0.6;
		orange_cut.scaleY = 0.6;
		pomegranate_cut = new createjs.Bitmap(queue.getResult("pomegranate_cut"));
		pomegranate_cut.x = width * 0.05;
		pomegranate_cut.y = 0;
		pomegranate_cut.scaleX = 0.6;
		pomegranate_cut.scaleY = 0.6;
		strawberry_cut = new createjs.Bitmap(queue.getResult("strawberry_cut"));
		strawberry_cut.x = width * 0.05;
		strawberry_cut.y = 0;
		strawberry_cut.scaleX = 0.6;
		strawberry_cut.scaleY = 0.6;
		scroll_dark = new createjs.Bitmap(queue.getResult("scroll_dark"));
		scroll_light = new createjs.Bitmap(queue.getResult("scroll_light"));
		scroll_light2 = new createjs.Bitmap(queue.getResult("scroll_light"));
		scroll_light3 = new createjs.Bitmap(queue.getResult("scroll_light"));
		game = new createjs.Bitmap(queue.getResult("game"));
		game.x = width * 0.3;
		game.y = height * 0.36;
		game.scaleX = 0.75;
		game.scaleY = 0.68;
		
		//hover
		stage.enableMouseOver();
		apple.addEventListener("mouseover", function(){
			a = "";
			createjs.Tween.get(apple).to({rotation:-10}, 125).to({rotation:10}, 250).to({rotation:-5}, 187.5).to({rotation:0}, 62.5);
			createjs.Ticker.addEventListener("tick", tick);
		});
		grapes.addEventListener("mouseover", function(){
			a = "";
			createjs.Tween.get(grapes).to({rotation:-10}, 125).to({rotation:10}, 250).to({rotation:-5}, 187.5).to({rotation:0}, 62.5);
			createjs.Ticker.addEventListener("tick", tick);
		});
		mango.addEventListener("mouseover", function(){
			a = "";
			createjs.Tween.get(mango).to({rotation:-10}, 125).to({rotation:10}, 250).to({rotation:-5}, 187.5).to({rotation:0}, 62.5);
			createjs.Ticker.addEventListener("tick", tick);
		});
		orange.addEventListener("mouseover", function(){
			a = "";
			createjs.Tween.get(orange).to({rotation:-10}, 125).to({rotation:10}, 250).to({rotation:-5}, 187.5).to({rotation:0}, 62.5);
			createjs.Ticker.addEventListener("tick", tick);
		});
		pomegranate.addEventListener("mouseover", function(){
			a = "";
			createjs.Tween.get(pomegranate).to({rotation:-10}, 125).to({rotation:10}, 250).to({rotation:-5}, 187.5).to({rotation:0}, 62.5);
			createjs.Ticker.addEventListener("tick", tick);
		});
		strawberry.addEventListener("mouseover", function(){
			a = "";
			createjs.Tween.get(strawberry).to({rotation:-10}, 125).to({rotation:10}, 250).to({rotation:-5}, 187.5).to({rotation:0}, 62.5);
			createjs.Ticker.addEventListener("tick", tick);
		});
		
		//clicks
		apple.on("click", function(){
			remove_cut();
			apple.regX = 0;
			apple.x = width * 0.05;
			apple.y = 0;
			apple.scaleX = 0.6;
			apple.scaleY = 0.6;
			stage.addChild(apple);
			stage.update();
			stage.removeChild(apple);
			setTimeout(function(){
				stage.update();
				stage.addChild(apple_cut);
				stage.update();
			},1000)
		});
		grapes.on("click", function(){
			remove_cut();
			grapes.regX = 0;
			grapes.x = width * 0.05;
			grapes.y = 0;
			grapes.scaleX = 0.6;
			grapes.scaleY = 0.6;
			stage.addChild(grapes);
			stage.update();
			stage.removeChild(grapes);
			setTimeout(function(){
				stage.update();
				stage.addChild(grapes_cut1);
				stage.update();
				setScroll();
			},1000)
		});
		mango.on("click", function(){
			remove_cut();
			mango.regX = 0;
			mango.x = width * 0.05;
			mango.y = 0;
			mango.scaleX = 0.6;
			mango.scaleY = 0.6;
			stage.addChild(mango);
			stage.update();
			stage.removeChild(mango);
			setTimeout(function(){
				stage.update();
				stage.addChild(mango_cut);
				stage.update();
			},1000)
		});
		orange.on("click", function(){
			remove_cut();
			orange.regX = 0;
			orange.x = width * 0.05;
			orange.y = 0;
			orange.scaleX = 0.6;
			orange.scaleY = 0.6;
			stage.addChild(orange);
			stage.update();
			stage.removeChild(orange);
			setTimeout(function(){
				stage.update();
				stage.addChild(orange_cut);
				stage.addChild(game);
				stage.update();
			},1000)
		});
		pomegranate.on("click", function(){
			remove_cut();
			pomegranate.regX = 0;
			pomegranate.x = width * 0.05;
			pomegranate.y = 0;
			pomegranate.scaleX = 0.6;
			pomegranate.scaleY = 0.6;
			stage.addChild(pomegranate);
			stage.update();
			stage.removeChild(pomegranate);
			setTimeout(function(){
				stage.update();
				stage.addChild(pomegranate_cut);
				stage.update();
				s = "";
				video();
			},1000)
		});
		strawberry.on("click", function(){
			remove_cut();
			strawberry.regX = 0;
			strawberry.x = width * 0.05;
			strawberry.y = 0;
			strawberry.scaleX = 0.6;
			strawberry.scaleY = 0.6;
			stage.addChild(strawberry);
			stage.update();
			stage.removeChild(strawberry);
			setTimeout(function(){
				stage.update();
				stage.addChild(strawberry_cut);
				stage.update();
			},1000)
		});
		scroll_light.on("click", function(){
			if(scroll_light.name == "scroll1"){
				setScroll();
			}
			else if(scroll_light.name == "scroll2"){
				setScroll2();
			}
		});
		scroll_light2.on("click", function(){
			if(scroll_light2.name == "scroll2"){
				setScroll2();
			}
			else if(scroll_light2.name == "scroll3"){
				setScroll3();
			}
		});
		scroll_light3.on("click", function(){
			if(scroll_light3.name == "scroll3"){
				setScroll3();
			}else if(scroll_light3.name == "scroll4"){
				setScroll4();
			}
		});
		game.on("click", function(){
			window.open("http://fruitbytes.tk/game.html");
		});
		canvas.onmousedown = clear;
		function clear(){
			var mouseTarget = stage.getObjectUnderPoint(stage.mouseX, stage.mouseY);
			if(mouseTarget == null){
				remove_cut();
				stage.update();
			}
		}
	}
	function remove_cut(){
		strawberry.x = width * 0.506;
		strawberry.y = height *	0.21;
		strawberry.scaleX=0.05;
		strawberry.scaleY=0.05;
		strawberry.rotation=0;
		pomegranate.x = width * 0.256;
		pomegranate.y = height * 0.62;
		pomegranate.scaleX=0.05;
		pomegranate.scaleY=0.05;
		pomegranate.rotation=0;
		orange.x = width * 0.356;
		orange.y = height * 0.31;
		orange.scaleX=0.05;
		orange.scaleY=0.05;
		orange.rotation=0;
		mango.x = width * 0.586;
		mango.y = height * 0.65;
		mango.scaleX=0.05;
		mango.scaleY=0.05;
		mango.rotation=0;
		grapes.x = width * 0.196;
		grapes.y = height * 0.31;
		grapes.scaleX=0.05;
		grapes.scaleY=0.05;
		grapes.rotation=0;
		apple.x = width * 0.666;
		apple.y = height * 0.38;
		apple.scaleX=0.05;
		apple.scaleY=0.05;
		apple.rotation=0;
		stage.removeChild(grapes_cut1);
		stage.removeChild(grapes_cut2);
		stage.removeChild(grapes_cut3);
		stage.removeChild(grapes_cut4);
		stage.removeChild(orange_cut);
		stage.removeChild(scroll_light);
		stage.removeChild(scroll_light2);
		stage.removeChild(scroll_light3);
		stage.removeChild(scroll_dark);
		stage.removeChild(mango_cut);
		stage.removeChild(strawberry_cut);
		stage.removeChild(pomegranate_cut);
		stage.removeChild(apple_cut);
		stage.removeChild(game);
		stage.addChild(apple);
		stage.addChild(mango);
		stage.addChild(grapes);
		stage.addChild(orange);
		stage.addChild(pomegranate);
		stage.addChild(strawberry);
		apple.regX = apple.image.width/2;
		grapes.regX = grapes.image.width/2;
		mango.regX = mango.image.width/2;
		orange.regX = orange.image.width/2;
		pomegranate.regX = pomegranate.image.width/2;
		strawberry.regX = strawberry.image.width/2;
		s = "stop";
		a = "stop";
	}
	function setScroll(e){
		remove_cut();
		stage.removeChild(grapes);
		stage.addChild(grapes_cut1);
		scroll_dark.x = width * 0.35;
		scroll_dark.y = height * 0.62;
		scroll_dark.scaleX = width * 0.0001;
		scroll_dark.scaleY = width * 0.0001;
		scroll_dark.name = "scroll1";
		stage.addChild(scroll_dark);
		scroll_light.x = width * 0.38;
		scroll_light.y = height * 0.62;
		scroll_light.scaleX = width * 0.0001;
		scroll_light.scaleY = width * 0.0001;
		scroll_light.name = "scroll2";
		stage.addChild(scroll_light);
		scroll_light2.x = width * 0.41;
		scroll_light2.y = height * 0.62;
		scroll_light2.scaleX = width * 0.0001;
		scroll_light2.scaleY = width * 0.0001;
		scroll_light2.name = "scroll3";
		stage.addChild(scroll_light2);
		scroll_light3.x = width * 0.44;
		scroll_light3.y = height * 0.62;
		scroll_light3.scaleX = width * 0.0001;
		scroll_light3.scaleY = width * 0.0001;
		scroll_light3.name = "scroll4";
		stage.addChild(scroll_light3);
		stage.update();
	}
	
	function setScroll2(e){
		remove_cut();
		stage.removeChild(grapes);
		stage.addChild(grapes_cut2);
		scroll_light.x = width * 0.35;
		scroll_light.y = height * 0.62;
		scroll_light.scaleX = width * 0.0001;
		scroll_light.scaleY = width * 0.0001;
		scroll_light.name = "scroll1";
		stage.addChild(scroll_light);
		scroll_dark.x = width * 0.38;
		scroll_dark.y = height * 0.62;
		scroll_dark.scaleX = width * 0.0001;
		scroll_dark.scaleY = width * 0.0001;
		scroll_dark.name = "scroll2";
		stage.addChild(scroll_dark);
		scroll_light2.x = width * 0.41;
		scroll_light2.y = height * 0.62;
		scroll_light2.scaleX = width * 0.0001;
		scroll_light2.scaleY = width * 0.0001;
		scroll_light2.name = "scroll3";
		stage.addChild(scroll_light2);
		scroll_light3.x = width * 0.44;
		scroll_light3.y = height * 0.62;
		scroll_light3.scaleX = width * 0.0001;
		scroll_light3.scaleY = width * 0.0001;
		scroll_light3.name = "scroll4";
		stage.addChild(scroll_light3);
		stage.update();
	}	
	
	function setScroll3(e){
		remove_cut();
		stage.removeChild(grapes);
		stage.addChild(grapes_cut3);
		scroll_light.x = width * 0.35;
		scroll_light.y = height * 0.62;
		scroll_light.scaleX = width * 0.0001;
		scroll_light.scaleY = width * 0.0001;
		scroll_light.name = "scroll1";
		stage.addChild(scroll_light);
		scroll_light2.x = width * 0.38;
		scroll_light2.y = height * 0.62;
		scroll_light2.scaleX = width * 0.0001;
		scroll_light2.scaleY = width * 0.0001;
		scroll_light2.name = "scroll2";
		stage.addChild(scroll_light2);
		scroll_dark.x = width * 0.41;
		scroll_dark.y = height * 0.62;
		scroll_dark.scaleX = width * 0.0001;
		scroll_dark.scaleY = width * 0.0001;
		scroll_dark.name = "scroll3";
		stage.addChild(scroll_dark);
		scroll_light3.x = width * 0.44;
		scroll_light3.y = height * 0.62;
		scroll_light3.scaleX = width * 0.0001;
		scroll_light3.scaleY = width * 0.0001;
		scroll_light3.name = "scroll4";
		stage.addChild(scroll_light3);
		stage.update();
	}	
	
	function setScroll4(e){
		remove_cut();
		stage.removeChild(grapes);
		stage.addChild(grapes_cut4);
		scroll_light.x = width * 0.35;
		scroll_light.y = height * 0.62;
		scroll_light.scaleX = width * 0.0001;
		scroll_light.scaleY = width * 0.0001;
		scroll_light.name = "scroll1";
		stage.addChild(scroll_light);
		scroll_light2.x = width * 0.38;
		scroll_light2.y = height * 0.62;
		scroll_light2.scaleX = width * 0.0001;
		scroll_light2.scaleY = width * 0.0001;
		scroll_light2.name = "scroll2";
		stage.addChild(scroll_light2);
		scroll_light3.x = width * 0.41;
		scroll_light3.y = height * 0.62;
		scroll_light3.scaleX = width * 0.0001;
		scroll_light3.scaleY = width * 0.0001;
		scroll_light3.name = "scroll3";
		stage.addChild(scroll_light3);
		scroll_dark.x = width * 0.44;
		scroll_dark.y = height * 0.62;
		scroll_dark.scaleX = width * 0.0001;
		scroll_dark.scaleY = width * 0.0001;
		scroll_dark.name = "scroll4";
		stage.addChild(scroll_dark);
		stage.update();
	}
	function video(){	
		var video = document.createElement('video');
		video.src = 'http://fruitbytes.tk/video.mp4';
		video.controls = true;	
		
		var ctx = canvas.getContext('2d');
		var x_image = width * 0.31;
		var y_image = height * 0.35;
		video.play();
		draw(video,ctx,445,245);

		function draw(v,c,w,h) {
			if(v.paused || v.ended || s == "stop"){
				video.pause();
				return false;
			}
			a = "stop";
			c.drawImage(v,x_image,y_image,w,h);
			setTimeout(draw,20,v,c,w,h);
		}
	}
	function tick(){
		if(a == "stop")return false;
		stage.update();	
	}
});
