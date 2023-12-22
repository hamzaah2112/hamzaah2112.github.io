(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sun_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {sun_mc:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// sun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB21C").s().p("AkBFUIEEq/ID/LXg");
	this.shape.setTransform(-137.7753,-203.9084,0.9999,0.9999,-44.9994);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB21C").s().p("Aj2EzIEXp3IDWKJg");
	this.shape_1.setTransform(-5.3858,-75.785,0.9999,0.9999,135.0006);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB21C").s().p("AAPlSIDpJuInvA3g");
	this.shape_2.setTransform(-133.5538,-76.2309,0.9999,0.9999,-134.9994);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB21C").s().p("AkDE7IEDp1IEEJ1g");
	this.shape_3.setTransform(-6.5105,-202.0012,1,1,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB21C").s().p("AkDE7IEDp1IEEJ1g");
	this.shape_4.setTransform(-160.9927,-137.3529,1,1,-90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB21C").s().p("AgHk6IETJtIoXAIg");
	this.shape_5.setTransform(-69.2029,-53.9073,1,1,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB21C").s().p("AkDE7IEDp1IEEJ1g");
	this.shape_6.setTransform(19.5,-137.95,1,1,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB21C").s().p("AkDE7IEDp1IEEJ1g");
	this.shape_7.setTransform(-73,-227.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB21C").s().p("AloFoQiViUAAjUQAAjSCViWQCWiVDSAAQDTAACVCVQCWCWAADSQAADUiWCUQiVCWjTAAQjSAAiWiWg");
	this.shape_8.setTransform(-70,-139.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB21C").s().p("AiVHnQjKg+hji7Qhji6A+jJQA+jKC7hjQC7hjDJA+QDKA/BjC6QBiC7g+DJQg+DKi6BiQhzA+h4AAQhLAAhOgZg");
	this.shape_9.setTransform(-74.1963,-138.9419);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{rotation:0,x:-70,y:-139.95}},{t:this.shape_7,p:{rotation:0,x:-73,y:-227.95,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:90,x:19.5,y:-137.95,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:180,x:-69.2029,y:-53.9073,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:-90,x:-160.9927,y:-137.3529,scaleX:1,scaleY:1}},{t:this.shape_3,p:{rotation:45,x:-6.5105,y:-202.0012,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:-134.9994,x:-133.5538,y:-76.2309,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:135.0006,x:-5.3858,y:-75.785,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-44.9994,x:-137.7753,y:-203.9084,scaleX:0.9999,scaleY:0.9999}}]}).to({state:[{t:this.shape_8,p:{rotation:21.485,x:-70.4577,y:-139.7757}},{t:this.shape_7,p:{rotation:21.485,x:-40.9627,y:-222.7521,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:111.485,x:12.1521,y:-105.1127,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:-158.5152,x:-101.181,y:-59.3997,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:-68.5152,x:-156.0933,y:-170.6366,scaleX:1,scaleY:1}},{t:this.shape_3,p:{rotation:66.4854,x:11.4248,y:-174.2581,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:-113.5145,x:-152.9269,y:-103.7288,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:156.4855,x:-33.7814,y:-56.3798,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-23.5145,x:-110.0773,y:-224.0585,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_8,p:{rotation:42.678,x:-71.2462,y:-139.3348}},{t:this.shape_7,p:{rotation:42.678,x:-13.6841,y:-206.0418,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:132.678,x:-6.7082,y:-77.1341,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:-137.3203,x:-128.9084,y:-75.5115,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:-47.3203,x:-139.9308,y:-199.0703,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:87.6799,x:17.6083,y:-141.8518,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:-92.3203,x:-161.1723,y:-135.5131,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:177.6797,x:-67.1633,y:-48.3237,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-2.3203,x:-77.69,y:-232.2275,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_8,p:{rotation:62.3898,x:-72.2925,y:-138.9174}},{t:this.shape_7,p:{rotation:62.3898,x:4.3709,y:-182.2991,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:152.3898,x:-32.5509,y:-58.5291,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:-117.6107,x:-148.1821,y:-98.2178,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:-27.6107,x:-116.891,y:-218.2613,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:107.3898,x:12.1908,y:-111.2978,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-72.6111,x:-158.3162,y:-165.6249,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-162.6111,x:-99.1601,y:-51.8092,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:17.3889,x:-47.0589,y:-228.5571,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_8,p:{rotation:88.6159,x:-74.0271,y:-138.5822}},{t:this.shape_7,p:{rotation:88.6159,x:13.9041,y:-143.5772,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:178.6159,x:-73.9228,y:-48.8459,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:-91.3833,x:-160.1639,y:-135.5805,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:-1.3833,x:-79.0192,y:-229.4946,scaleX:1,scaleY:1}},{t:this.shape_3,p:{rotation:133.6163,x:-10.4594,y:-76.4383,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-46.3826,x:-139.4496,y:-200.5048,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-136.3826,x:-136.6482,y:-72.2911,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:43.6174,x:-11.7566,y:-207.861,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_9,p:{rotation:0,x:-74.1963,y:-138.9419,scaleX:1,scaleY:1}},{t:this.shape_7,p:{rotation:107.0823,x:10.7802,y:-115.733,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:-162.9177,x:-102.517,y:-53.7198,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:-72.9169,x:-156.8842,y:-163.2861,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:17.0831,x:-50.1286,y:-226.7192,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:152.0843,x:-33.6126,y:-59.7857,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-27.9162,x:-116.661,y:-218.3047,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-117.9162,x:-154.6463,y:-95.8321,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:62.0838,x:6.8294,y:-184.8929,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_9,p:{rotation:29.9992,x:-74.6872,y:-139.6245,scaleX:1,scaleY:1}},{t:this.shape_7,p:{rotation:137.0821,x:-12.6763,y:-76.9894,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_6,p:{rotation:-132.9179,x:-141.8106,y:-79.9763,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_5,p:{rotation:-42.9184,x:-134.1262,y:-201.9973,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:47.0816,x:-9.9474,y:-203.612,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-177.9178,x:-79.1061,y:-50.7383,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:2.0824,x:-71.7996,y:-229.5856,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-87.9176,x:-165.9271,y:-142.4757,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:92.0824,x:18.484,y:-138.8656,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_9,p:{rotation:59.9992,x:-75.0748,y:-141.3247,scaleX:1,scaleY:1}},{t:this.shape_7,p:{rotation:167.0809,x:-52.7333,y:-56.0666,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_6,p:{rotation:-102.9191,x:-163.0834,y:-123.2333,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_5,p:{rotation:-12.9186,x:-95.4304,y:-225.0564,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:77.0814,x:12.9775,y:-164.3601,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-147.9189,x:-123.3625,y:-66.555,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:32.0818,x:-27.6299,y:-217.8441,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_1,p:{rotation:-57.9182,x:-152.7105,y:-189.405,scaleX:0.9998,scaleY:0.9998}},{t:this.shape,p:{rotation:122.0818,x:5.235,y:-94.1131,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_9,p:{rotation:74.9976,x:-74.8543,y:-141.3299,scaleX:1,scaleY:1}},{t:this.shape_7,p:{rotation:-177.9204,x:-75.3451,y:-53.1927,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_6,p:{rotation:-87.9204,x:-164.6073,y:-146.5951,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_5,p:{rotation:2.0806,x:-72.896,y:-227.515,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:92.0806,x:16.1441,y:-140.7953,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-132.9191,x:-140.8511,y:-81.5844,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:47.0805,x:-9.2163,y:-203.005,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_1,p:{rotation:-42.9195,x:-137.4556,y:-207.8537,scaleX:0.9998,scaleY:0.9998}},{t:this.shape,p:{rotation:137.0805,x:-9.5168,y:-74.9301,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_9,p:{rotation:104.9956,x:-74.252,y:-141.5166,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_7,p:{rotation:-147.9208,x:-118.7537,y:-65.4043,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_6,p:{rotation:-57.9208,x:-149.3957,y:-190.9537,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_5,p:{rotation:32.0786,x:-29.4729,y:-215.2106,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:122.0786,x:4.2854,y:-95.5507,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-102.9198,x:-161.3187,y:-122.7392,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:77.0798,x:13.4539,y:-162.0723,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_1,p:{rotation:-12.9202,x:-95.2534,y:-230.4101,scaleX:0.9998,scaleY:0.9998}},{t:this.shape,p:{rotation:167.0798,x:-50.8427,y:-51.3202,scaleX:0.9998,scaleY:0.9998}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-268.6,253.20000000000002,252.90000000000003);


(lib.smoke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AgcB/QA4gSgRgyQgRgyg1gIQg2gFBZhSQBYhSg4A9Qg5A+AmAiQAiAgAsAkQAsAkhiAZQg5AQgEAAQgCAAAWgHg");
	this.shape.setTransform(7.6354,-76.9333,0.3827,1.4851);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AgcB/QA4gSgRgyQgRgyg1gIQg2gFBZhSQBYhSg4A9Qg5A+AmAiQAiAgAsAkQAsAkhiAZQg5AQgEAAQgCAAAWgHg");
	this.shape_1.setTransform(24.3907,-76.8995,1,1.6716);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AgcB/QA4gSgRgyQgRgyg1gIQg2gFBZhSQBYhSg4A9Qg5A+AmAiQAiAgAsAkQAsAkhiAZQg5AQgEAAQgCAAAWgHg");
	this.shape_2.setTransform(-3.3646,-76.9408,0.3827,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AgcB/QA4gSgRgyQgRgyg1gIQg2gFBZhSQBYhSg4A9Qg5A+AmAiQAiAgAsAkQAsAkhiAZQg5AQgEAAQgCAAAWgHg");
	this.shape_3.setTransform(-24.3593,-76.9253,1,1.2985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{scaleY:1.2985,x:-24.3593,y:-76.9253,scaleX:1}},{t:this.shape_2,p:{scaleY:1,x:-3.3646,y:-76.9408,scaleX:0.3827}},{t:this.shape_1,p:{scaleY:1.6716,x:24.3907,y:-76.8995,scaleX:1}},{t:this.shape,p:{scaleY:1.4851,x:7.6354,y:-76.9333,scaleX:0.3827}}]}).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-24.5593,y:-82.5809,scaleX:1}},{t:this.shape_2,p:{scaleY:1.2902,x:-3.5646,y:-82.6121,scaleX:0.3827}},{t:this.shape_1,p:{scaleY:2.1567,x:24.1907,y:-82.5584,scaleX:1}},{t:this.shape,p:{scaleY:1.916,x:7.4354,y:-82.5865,scaleX:0.3827}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-24.1093,y:-91.0809,scaleX:1}},{t:this.shape_2,p:{scaleY:1.2902,x:-3.1146,y:-91.1121,scaleX:0.3827}},{t:this.shape_1,p:{scaleY:2.1567,x:24.6407,y:-91.0584,scaleX:1}},{t:this.shape,p:{scaleY:1.916,x:7.8854,y:-91.0865,scaleX:0.3827}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-24.8104,y:-97.5809,scaleX:1.0308}},{t:this.shape_2,p:{scaleY:1.2902,x:-3.2114,y:-97.6121,scaleX:0.3945}},{t:this.shape_1,p:{scaleY:2.1567,x:25.4396,y:-97.5584,scaleX:1.0308}},{t:this.shape,p:{scaleY:1.916,x:8.1386,y:-97.5865,scaleX:0.3945}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-25.9028,y:-101.8309,scaleX:1.077}},{t:this.shape_2,p:{scaleY:1.2902,x:-3.3105,y:-101.8621,scaleX:0.4122}},{t:this.shape_1,p:{scaleY:2.1567,x:26.5972,y:-101.8084,scaleX:1.077}},{t:this.shape,p:{scaleY:1.916,x:8.5395,y:-101.8365,scaleX:0.4122}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-27.7383,y:-106.0809,scaleX:1.1541}},{t:this.shape_2,p:{scaleY:1.2902,x:-3.5063,y:-106.1121,scaleX:0.4417}},{t:this.shape_1,p:{scaleY:2.1567,x:28.5117,y:-106.0584,scaleX:1.1541}},{t:this.shape,p:{scaleY:1.916,x:9.1937,y:-106.0865,scaleX:0.4417}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-29.7366,y:-113.8309,scaleX:1.2388}},{t:this.shape_2,p:{scaleY:1.2902,x:-3.7284,y:-113.8621,scaleX:0.4741}},{t:this.shape_1,p:{scaleY:2.1567,x:30.6134,y:-113.8084,scaleX:1.2388}},{t:this.shape,p:{scaleY:1.916,x:9.8716,y:-113.8365,scaleX:0.4741}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-32.6645,y:-119.8309,scaleX:1.3621}},{t:this.shape_2,p:{scaleY:1.2902,x:-4.0733,y:-119.8621,scaleX:0.5213}},{t:this.shape_1,p:{scaleY:2.1567,x:33.6855,y:-119.8084,scaleX:1.3621}},{t:this.shape,p:{scaleY:1.916,x:10.8767,y:-119.8365,scaleX:0.5213}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-36.2228,y:-129.5809,scaleX:1.5084}},{t:this.shape_2,p:{scaleY:1.2902,x:-4.5468,y:-129.6121,scaleX:0.5773}},{t:this.shape_1,p:{scaleY:2.1567,x:37.2772,y:-129.5584,scaleX:1.5084}},{t:this.shape,p:{scaleY:1.916,x:12.0032,y:-129.5865,scaleX:0.5773}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-38.0662,y:-139.8309,scaleX:1.5855}},{t:this.shape_2,p:{scaleY:1.2902,x:-4.7426,y:-139.8621,scaleX:0.6068}},{t:this.shape_1,p:{scaleY:2.1567,x:39.1838,y:-139.8084,scaleX:1.5855}},{t:this.shape,p:{scaleY:1.916,x:12.6574,y:-139.8365,scaleX:0.6068}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-41.199,y:-145.8309,scaleX:1.7164}},{t:this.shape_2,p:{scaleY:1.2902,x:-5.098,y:-145.8621,scaleX:0.6569}},{t:this.shape_1,p:{scaleY:2.1567,x:42.451,y:-145.8084,scaleX:1.7164}},{t:this.shape,p:{scaleY:1.916,x:13.752,y:-145.8365,scaleX:0.6569}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-47.3439,y:-153.3309,scaleX:1.9707}},{t:this.shape_2,p:{scaleY:1.2902,x:-5.9061,y:-153.3621,scaleX:0.7542}},{t:this.shape_1,p:{scaleY:2.1567,x:48.7061,y:-153.3084,scaleX:1.9707}},{t:this.shape,p:{scaleY:1.916,x:15.7439,y:-153.3365,scaleX:0.7542}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-51.9866,y:-153.3309,scaleX:2.1633}},{t:this.shape_2,p:{scaleY:1.2902,x:-6.5208,y:-153.3621,scaleX:0.8279}},{t:this.shape_1,p:{scaleY:2.1567,x:53.4634,y:-153.3084,scaleX:2.1633}},{t:this.shape,p:{scaleY:1.916,x:17.2292,y:-153.3365,scaleX:0.8279}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-56.0832,y:-157.8309,scaleX:2.3328}},{t:this.shape_2,p:{scaleY:1.2902,x:-7.0569,y:-157.8621,scaleX:0.8927}},{t:this.shape_1,p:{scaleY:2.1567,x:57.6168,y:-157.8084,scaleX:2.3328}},{t:this.shape,p:{scaleY:1.916,x:18.5431,y:-157.8365,scaleX:0.8927}}]},2).to({state:[{t:this.shape_3,p:{scaleY:1.6753,x:-58.457,y:-164.5809,scaleX:2.4329}},{t:this.shape_2,p:{scaleY:1.2902,x:-7.3234,y:-164.6121,scaleX:0.9311}},{t:this.shape_1,p:{scaleY:2.1567,x:60.093,y:-164.5584,scaleX:2.4329}},{t:this.shape,p:{scaleY:1.916,x:19.3766,y:-164.5865,scaleX:0.9311}}]},2).wait(1));

	// pipe
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AniAuIAAABIgDgDIgEgDIABgBIgBAAIADgEIACgDIABAAQHnnHHgHSIABgBIADAEIACADIAAABIAAABIgEACIgDADIAAgBQj1CIjtAAQj1AAjuiSg");
	this.shape_4.setTransform(0.325,-64.118);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AoGqYQIGoLIHILIgLYsIvvALg");
	this.shape_5.setTransform(0,5.44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-193.4,157.8,291.5);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupils
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAZQgKgKgBgPQABgOAKgLQALgLAOAAQAPAAALALQALALgBAOQABAPgLAKQgLALgPAAQgOAAgLgLg");
	this.shape.setTransform(37.95,-215.5828,1,1.7534);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAmQgQgQAAgWQAAgWAQgQQAPgPAWAAQAWAAAQAPQAQAQAAAWQAAAWgQAQQgQAQgWAAQgWAAgPgQg");
	this.shape_1.setTransform(-30.2,-216.0388,1,1.3704);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleY:1.3704,x:-30.2,y:-216.0388}},{t:this.shape,p:{scaleX:1,scaleY:1.7534,x:37.95,y:-215.5828}}]}).to({state:[{t:this.shape_1,p:{scaleY:1.3703,x:-30.1995,y:-215.9855}},{t:this.shape,p:{scaleX:1.0056,scaleY:1.7584,x:37.9701,y:-215.5928}}]},6).to({state:[{t:this.shape_1,p:{scaleY:1.3704,x:-30.2,y:-215.9888}},{t:this.shape,p:{scaleX:1,scaleY:1.7523,x:37.95,y:-215.544}}]},2).to({state:[]},1).to({state:[{t:this.shape_1,p:{scaleY:1.3704,x:-30.2,y:-215.9888}},{t:this.shape,p:{scaleX:1,scaleY:1.7523,x:37.95,y:-215.544}}]},5).to({state:[{t:this.shape_1,p:{scaleY:1.3703,x:-30.1995,y:-215.9855}},{t:this.shape,p:{scaleX:1.0056,scaleY:1.7584,x:37.9701,y:-215.5928}}]},1).to({state:[{t:this.shape_1,p:{scaleY:1.3704,x:-30.2,y:-216.0388}},{t:this.shape,p:{scaleX:1,scaleY:1.7534,x:37.95,y:-215.5828}}]},1).to({state:[]},6).wait(3));

	// eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJBKQgfgeAAgsQAAgrAfgeQAegfArAAQAsAAAeAfQAfAeAAArQAAAsgfAeQgeAfgsAAQgrAAgegfg");
	this.shape_2.setTransform(35.6283,-215.5875,0.7143,1.0259);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiBCCQg2g2AAhMQAAhLA2g2QA2g2BLAAQBMAAA2A2QA2A2AABLQAABMg2A2Qg2A2hMAAQhLAAg2g2g");
	this.shape_3.setTransform(-35.1393,-215.8622,0.701,0.6362);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0A4QgWgYAAggQAAggAWgYQAVgWAfAAQAfAAAVAWQAXAYAAAgQAAAggXAYQgVAXgfAAQgfAAgVgXg");
	this.shape_4.setTransform(35.65,-215.5467);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaA/QgmgaAAglQAAgjAmgbQAmgaA0AAQA1AAAmAaQAmAbAAAjQAAAlgmAaQgmAag1AAQg0AAgmgag");
	this.shape_5.setTransform(-35.15,-215.9186,1,0.9972);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhggUYAAAAACADAEAFYADACACADADADYADADAEADAEAEYAFADAFAEAFAEYAGADAFAEAHADYADACAEABADABYAEACAEABADABYAIABAIACAHgBYACAAACAAACAAIAGgBYAFAAADgBAEgCYAIgCAHgEAGgEYAGgEAGgEAFgFYAFgFADgFAEgDYADgFACgFADgDYACgEACgEABgDYADgGABgDAAAAIAAAAYAAAAgDACgEAFYgCACgDADgDADYgEADgDAEgEADYgEADgEAEgFADYgFADgFADgGADYgFADgGACgGACYgDABgDAAgEABIgEAAYgCAAgCAAgBAAYgGABgGgBgGgBYgEgBgDgBgDAAYgDgBgDgBgDgBYgGgCgGgDgGgCYgFgDgFgBgFgDYgJgFgIgEgGgEYgGgDgDgBAAAAIAAAA");
	this.shape_6.setTransform(36.9,-211.95,1,1,0,0,0,0,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiagwYAAAAADAEAGAJYADAEADAFAFAFYAFAGAFAGAGAGYAHAFAGAHAJAGYAEADAEADAEAEYAFACAFADAFADYAFADAFACAGACIAIADYADABADAAADABYAMADAMABAMAAYAGAAAGAAAGgBYAGgCAGgBAGgBYALgEALgEAKgGYAKgEAJgHAIgGYAIgGAHgGAHgFYAGgGAGgGAFgFYAFgGADgFADgEYAHgIADgEAAAAIAAAAYAAAAgFADgHAHYgEADgFAEgGAEYgFAEgGAFgHAFYgHAEgIAGgIAEYgJAEgIAGgKAEYgJAEgKADgKADYgGABgFABgFABYgFABgGAAgEAAYgLAAgKAAgLgDYgCAAgDgBgCAAIgIgDYgFgCgFgBgEgCYgFgCgFgDgEgCYgEgCgFgDgEgCYgCgBgCgCgCAAYgCgBgCgBgCgCYgDgCgEgDgDgCYgHgFgGgGgFgEYgGgEgEgEgEgEYgIgHgEgDAAAAIAAAA");
	this.shape_7.setTransform(-32.1,-210.35,1,1,0,0,0,0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5,p:{scaleY:0.9972,y:-215.9186}},{t:this.shape_4,p:{y:-215.5467}}]},6).to({state:[{t:this.shape_5,p:{scaleY:1,y:-215.975}},{t:this.shape_4,p:{y:-215.55}}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{scaleY:1,y:-215.975}},{t:this.shape_4,p:{y:-215.55}}]},1).to({state:[{t:this.shape_5,p:{scaleY:0.9972,y:-215.9186}},{t:this.shape_4,p:{y:-215.5467}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},6).wait(3));

	// head
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgviiIAqgEICWEwIgsAEIgphUIiLAOIgcBbIgmAEgAhGAnIBygLIhFiNg");
	this.shape_8.setTransform(324.7,-283.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhgCDICEkEIiRAQIgDgjIC+gTIAEAiIiEEDICfgQIAEAmIjNAUg");
	this.shape_9.setTransform(276.425,-279.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhgCCICEkDIiRAPIgDgiIC+gUIAEAjIiEEDICfgQIAEAmIjNAUg");
	this.shape_10.setTransform(232.525,-274.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgjibIAogEIAfE7IgoAEg");
	this.shape_11.setTransform(195.125,-271.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhoiYIBYgJQAxgFAWAIQAWAIAMATQANAUACAaQAFAsgcAiQgbAgg7AGIgnAEIAMB9IgpAEgAgMiBIgwAFIANB/IAcgDQA1gEAQgXQAPgXgDgdQgDgagPgOQgMgLgcAAIgQABg");
	this.shape_12.setTransform(157.7566,-267.0212);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#987555").s().p("ApvhpQAHgmAMgkQALgjAPgiQAPgjARghQI6EPJpCLQhEBVAVBqIAHAfQpcggpeAhQg2jSAojUg");
	this.shape_13.setTransform(446.5239,-288.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFD").s().p("AisD6QgdgSgZgXQiXiJhTi5QgrhggbhkQEkEzGrATQB9AFB8ALIBUAaQAYA9gmAuQgQATgYANQi1BajLAUQgZACgZAAQhwAAheg8g");
	this.shape_14.setTransform(-46.0605,-104.807);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#991115").s().p("AlCFYIhfjTIJHnmID8CKQABBHgJBEQgYDFiaB8QhKA6hbAWQh4Adh6AAQhJAAhKgKg");
	this.shape_15.setTransform(80.1803,-262.8355);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ED1F29").s().p("EAAAA8SQgCgqgDgpQgak0g4kuQhAlWhNlSIhphpQAngrAMg5QAJgugIguQgwkAg3j/IidrYQg6ABg6gIQgkgGglgHIo0hwQjGgmjHAdQhQAJgpA+QgsBCgdBJQjAHdh/HxQjFAnjGgaQgegDgcgGQlQhEjLkRQAzioBEigQAnhZAohYQCnlkC5lcQCUkUBrkiQAPgnAFgoQBtAJBsALICZAQQGEAvGIAgQAiACAiAGQEEA6D9haQBRgdBUgJQAigFAjAAQA7A6AvBAQARAYAUAXQAvA3BGAVQAiAKAgAPQCLBACVAVQAdAEAbgJQApgPAagkQAOgSgHgUQgahOg4g9Ihnh0IhNhiIgBgLQFMBbE9CEQA3AWA4AUQBXAeBTgdQAMgDAKgJQA4guAdhDQARgPAoAHQAvAMAvAHIBfANQDuAqDugCQBvAABUhDQALgIAIgMQCyk3B/lTQBEi2BRivQBhAdBiAYQBMARBNAGQCuARCtgTQgDA4gLA3IgSBVQh7IiiqIVQhSEAh6DuQgbA0gnAoQifgkiigGIg2AAQl7gDl8gPQkzgTktg/QgHAsANAqQALAhANAiQCCFVCaFKQFKLDFxKuQkGBbj/B0QjjBpjSCJQmaEMmAEuQhCAzhBAwQAIg/gChAgEAVmgjTQiQg9hxhwQhVhShUhVQhchfgDiBIMIlpIJYEuQkiDyklDvQgjAdgnAXQhbAzhfAqQgGgBgGgCgEgGjg1oIU+mpIAFANIAGAPIAEAQIAFASQAiC1gfC5QgMBKgJBJQgYDZhJDPIgpgFIgUgBIgTgDIghgCIgPgBQgtgFgtAMQmoBmmnBrIgrAsgEAAHg4rQAEjJC2hcQBigxBtgNQCLgMCBAzQBBAZAnA4Ir8D8g");
	this.shape_16.setTransform(-130.8,-11.923);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEC013").s().p("AnBfZQhwgWhngvQhPglhQgXIimjDQBkBdBtBQQAPALARAEQCWAiCVgNQAOgWgQgYQgshEgihLIAXAYQBlBpBKB8QAEAIgBAKQgmAlgyAAQgQAAgRgEgAqhg7IgBgCQgRhggshYQhgjCizh5IgagPIC+jCILni7IgQAMQibBviRB7QguAmgnAuQgDACgDAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgOAcIgQACIA4F5IgZAfQg9BLhRAwQgHAEgIAAIgDAAgAE4z+IAAgCQANhaAOhZQAdi+gBjBQgBhXgfhTIK+AYIgwJqIrpFbIBEj/g");
	this.shape_17.setTransform(-67.85,-196.8358);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBC0A2").s().p("EgxQA3FQBhmmCOmXIjDijQiKEmjEEBQhtCOiBB9IgSgPIHvsGQgphEg7g2QgZgXghAAIoiGJIAAg2QB/jADCh+QByhIB4g8QgniAAciDQARhOAzg+QA4hFBNgsQAlgWAngUQAqgUAugQQAngOAmgMIAzmCICsArIggF1IGnEGQA+ETC7DTQBWBfBqBMIg6AkQiFgPhkhTQg9gzgihIQgmhRgMhYQgGgrgCgtQgDgwACgwIAEheIgfgDQiKLAAcLOIh0ADQAkkTg6kPQgdiJgxiFIhaA7IAFgfIgngHQgiDgg/DYQg1C0hKCtIgrBigAieq+QgygJgmghIiSiBQg4gxhMADQheAJhTArIg4AbIFW0wIgSgGQiyg6iZhuQiHhggyicQgdhXAchaQA9jBCphtQBUg2BeAfQCAArBVBpQBwCKAwCsQAFAUAIAUQAWA3A3gfQBJgnA3g/IA5hCIgyl4QBMhSBahHIEgjeIAqgfIDEALQAICaBxBvQBrBoBtBjQBlBbB9ArQAMAEAKgFQCFg5B5hMICUErQgfCmhXCSQgGAKACALQAWCIgMCHQgLCBheBUQgeAbgjARQATBNAYBMQASA2gHA3QgBAFgDAEQgeAagqgFIg8AAQgUgCgVADQhsgxh4ABQkAAEjthcQi8hKiLiQQhMhPgZhrQgMgxAPgwQAPgwAdgsIgigWQhSB2AWCPQADASgCAVQgMBghKAyQgOAJgRgDIgegJIgLAnQBKAfA2g5QApgtAPg8IALgqQAuCxBOCnQBTCxCOCFQApAmAzAcQAkAUAnAIQClAfCkgqQCVgnCGhIQBMBmgxBzQgSAngnAXQhhA0huAHQhFAFhFADQBmAzgOBsQgKBMgoAxIAAAYQgjAxg6gFQh6gNhzgxQlIiLlXhbIjykjIg9nzIgoAFIA/H/QCECgCAClQAYAdAHAmQAJAsATAqQAdA8AmA3QhygEhwgPgEgMWgreQCFAJBsBPQCOBpBMCgQAjBKAZBMIAmgOIgHgTQg+i4h+iTQiGicjNgVIgUgBgEAJsgu+QhKAchEApIAUAiIARgKQCvhjDJgQQBPgGBQAGIACgoQgqgDgpAAQi0AAipBBgEApJgcfIhEgQQBaiSAwiiQAFgTgOgNQhHhAhcgfQhLgZg0g2QgUgWgLgbQhHiohpiSQgegrgsgeQgKgHgIgJQBJgtBeAKQA9gBA5ASQA4APAjAuQBZB2B+BGQApAYAtgUQCnhLCPhwQBYhFBlguQAxgVA0gMQAxgJA0ABQgfAzgoAsQhKBUhaA+IAVAiQC+iFCziVQA0gsBBgGQgFAeghAgIl+FvQgaAZAIAdIAQAIQBuhHBhhaQCpifC7iIQAFgEAHAAQAFBjg0BYQhtC8jHBiQiwBXi9AwQhqAZhUBKQimCWg/DZQgIAegBAgg");
	this.shape_18.setTransform(-123.6071,57.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D8A578").s().p("A1QGEQAXgWAUgYQAUgbAQgcQARgeAMgfQAOghAJgiQAKglAGglQAGgoADgpQADgrABgsIAAgMIhTgtIFSgOIFSgVIFSgaIFPghIFRgoQCogWCogbQCogXCngdQCogaCogdQgQAhgOAjQgOAigLAkQgKAlgHAlQgHAmgEAmQgDApAAApQAAAqADAqQAEAsAHArQAHAuAJAtIlZANIlaARIlZAVIlZAaIlZAfIlaAjIlZApIlaAtQAZgUAYgXg");
	this.shape_19.setTransform(246.075,-277.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("EhFWBAsIAFgYIA2jaQAbhqAdhqQA6jKBEjIIiGhwIgeA5QgdA4gfA4QgfA2ghA2QghA0gjA0QgjAygkAxQglAwgmAvQgnAugoAtQhBBJhHBFIhJg9IH0sNIgQgXIgPgVIgOgRIgOgOIgMgMQgGgFgGgDIgUgKIo5GdIgNgSIgMAAIADhxQAVggAXgeQAXggAagdQAcgfAdgdQAfgeAigbQAigeAmgaQAmgdApgaQBYg4BcgwQgghzAUh1IAFgXIAGgWIAIgWQAJgWALgUQALgVAOgTQAOgUAQgSQARgTASgRQAUgRAVgQQAXgRAYgOQAZgQAagOQAcgPAdgMQA+gdBCgUIAylyIgngSQgogTgmgWQgggSgfgVIgygkIgugnIgsgqQgwgwglg6QAchcAhhaQBWjpBtjeQC8l+DDl9IANgbIANgZIAMgYIAUgqIAQgjIAZg3IAWgzIAUgvIAQgsIATg6IAKgiQAIgeADggQBVAGBVAIQGyAvGyApIAhACIAfACIAeADQAcAAAbAGQATAAASAFIA/AOIA+AJIA8AFIA8AAIA6gCIA6gHQAxgGAjgSIFZ0pQj0hSi1izQiGiFASi3IACgUIAEgUIAGgVQAGgUAJgUQATgqAYgoQAbguAhgpQAfgnAlghQAggdAlgXQARgLASgHQASgHATgGIAlgGQA4gDA2ASICDiGIiWt2IGziKQgMh+BJhoQB0ikDMgTIAwgFIAtgEIArAAIAoABQAmAFAlAIQAZADAZAJQASAFAQAIQASAIARAKQATAMASAOIASARIAYAcQAKANAGAOIBvgkIAFgBIMJAaIgzKSIL1GDIFggNIFfgVIFfgbIFegiQCvgVCugYQCvgUCugbQCvgYCugeQC2ghC0gXICVBDQBKAgBMAfQBLAfBNAbQCYA4CbAyQBNAaBOAWQCvAyCxAnIgbAaIgLAMIgLAMIgJANIgIAMIgHAOIgGANIgEAOIgEAOIgCAPIgBAPIACAgIADAQQAJAoAPAoQmVgYmUAGQhPABhOACIieAGIieAHIgCAAIgCAAIlZAMIlZARIlZAVIlaAaIlZAfIlaAjQlZAmlaAuIAlAFQBiAIA/BLQA/BJBCBFQBGBJBUgsQDThuC/iQIAMgJIALgHIAJgGQAFgDAHgCQAcgMAegIQAcgJAdgHIAvgJIAqgFIAagCIAUAAIATAEQALACAFAKIACAFIABAFIAAAGIgBAGIgBAGIgDAIIgEAIIgGAJIgQAXQAXgSAVgUQBbhUB1gbIAJAAIAJACIAIADQAGACAFAFQAFADADAFQACAFABAHQACAHgBAIQgBAHgCAGIgMAXIgKAQIgNARQgRAWgVATIBMg9IANgKIALgJQAZgUAZgRQAQgKATAEQA0AHgHA5QgOB3hBBlQgPAXgSAUQjBDXkUBYIggALIgiALIghAKQgkAKgjALQgiAKgfAPQgeANgcASQgbATgaAVQgaAWgXAZQgYAZgVAcQgWAdgTAfIgpBCQgzBQAEBcIFrgHIABASQgCB4gbB2QiKJSjEJAIgOAnIgNAlIgOAkIgZBDIgaA9IgYA3IgXAyIgXAsIgVAmIgVAhIgUAaQgQATgUARQkDg4kKAGIgdABIgfgBIghAAIhIgBIhrgBIh/gDIh1gDIhrgGIh1gIIiDgOIiCgRQg/gLhAgIQgegFgfgCQADAOAFARQBZD8BzDyIARAkIAQAkIARAmIAkBPIAnBTIAsBeICCETICCEJIBWCqIBVCmIBUCiQBDB/BFB/QqADLolGCIg3AnIgdAUIgdAVIhaBCIhwBUIhMA5IhIA2IhFA0IhBAxIg8AuIg5AsQgyAmgyAiQAyibgWilIgDgaIgCgbIgDgdIgHg7IgIhBIgKhEIgKhJIgNhNIgNhRIgQhWQgYiCgaiBQgojQgvjNIiAh7QArgaATgvQAGgRABgSQAJh8gjh5IgGgZIgGgbIgGgdIgOg/IgPhGIgQhNIgShVIgUhbIgVhkIgXhqIgYhxIg2j5Qg7gBg5gKQjggnjbg1QkNhDkRAbQhWAIgmBHIgOAZIgNAcIgPAeIgdBGIggBRIgiBcIgkBnIglByIgnB+IgmB9IgjB5QgaBcgZBfIgMACIhqARIhmAIQhjAFhggMIgeFaIGjELIAOAyQAOAxASAwQASAvAWAuQAVAsAbAqQAaArAeAoQAfAoAiAlQAjAlAmAjQBGBBBPA1IiBBJIgtgGIgVgEIgWgFIgogNQgUgHgSgJQgSgIgRgKQghgUgegYQgPgMgNgNQgUgVgQgXQgRgYgOgaQgLgSgIgTQgIgUgHgTQgXhDgHhGQgKBJgJBJQgQCRgMCSQgLCSgFCSQgIDlAKDmIjMAGIADgXQAGgxAEgxQAEgxABgwQABgxgCgwQgCgxgFgwQgFgwgHgwQgIgwgKgwQgVhhgiheIhNApIgKA4QgLA2gMA3QgNA2gOA2QgOA1gPA1QgQA1gRA0QgRA0gTAzQgSAzgVAyQghBRglBPgEhA2AzHQiOGYhgGlIBhAAIAqhhQBKitA1i1QBAjYAhjfIAoAGIgFAgIBZg8QAyCFAdCJQA5EPgjEUIB0gEQgcrOCJrAIAgADIgEBeQgDAxADAvQADAtAGArQAMBZAmBRQAiBIA8AyQBlBUCFAOIA6gkQhrhMhVhfQi7jSg+kUImokGIAgl1IirgrIgzGCQgmAMgnAPQguAPgqAVQgoATglAWQhMAsg5BFQgzA+gQBOQgcCDAnCAQh5A8hxBJQjCB+iAC/IAAA2IIjmJQAgAAAZAXQA8A2ApBEInvMGIARAPQCBh8BtiOQDEkBCKkngA6cYWQA3D/AvEAQAJAugJAuQgMA5gnArIBoBpQBOFSBAFWQA4EuAaE0QADApACAqQACBAgIA/QBCgwBCgzQGAkuGakMQDSiJDihpQD+h0EHhbQlxqulJrDQiblKiBlVQgNgigLghQgNgqAGgsQEuA/EyATQF7APF8ADIA2AAQCiAGCfAkQAngoAag0QB7juBSkAQCqoVB7oiIAShVQALg3ADg4QiuATiugRQhNgGhLgRQhigYhhgdQhSCvhEC2Qh+FTizE3QgHAMgLAIQhUBDhvAAQjuACjugqIhegNQgvgHgvgMQgogHgSAPQgcBDg4AvQgKAJgMADQhUAdhWgeQg4gVg3gWQk+iElLhbIABALIBNBiIBnB0QA4A+AaBOQAHATgOASQgaAkgpAPQgbAJgdgEQiVgViMhAQghgOghgKQhGgVgvg3QgUgYgSgYQguhAg7g6QgjAAgiAFQhVAJhRAdQj8BakEg6QgigGgigCQmIggmEgvIiagQQhrgLhtgJQgGAogOAnQhsEiiTEUQi5FcinFkQgpBYgmBZQhFCggzCoQDMERFQBEQAcAGAeADQDGAaDFgnQB/nxDAndQAdhJArhCQApg+BRgJQDGgdDHAmII0BwQAlAHAkAGQA6AIA5gBICeLYgA3dhXQBQAXBOAlQBoAuBvAWQBHAPAzgwQAAgJgEgIQhJh8hlhpIgYgYQAiBLAtBEQAPAYgOAWQiVANiVgiQgSgEgPgLQhshQhlhdgAyQhsQgmg2gdg9QgUgqgIgrQgHgmgYgeQiBikiDihIg/n/IAngFIA+HzIDxEjQFYBbFJCLQByAxB6ANQA7AFAigxIAAgYQAogxAKhMQAOhshmgzQBFgCBGgGQBugGBgg1QAngXARgnQAyhyhMhnQiFBJiWAmQikAqikgfQgogHgjgUQgzgdgqgmQiOiFhSixQhOimguixIgLApQgQA9gpAsQg1A5hMgfIALgmIAgAIQARADAOgJQBKgyALhgQADgUgDgTQgXiOBTh2IAiAVQgeAsgPAwQgOAwAMAyQAZBqBMBPQCLCRC7BJQDtBcEBgDQB4gCBrAyQAUgEAVADIA7AAQArAEAegaQADgEAAgFQAHg3gRg2QgYhMgThNQAjgQAegbQBehVALiAQALiIgWiIQgCgLAGgKQBXiSAfimIiTkrQh6BMiEA5QgKAFgNgEQh8grhlhbQhthjhqhoQhyhvgHiaIjFgLIgpAgIkhDdQhZBHhNBSIAyF4Ig5BCQg4A/hJAnQg3AfgVg3QgIgTgGgVQgvishxiKQhUhpiAgrQhfgfhUA2QipBtg8DBQgcBaAcBXQAzCdCGBfQCaBuCyA6IASAGIlXUxIA4gbQBUgsBegIQBLgDA4AwICSCBQAmAhAyAJQBxAPByAEIAAAAgEAIcgiDQgQBdgiBYQgiBWgqBOQAKAyAHAwQAZC0hUCeQgWAogjAaQgiAagQAaIAHAXQAcBUAKBaQAKBlhmADIhzACQAIASADAUQADARgEATQgDALgFALIgLAVQAuBAAJBOQARCdiSA8QhsAuh3ADQAIAQAGAQQANAngDAnQgDAfgIAdQEcAsEdAbQCNAPCHgoQAQgFAJgMQBuiLBIinQCAksB4kxQAdhKAmhEIB0AeQA/hwA3hzQASglADgnQgGgJgJgFQhqg+hvg0QhJghgfhNQg6iNhPh/Qggg1g0geQgzgfANg0IgkAHQiTAUiTgRgAuZyJQBTC6CXCJQAZAXAdASQBzBKCOgQQDLgUC0haQAYgNAQgTQAmgugYg9IhTgaQh8gLh9gFQmsgUkkkzQAbBkArBggEANlgi2QAIAKAKAGQAsAeAeArQBoCSBHCoQAMAcAUAVQAzA2BLAZQBcAgBHA/QAPAOgFASQgwCihbCSIBFAQIB/AUQAAggAJgdQA+jZCniWQBThLBrgZQC9gwCwhWQDGhjBti8QA0hYgEhjQgHABgFADQi7CIiqCfQhhBahtBHIgRgIQgHgdAagZIF9lvQAigfAFgfQhBAGg0AsQizCWi+CFIgVgiQBag/BKhUQAngsAfgzQgzgBgxAJQg1AMgxAWQhkAthYBFQiQBwimBLQgtAUgpgXQh+hHhah2Qgjgug3gPQg5gRg+AAQgRgCgQAAQhKAAg7AlgEgX1gqxIi9DCIAZAPQCzB5BgDCQAsBYARBgIABACQAKABAIgFQBRgwA9hLIAagfIg5l5IAQgCIAOgcQABAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQADAAADgCQAnguAugmQCRh7CchvIAQgMgEAGAgm+IBeDTQDGAbDAguQBcgWBJg6QCbh8AYjGQAIhEgBhHIj8iKgEA3PgxLQioAdioAXQinAaioAXIlRAnIlRAiIlRAaIlSAVIlTAOIBTAtIAAAMQgBAsgDAsQgCAogHApQgGAlgKAlQgJAigNAhQgNAfgRAeQgQAcgTAaQgUAZgYAWQgXAWgZAVIFagtIFZgpIFagjIFZgfIFagaIFZgWIFagQIFZgNQgJgtgHguQgHgsgEgsQgEgqAAgqQAAgpAEgpQADgmAHgnQAHglALgkQAKgkAOgjQAOgiAQghQinAdioAagEgG+gt+QADCBBcBfQBUBVBVBSQBxBwCOA9QAGACAHABQBfgqBagzQAngXAkgdQEljvEijyIpYkugEA8ugxBQgPAigLAkQgMAkgHAlQgoDVA2DSQJeghJdAhIgHggQgVhqBEhUQppiNo7kOQgRAhgPAigEga/g3fICLM2IAqgsQGohrGphmQAtgMAsAFIAQABIAhACIATADIATABIAqAFQBIjPAZjZQAIhJANhKQAfi5gii1IgFgSIgFgQIgFgPIgGgNgEgE3g7iQACDBgeC+QgOBZgMBaIAAACIhFD/ILolbIAwpqIq9gYQAfBTABBXgEgOLhAFQhtANhiAxQi2BcgEDJIABARIL7j8Qgmg4hBgZQhngphvAAQgbAAgbACgA4f89QhNihiOhoQhrhQiGgIIAEgoIAUABQDMAVCHCcQB+CTA+C5IAHASIgmAOQgZhMgjhJgEgL1gk6QBDgoBLgcQDQhRDgASIgDAoQhQgGhOAGQjJAQivBjIgRAKg");
	this.shape_20.setTransform(0.025,-0.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-518.4,-414,1036.9,828);


(lib.firehydrant = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// firehydrant
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("AmwAAINhAA");
	this.shape.setTransform(-288.7,-45.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,2,0,3).p("ADBAAImBAA");
	this.shape_1.setTransform(-432.2,-45.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,2,0,3).p("ArUg7IWpAAIAAB3I2pAAg");
	this.shape_2.setTransform(-347.675,-51.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC381F").s().p("ArUA8IAAh3IWpAAIAAB3g");
	this.shape_3.setTransform(-347.675,-51.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,2,0,3).p("AnEkmQAggjGkgBQGngCAeAmQAbAggLEsQgFCWgKCPIuKAAQgKiRgGiXQgKktAagcg");
	this.shape_4.setTransform(-347.752,-84.68);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC381F").s().p("AnEFLQgKiRgGiXQgKktAagcQAggjGkgBQGngCAeAmQAbAggLEsQgFCWgKCPg");
	this.shape_5.setTransform(-347.752,-84.68);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,2,0,3).p("AiBk8QE6D1hAGF");
	this.shape_6.setTransform(-335.0701,-227.114);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,2,0,3).p("ABok8QjiC2ASHE");
	this.shape_7.setTransform(-358.4635,-227.1418);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,2,0,3).p("AA4AAQAAAYgQAQQgRARgXAAQgXAAgQgRQgRgQAAgYQAAgWARgRQAQgQAXAAQAXAAARAQQAQARAAAWg");
	this.shape_8.setTransform(-348.05,-264.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC381F").s().p("AgnAoQgRgRAAgXQAAgXARgQQARgQAWAAQAYAAAQAQQAQAQABAXQgBAXgQARQgQAQgYAAQgWAAgRgQg");
	this.shape_9.setTransform(-348.05,-264.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,2,0,3).p("Ak9AAIAAEvQAAANglABQgmACAAgQIAAkvQAAgUAmgBQAlgBAAAWgAmRBDIAACkQAAAHgSABQgRABAAgJIAAikQAAgLARgBQASAAAAAMgAmEkMIMbAAQAkAAADAlQAEAmgrAAIsbAAQg4AAgBgmQgCglA7AAgAnFk8IOfAAQAqAAAEAUQAFAUgzAAIufAAQhBAAgCgUQgBgUBEAAgAGaAAIAAEvQAAANgmABQglACAAgQIAAkvQAAgUAlgBQAmgBAAAWg");
	this.shape_10.setTransform(-346.9332,-163.6139);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC381F").s().p("AFPEvIAAkvQAAgUAlgBQAmgBAAAWIAAEvQAAANgmABIgIAAQgdAAAAgOgAmIEvIAAkvQAAgUAmgBQAlgBAAAWIAAEvQAAANglABIgIAAQgeAAAAgOgAm0DnIAAikQAAgLARgBQASAAAAAMIAACkQAAAHgSABIgDAAQgOAAAAgIgAmEjBQg4AAgBgmQgCglA7AAIMbAAQAkAAADAlQAEAmgrAAgAnFkUQhBAAgCgUQgBgUBEAAIOfAAQAqAAAEAUQAFAUgzAAg");
	this.shape_11.setTransform(-346.9332,-163.6139);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,2,0,3).p("AA7AAQAAAYgSASQgRARgYAAQgYAAgRgRQgRgSAAgYQAAgYARgRQARgRAYAAQAYAAARARQASARAAAYg");
	this.shape_12.setTransform(-344.5578,-152.1187,1.7813,1.7813);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC1507").s().p("AgpApQgRgRAAgYQAAgXARgSQASgRAXAAQAYAAASARQARASAAAXQAAAYgRARQgSASgYAAQgXAAgSgSg");
	this.shape_13.setTransform(-344.5578,-152.1187,1.7813,1.7813);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,2,0,3).p("ADpAAQAABghEBEQhEBEhhAAQhgAAhDhEQhFhEAAhgQAAhgBFhEQBDhEBgAAQBhAABEBEQBEBEAABgg");
	this.shape_14.setTransform(-345.3362,-152.2624,1.192,1.192);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC381F").s().p("AikCkQhDhEAAhgQAAhfBDhEQBEhFBgAAQBhAABEBFQBDBEAABfQAABghDBEQhEBEhhAAQhgAAhEhEg");
	this.shape_15.setTransform(-345.3362,-152.2624,1.192,1.192);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,2,0,3).p("Al7mtIL3AAIAANbIr3AAg");
	this.shape_16.setTransform(-345.9976,-150.4905,0.8442,0.8442);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC1507").s().p("Al7GuIAAtbIL3AAIAANbg");
	this.shape_17.setTransform(-345.9976,-150.4905,0.8442,0.8442);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,2,0,3).p("AmTFAQgsiMAAg2QAAi4CDiDQCDiDC5AAQC6AACCCDQCECDAAC4QAAA2glCM");
	this.shape_18.setTransform(-347.2,-227.3122);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC381F").s().p("AmTFBQgsiNAAg1QAAi5CEiDQCCiDC5AAQC5AACECDQCDCDgBC5QAAA1gkCNg");
	this.shape_19.setTransform(-347.2,-227.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,2,0,3).p("AnFk8IOfAAQAqAAAEAUQAFAUgzAAIufAAQhBAAgCgUQgBgUBEAAgAmEkMIMbAAQAkAAADAlQAEAmgrAAIsbAAQg4AAgBgmQgCglA7AAgAmRBDIAACkQAAAHgSABQgRABAAgJIAAikQAAgLARgBQASAAAAAMgAk9AAIAAEvQAAANglABQgmACAAgQIAAkvQAAgUAmgBQAlgBAAAWgAGaAAIAAEvQAAANgmABQglACAAgQIAAkvQAAgUAlgBQAmgBAAAWg");
	this.shape_20.setTransform(-346.9332,-163.6139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_20},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_20},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_20},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_20},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// water
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhAgbYAAAAAHAFAMAHYAMAGAQAIAQAGYAPAGARAHANAEYAMAEAJACAAAAIAAAAYAAAAgHgFgMgHYgMgGgQgIgQgGYgPgGgRgHgNgEYgMgEgJgCAAAAIAAAA");
	this.shape_21.setTransform(-232.95,-135.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag5hFYAAAAAGAKAKAOYAKAOAOASAOAQYANASAQARALAMYAMAMAJAIAAAAIAAAAYAAAAgGgKgKgOYgKgOgOgSgOgQYgNgSgQgRgLgMYgMgMgJgIAAAAIAAAA");
	this.shape_22.setTransform(-192.7,-67.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhIgxYAAAAAJAIANAKYAMAKASAOASALYARANATALAOAJYAPAIAKAFAAAAIAAAAYAAAAgJgIgNgKYgMgKgSgOgSgLYgRgNgTgLgOgJYgPgIgKgFAAAAIAAAA");
	this.shape_23.setTransform(-165.2,-84.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhXgsYAAAAALAHAQAKYAPAJAWAMAWAKYAVAMAWAKARAIYARAHAMAEAAAAIAAAAYAAAAgLgHgQgKYgPgJgWgMgWgKYgVgMgWgKgRgIYgRgHgMgEAAAAIAAAA");
	this.shape_24.setTransform(-176.2,-114.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhXgqYAAAAALAHAQAJYAPAJAWAMAWAJYAVALAWAKARAHYARAHAMAEAAAAIAAAAYAAAAgLgHgQgJYgPgJgWgMgWgJYgVgLgWgKgRgHYgRgHgMgEAAAAIAAAA");
	this.shape_25.setTransform(-237.2,-117.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhDglYAAAAAIAHAMAIYAMAIARAKARAIYAPAKASAIANAGYANAGAKADAAAAIAAAAYAAAAgIgGgMgIYgMgIgRgKgRgIYgPgKgSgIgNgGYgNgGgKgEAAAAIAAAA");
	this.shape_26.setTransform(-284.2,-129.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Am0EdQgigcgOgjQgWAEgWAAQhWAAg8gyQg8gxAAhGQAAhFA8gyQA7gxBSAAIgBgRQAAhGA9gxQA7gyBWAAQAuAAAmAPIACgBIAHgGQAygmBEgFIAQgBIAEAAQAQAAAPACQAcADAXAJQAcAKAZASIAAABQAWgHAXgCIARAAIADAAQAQgBAQADQAaACAYAJQAdAKAYATIAKAHIATARQAPAIAPAKQAWgGAZgCIAQgBIADAAQAQAAAPADQAbACAYAJQAjAMAcAYQAdAXAPAdIAJABQAbACAYAJQAdALAXARIALAIQAXATAPAXQASAcADAgIABAQQAABGg8AxIgBACQgkAcgrAMQgfAJgjgBQgcABgagGQgJAKgMAKQgkAegsALQgfAIgiAAQhPAAg6gqIgBgBQghAYgnALQggAIgiAAQhOAAg6gqQgOAbgcAXQg8AxhWAAQhVAAg8gxg");
	this.shape_27.setTransform(-116.9,-42.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A0AphQTgAzUPRjQ0/hxgtCPQk7patImCg");
	this.shape_28.setTransform(-177.8285,-93.9256);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66CCCC").s().p("Az3mCIAAjYQTgA0UPRjQ0/hxgtCOQk7patImCg");
	this.shape_29.setTransform(-178.725,-94.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66CCCC").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_30.setTransform(-177.05,-39.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66CCCC").s().p("AhXBZQglglAAg0QAAgzAlglQAkgkAzAAQA0AAAkAkQAlAlAAAzQAAA0glAlQgkAkg0AAQgzAAgkgkg");
	this.shape_31.setTransform(-137.15,-48.35,1,1,0,0,0,27.8,-4.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggAhQgNgOAAgTQAAgTANgNQAOgOASAAQAUAAANAOQANANAAATQAAATgNAOQgNAOgUAAQgSAAgOgOg");
	this.shape_32.setTransform(-218.3,-65.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgYQAAgWAQgRQAQgRAXAAQAXAAARARQAQARAAAWQAAAYgQAQQgRAQgXABQgXgBgQgQg");
	this.shape_33.setTransform(-31.35,-75.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape_34.setTransform(-55.95,-69.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_35.setTransform(-204.95,-29.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqAsQgSgTAAgZQAAgYASgTQARgRAZgBQAZABATARQASATAAAYQAAAZgSATQgTARgZABQgZgBgRgRg");
	this.shape_36.setTransform(-80.8,-90.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Am0D3QgigZgOgeQgWADgWAAQhWAAg8grQg8gqAAg9QAAg8A8grQA7gpBSgCIgBgNQAAg9A9gsQA7gpBWAAQAuAAAmAMIACgBIAHgFQAyghBEgFIAQAAIAEAAQAQAAAPACQAcACAXAHQAcAKAZAPIAAAAQAWgEAXgDIARAAIADAAQAQAAAQACQAaACAYAIQAdAIAYAQIAKAGIATAQQAPAGAPAKQAWgHAZAAIAQgCIADAAQAQAAAPACQAbADAYAHQAjALAcAUQAdAVAPAYIAJABQAbACAYAIQAdAJAXAPIALAGQAXARAPAUQASAYADAcIABAPQAAA8g8AqIgBABQgkAZgrAKQgfAIgjAAQgcgBgagEQgJAJgMAHQgkAagsAKQgfAIgiAAQhPAAg6glIgBgBQghAVgnAJQggAIgiAAQhOAAg6glQgOAXgcAVQg8AqhWAAQhVAAg8gqg");
	this.shape_37.setTransform(-116.9,-42.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("Az0phQThAzT2ReQ0mhsguCPQk6patJmCg");
	this.shape_38.setTransform(-179.0828,-93.9256);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66CCCC").s().p("AzrmCIAAjYQTgA0T3RdQ0mhrguCOQk7patImCg");
	this.shape_39.setTransform(-179.975,-94.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag1gXYAAAAAGAFAKAFYAJAGAOAHANAFYAMAGAOAFALADYAKADAIACAAAAIAAAAYAAAAgGgFgKgFYgJgGgOgHgNgFYgMgGgOgFgLgDYgKgDgIgCAAAAIAAAA");
	this.shape_40.setTransform(-276.875,-143.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Am3ElQgigcgOglQgWAFgXAAQhVAAg8g0Qg8gyAAhJQAAhGA8g0QA7gyBSgBIgBgRQAAhIA8g0QA8gxBWAAQAtAAAnAOIACgCIAHgEQAygoBEgFIAQgBIAEAAQAQAAAPADQAbACAYAJQAcAKAYATIABAAQAVgFAYgDIAQgBIAEAAQAQAAAPADQAbACAYAKQAdAKAYASIAKAIIATASQAPAIAPALQAWgHAYgBQAIgCAIAAIAEAAQAQAAAPACQAbADAYAKQAjAMAcAZQAdAYAPAdIAIABQAbACAYAJQAdALAYATIALAHQAXAUAZAzQAaAygLAMQgLANAEAYQAEAZg8AyIgBABQgkAegsAMQgeAJgjgBQgcAAgagEQgJAKgMAJQgkAfgsAMQgfAJgiAAQhPAAg6gsIgBgCQghAZgoAMQgfAJgiAAQhOAAg6gsQgPAcgbAXQg8AzhWAAQhVAAg8gzg");
	this.shape_41.setTransform(-116.5932,-42.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("Az0phQTgAzT3RdQ0nhrgtCPQk7patImCg");
	this.shape_42.setTransform(-179.0575,-93.9256);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#66CCCC").s().p("AzrmCIAAjYQTgA0T3RdQ0nhrgtCOQk7patImCg");
	this.shape_43.setTransform(-179.95,-94.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgogRYAAAAAEAEAIAFYAHAEAKAEAKAFYAJAEALAEAIACYAIACAGABAAAAIAAAAYAAAAgEgEgIgFYgHgEgKgFgKgEYgJgEgLgEgIgCYgIgCgGgBAAAAIAAAA");
	this.shape_44.setTransform(-298.125,-141.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Am0EAQgigagOgfQgWAEgWAAQhWAAg8gtQg8gtAAg+QAAg9A8gtQA7grBSgCIgBgOQAAg/A9gtQA7grBWAAQAuAAAmANIACgCIAHgFQAygiBEgFIAQAAIAEAAQAQAAAPACQAcADAXAHQAcAKAZAPIAAABQAWgFAXgDIARAAIADAAQAQAAAQADQAaABAYAJQAdAIAYAQIAKAHIATAQQAPAHAPAJQAWgGAZgBIAQgBIADAAQAQAAAPABQAbADAYAIQAjALAcAWQAdAUAPAaIAJAAQAbADAYAHQAdAKAXAQIALAHQAXARAPAUQASAaADAcIABAPQAAA/g8ArIgBABQgkAagrALQgfAHgjAAQgcAAgagEQgJAJgMAIQgkAbgsAKQgfAIgiAAQhPgBg6glIgBgCQghAWgnAKQggAIgiAAQhOgBg6glQgOAXgcAWQg8ArhWAAQhVAAg8grg");
	this.shape_45.setTransform(-116.9,-42.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A0KpgQTgA0UjREQ1ThSgtCOQlnofscm9g");
	this.shape_46.setTransform(-176.8174,-94.0729);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66CCCC").s().p("A0BmCIAAjYQTgA0UjRFQ1ThTgtCOQlnofscm9g");
	this.shape_47.setTransform(-177.725,-94.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgbAbQgLgLAAgQQAAgPALgMQAMgLAPAAQAQAAALALQAMAMAAAPQAAAQgMALQgLAMgQAAQgPAAgMgMg");
	this.shape_48.setTransform(-60.6,-76.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_49.setTransform(-45.35,-63.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaAaQgKgLAAgPQAAgPAKgKQAMgLAOAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgOAAgMgLg");
	this.shape_50.setTransform(-200.55,-28.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AglgcYAAAAAEAFAGAHYAHAGAJAIAJAGYAIAHAKAHAIAEYAIAEAGADAAAAIAAAAYAAAAgEgFgGgHYgHgGgJgIgJgGYgIgHgKgHgIgEYgIgEgGgDAAAAIAAAA");
	this.shape_51.setTransform(-154.25,-78.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Am0E3QgigfgOgmQgWAFgWAAQhWAAg8g4Qg8g1AAhMQAAhLA8g3QA7g0BSgBIgBgSQAAhNA9g3QA7g0BWAAQAuAAAmAQIACgCIAHgGQAygqBEgFIAQgBIAEAAQAQAAAPADQAcACAXAKQAcALAZAUIAAAAQAWgGAXgDIARAAIADAAQAQAAAQACQAaADAYAJQAdAMAYATQAFADAFAFIATATQAPAJAPALQAWgIAZgBQAHgBAJAAIADAAQAQgBAPADQAbADAYAKQAjANAcAaQAdAZAPAgIAJAAQAbAEAYAJQAdAMAXATIALAHQAXAWAPAYQASAgADAjIABASQAABLg8A2IgBABQgkAggrANQgfAIgjAAQgcAAgagFQgJALgMAKQgkAggsAOQgfAIgiABQhPAAg6gvIgBgCQghAbgnANQggAIgiABQhOAAg6gvQgOAdgcAaQg8A1hWAAQhVAAg8g1g");
	this.shape_52.setTransform(-116.9,-42.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A0DphQTgAzUVRjQ1EhxguCPQk7patImCg");
	this.shape_53.setTransform(-177.5774,-93.9256);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#66CCCC").s().p("Az6mCIAAjYQTgA0UVRjQ1EhxguCOQk7patImCg");
	this.shape_54.setTransform(-178.475,-94.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgqgNYAAAAAFAEAIADYAHAEALADAKAEYAKADALADAIABYAJACAGAAAAAAIAAAAYAAAAgFgEgIgDYgHgEgLgDgKgEYgKgDgLgDgIgBYgJgCgGAAAAAAIAAAA");
	this.shape_55.setTransform(-279.55,-134.875);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhBgTYAAAAAIAEAMAFYAMAFAQAFARAFYAPAFARAEAMADYANACAJABAAAAIAAAAYAAAAgIgEgMgFYgMgFgQgGgRgEYgPgFgRgEgMgDYgNgCgJgBAAAAIAAAA");
	this.shape_56.setTransform(-245.3,-132.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag+gZYAAAAAIAFALAGYALAGAPAHAQAGYAPAGAQAGAMAEYAMADAJACAAAAIAAAAYAAAAgIgFgLgGYgLgGgPgHgQgGYgPgGgQgGgMgEYgMgDgJgCAAAAIAAAA");
	this.shape_57.setTransform(-195.8,-120.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgcgiYAAAAADAFAEAIYAEAHAHAJAHAIYAGAJAIAIAHAGYAGAGAFADAAAAIAAAAYAAAAgDgFgEgIYgEgHgHgJgHgIYgGgJgIgIgHgGYgGgGgFgDAAAAIAAAA");
	this.shape_58.setTransform(-183.575,-55.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhCgcYAAAAAIAFAMAHYAMAGAQAIARAHYAQAHARAGANAEYANAFAJACAAAAIAAAAYAAAAgIgFgMgHYgMgGgQgIgRgHYgQgHgRgGgNgEYgNgFgJgCAAAAIAAAA");
	this.shape_59.setTransform(-139.625,-93.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ag5glYAAAAAHAHAKAIYAKAIAOAKAOAIYAOAKAPAIALAGYAMAGAIAEAAAAIAAAAYAAAAgHgHgKgIYgKgIgOgKgOgIYgOgKgPgIgLgGYgMgGgIgEAAAAIAAAA");
	this.shape_60.setTransform(-260.225,-117.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A0IphQTgAzUfReQ1OhsguCPQk7patImCg");
	this.shape_61.setTransform(-177.0742,-93.9256);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#66CCCC").s().p("Az/mCIAAjYQTgA0UfRdQ1OhrguCOQk7patImCg");
	this.shape_62.setTransform(-177.975,-94.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgvgNYAAAAAGAEAJADYAIAEAMADAMAEYAKADANADAJABYAJACAHAAAAAAIAAAAYAAAAgGgEgJgDYgIgEgMgDgMgEYgKgDgNgDgJgBYgJgCgHAAAAAAIAAAA");
	this.shape_63.setTransform(-270.35,-132.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhCgYYAAAAAIAEAMAGYAMAGARAHAQAGYAQAGARAGANADYANAEAJABAAAAIAAAAYAAAAgIgEgMgGYgMgGgRgHgQgGYgQgGgRgGgNgDYgNgEgJgBAAAAIAAAA");
	this.shape_64.setTransform(-236.775,-128.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ag3gPYAAAAAGADALAFYAKAEAOAEAOAEYANAEAOADALACYALACAHAAAAAAIAAAAYAAAAgGgDgLgFYgKgEgOgEgOgEYgNgEgOgDgLgCYgLgCgHAAAAAAIAAAA");
	this.shape_65.setTransform(-186.775,-115.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgTgWYAAAAABAEADAFYADAFAEAHAFAEYAEAGAGAFAFAEYAEADAEACAAAAIAAAAYAAAAgBgEgDgFYgDgFgEgHgFgEYgEgGgGgFgFgEYgEgDgEgCAAAAIAAAA");
	this.shape_66.setTransform(-182.7,-54.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag/gdYAAAAAHAFAMAHYALAHAQAIAQAHYAPAHAQAHANAEYANAFAIACAAAAIAAAAYAAAAgHgFgMgHYgLgHgQgIgQgHYgPgHgQgHgNgEYgNgFgIgCAAAAIAAAA");
	this.shape_67.setTransform(-130.225,-88.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag0gcYAAAAAGAFAKAHYAJAGAMAIAOAGYAMAIANAGALAEYAKAFAIACAAAAIAAAAYAAAAgGgFgKgHYgJgGgMgIgOgGYgMgIgNgGgLgEYgKgFgIgCAAAAIAAAA");
	this.shape_68.setTransform(-192.05,-95.875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag+gmYAAAAAHAGALAJYALAIAQALAPAIYAPAKAQAJANAGYAMAGAJAEAAAAIAAAAYAAAAgHgGgLgJYgLgIgQgLgPgIYgPgKgQgJgNgGYgMgGgJgEAAAAIAAAA");
	this.shape_69.setTransform(-251.275,-111.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Am0EkQgigdgOgkQgWAEgWAAQhWAAg8gzQg8gzAAhHQAAhGA8g0QA7gxBSgBIgBgRQAAhIA9gzQA7gxBWAAQAuAAAmAPIACgDIAHgFQAygnBEgFIAQgBIAEAAQAQAAAPADQAcACAXAJQAcALAZASIAAAAQAWgFAXgDIARgBIADAAQAQAAAQADQAaADAYAJQAdAKAYASIAKAIIATASQAPAIAPAKQAWgHAZgBQAHgCAJAAIADAAQAQAAAPADQAbADAYAJQAjAMAcAZQAdAYAPAdIAJABQAbACAYAJQAdALAXATIALAGQAXAVAPAXQASAdADAhIABAQQAABIg8AxIgBACQgkAdgrANQgfAIgjAAQgcAAgagFQgJAKgMAJQgkAfgsAMQgfAJgiAAQhPAAg6gsIgBgBQghAZgnALQggAJgiAAQhOAAg6gsQgOAcgcAYQg8AyhWAAQhVAAg8gyg");
	this.shape_70.setTransform(-116.9,-42.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A0IphQTgAzUfRUQ1OhiguCPQk7patImCg");
	this.shape_71.setTransform(-177.0718,-93.9256);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#66CCCC").s().p("Az/mCIAAjYQTgA0UfRTQ1OhhguCOQk7patImCg");
	this.shape_72.setTransform(-177.975,-94.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-284.2,y:-129.7}},{t:this.shape_25,p:{x:-237.2,y:-117.7}},{t:this.shape_24,p:{x:-176.2,y:-114.45}},{t:this.shape_23,p:{x:-165.2,y:-84.45}},{t:this.shape_22,p:{x:-192.7,y:-67.95}},{t:this.shape_21,p:{x:-232.95,y:-135.2}}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_26,p:{x:-279.45,y:-126.95}},{t:this.shape_25,p:{x:-229.45,y:-113.95}},{t:this.shape_24,p:{x:-171.45,y:-111.95}},{t:this.shape_23,p:{x:-161.45,y:-81.95}},{t:this.shape_22,p:{x:-189.45,y:-63.95}},{t:this.shape_21,p:{x:-226.7,y:-132.45}},{t:this.shape_36,p:{y:-90.85}},{t:this.shape_35,p:{y:-29.45,x:-204.95}},{t:this.shape_34,p:{y:-69.45}},{t:this.shape_33,p:{y:-75.35}},{t:this.shape_32,p:{x:-218.3,y:-65.35}}]},3).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_26,p:{x:-275.7,y:-126.95}},{t:this.shape_25,p:{x:-222.7,y:-110.95}},{t:this.shape_24,p:{x:-165.95,y:-108.7}},{t:this.shape_23,p:{x:-157.2,y:-78.7}},{t:this.shape_22,p:{x:-189.45,y:-63.95}},{t:this.shape_21,p:{x:-220.95,y:-132.45}},{t:this.shape_36,p:{y:-96.85}},{t:this.shape_35,p:{y:-38.45,x:-204.95}},{t:this.shape_34,p:{y:-74.95}},{t:this.shape_33,p:{y:-82.35}},{t:this.shape_32,p:{x:-218.2,y:-73.3}},{t:this.shape_40,p:{x:-276.875,y:-143.625}}]},3).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_26,p:{x:-271.45,y:-123.95}},{t:this.shape_25,p:{x:-210.7,y:-105.7}},{t:this.shape_24,p:{x:-158.45,y:-103.45}},{t:this.shape_23,p:{x:-154.7,y:-78.7}},{t:this.shape_22,p:{x:-186.45,y:-59.45}},{t:this.shape_21,p:{x:-210.7,y:-128.7}},{t:this.shape_36,p:{y:-104.35}},{t:this.shape_35,p:{y:-52.45,x:-201.4}},{t:this.shape_34,p:{y:-85.45}},{t:this.shape_33,p:{y:-101.35}},{t:this.shape_32,p:{x:-218.2,y:-85.3}},{t:this.shape_40,p:{x:-263.375,y:-138.125}},{t:this.shape_44,p:{x:-298.125,y:-141.75}}]},3).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{scaleY:1,y:-42.6}},{t:this.shape_26,p:{x:-265.95,y:-120.95}},{t:this.shape_25,p:{x:-205.45,y:-101.45}},{t:this.shape_24,p:{x:-150.2,y:-97.95}},{t:this.shape_51},{t:this.shape_22,p:{x:-186.45,y:-59.45}},{t:this.shape_21,p:{x:-202.7,y:-123.45}},{t:this.shape_36,p:{y:-114.6}},{t:this.shape_35,p:{y:-67.2,x:-201.4}},{t:this.shape_34,p:{y:-97.2}},{t:this.shape_33,p:{y:-112.35}},{t:this.shape_32,p:{x:-218.2,y:-94.05}},{t:this.shape_40,p:{x:-255.125,y:-135.625}},{t:this.shape_44,p:{x:-286.625,y:-136.75}},{t:this.shape_50,p:{y:-28.35}},{t:this.shape_49,p:{y:-63.15}},{t:this.shape_48,p:{y:-76.15}}]},3).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_62},{t:this.shape_61},{t:this.shape_52,p:{scaleY:0.8283,y:-42.6353}},{t:this.shape_60},{t:this.shape_25,p:{x:-205.45,y:-101.45}},{t:this.shape_59},{t:this.shape_51},{t:this.shape_58},{t:this.shape_57},{t:this.shape_36,p:{y:-119.35}},{t:this.shape_35,p:{y:-76.45,x:-201.4}},{t:this.shape_34,p:{y:-103.95}},{t:this.shape_33,p:{y:-116.35}},{t:this.shape_32,p:{x:-218.2,y:-104.05}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_50,p:{y:-38.85}},{t:this.shape_49,p:{y:-70.4}},{t:this.shape_48,p:{y:-83.15}}]},3).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_51},{t:this.shape_66},{t:this.shape_65},{t:this.shape_36,p:{y:-133.85}},{t:this.shape_35,p:{y:-90.95,x:-201.4}},{t:this.shape_34,p:{y:-114.45}},{t:this.shape_33,p:{y:-135.85}},{t:this.shape_32,p:{x:-214.65,y:-137.7}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_50,p:{y:-45.85}},{t:this.shape_49,p:{y:-82.9}},{t:this.shape_48,p:{y:-91.65}}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452.4,-271.1,426.7,264.90000000000003);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,2,0,3).p("ANDAAQAAFaj0D1Qj1D0laAAQlZAAj1j0Qj0j1AAlaQAAlZD0j1QD1j0FZAAQFaAAD1D0QD0D1AAFZg");
	this.shape.setTransform(0,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA0000").s().p("ApNJPQj1j1AAlaQAAlZD1j1QD0j0FZAAQFaAAD0D0QD1D1AAFZQAAFaj1D1Qj0D0laAAQlZAAj0j0g");
	this.shape_1.setTransform(0,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("ApNJPQj1j1AAlaQAAlZD1j1QD0j0FZAAQFaAAD0D0QD1D1AAFZQAAFaj1D1Qj0D0laAAQlZAAj0j0g");
	this.shape_2.setTransform(0,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,2,0,3).p("AO5AAQAAGLkXEXQkXEXmLAAQmKAAkXkXQkXkXAAmLQAAmKEXkXQEXkXGKAAQGLAAEXEXQEXEXAAGKg");
	this.shape_3.setTransform(0,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AqhKiQkXkXAAmLQAAmKEXkXQEXkXGKAAQGLAAEXEXQEXEXAAGKQAAGLkXEXQkXEXmLAAQmKAAkXkXg");
	this.shape_4.setTransform(0,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ApNJOQj1j0AAlaQAAlZD1j0QD0j1FZAAQFaAAD0D1QD1D0AAFZQAAFaj1D0Qj0D1laAAQlZAAj0j1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:-5}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{y:-5}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{y:0}}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.8,-101.8,193.6,193.6);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(-40,-612.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-606.9},0).wait(2).to({y:-612.9},0).wait(2).to({y:-616.9},0).wait(4));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgKSgieYAAAAAYBEAqB3YAWA7AZBIAeBTYAPApAPAsARAvYAQAuARAxARAzYAjBnAmBuAoB2YAKAdAKAeAKAeYAKAeAKAeAKAfYAUA+AUA/AVBBYAVBAAVBBAVBCYALAhALAhAKAiYAKAiALAhAKAiYAqCIApCKAqCJYAoCKAoCKAnCIYAKAiAKAiAKAiYAJAiAKAhAJAiYASBDASBCASBBYARBCASBAARA+YARA/ARA9APA8YAeB4AdByAaBpYAOA0AMAyAMAwYAMAwALAtAKArYAUBVASBLAOA9YAdB7ARBGAAAAIABADIAGgBIAAgEYAAAAgEgRgHghYgGgigKgwgMg+YgNg+gQhLgShWYgJgrgJgtgKgxYgLgwgMgygMg1YgZhpgbhygch5YgOg8gQg+gRg/YgQg/gRhAgRhBYgRhCgRhCgShEYgRhDgUhEgThEYgniIgniLgpiKYgqiJgriKgpiIYgKgigLgigKghYgLgigLghgLghYgWhCgWhBgVhAYgVhAgWg/gUg+YgLgfgKgegKgeYgLgegKgegLgdYgqh1gnhuglhmYgTgygRgxgSguYgRgugRgsgQgpYgghSgchHgWg7YgYg6gSgvgMgfYgNgfgHgRAAAAIgBgDIgGACIABAD");
	this.shape.setTransform(63.7,-83.7,1,1,0,0,0,-0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhWghYAAAAABADADAGYABADABAEADAEYACAEACAFADAEYADAEAEAGAEAFYAFAFAFAFAGAEYADADADACAEABIAFADYACABACAAACABYAEABAEABAFAAIAGABYACAAABgBADAAIAGgBYACAAACgBACgBYAEgBAEgCADgCYAEgCADgCADgCYADgDADgCADgCYAFgFAFgFAEgFYAEgGAEgEADgEYADgFACgFADgEYACgEABgDACgDYACgGACgEAAAAIAAAAYAAAAgDADgFAFYgCACgCADgDADYgEADgDADgEAEYgEAEgEAEgFAEYgEAEgFADgFAEYgDACgCABgDACYgDACgDABgDACYgCABgDABgDABYgDABgDABgDAAYgBAAgBABgCAAIgEAAYgBgBgCABgBgBIgFgBYgBAAgCAAgBgBIgEgCYgDgBgDgBgCgCYgGgDgFgDgEgEYgFgEgEgDgEgDYgEgEgDgEgDgDYgDgDgDgDgCgDYgEgFgDgCAAAAIAAAA");
	this.shape_1.setTransform(182.85,234.35,1,1,0,0,0,0,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgugqYAAAAgCADgCAFYgBAFgDAIgBAJYgBAFAAAFgBAFYAAAFABAHACAGYACAHAEAIAJAFYAJAEAJgCAHgDYAOgEAJgJAJgHYAJgIAHgIAGgHYAMgOAGgLAAAAIAAAAYAAAAgDABgFADYgEADgHAFgHAFYgIAFgIAGgJAGYgIAGgKAGgKAEYgEABgEABgCgBYgCgBgDgCgCgFYgDgIgCgKgBgIYAAgJgBgIgBgFYAAgGAAgDAAAAIAAAA");
	this.shape_2.setTransform(202.95,233.7,1,1,0,0,0,0.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkgOYAAAAgDACgDADYgDAEgFAFgFAHYgBACgBACgBACYgBADgBACAAAFYABACAAADACACYACACADACACAAYAFACAEgBADAAYAMgDAKgFAKgFYASgLASgNAMgMYAMgLAHgJAAAAIAAAAYAAAAgDABgFACYgEABgHADgHAEYgPAHgTALgRAJYgJAFgKAGgHACYgCABgCAAAAAAYAAABABAAAAABYABAAgBABAAgBYgBgBABgFABgDYACgIACgFABgFYACgEABgDAAAAIAAAA");
	this.shape_3.setTransform(220.6,230.9,1,1,0,0,0,0.6,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag5gpYAAAAgBAAgCABYgBABgCABgDADYgDACgDACgDADYgEAEgEAEgDAFYgDAGgDAIADAIYACAJAHAGAHAEYAOAIAQADAPADYAeAEAegCAWgDYAWgDAPgEAAAAIAAAAYAAAAgEAAgGgBYgHgBgJgBgLgBYgWgCgegCgbgEYgOgCgPgDgKgFYgFgCgFgDgBgDYgCgDAAgEACgFYADgJAFgIAEgGYAEgFACgDAAAAIAAAA");
	this.shape_4.setTransform(-247.65,236.5,1,1,0,0,0,0.4,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWgmYAAAAgCACgDADYgCAEgEAFgDAHYgDAHgEAIgBAKYgBAFAAAGADAHYABAEADAEAEACYAEACAFABADAAYAHAAAGgCAFgCYAEgCAEgCAEgDYAJgFAGgGAGgFYALgKAGgIAAAAIAAAAYAAAAgDABgEACYgEABgGACgGADYgHACgIAEgIADYgDACgEACgEABYgEABgEABgDAAYgBAAgBAAAAAAYAAAAAAAAgBgBYgBgBAAgEgBgEYAAgIABgHABgHYABgIABgGAAgEYABgFAAgCAAAAIAAAA");
	this.shape_5.setTransform(-234.1,245.75,1,1,0,0,0,0.7,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA0AQYAAAAgDABgEACYgCABgCABgDABYgDABgDABgDABYgCABgCAAgBABYgCAAgCAAgCABYgBAAgCAAgCAAYgCAAgCAAgBAAIgDAAIgCgBIgDgBIgBgBIgDgCIgCgBYgBgBgCgCgBgBYgDgDgDgEgDgDYgCgEgDgDgCgDYgEgHgEgIgEgGYgEgGgDgGgCgEYgCgEgBgCAAAAIAAAAYAAAAgBADAAAEYABAFAAAGABAIYABAHADAJADAIYACAFADAEACAFYADAFAEAEAEAEYACACACACADACIADACIAFACIAEACIAEABIAEABIAEAAYADAAADgBACgBYADAAADgBACgBYACgBACgBACgBYACgBACgCABgBYAEgCACgDACgCYADgCABgDACgBYACgEACgCAAAAIAAAA");
	this.shape_6.setTransform(-221.95,253.1,1,1,0,0,0,0.1,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7C01F").s().p("EgyGgCXIABheIPhFMIgBANIAoADIABgCILyD8IgNBZgAVLBMIPvkfIAGAJIAjgUIAAgBIL7jaIApBQI8IICg");
	this.shape_7.setTransform(0.1,288);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AEBFD1").s().p("EgpkAEwQAKhKA8hsQA1hdApguIABgBIABgBQAHgGACgHIACgGQD9g5CPCQQCRCVAjFmgAc8jNQgIhsAHg9QADgNgFgJIAAgBQCxi/DIAnQDNApDmETIr6DaQgjhDgMh7g");
	this.shape_8.setTransform(49,264.7521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED1F29").s().p("EgrRAAmIAXgoQA2heAqhHQAQgZAQgXQA1hLAzgoIAAAAIAYgQQAUgNAVgHQAdAjAfAZIARANIgBACIASAJQAQAKARAIIABAAQA3AXBFADIABAAIACAAIAGAAIAJAAIACAAQAdAAAfgEIAOgCQAgACAdANQAfAPAaAcIABAAIAQASIABACIADACIAOARIAAAAQAaAZAWgDIABAAQAKABALAKIABAAQAFAFAYAcIAAAAQARAUATAOQAhAZAiADIB+A5QgpAxg0BbIAAAAQg+BugLBPgAbcB1QgGiBAZhRIAKgaQAKgXAOgRQArAMApADIAVABIAAADIAbgEIAfgEQA6gMA7gkIAAAAIAIgGIAHgFIABAAQAYgRAYgVIAKgKQA7gjBHAQIABAAIAXAFIABABIAEAAQAKAEANACQAjAGARgPQAJgFAOACIABAAQAHABAkAJQAZAHAYABQApACAegRQAUgDBPgSIgBABIAMgDIABAAQAVgEAFgDQgHBAAJBuIAAABQAMB+AkBHIvlEcQgMiKgGhkg");
	this.shape_9.setTransform(-42.1,257.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#097BB1").s().p("EAMsAmSQlHr4lcsHQkcp7kqqFIjuoAQiwl3i1l8Ii2muIg7iQQIelaIiigQEvOgEMOLQBLEBBJD/QC3KFClJ7QDJMICtL3IAhCXQgtgDgxAIIgNAAIAAADQh3AViCBTIhxkHg");
	this.shape_10.setTransform(33.15,-59.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0664A2").s().p("EgLGAlcIgogTIgrgRIgFgFIgDADQiCguiJAAIASg6QCbniCRnoQBTkaBRkbQC0p9CjqDQBBj/A+kBQBdmDBXmHQFTk9FojqIA7CQID3JsIgshRIACAEQg5hjgGgHIBAC6Mga4A/Gg");
	this.shape_11.setTransform(-171.275,-39.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0764A2").s().p("AB0GMIhAi5QAGAHA5BjIgCgEIAsBRIglANgACdGKgAhZjhIC1GtIBBC+gAicmIIAmgOIgeAlg");
	this.shape_12.setTransform(-80.075,-243.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("EgycAq8IADgIIgHAAIABhsIgNgIIAJgRIBEh2IA+hpIAAgBQAhg1AhgoQAogyAogfIABAAIAYgSIABAAQAggUAhgIIAMgEIAJALQAdAmAhAZIABABIAJAHIABgDQA2h7AGifQgogEgoABIgCAGIgQgGIgRABIAAgGIgFgCIAFgPIgBgRIAHAAIASg6QCyoqCkovQA+jTA8jUQC1p8CjqDQBAkAA/kAQBemGBYmIIgHgIIA+g5QNAr5OykPIATgGIAAAAIABAAIAEATQE2OwEQOaQBLEBBJD/QC3KFClJ6QDJMICtL4IAiCZIAGABIgCARIADAQIgFABIAAAGIgRgCIgQAEIgBgFQgmgDgnAFQAIBoBvCWIABAAIAKAOIABACIAAAAIAcgXIgCgDIAPgJIACgBIAAAAQBJgtBXAUIgBAAQAMACAQAEIACAAIADABIATAFQAOACAGgDIABgBQATgPAgAFIAAgBQAJABApALIAAgBQAWAGASABQAfABAWgMIADgDIAGgBQAJAABagUIAAAAIAKgCIABAAQAhgHASADQC9jODYAqQDXApDyEmIACgCIABACIACgBIAEALIAGAIIgCACIArBWIADgBIAIAaI81IPIgCgIIgGADIg8hbIgPACIgCgUQgOiWgGhsQgGiLAchXIAAAAIALgdIAAAAQAPgjAWgaIAJgKIANAEQAtAPAqADIABAAIALABIABAAIgBgEQgbiDhuh2IgNgPIAIgGQgkASgkAYIABACIgRAHIgPALIgCgDIgDABIgHgRIgKgPIACgCIh5kcQlIr4lbsIQkdp6kpqFIjvoAIj+ocMgbGA/jIglgQIAIgSIgJAUIgSgJIgXgLIgqgRQhQBMAFDAIABAAIAAAUIAkgEIAAgDIARABIACgBIAAABIABAAQAgACAcAKQAvARAmAoIABABIARATIABAAIABACIgBgCIACABIADAEIALAPIABAAQAKAJAIABIAAAAQAXgBAZAVQAIAFAbAhIAAAAQAPAQAQAMIAAAAQAYATAYABIAGAAIAEADICQBDIAEACQEQhACaCdQCbCdAhF6IADAAIAAACIABAAIgDAJIABANIgCAAIgOBfIAEABIgJAZgEgyFAqoIbvJSIANhZIryj9IgBAAIAAACIgogDIABgMIvhlNgEgfJAoxIgCAGQgCAGgHAHIgBABIgBABQgpAug1BeQg8BrgKBLILxD8QgjlmiRiWQhnhnifAAQg/AAhHAQgEAVMAuLIA0BOIcIoDIgphQIr7DaIgBAAIABABIgjAUIgGgKgEgvfAk0QgQAXgQAZQgqBHg2BeIgXApIPWFJQALhPA+huIAAAAQA0hbApgxIh+g6QgigDghgZQgTgOgRgUIAAAAQgYgcgFgFIgBAAQgLgKgKgBIgBAAQgWADgagZIAAAAIgOgRIgDgCIgBgCIgQgSIgBAAQgagcgfgPQgdgNgggCIgOACQgfAEgdAAIgCAAIgJAAIgGAAIgCAAIgBAAQhFgDg3gXIgBAAQgRgIgQgKIgSgJIABgCIgRgNQgfgZgdgjQgVAHgUANIgYAQIAAAAQgzAog1BLgEAVUAmUIgKAaQgZBRAGCCQAGBkAMCKIPlkcQgkhIgMh+IAAgBQgJhuAHhAQgFADgVAEIgBAAIgMADIABgBQhPASgUADQgeARgpgCQgYgBgZgHQgkgJgHgBIgBAAQgOgCgJAFQgRAPgjgGQgNgCgKgEIgEAAIgBgBIgXgFIgBAAQhHgQg7AjIgKAKQgYAVgYARIgBAAIgHAFIgIAGIAAAAQg7Akg6AMIgfAEIgbAEIAAgDIgVgBQgpgDgrgMQgOARgKAXgEAkjAjKIAAABQAFAIgDANQgHA9AIBsQAMB8AjBCIL6jZQjmkUjNgpQgigGghAAQijAAiTCfgEAVdAg0IAHAIQB5CEAaCSIAQgCQAsgKAsgYIgLgPIAMgJQh0ifgKhwQhBANhEAggEgq0AjXIANAHIAAAAQApARAzAFIAAgTIAPAAQgFjEBOhXQg/gUhBgJQgFCqg8CEgAlg2/IDvIAQEpKFEdJ6QFbMIFIL4IBwEGQCChSB4gWIAAgDIAMAAQAxgIAuADIgiiWQisr4jKsIQikp6i4qFQhIj/hMkBQkLuLkwuhQohCgoeFaIAegkIgmANIAIAXQlnDqlUE9QhXGHheGEQg+EAhBEAQijKDi0J8QhQEbhUEbQiRHnibHjIgSA5QCJAACCAuIADgDIAFAGIArAQIAoATIARAIIABgBMAa5g/GIAEAKIAlgNIhBi+QC1F8CvF4g");
	this.shape_13.setTransform(0,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AsPyfYAAAAAZAkAtBAYAXAgAbAmAfAsYAQAWAQAYASAZYARAZASAaATAbYAmA3AqA7ArA/YAsA+AtBDAvBFYAXAiAYAjAYAjYAYAkAYAkAYAkYAxBJAyBJAvBKYAxBKAxBKAvBJYAMASAMATAMASYAMASALASAMASYAXAkAXAkAWAjYAtBGAsBDApBBYAoBAAnA9AjA5YAkA4AgA0AdAuYAcAuAZAoAVAhYApBBAYAmAAAAIAAAAYAAAAgWgngmhDYgTgigYgpgagvYgbgvgfg1gig5Ygig5glg+gnhCYgnhCgrhEgshGYgWgkgXgkgWgkYgMgSgLgTgMgSYgLgSgMgSgMgTYgwhJgwhLgxhJYgvhKgzhKgxhIYgYgkgZgkgYgkYgYgjgZgigYgiYgwhEguhDgsg9Ygug+gqg6gog2YgTgbgTgZgSgZYgTgYgRgXgRgVYghgrgcgmgYgfYgwg9gbgjAAAAIAAAA");
	this.shape_14.setTransform(86.4,-176.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7C01F").s().p("Ab/M0IQTgyIAAACIALgCIMxgnIA7BNI9rBsgEg6IgNWIBQg9IGHPHIgBABIAGALIE2MAIgEAEIACABIg9A0g");
	this.shape_15.setTransform(-54.4375,246.6875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AEBFD1").s().p("Eg1ngFOQCuhXDDATIACAFIAGgCQDFCcgUDKQgVDIjqD3gEAqKgAgIAFAAIAAgHQDViFC3BVQC0BUCZEiIgOAKIAAAEIsKAkQgYjBBSiwg");
	this.shape_16.setTransform(-32.4375,286.8763);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ED1F29").s().p("EAkFAGKQA1AbAvANIAAAAIACABQBzAeBTg1IAPgHIgBgCIAPgNIAOgFIAAAHIAFAdIABADIAHAPIADAGIABABIAAABIABACIALAKIAHAFIAHAEIAMADIACgBIACABQAIAAAHgCQANgDAMgIIALgHIARgPIAZgfIAIgOQAYAJAYAOIgCACIgBACIgEAHIgCAGIgCAJIAAAIIAAACIAAACIADAGIAGAHIACABIACABIABABIACABIADABIABAAIACAAIACAAIAEAAIAJgCIAIgCIAEgCIAOgJIAOgMIAOgRIABgDIACgBIAAAAIACADIAAABIAOAVIAiAkIAXAQIAQAJIABgBIABABIALADIAGABIAGgBIADgBIACAAIABgBIACgBIAGgFIACgCIAAAAIABgBIACgGIAAgDQACgFgCgEIgBgIIAAgHICvAAQhPCyAYDBIwTAxQAPlgCOiNgEgyxgNAQFShlC0BXQgEAigBAfIAAAAIAAAFQgCCsB4BDQATAXANAaIgCABIgBgBIgBAAIgWAJIgXAPIgBABIgDACIgMANIgDAEIAAACIgDACIgDAJIgCAFIgCARIABAGIAAACIABAEIABABIABADQACAHAFAFQAIALAMAJIALAHIAVAJIAkAKIgCAQIgEgBIgCAAIgPgCIgIABIgDAAIgEACIgBABIgBABIgCAAIgFAEIgFAJIAAACIgBABIAAAEIABAEIgBABIABACIABABIgBABIABABIABABIAAABIAFAIIAEAHIADADIAeAUIAUAHIADAAIACABIABAAIgEAEIgLAOIgCADIgCADIgNAWIgBABIgJAVIgIAbIgCAPIAAACIAAABIAAACIABALIABAGIADAGIACACIAAACIACABIABABIAHAFIACAAIAEAAIADABIAEgBIAJgDIADgBIALgEIA6CjQjCgQivBXg");
	this.shape_17.setTransform(-90.9375,236.9651);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("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ACgRIACgFIAEgIIACgDIAAgBIADgFIANgMIACgCIABgCIAXgPIAWgIIABgBIABABIgFAGIgBACIgCABIgPATIgEADIgEAHIgGAHQgFAIgDAIIgCAJIAAAGIABABIAAACIAAACIABABIAAAAIAFAIIAFAGIAGAFIABACIA1AfQAHhMgdg7QgNgagUgWQh4hEACirIAAgGIAAAAQABgfAEgiQhTgoh1AAQiIAAi1A3gEguAAf5IgCABIgGADIgBABIAGAHIAAABIABABIAaAgIADAEIAEAFIABACIACAEIABABIgBABIAAACIAAACIAAACIAAACIgCAQIgBADIgGAZIAAACIgBACIgGAVIgBAEIgDAMIgEAQIgBADIAAADIgBABIAAAKIgCABIABABIABAAIALAAIAEgBIADgBIABgCIgDgKIAFgCQAZiBgkgrIgJgCIABgEgEgTVgiEMAKkAkEIAHAMIgDABIABADIgNADMgi/AS4QAdApAVArIAJAJIgDADQAxBqADB3IACAAIgCAOQABAqgFArMAuAgUSMgGHgrbIg2pvQovFEnZGlgEgv/AY1QAGCABYA6QB1hxCCALQgEhqgqheQh4BpivALg");
	this.shape_18.setTransform(-54.45,2.6375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0664A2").s().p("EgWHAjaIACgOIgCAAQgDh4gyhqIADgCIgIgJQgWgsgdgpMAi/gS3IANgEIgBgCIACgCIgGgMMgKlgkEQHZmkIwlEIA1JuMAGJArbMguBAUSQAFgrAAgpg");
	this.shape_19.setTransform(-182.9125,-54.9125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#097BB1").s().p("AJuB5IAGgGIgHgHIgBgJIgIAAI7W7BIgDABIh5tjQGcjvHLi6MAZ2AqBMAAAAw1Qg+gYg+gHIAAgBIgegDIAAABQhhgFhhAlIgCgDIgKAHQgeAMgdAPg");
	this.shape_20.setTransform(51.3625,-40.2875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AGwqfYAAAAgOAUgaAkYgZAkgjAzgqA+YhUB8hvCnhrCoYhsCnhpCphOCAYgnBAggA2gWAmYgWAlgNAWAAAAIAAAAYAAAAAOgUAagkYAZgkAjgzAqg+YBUh8BvinBrioYBsinBpipBOiAYAnhAAgg2AWgmYAWglANgWAAAAIAAAA");
	this.shape_21.setTransform(94.4,48);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AEBFD1").s().p("AMYgUQBmjOCLhoIADACIAEgFQEDAIByCpQBvCngeFDgA3cC6QANjTBZh6IACABIAFgJQDdhzCwBcQCtBdCDEkg");
	this.shape_22.setTransform(-65.2231,296.8625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7C01F").s().p("AFjlnIABhZIaDNLIgYA2gA/ME6IgahgIdTAwIgHBSg");
	this.shape_23.setTransform(-118.825,293.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ED1F29").s().p("A73HzQAglNCoiPQA7AaA6AKIALAEIABgCQBTALBSgYIACADIAHgEIADAHIAHAQIAIAMIALANQADAFAGAEIADACIABABIABABIAJAFIAVAHIAQACIAPgCIAegKIADgCIADgBIAHgFIADgCIAXgUIADgEIADgCIANgRIAEgGIAJAGIAAAGIAJABIgBADIAAAMIABAEIAAABIABABIAAACIAFAJIAMALIADACIAJAEIAVABIAIAAIANgEIADgCIAEgBIAPgIIAIgGIAAABIgBACIgBAHIABABIAAAEIAAAEIAAAEQACAKAEAHIAGAKIAHAIIABAAIABABIAGAFIACABIAEADIAFACIACABIACABIACABIAFABIABAAIABABIAXADIAVgBIADgBIAVgGIACgBIADgBIAFAEIAGgIQBcgdBcAyQhcCAgODcgAJcinQCxkPDhhXQAXAcAZAYIAIALIADgCQBiBXCBAPIAAABIAAABIgBALIAAAIIAAADIAAACIAAACIACAFIAAACIAFAQIADAFIACACIACADIANANIALAGIASAGIAMACIADAAIAPAAIAXgDIARgEQABAAAAgBQABAAABAAQAAAAABAAQAAgBAAAAIAEgBIAVgIIABgCIAAAAQAMAKAMALIgCADIAJAFIAHAIIgJACIgQAJIgJAHIAAABIgCABIgBADIgBAAIgCADIAAACIgCADIgBAIIAAAEIACAIIACADIABABIAAAAIABACIAFAGIACABIAJAGIAWAJIAQADIACAAIACAAIAcABIAMgBIgEAOIAAAQIACAEIgBABIADAKIACAEIABABIAEAHIALANIADADIAJAHIAYAMIADAAIAFACIAFAAIACAFIAAALIAEAAIACAFIANgFQBEADBSA3QiLBqhnDPg");
	this.shape_24.setTransform(-142.9625,262.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0664A2").s().p("EgAeAlAIgHgIIgCACQh1hVi9gNMAU3gl3IClBbIAPgbI9ywdQgrAmAihbIgRAmIrCmGQA2h9AqiGIhgEDImMjbQFDknFokCIgyAlQAQBNBEh4QBVg6BTg2IJsHVIAAgBMAiwAaSMgccAqxQghgrgqghg");
	this.shape_25.setTransform(6.675,-35.8125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#097BB1").s().p("EgSlAsPIgLgJIgCACQhagyhjgTIAAgCIgLAAQg/gMhEACMAYbhBkIKmF2MgcQA+DQgsgjgtgagEAISglkQIqljHBiEImlOfg");
	this.shape_26.setTransform(-141.675,-41.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("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ABACIAAAAIAAAAIABACIABACIABACIABABIABABIAAABIAAABIAXAWQgQgmgWgggEgewAlIQAuAaAsAjMAcRg+CIqnl3MgYbBBkQBDgBBAALIALABIAAABQBiATBaAyIACgCgEAKnAlBIAAAAIAIAFIAIAEIABAAIABABIACABIALAEIACABIACAAIAKAEIADABIANAFIACACIADABIANAFIADgFIABgBIABgCQgVgcgbgXIgHAFIgIgKIgEAGIgCACIgCACIgCACIgKAMIgCADIAAADIABAAIAAgBgEAIBAi2IAEANIABACIAAAAIADAGIABAEIACABIAEAHIAHAHIABAAIADACIALAGIAVAFIBJABQg2gohKgQIgBACIgDgBgAHGeBQgxBqhrBPQBWBIBuAQIABgBIACAAQAzh0BehcQhMg1hrgWgAKheyQAsAhAhArMAccgqxMgixgaRIAAAAIpsnVQhSA2hVA6QhFB4gPhNIAyglQloEClDEnIGMDbIBfkCQgpCFg2B9ILCGGIARglQgiBaArgmIdyQeIgPAaIilhbMgU4Al4QC9AMB1BVIACgBgEgD4gsqIJFG3IGmueQnCCDopFkg");
	this.shape_27.setTransform(-63.8,3.9625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AEBFD1").s().p("A/KDwQCViPCjgoQDwA0BEDDQBADChkFMgAVdqlQCkiBCmgXQDqBLAvDKQAtDGiFFBg");
	this.shape_28.setTransform(-67.0745,217.6375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7C01F").s().p("EgkqgB2IBJhOILALGIgDADIAWAVIACgCIJPJUIgyA3gARAxcIBQhGIJ3MKIgDADIATAXIADgDIIRKMIg4Axg");
	this.shape_29.setTransform(-113.8625,190.2375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ED1F29").s().p("EgigADiIABAAQDjjmDrAKIASAhIAAABIAGAIQBSCIBYAnIAAABIAEAAIAEACIgGAVIgDAgIABACIAAAIIABAFIABAEIAEAOIAGANIAHAMIAKAMIAPAKIAGAEIADACIAPAGIACAAIACACIAHABQAIADAQABIARAAIAbgCIAGgCIAFAUIgEAGIABAAIgFACIgKAEIgBAAIgCABIgLAIIgDAEIgDAFIgBABIAAABIgBABIgBACIAAADIAAAGIABADIADAIIAJAJIAFADIAJAEIANAEIAVAEIAHAAIAYgBIAJgCIADAFIgHAJIgLAUIgEAOIAAAJIABAEIAAACIAEAQIAHAOIACACIADADIAGAGIAMAJIABABIAVAGIgEAJIAGADIAAAHIALgBQBwA8gLBRQioAqiZCUgATUr4QD6jQDpAjQAPAmARAgIAEAPIADgBQA8BtBGApIAKAFIgIAUIgGAgIAAACIAAAOIABADIACANIAEALIABAEIAHAMQADAHAFAFIANANIAHAEIACACIAOAIIACAAIADACIAGACQAHADAQADIAsADIAGgBIAEAZIgJABIgKADIgCABIgCABIgLAGIgEADIgEAGIAAABIgBAAIgCAEIAAACIgBAHIABACIACAJIAJAJIAEAEIAIAFIANAFIAUAGIAgADIASgCIABAAIAFgBQAWAbAOAeIgIAIIgNATIgEAMIgBACIgBAJIAAACIAAACIAAAKIABAEIgEAIIAJAGIAHAKIAFAHIAMAKIABABIAPAIIAFABIAAADIAAAPIAVABQAnAwgMAzQirAainCCg");
	this.shape_30.setTransform(-118.4129,145.6762);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0664A2").s().p("AGEYZIgEgMIgBAAQgjhFg2gyIABgBIgIgFQgogkgygZIRWt8IAFADIAFgLIAJgHIgEgEIACgGIgKgEIgHgJIgEADMgoqgR6IACgFIgCAFIrUlAIELpYIALgJQBGgyAxghIKtFEMApFAV3IKEFXI9oVjQgOhbgihHgEgkbgSNQEXj7EcjOIkAJQg");
	this.shape_31.setTransform(53.5375,-101.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#097BB1").s().p("EgScAjUIAAAAIgDgEQhFhShTglIAAgDIgJAAQg7gYhBgBMAVogyFIK1EyMgaSAyfQgwhsg7hJgAFE83QIyl9JHjUInnOog");
	this.shape_32.setTransform(-138.8125,-90.8125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("EgyVAd8IBdhkIAAgBIAUgVIAAABQDxj2D5AQIAKgFIADAGIAHABIgBALIASAgQBzhZAPiLQg1gTg8AAIgCAFIgLgFIgLAAIgBgFIgEgCIAEgLIAAgMIAFAAMAVtgyRIlAiNIgEADIgIgJIgKgEIABgFIgDgEIAJgIIAEgLIAFACQFqlGFzj8QJLmQJgjYIAEgIIAHADIAIgCIAEAIIAHAFIgDAHIACAIIgIADIoQO3IHmuoQpGDUoyF8IKSFYIqulEQgwAhhGAyIgMAIIkLJZILUFAIADgFIgDAFMAoqAR7IAEgDIAHAIIALAFIgDAGIAEAEIgIAHIgFALIgGgDIxWN7QAyAZAoAjIAIAFIgBACQA2AyAjBFIACAAIAEAMQAhBHAPBbIdo1iIqElXIKfFDIAFgDIAHAJIAKAGIgDAFIADAEIgJAHIgGAKIgEgCI+CV0IABAGIgLABIgJAHIgEgFIgGABIgBgLIgHgJIAFgEQgMhXgehFQiAAwgiB3QAMAFANADIAEgFIAIAHIAKACIgBAHQBRBRALBrIABAPIgeADIAAgDIgGAFQgDABgCADIgIAIIAAABIABABIABAAIACACIAFADIAHACIABABIAWAKIACAAIABABIAlASIgHgIIgLgLIAVgUIALAKQBOBSAEBxQBBBBgRBIQDxBSAxDVQAxDSiRFXIADAEIgIAHIgFALIgFgCIg8A1IAAAAIgWATIgBAAIzY3HIBmhaIAAAAIAAAAIAXgUIAAABQEHjdD3ApIAKgEIADAHIAGABIgCALQAOAiAPAdQCBgnBHhuQglgegvgXIgEAEIgHgJIgKgFIACgFIgEgEIAJgHIAFgLIAFACIRWt5MgoCgRrMgagAy2IADAIIgJAEIgEAIIgIgEIgHADIgEgIIgIgFIADgHQgwh1g+hNQhsBvgHCvQAOAEANACIAFgGIAJAHIAJAAIgBAGQBXBIAXBmQBWBMAMB2QCABGgPBhQD5A5BFDOQBHDNhvFjIAEAEIgIAJIgDAKIgFgCIg3A7IAAAAIgVAWgEgxrAd7IU6UaIAzg2IpPpVIgDACIgVgVIADgCIrBrIgEgk4An1IJIJNQBllMhBjCQhDjDjxg0QiiAoiWCQgEgwOAcXIAAAAILBLJQCZiUCogqQALhRhvg8IgMAAIAAgGIgGgEIAEgIIgVgHIgBgBIgMgJIgGgFIgDgEIgCgBIgHgOIgEgQIAAgCIgBgFIAAgJIAEgOIALgUIAHgIIgDgFIgJACIgYABIgHgBIgVgDIgNgEIgJgEIgFgEIgJgJIgDgIIgBgCIAAgGIAAgDIABgCIABgCIAAgBIABAAIADgGIADgEIALgHIACgBIABgBIAKgEIAFgBIgBgBIAEgGIgFgTIgGACIgbACIgRgBQgQgBgIgDIgHgBIgCgBIgCAAIgPgHIgDgCIgGgDIgPgLIgKgMIgHgMIgGgNIgEgNIgBgFIgBgFIAAgHIgBgCIADghIAGgUIgEgCIgEAAIAAgCQhYgmhSiIIgGgJIAAAAIgSghIgWgBQjgAAjYDdgAD/OVISyWaIA4gyIoRqMIgCACIgTgXIADgDIp3sKgAPwZeIIKKEQCGlAgujHQgvjJjqhMQimAYijCAgEgiZAgoIAAADIgBABIAAAFIAAABIgBABIACAUIAAABIAAABIABABIAAACIADAGIABACIABABIADAGIABABIAEAGIABABIABABIADAFIAHAIQgGgsgTglgEgjhAfXIgEAEIgIAJIAAAAIABACIABAAIAIAEIAhAKIABABIATAGQgQgVgVgUIgIACIAAgDgEglsAcgQAAAEABAEIADAbIAGAVIABACIACAGIAFAJIADAEIABACIABACIACACIAHAIIANAKIABABIABAAIAHAFIAYAJIAEABIACABIAdAIIAEAAIAPAEQgZhJhDg2QgUgCgUgHgEgoFAZkQBCBpBGAlQAKi0Byh0Qg2g6g+geQgUCTh8BfgEgn3AU1QBCABA6AXIAJABIAAADQBUAkBEBTIADADIAAABQA7BIAwBsMAaTgyeIq2kygAFmM8IJ3MLQCniECrgZQAMg0gngvIgVgBIAAgPIAAgDIgFgCIgPgIIgBgBIgMgJIgFgHIgHgKIgJgHIAEgHIgBgEIAAgKIAAgDIAAgCIABgIIABgDIAEgMIANgSIAIgIQgOgegWgbIgFABIgBgBIgSACIgggDIgUgFIgNgFIgIgFIgEgEIgJgKIgCgIIgBgDIABgGIAAgCIACgEIABgBIAAgBIAEgFIAEgEIALgGIACAAIACgBIAKgDIAKgBIgFgaIgGABIgsgCQgQgDgHgEIgGgCIgDgBIgCAAIgOgIIgCgCIgHgFIgNgMQgFgGgDgGIgHgNIgBgEIgEgKIgCgOIgBgDIAAgOIAAgBIAGghIAIgTIgKgGQhGgpg7htIgEABIgEgPQgRgggPglQgigFghAAQjKAAjVCygATsTZIgBABIAAAFIgBABIAAABIgBAOIABAGIgBABIABABIABACIgBABIATAOQgEgegLgcgAQEOHQgBAEABAEIABAcQAAAJADAMIABADIABAGIAEAJIADAEIABADIABACIACABIAGAJIAHAIIAFADIABACIAHAFIAXAMIADABIADACIAcAKIAEABIAOAFQgShLg8g9QgUgEgUgIgAONLaQAzBaA6AmQAmiACKg0Qgfg7gtgtQhLByiGAqgA3T//IE0CHIEApQQkdDOkXD7g");
	this.shape_33.setTransform(-30.525,-13.1875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#097BB1").s().p("EAMsAmTQlHr5lcsIQkcp6kqqEIjuoBQiwl3i0l8Ii3muIg6iQQIdlaIiigQEwOgEKOLQBMEBBJEAQC4KECkJ6QDJMICtL5IAiCVQgvgCgwAIIgNAAIAAACQh3AWiCBTIhxkGg");
	this.shape_34.setTransform(27.15,-59.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AEBFD1").s().p("EgpjAEwQAJhKA8hsQA1hdApguIABgBIABgBQAHgGABgHIACgGQD+g5CPCQQCSCVAhFmgAc8jNQgJhsAIg9QAEgNgGgJIAAgBQCwi/DJAnQDMApDnETIr6DaQgkhDgLh7g");
	this.shape_35.setTransform(43,264.8021);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7C01F").s().p("EgyFgCXIABhdIPgFLIgBAMIAoADIABgCILxD9IgMBZgAVMBLIPukfIAGALIAjgVIAAgBIL7jaIAoBRI8HIBg");
	this.shape_36.setTransform(-5.9,288.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ED1F29").s().p("EgrSAAmIAYgoQA1heAshHIAfgwQA0hLA1goIgBAAIAXgQQAVgNAVgHQAcAjAhAZIAQANIgBACIASAJQAQAKARAIIAAAAQA4AXBFADIABAAIABAAIAHAAIAJAAIACAAQAdAAAfgEIANgCQAhACAdANQAfAPAaAcIABAAIAQASIABACIADACIAOARIAAAAQAaAZAXgDIAAAAQAJABALAKIABAAQAHAFAXAcIAAAAQASAUASAOQAhAZAiADIB+A5QgpAxgzBbIgBAAQg+BugLBPgAbcB1QgGiBAZhRIAKgaQAKgXAOgRQArAMApADIAVABIABADIAbgEIAdgEQA7gMA6gkIABAAIAIgGIAHgFIABAAQAYgRAXgVIALgKQA7gjBHAQIABAAIAXAFIABABIAEAAQAKAEANACQAkAGAQgPQAJgFAOACIABAAQAIABAjAJQAaAHAWABQAqACAegRQAUgDBPgSIgBABIAMgDIABAAQAVgEAFgDQgHBAAJBuIAAABQALB+AlBHIvlEcQgNiKgFhkg");
	this.shape_37.setTransform(-48.1,257.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0664A2").s().p("EgLGAlbIgogSQgWgJgVgHIgFgGIgDACQiCgtiJAAIASg5QCbnkCRnmQBTkbBRkcQC0p8CjqCQBBkAA+kBQBdmEBXmGQFTk9FojqIA7CQID3JsIgshRIACAFQg5hkgGgHIBAC5Mga4A/Hg");
	this.shape_38.setTransform(-177.275,-39.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("EgycAq8IADgIIgHAAIAChsIgOgIIAJgRIBEh2IA/hpIAAgBQAgg1AhgoQAogyAogfIAAAAIAagSIAAAAQAggUAhgIIAMgEIAJALQAdAmAhAZIABABIAJAHIACgDQA2h7AEifQgngEgoABIgCAGIgRgGIgQABIAAgGIgFgCIAFgPIgBgRIAGAAIATg6QCyoqCkovQA+jTA9jUQCzp8CkqDQBAkAA/kAQBemGBXmIIgGgIIA+g5QNAr5OykPIASgGIAAAAIABAAIAGATQE2OwEOOaQBMEBBJD/QC4KFCkJ6QDJMICtL4IAiCZIAFABIgBARIAEAQIgGABIAAAGIgSgCIgQAEIgBgFQgmgDgmAFQAJBoBuCWIABAAIAKAOIAAACIABAAIAbgXIgBgDIAQgJIABgBIAAAAQBJgtBYAUIgBAAQAMACAQAEIABAAIACABIATAFQAOACAIgDIAAgBQATgPAgAFIgBgBQAJABAqALIAAgBQAWAGASABQAgABAUgMIAFgDIAFgBQAJAABZgUIABAAIAKgCIACAAQAfgHATADQC+jODXAqQDYApDxEmIACgCIABACIADgBIADALIAHAIIgDACIArBWIAEgBIAHAaI81IPIgCgIIgFADIg9hbIgQACIgBgUQgOiWgGhsQgGiLAbhXIAAAAIALgdIABAAQAPgjAXgaIAIgKIANAEQAuAPAqADIABAAIAKABIAAAAIAAgEQgciDhsh2IgOgPIAHgGQgjASglAYIACACIgRAHIgPALIgCgDIgDABIgHgRIgKgPIADgCIh7kcQlGr4lcsIQkdp6kqqFIjtoAIj/ocMgbGA/jIgkgQIAIgSIgKAUIgSgJIgXgLIgqgRQhQBMAFDAIAAAAIAAAUIAkgEIABgDIARABIACgBIAAABIABAAQAfACAdAKQAvARAnAoIABABIAQATIADABIACAEIAMAPIABAAQAKAJAIABIABAAQAXgBAYAVQAIAFAbAhIABAAQAOAQAPAMIAAAAQAZATAZABIAEAAIAFADICRBDIADACQERhACZCdQCbCdAhF6IADAAIAAACIACAAIgEAJIACANIgEAAIgNBfIADABIgIAZgEgyEAqoIbuJSIAMhZIrxj9IgBAAIAAACIgogDIABgMIvglNgEgfKAoxIgCAGQgBAGgHAHIgBABIgBABQgpAug1BeQg8BrgJBLILvD8QghlmiSiWQhnhnifAAQg/AAhIAQgEAVNAuLIAzBOIcHoDIgohQIr7DaIgBAAIABABIgjAUIgGgKgEgvfAk0IgfAwQgsBHg1BeIgYApIPXFJQALhPA+huIABAAQAzhbApgxIh+g6QgigDghgZQgSgOgSgUIAAAAQgXgcgHgFIgBAAQgLgKgJgBIAAAAQgXADgagZIAAAAIgOgRIgDgCIgBgCIgQgSIgBAAQgagcgfgPQgdgNghgCIgNACQgfAEgdAAIgCAAIgJAAIgHAAIgBAAIgBAAQhFgDg4gXIAAAAQgRgIgQgKIgSgJIABgCIgQgNQghgZgcgjQgVAHgVANIgXAQIABAAQg1Aog0BLgEAVUAmUIgKAaQgZBRAGCCQAFBkANCKIPlkcQglhIgLh+IAAgBQgJhuAHhAQgFADgVAEIgBAAIgMADIABgBQhPASgUADQgeARgqgCQgWgBgagHQgjgJgIgBIgBAAQgOgCgJAFQgQAPgkgGQgNgCgKgEIgEAAIgBgBIgXgFIgBAAQhHgQg7AjIgLAKQgXAVgYARIgBAAIgHAFIgIAGIgBAAQg6Akg7AMIgdAEIgbAEIgBgDIgVgBQgpgDgrgMQgOARgKAXgEAkjAjKIAAABQAGAIgEANQgIA9AJBsQALB8AkBCIL6jZQjnkUjMgpQgigGghAAQijAAiTCfgEAVcAg0IAHAIQB5CEAbCSIAQgCQAsgKAsgYIgLgPIAMgJQh1ifgJhwQhBANhFAggEgq1AjXIAOAHIABAAQAoARAzAFIAAgTIAPAAQgFjEBOhXQg/gUhAgJQgGCqg9CEgAlf2/IDtIAQEqKFEdJ6QFbMIFIL4IBwEGQCDhSB2gWIAAgDIAOAAQAwgIAuADIgiiWQisr4jJsIQilp6i4qFQhIj/hMkBQkLuLkxuhQogCgoeFaIAegkIgmANIAIAXQloDqlTE9QhXGHheGEQg+EAhBEAQijKDi0J8QhQEbhUEbQiRHniaHjIgTA5QCJAACCAuIAEgDIAEAGQAVAHAWAKIApASIAQAIIABgBMAa6g/GIADAKIAlgNIhBi+QC1F8CwF4g");
	this.shape_39.setTransform(-6,0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12,p:{x:-80.075,y:-243.125}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-221.95,y:253.1}},{t:this.shape_5,p:{x:-234.1,y:245.75}},{t:this.shape_4,p:{x:-247.65,y:236.5}},{t:this.shape_3,p:{x:220.6,y:230.9}},{t:this.shape_2,p:{x:202.95,y:233.7}},{t:this.shape_1,p:{x:182.85,y:234.35}},{t:this.shape,p:{x:63.7,y:-83.7}}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_12,p:{x:-86.075,y:-243.075}},{t:this.shape_6,p:{x:-227.95,y:253.15}},{t:this.shape_5,p:{x:-240.1,y:245.8}},{t:this.shape_4,p:{x:-253.65,y:236.55}},{t:this.shape_3,p:{x:214.6,y:230.95}},{t:this.shape_2,p:{x:196.95,y:233.75}},{t:this.shape_1,p:{x:176.85,y:234.4}},{t:this.shape,p:{x:57.7,y:-83.65}}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-558.4,-1030.9,1036.9,1373.8000000000002);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// firehydrant
	this.firehydrant_mc = new lib.firehydrant();
	this.firehydrant_mc.name = "firehydrant_mc";
	this.firehydrant_mc.setTransform(316.95,214.75,0.4582,0.4582,0,0,0,-332.6,-159.7);

	this.timeline.addTween(cjs.Tween.get(this.firehydrant_mc).wait(1));

	// smoke
	this.smoke_mc = new lib.smoke();
	this.smoke_mc.name = "smoke_mc";
	this.smoke_mc.setTransform(-145.05,30.7,0.5534,0.5534,0,0,0,-0.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.smoke_mc).wait(1));

	// sun
	this.sun_mc = new lib.sun_1();
	this.sun_mc.name = "sun_mc";
	this.sun_mc.setTransform(-1167.2,-355.05,1,1,0,0,0,-70.8,-141);

	this.timeline.addTween(cjs.Tween.get(this.sun_mc).wait(1));

	// building
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C5B9F").s().p("AhmCvIAAldIA8AAIAAEsICRAAIAAAxg");
	this.shape.setTransform(1030.625,-166.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C5B9F").s().p("ABmCvIgjhcIiHAAIgjBcIg9AAICKldIA3AAICIFdgAA0AmIgVg4IgIgWIgIgWIgHgVIgIgZIAAAAIgPAtIgRAtIgVA4IBpAAg");
	this.shape_1.setTransform(996.95,-166.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C5B9F").s().p("AgdCvIAAksIhoAAIAAgxIELAAIAAAxIhpAAIAAEsg");
	this.shape_2.setTransform(963.8,-166.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C5B9F").s().p("AgdCvIAAldIA7AAIAAFdg");
	this.shape_3.setTransform(940.075,-166.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C5B9F").s().p("Ah3CvIAAldIBzAAQAbAAAXAIQAXAHAQANQAQAOAKAUQAJATAAAaQAAAcgKAVQgKATgSAOQgSAOgYAGQgYAIgbgBIgwAAIAACFgAg7gEIAfAAIAigDQAQgCALgIQAMgGAGgMQAHgMAAgTQAAgRgGgLQgGgMgLgHQgKgHgNgDQgNgEgPAAIgrAAg");
	this.shape_4.setTransform(916.825,-166.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C5B9F").s().p("Ag9CvQgcgFgbgNIAOgvQAYAMAXAGQAXAFAYAAQAdABATgNQATgNAAgZQAAgRgNgPQgNgOglgMIghgKQgmgNgWgUQgVgWAAglQAAgvAfgbQAegcA7AAQA5AAArAVIgOAvQgYgLgTgFQgUgGgUABQgdAAgRAMQgRANAAAXQAAATANAMQAOAMAdAKIAiAKQAtAPAVAYQAVAaAAAiQAAAXgJATQgIASgRAOQgQANgXAIQgYAHgbAAQgcAAgcgFg");
	this.shape_5.setTransform(883.825,-166.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C5B9F").s().p("AhDCoQgegMgWgWQgXgXgMghQgMgiAAgsQAAgqAMghQANgjAXgWQAWgYAfgLQAfgMAjAAQAkAAAeAMQAfALAWAXQAWAWANAjQAMAhAAArQAAAsgNAhQgMAhgXAXQgXAXgfAMQgeAMgjAAQgkAAgfgMgAgph9QgTAIgNARQgOARgIAZQgIAZAAAhQAAAiAJAZQAIAZAOARQAOARATAHQATAJAVgBQAWABASgJQATgHAOgRQANgRAIgZQAJgZAAgiQAAgigJgZQgIgZgOgRQgOgQgUgIQgTgHgUAAQgWAAgTAHg");
	this.shape_6.setTransform(847.725,-166.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C5B9F").s().p("ABNCvIAAidIiZAAIAACdIg8AAIAAldIA8AAIAACQICZAAIAAiQIA8AAIAAFdg");
	this.shape_7.setTransform(808.1,-166.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F4828").s().p("AhcCeIAAk7IA2AAIAAEPICDAAIAAAsg");
	this.shape_8.setTransform(2097.25,-347.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F4828").s().p("AhiCeIAAk7IDDAAIAAArIiNAAIAABYICAAAIAAApIiAAAIAABkICOAAIAAArg");
	this.shape_9.setTransform(2070.05,-347.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F4828").s().p("AgbCeIAAkPIhdAAIAAgsIDxAAIAAAsIhfAAIAAEPg");
	this.shape_10.setTransform(2041.425,-347.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F4828").s().p("Ag8CZQgcgLgUgVQgUgUgLgeQgMgfAAgoQAAgmAMgfQAMgeAUgVQAVgUAbgLQAcgLAgAAQAhAAAbALQAbAKAVAUQAUAVALAfQAMAeAAAnQAAAngMAfQgLAegVAUQgVAVgcALQgbALggAAQggAAgcgKgAgkhxQgSAIgMAPQgMAPgIAXQgGAXgBAdQABAfAGAXQAIAWANAPQANAQARAGQASAIASAAQAUAAAQgIQARgGANgQQAMgPAHgWQAIgXAAgfQAAgegIgXQgIgXgMgPQgNgOgRgIQgRgHgTAAQgTAAgRAHg");
	this.shape_11.setTransform(2009.1,-347.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F4828").s().p("ABGCeIAAiNIiLAAIAACNIg2AAIAAk7IA2AAIAACDICLAAIAAiDIA2AAIAAE7g");
	this.shape_12.setTransform(1973.2,-347.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZB1IAAhoQg0gGAAgtIAAhOIA0AAIAABOQAAALAHAIQAJAHAJAAQAKAAAIgHQAIgIAAgLIAAhOIA0AAIAABOQAAAtg0AGIAABog");
	this.shape_13.setTransform(1621.15,71.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaB1IAAhOQAAgLgHgIQgJgHgKAAIgZAAIAABoIg0AAIAAjpIBnAAQAWAAAPAQQAPAPAAAVIAAAPQAAARgMAPQgMARgaAAIgCAAIACAAIAYAAQAKAAAJAHQAHAHAAALIAABcgAgZgMIAZAAQAKAAAJgHQAHgIAAgLIAAgaQAAgKgHgIQgJgIgKAAIgZAAg");
	this.shape_14.setTransform(1591.5,71.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaB1IAAhoIgzAAIAABoIg0AAIAAi1QAAgVAPgPQAPgQAWAAIAzAAQAVAAAPAQQAQAPAAAVIAAC1gAgShSQgHAIAAAKIAAA0IAzAAIAAg0QAAgKgIgIQgHgIgLAAQgKAAgIAIg");
	this.shape_15.setTransform(1561.85,71.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaB1IAAhOQAAgLgIgIQgIgHgKAAIgZAAIAABoIg0AAIAAjpIBnAAQAWAAAPAQQAPAPAAAVIAAAPQAAARgMAPQgMARgaAAIgCAAIACAAIAYAAQAKAAAJAHQAHAHAAALIAABcgAgZgMIAZAAQAKAAAIgHQAIgIAAgLIAAgaQAAgKgIgIQgIgIgKAAIgZAAg");
	this.shape_16.setTransform(1532.2,71.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhNB1IAAjpIBnAAQAVAAAPAQQAQAPAAAVIAAANQAAAXgNANQgNANgaACQAaAAANAQQANAQAAAUIAAANQAAAVgQAPQgPAQgVAAgAgZBbIAZAAQALAAAIgIQAHgIAAgKIAAgaQAAgagaAAIgZAAgAgZgMIAZAAQALAAAIgHQAHgIAAgLIAAgaQAAgKgHgIQgIgIgLAAIgZAAg");
	this.shape_17.setTransform(1502.55,71.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZB1IAAjpIAzAAIAADpg");
	this.shape_18.setTransform(1475.45,71.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhAB1IAAjpIA0AAIAADPIBNAAIAAAag");
	this.shape_19.setTransform(1449.65,71.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#293D5B").s().p("Ag4BPQgFgEAAgGIAAgYIAAgYIABhUQAAgGAEgGQAGgHAJABIAaACQAPABAJAGQAtAWAAAiQAAAOgJAJQgKALgSAHQAbAQAOAQQAEAEAAAFQAAAGgFAEQgEAFgGAAQgGAAgFgFQgfgegmgLIABAiQAAAGgDAEQgFAEgGAAQgGAAgEgEgAggADIAFAAQAaAAALgFQAFgDAFgEQAFgFAAgCQAAgMgQgLQgNgKgPgCIgNgBg");
	this.shape_20.setTransform(-277.7,27.4941);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#293D5B").s().p("AgwBQQgMgKAAgiIACgpIADgqIgCgLIgBgLQAAgQAPAAQAFAAAEACIAXgEIAUgCQAaAAAQAGQAKAEAAAKQAAAFgEAEQgFAFgGAAIgEAAQgRgFgQAAIgQABIgTAEIgBAqIAngEIAagCQAGAAAEAEQAFAEAAAGQAAAMgNABIgaADIgsAEIAAAVQAAAVADADQAAABAMAAIATAAIAUgBIAGAAIAGgBQAHAAADAEQAFAEABAHQAAALgNADQgLACggAAQghAAgLgKg");
	this.shape_21.setTransform(-306.15,27.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#293D5B").s().p("AhJBRQgEgEAAgGIABgNIAAgNIABgSIAAgTIAAgTIAAgUIgCgTIgBgTQAAgGAFgFQAGgFAHAAQAIAAAJANQAvBFAuAqIAAgQIgBhFIgBgMIgBgLQAAgPAPAAQARAAAAA1IAAARIAABBIgCARQgCAOgOAAQgHAAgJgJQgpgkgyhBIAAAgIAAAZIABAaQAAAfgQAAQgHAAgFgFg");
	this.shape_22.setTransform(-336.775,27.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#293D5B").s().p("AhJBRQgEgEAAgGIABgNIAAgNIABgSIAAgTIAAgTIAAgUIgCgTIgBgTQAAgGAFgFQAGgFAHAAQAIAAAJANQAvBFAuAqIAAgQIgBhFIgBgMIgBgLQAAgPAPAAQARAAAAA1IAAARIAABBIgCARQgCAOgOAAQgHAAgJgJQgpgkgyhBIAAAgIAAAZIABAaQAAAfgQAAQgHAAgFgFg");
	this.shape_23.setTransform(-369.175,27.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#293D5B").s().p("AgxBMQgFgEAAgGQAAgGAFgEQAFgEAGAAIAUgCIAAgwQAAgbADgaIgYAAQgGAAgEgDQgFgFAAgFQAAgHAFgEQAEgDAFgBIAfAAQATAAAgADQAMADAAAMQAAAHgEAEQgEADgFAAIgcgDIgBAzIgBAvIAdgBQAGABAEAEQAFAEgBAGQABAGgFAEQgEAEgGAAIgSAAIgSAAIgVADIgWACQgGgBgEgEg");
	this.shape_24.setTransform(-398.8,27.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#293D5B").s().p("AghBVQgMgDgGgEQgHAAgDgEQgFgFAAgGIABgfIABggIgBgiIAAgjQAAgGAFgFQAGgGAGAAQAEAAAOAHIATAIQAeAKAWAVQAaAZAAAdQAAATgJAQQgJARgQAKQgRALgfAAQgIAAgKgCgAgkA2QAEACAGACIALABQAWAAAKgGQAJgGAGgLQAFgKABgLQgBgZgegTQgJgHgigOg");
	this.shape_25.setTransform(-426.85,27.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AgRBCIgLgDIgJgEIgGgCIAAgjIAUAAIAAASIABABIAJADIALABQAJAAAGgEQAGgEAAgHQAAgHgFgDQgFgEgGgDIgPgGQgIgDgHgEQgHgEgEgHQgFgGAAgMQAAgHADgHQAEgHAFgGQAGgEAIgDQAIgDAJAAQALAAALACQALACAHAEIAAAlIgVAAIAAgUIgBAAIgIgCIgKgBQgIAAgFAEQgFADAAAGQAAAGAFAEIAMAHIAOAGQAIADAHAEQAHAEAEAHQAFAHAAAKQAAAKgEAHQgDAIgHAFQgHAFgJADQgJACgJAAIgNgBg");
	this.shape_26.setTransform(-1282.875,-6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AAcBBIgKgdIglAAIgJAdIgZAAIApiBIAZAAIApCBgAANAPIgNgqIAAAAIgNAqIAaAAg");
	this.shape_27.setTransform(-1294.025,-6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AgLA/QgKgFgJgIQgHgJgFgMQgFgMAAgRQAAgSAGgMQAFgNAJgHQAJgJALgDQAJgEALAAQALAAAHACQAIACAGADIAAAlIgVAAIAAgUIgCAAIgJgBQgHAAgGACQgFADgGAFQgEAGgCAIQgEAIAAAMQAAAKAEAIQACAIAEAGQAFAFAGADQAGADAHAAIAJgBIAGgCIAAgaIgYAAIAAgRIAsAAIAAA6QgGAFgLADQgKADgKAAQgLAAgLgEg");
	this.shape_28.setTransform(-1305,-6.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2C5B9F").ss(0.5,1,1).p("EgptgVHIEAAAIAALMIkAAAgEggegVHIEAAAIAALMIkAAAgAcf1HID/AAIAALMIj/AAgEAnZgVHIEBAAIAALMIkBAAgEA0VgJ7IjtAAIAArMIEAAAIAAHDEg0ngVHID/AAIAALMIj/AAgEg0ngFgID/AAIAALKIj/AAgEg0nAJ9ID/AAIAALLIj/AAgEA0VAFqIjtAAIAArKIDtAAEAnZgFgIEBAAIAALKIkBAAgEAnZAJ9IEBAAIAALLIkBAAgEAxQAVIIgoAAIAArLIDtAAAcflgID/AAIAALKIj/AAgAcfJ9ID/AAIAALLIj/AAgEgptgFgIEAAAIAALKIkAAAgEgptAJ9IEAAAIAALLIkAAAgEggeAJ9IEAAAIAALLIkAAAgEggegFgIEAAAIAALKIkAAAg");
	this.shape_29.setTransform(915.9,93.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#2C5B9F").ss(1,1,1).p("EghTgaQIAAE8InYAAInYAAInHAAIAAjrIAAhRIHHAAIAAE8EgorgaQIAAE8EgorgaQIHYAAIHZAAIAAE8InZAAEAhDgapIAAFVInYAAIAAlVIHYAAIHYAAIAAFVInYAAEAvzgapIHYAAIAAFVInYAAInYAAEAvzgapIAAFVEAobgapIHYAAALHErIAALBIFNAAIAAK+IlNAAIpfAAIpeAAIl/AAIAAq+IAArBIF/AAIAALBIl/AAAQUErIAALBALHErIFNAAAt1ErIAAjEIeJAAIAADEALHPsIAAK+AgLPVIAABsADdPuIAABbAn2ErIJeAAIAAV/An2PsIAAK+ABoErIJfAAEgwDgaQIHYAA");
	this.shape_30.setTransform(919.725,74.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#D3BFB4").ss(3,1,1).p("AjpkkIJUAAIAbAAAHYA6Io5gBIjKABQg/AAhAAAAlKh1ILwAAAItElIxZAA");
	this.shape_31.setTransform(2544.55,165);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D3BFB4").s().p("Ah/mCYAAAAABADABAGYACAGABAJACALYAEAWAHAfAJAmYAEASAFAUAGAVYAGAWAGAWAGAXYAHAXAHAXAIAYYAHAYAIAYAIAYYAfBgAjBgAeBGYAPAkANAdAKAUYAFAKAEAIACAFYADAGACADAAAAIAAAAYAAAAgBgDgBgGYgBgGgBgJgDgLYgEgWgGgfgJgmYgJglgLgrgOguYgNgugPgxgQgvYgHgYgJgZgIgXYgIgYgIgXgJgWYgIgWgIgWgIgUYgJgVgHgTgIgRYgPgkgNgdgKgUYgEgKgEgIgDgGYgDgFgCgDAAAAIAAAA");
	this.shape_32.setTransform(2587.5,155.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D3BFB4").s().p("ADVmCYAAAAgCADgEAFYgEAGgGAHgHAKYgOAUgUAcgWAjYgXAjgaApgaAsYgOAWgNAYgOAXYgNAYgNAYgNAYYgaAvgaAxgXAvYgMAXgLAWgKAVYgKAWgKAUgJATYgRAmgOAggJAWYgEALgEAJgCAGYgCAHgCADAAAAIAAAAYAAAAACgDAEgFYAEgGAGgHAHgKYAOgUAUgcAXgjYALgRAMgTANgUYAMgVANgVAOgWYAagtAbgwAagwYANgXANgZANgXYANgYAMgYAMgXYAXguAVgsARgmYARgmAOggAJgWYAFgLADgJACgGYADgHABgDAAAAIAAAA");
	this.shape_33.setTransform(2510.125,155.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#53230C").ss(1,1,1).p("EAhCgAoIA4BREAjLgAoIgsA/EghAgAoIgsA/EgjKgAoIA4BR");
	this.shape_34.setTransform(2545.325,3.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#53230C").ss(3,1,1).p("EAiGAI9IAAx5EgiFAI9IAAx5");
	this.shape_35.setTransform(2545.325,56.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CD503E").ss(1,1,1).p("AJ4iSIAAElAWeiSIAAElAQMiSIAAElApmiSIAAElAwBiSIAAElA2diSIAAEl");
	this.shape_36.setTransform(2551.725,102.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#437A75").ss(1.5,1,1).p("AjYEfIAAkmIAAkWIGxAAIAAEWIAAEm");
	this.shape_37.setTransform(2553.075,88.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CD503E").ss(1.5,1,1).p("AV5DNIAAl7AOrDNIAAlKIABAAASRDNIAAlgALEDNIAAk4AHeDNIAAkqAZfDNIAAmZAD3DNIAAkiAARDNIAAkdAj2DNIAAkdAsDDNIAAktAn8DNIAAkiAwJDNIAAk+A2WDNIAAliAzQDNIABlOA5eDNIAAlz");
	this.shape_38.setTransform(2549.675,18.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CD503E").ss(3,1,1).p("Ac2JPIAAAUIAAGpACRQMIBVAAIDnAAIDnAAIDnAAIDmAAIDnAAIDmAAIDoAAIAAHoADqX0IGSAAIGUAAIGSAAIGUAAIAAEmImUAAImSAAImUAAImSAAImwAAImcAAImbAAImcAAImcAAIAAkmIGcAAIGcAAIGbAAIGcAAABk8ZIGFF9Ir6AAgA81QMIAAmUIAAgBQABAAACABAhxQMIBxAAICRAAA81QMIDHAAIDHAAIDGAAIDIAAIEGAAIEHAAIEGAAICVAAAlKSvIDZAAIAAijACRSvIEDAAACRSvIAAijAhxSvIECAAA81X0IAAno");
	this.shape_39.setTransform(2551.325,-64.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#73948B").ss(3,1,1).p("AgMk3IJ9JvIzhAAg");
	this.shape_40.setTransform(2562.15,-230.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BD5733").ss(1,1,1).p("AT9jyIAAikAJElHIEPAAIAABVIAAFbIkPAAIAAlbgAR0GXIiKAAIiJAAIiKAAIhqAAIhqAAIhrAAIhqAAIiPAAIiPAAIidAAIieAAIidAAIieAAANhD0IAACjAPqD0IAACjAR0D0IAACjAGSD0IAGCjAJrD0IACCjALXD0IAACjAH/D0IAECjAT9GXIiJAAAz8jyIAAiJACLk4IAABGIAAFbIkNAAIAAlbIAAhDAodk+IAABMIAAFbIkOAAIAAlbIAAhVIBfAAApmD0IAACjIieAAIidAAIieAAIieAAAsED0IAACjAuhD0IAACjAw/D0IAACjAEmD0IAICjAAQD0IAACjACbD0IAECjAnID0IAACjAkrD0IAACjAiND0IAACj");
	this.shape_41.setTransform(2556.925,-114.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BD5733").ss(3,1,1).p("ATtlEIAAFcIAACLIiJAAIiJAAIiKAAIiJAAIhsAAIhtAAIhsAAIhsAAIiMAAIiLAAIidAAIidAAIieAAIieAAIidAAIieAAIieAAIidAAIAAiLIAAlcATtCjIAACiANEAYIGpAAAzsAYIGxAAAzsFFIAAiiAosAYIGaAAAB8AYIG5AA");
	this.shape_42.setTransform(2558.475,-105.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.5,1,1).p("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");
	this.shape_43.setTransform(2027.525,-50.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#753722").ss(2,1,1).p("EAVnghBIAAjjIAAm4AVnxuIAAjjIAAm4EAPCgrcIAAKbEgA8ghBIAAjjIAAm4Ag8xuIAAjjIAAm4EgHhgrcIAAKbAg8irIAAjjIAAm4Ag8NYIAAjjIAAm4AnhtGIAAKbAVnirIAAjjIAAm4AVnNYIAAjjIAAm4APCtGIAAKbAPC8JIAAKbAnh8JIAAKbAVncFIAAjjIAAm4EAVnArdIAAjjIAAm4APCRqIAAKbAg8cFIAAjjIAAm4EgA8ArdIAAjjIAAm4AnhRqIAAKbEgHhAhCIAAKbEAPCAhCIAAKbAnhC9IAAKbAPCC9IAAKbA1m0MICGiyIAAIXIiGCogEgVmghGICGiyIAAIXIiGCogA1mn2ICGiyIAAIXIiGB6gA1mHOICGixIAAIWIiGBfgA1mV7ICGiyIAAIXIiGBLgEgVmAiJICGhgIAAHFIiGgfg");
	this.shape_44.setTransform(102.45,-73.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#753722").ss(3,1,1).p("EACZgrYIAAKXIFwAAIGlAAIFeAAIAAiiIAAgWIAAg1IAAg1IAAk/IAAg6IgeAAIlAAAIlZAAIhMAAIlwAAACZ8FIAAKXIFwAAIGlAAIFeAAIAAiiIAAgWIAAg1IAAg1IAAk/IAAg6IgeAAIlAAAIlZAAIhMAAIlwAAEgULgrYIAAKXIFwAAIGlAAIFeAAIAAiiIAAgWIAAg1IAAg1IAAk/IAAg6IgeAAIlAAAIlYAAIhNAAIlwAAA0L8FIAAKXIFwAAIGlAAIFeAAIAAiiIAAgWIAAg1IAAg1IAAk/IAAg6IgeAAIlAAAIlYAAIhNAAIlwAAA0LtCIAAKXIFwAAIGlAAIFeAAIAAijIAAgWIAAg0IAAg2IAAk+IAAg6IgeAAIlAAAIlYAAIhNAAIlwAAA0LDBIAAKXIFwAAIGlAAIFeAAIAAijIAAgWIAAg0IAAg1IAAk/IAAg6IgeAAIlAAAIlYAAIhNAAIlwAAACZtCIAAKXIFwAAIGlAAIFeAAIAAijIAAgWIAAg0IAAg2IAAk+IAAg6IgeAAIlAAAIlZAAIhMAAIlwAAACZDBIAAKXIFwAAIGlAAIFeAAIAAijIAAgWIAAg0IAAg1IAAk/IAAg6IgeAAIlAAAIlZAAIhMAAIlwAAACZRuIAAKXIFwAAIGlAAIFeAAIAAijIAAgWIAAg0IAAg2IAAk+IAAg6IgeAAIlAAAIlZAAIhMAAIlwAAEACZAhGIAAKXIFwAAIGlAAIFeAAIAAiiIAAgWIAAg1IAAg1IAAk/IAAg6IgeAAIlAAAIlZAAIhMAAIlwAAA0LRuIAAKXIFwAAIGlAAIFeAAIAAijIAAgWIAAg0IAAg2IAAk+IAAg6IgeAAIlAAAIlYAAIhNAAIlwAAEgULAhGIAAKXIFwAAIGlAAIFeAAIAAiiIAAgWIAAg1IAAg1IAAk/IAAg6IgeAAIlAAAIlYAAIhNAAIlwAA");
	this.shape_45.setTransform(146.6,-73.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#C98369").ss(3,1,1).p("EAB7gr6ISuAAIAAItIAACqIyuAAgAB78nISuAAIAAItIAACqIyuAAgEgUogr6ISuAAIAAItIAACqIyuAAgA0o8nISuAAIAAItIAACqIyuAAgA0otlISuAAIAAIuIAACqIyuAAgA0oCeISuAAIAAIuIAACqIyuAAgAB7tlISuAAIAAIuIAACqIyuAAgAB7CeISuAAIAAIuIAACqIyuAAgAB7RLISuAAIAAIuIAACqIyuAAgEAB7AgkISuAAIAAItIAACqIyuAAgA0oRLISuAAIAAIuIAACqIyuAAgEgUoAgkISuAAIAAItIAACqIyuAAg");
	this.shape_46.setTransform(146.675,-73.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#999999").ss(3,1,1).p("AJsiGICnAAIfmAAIAABcIBgAAIBLAAIANAAIAACxIgNAAIhLAAIgKAAIgNAAMggvAAAI5hAAMggHAAAIhbAAIAAixIBuAAIAwAAIfEAAIAACxAtOiGIDHAAAMTgqIAACxEAr5gAqI/mAAAtOiGIAABcAMTiGIAABcEgsSgAqIAAhcICiAAIciAA");
	this.shape_47.setTransform(1541,7.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AlBlFYAAAAAEAAAHACYAEAAAEABAFAAYAFABAGABAGACYANADAPADARAHYAEABAEACAFABYAEACAFACAEACYAFACAEACAFACYADACACABACABYADABACABACACYAKAFAKAFAKAHYAKAHAKAGAKAHYAKAIAKAIAKAIYAKAJAKAIALAJYAJAKAKAKAKAKYAKAJAKALAKALYAJAKAJAMAJALIAPARIANARYATAXARAYASAWYAQAYASAXAPAYYAIALAHAMAIALYAHALAHALAHALYAEAGADAFAEAFYACADABACACADYABACACADACACYAGALAGAKAGAJYAHAKAFAJAGAJYAGAIAFAIAFAIYAJAQAJANAHAMYAHALAGAIAEAGYAEAGACADAAAAIAAAAYAAAAgCgDgCgHYgCgHgDgKgFgMYgFgMgFgQgHgRYgHgRgJgTgJgVYgFgKgFgKgFgMYgBgCgCgDgBgDYgBgDgCgDgBgDYgDgFgDgGgDgGYgGgLgGgMgHgMYgGgMgIgMgHgNYgOgZgQgYgQgZYgSgYgRgZgTgYIgPgSYgFgGgFgGgFgGYgKgLgKgMgLgKYgLgLgKgLgLgKYgKgKgLgKgLgJYgMgJgMgJgLgIYgMgIgLgHgLgHYgMgHgMgGgLgGYgLgFgMgEgLgFYgDgBgCgBgDgBYgDgBgCAAgDgBYgFgCgGgBgFgCYgFgBgFgCgFgBYgFAAgFgBgEgBYgFgBgFAAgEgBYgCAAgCgBgCAAYgCAAgDAAgCAAYgIgBgHAAgHAAYgHgBgGABgFABYgFAAgEAAgEABYgHABgEAAAAAAIAAAA");
	this.shape_48.setTransform(1570.825,-38.8407);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAAhRYAAAAAAABgBABYgBABgCACgBACYgDAFgDAGgDAIYgGAPgEAVAAATYAAAVAFAUAGAQYAEAHADAHADAEYABACACACAAABYABABAAABAAAAIAAAAYAAAAAAgBABgBYABgBACgCABgCYADgFADgGADgIYAGgPAEgVAAgUYAAgUgFgUgGgQYgEgHgDgHgDgEYgBgCgCgCgBgBYAAgBAAgBAAAAIAAAA");
	this.shape_49.setTransform(1539.35,-14.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#212821").s().p("AACkxYAAAAgCAmgEA6YgCAcgDAigCAkYgDAkgCAmgCAlYgBATgBATgCATYgBATgCASAAASYgBAkADAiADAcYABAPACANACAMYACALABAKACAJYAEARACAJAAAAYABACABAAACAAYAAAAAAgBAAgBYAAAAADgJAEgRYACgIACgKACgMYACgMACgNACgOYAEgdADghAAgkYAAgSgBgTgBgSYgBgTgBgTgBgUYgBglgBgmgCgkYgBgkgCghgBgdYgDg6gDgmAAAAYAAgBgBgBgCAAYgBAAgBABAAAB");
	this.shape_50.setTransform(1264.2608,206.476);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#212821").s().p("AgDkxYAAAAgBAKgBARYgCAQgBAYgCAdYgBAdgCAhgCAkYgCAkgBAmgCAlYAAATgCAUgBASYgBATgBATAAASYAAAkADAhADAdYACAOACANACAMYACALACALACAIYAEARADAJAAAAYAAACAAAAACAAYABAAAAgBABgBYAAAAACgJAEgRYACgIABgLACgLYACgMACgNACgOYADgdACgiAAgkYAAgRgBgTgCgTYgBgTgCgTgBgTYgCglgBgmgDgkYgCgkgCgigCgcYgEg6gCgmAAAAYgBgBAAgBgBAAYgBAAgBABAAAB");
	this.shape_51.setTransform(1363.6955,206.4761);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#212821").s().p("AgGkxYAAAAgCAngEA5YgBAdgCAhgCAkYgBAkgBAmgCAlYAAAUgBATgBATYgBASgBATAAASYAAAkAEAhADAdYACAOACANACAMYACAMACAKACAIYAEARACAJAAAAYAAACACAAABAAYABAAABgBAAgBYAAAAADgJADgRYACgJACgKABgLYACgMACgNABgPYADgcADgigBgkYAAgSgCgSgBgTYgCgTgBgTgCgTYgCglgCgmgCgkYgDgkgCgigBgcYgEg6gDgmAAAAYAAgBgBgBgBAAYgBAAgBABgBAB");
	this.shape_52.setTransform(1315.8509,206.4769);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#212821").s().p("AgGkxYAAAAgBAKAAAQYgBARgCAYgBAdYgCAcgBAigCAkYgCAkgBAmgBAlYgBAUgBATgBATYgBASgBATAAASYAAAkADAhAEAdYACAOACANACAMYACAMACAKACAIYAEARACAKAAAAYAAABABABACgBYABAAAAgBABgBYAAAAACgJAEgRYABgIACgLACgLYACgMACgNABgOYADgdADgigBgkYAAgSgCgSgBgTYgCgTgBgTgBgTYgCglgCgngDgjYgCgkgCgigCgcYgCgdgCgYgCgRYAAgQgBgKAAAAYAAgBgBgBgCAAYgBAAgBABAAAB");
	this.shape_53.setTransform(1763.0461,207.1514);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#212821").s().p("AACkxYAAAAgCAmgEA6YgCAcgCAigDAkYgCAjgCAngDAlYgBATgBATgCATYgBATgCASAAASYgBAkADAiADAdYABAOACANACAMYABALACALACAIYADARADAJAAAAYAAACACABABgBYABAAAAgBAAAAYAAAAADgKAEgRYACgIACgKACgMYACgLACgOACgOYADgdAEghAAgkYAAgSgBgSgBgTYgBgTgBgTgBgUYgBglgBgmgBgkYgCgkgBghgCgdYAAgOgBgOgBgLYgBgMAAgKgBgJYgBgQgBgKAAAAYAAgBgBgBgCAAYgBAAgBABAAAB");
	this.shape_54.setTransform(1711.4458,207.1513);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#212821").s().p("AgEkxYAAAAgCAmgEA6YgBAcgCAigCAkYgCAkgBAmgCAlYAAATgCAUgBASYgBATgBATAAASYAAAkADAhADAdYACAOACANACAMYACAMACAKACAIYAEARADAKAAAAYAAABAAABACgBYABAAAAgBABgBYAAAAACgJAEgRYACgIABgKACgMYACgMACgNACgOYADgdACgiAAgjYAAgSgBgTgCgTYgBgTgCgTgBgTYgCglgBgmgDgkYgCgkgCgigCgcYgEg6gDgmAAAAYAAgBAAgBgCAAYgBAAgBABAAAB");
	this.shape_55.setTransform(1810.9455,207.151);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#212821").ss(2,1,1).p("AYsE1IjdAAIAAo1IAAguIEeAAIH7AAIHhAAIHhAAIAAJjIndAAEAmVAE1IkmAAEgtMAEuIjdAAIAAo1IAAguIEfAA");
	this.shape_56.setTransform(1547.375,206.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000100").s().p("AOQAAYAAAAhygCirgDYirgCjkgCjkAAYjjAAjkACirACYirADhyACAAAAIAAAAYAAAAByADCrADYCrACDkACDjAAYDkAADkgCCrgCYCrgDBygDAAAAIAAAA");
	this.shape_57.setTransform(-512.25,210.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000100").s().p("AuuAAYAAAAB2ADCxADYCwACDsACDrAAYDsAADsgCCwgCYCxgDB2gDAAAAIAAAAYAAAAh2gCixgDYiwgCjsgCjsAAYjrAAjsACiwACYixADh2ACAAAAIAAAA");
	this.shape_58.setTransform(-178.025,210.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAiVYAAAAgBATgBAcYgBAcgBAmAAAkYAAAmABAlABAcYABAcABATAAAAIAAAAYAAAAACgTABgcYABgcABgmAAglYAAgkgBgmgBgcYgBgcgCgTAAAAIAAAA");
	this.shape_59.setTransform(-459.15,188.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAiVYAAAAgBATgBAcYgBAcgBAmAAAkYAAAmABAlABAcYABAcABATAAAAIAAAAYAAAAACgTABgcYABgcABgmAAglYAAgkgBgmgBgcYgBgcgCgTAAAAIAAAA");
	this.shape_60.setTransform(-575.35,188.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAAiVYAAAAgBATgBAcYgBAcgBAmAAAkYAAAmABAlABAcYABAcABATAAAAIAAAAYAAAAACgTABgcYABgcABgmAAglYAAgkgBgmgBgcYgBgcgCgTAAAAIAAAA");
	this.shape_61.setTransform(-113.7,188.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAAiVYAAAAgBATgBAcYgBAcgBAmAAAkYAAAmABAlABAcYABAcABATAAAAIAAAAYAAAAACgTABgcYABgcABgmAAglYAAgkgBgmgBgcYgBgcgCgTAAAAIAAAA");
	this.shape_62.setTransform(-229.9,188.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhHhsYAAAAAiA4AjA2YAHAOAJAOAIANYAIANAJALAHAKYAPAUAKANAAAAYABAAAAAAAAAAYAAgBAAAAAAAAYAAAAgHgPgMgVYgGgLgIgMgIgNYgJgNgJgNgKgMYgkg2glg2AAAAYAAAAgBAAAAAAYAAABAAAAAAAA");
	this.shape_63.setTransform(-330.7762,196.6731);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("ABHhwYAAAAglA3gkA4YgKANgJANgJAOYgIANgIAMgGALYgMAWgHAPAAAAYAAABAAAAAAAAYAAAAABAAAAAAYAAAAALgNAOgUYAHgLAJgMAIgNYAIgNAJgPAHgOYAjg4Aig5AAAAYAAAAAAgBAAAAYAAAAgBAAAAAA");
	this.shape_64.setTransform(-375.1239,195.0981);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CCCCCC").s().p("AAAnNYAAAAgFDngCDmYgBA6gBA6AAA2YAAA2ABAyABAsYADBWAEA6AAAAYAAABAAAAAAAAYABAAAAAAAAgBYAAAAAEg6ADhWYABgsABgyAAg2YAAg2gBg6gBg6YgCjmgFjnAAAAYAAgBAAAAgBAAYAAAAAAAAAAAB");
	this.shape_65.setTransform(-346.7,184.4723);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCCCCC").s().p("ACiADYAAAAgBAEAAAHYAAAEgBAEgBAFYAAAFgCAGgCAHYgEANgGAPgLAQYgCADgDAEgDAEYgEAEgDADgEAEYgEAEgEAEgEADYgEAEgFADgEADYgUANgXAJgbACYgGAAgHABgGAAYgGgBgHAAgHgBYgNgCgOgEgNgGYgZgMgXgUgQgYYgIgNgGgNgFgPYgDgOgCgPAAgPYABgPACgNAEgPYAEgOAHgNAIgMYAEgGAEgGAGgFIADgEIABgBIABAAIAAgBYAAABABgBgBABIACgCIAIgIYALgIAMgIANgFYAMgFANgEAOgCYANgCALAAAOABYAYACAYAIATAMYAJAHAIAGAIAHYADAEAEAEADAEYADADADAEADADYALAPAGAPAFANYACAGABAGABAFYABAGABAEAAAEYABAHABADAAAAACkADYAAAAAAgDAAgIYAAgDAAgFgBgFYAAgGgBgGgBgHYgDgNgGgRgKgRYgDgEgDgEgDgFYgDgEgEgEgDgEYgIgJgIgHgKgIYgUgPgagKgdgDYgagEggADgdANYgOAGgNAJgNAKIgIAIIgCACYgCABABgBAAABIAAAAIgBAAIgBACIgEAEYgFAGgFAHgFAHYgIANgHAQgFAPYgEAQgCASAAAOYABARABAQAFAQYAFAPAHAPAJAOYATAaAZAVAcAMYAOAGAOAEAPABYAHABAHAAAGABYAIAAAGgBAHAAYAcgEAZgKAUgOYAEgDAFgEAEgEYAFgEAEgDADgEYAEgEAEgEADgEYADgEADgEADgEYALgRAFgQAEgNYABgHACgGAAgFYABgGAAgEAAgEYAAgHABgEAAAA");
	this.shape_66.setTransform(-385.4569,168.9253);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CCCCCC").s().p("ACxACYAAAPgCAOgDAOYgEAOgGANgGAMYgIAMgIAMgKAKYgEAFgGAFgFAEYgFAFgGAEgGAEYgFAEgHADgGAEYgGACgHAEgGACYgNAFgOACgOABYgHAAgHABgGgBYgHAAgHAAgHgCYgOgBgNgFgNgFYgMgGgNgGgKgJYgGgEgFgFgFgFYgFgEgEgGgFgFYgIgLgIgLgGgNYgGgMgDgOgDgNYgCgNgBgOABgNYAAgHABgHABgGYABgHACgHACgGYAEgNAGgNAHgLYADgGAEgGAEgFIAHgIIABgBIAAAAIAAAAYAAAAgBABABAAIAAgBIACgCIAEgDIAAAAYAHgGAFgGAHgEYAGgFAIgEAGgEYAIgEAHgDAIgDYAHgDAIgBAIgCYAIgBAIgCAIAAIAFAAIACAAIAAAAYAAAAABAAgBAAIAAAAIABAAIADAAIANAAYAIABAIABAIACYAIABAHADAIACYAIAEAHADAHAEYAHAEAHAFAHAFIAJAIIACACYABAAABABAAABIAFAFYAGAGAFAGAFAHYAFAGAFAHADAIYAFAHACAIAEAIYACAIADAIABAIYACAIAAAJABAHACzADYAAgIABgJgBgJYAAgIgCgJgCgJYgDgIgCgJgEgIYgDgIgFgHgEgIYgFgIgFgHgGgGIgEgFYgBgBAAgBgCgBIgCgCIgKgKYgHgFgHgGgHgFYgIgFgIgEgIgEYgJgDgIgEgJgCYgJgCgJgBgJgBIgNgBIgDAAIgBAAIgBAAIgCAAIgGAAYgJAAgJABgJABYgJADgJABgIAEYgJACgIAFgIAEYgIAEgIAFgHAGYgIAFgGAGgHAGIABAAIgEAEIgCACIgBAAIAAABIgBAAIAAAAIgBACIgHAIYgEAGgEAHgEAGYgIANgGAOgEAPYgCAHgBAIgBAHYgBAIgBAHAAAHYgBAOABAPADAPYADAOAEAPAHANYAGAOAJAMAKAMYAJAKALAMAMAIYAMAJANAHAOAGYAOAFAOAEAPACYAHABAHAAAIAAYAGABAHgBAIAAYAOgCAPgDAOgFYAHgDAGgDAHgDYAGgEAHgDAFgFYAHgEAFgFAFgFYAGgFAFgFAFgFYAKgLAIgMAHgNYAGgNAGgNADgOYADgPABgOAAgO");
	this.shape_67.setTransform(-313.9347,172.9981);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#0066FF").ss(2,1,1).p("ADDAGQAABjgnBkQgnBihaASQhaAQhDhfQhDhfADiFQADiEBFhyQBDhxBVAdQBVAdAoBhQAoBhAABjg");
	this.shape_68.setTransform(-1294.2814,-7.2572);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(3,1,1).p("Ap5AAIJ4AAIJ7AA");
	this.shape_69.setTransform(1539.625,-5.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CCCCCC").ss(1,1,1).p("AIMoMICgAAIAACoQgcGpAcHHAqrIMQAVm0gVm8IAAioIDVAA");
	this.shape_70.setTransform(-1660.8,167.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("EgGOgtUIgXAXIABAAIAWgXIILovIIkI9IMGAAIEKI+IBcAAIAABsEAaxgkIInqAAIomo+EAT5gicIHJAAEgQGgicIBLAAIQ4xaIQpRaEgdGgicIgyAAIAAhKIB9AAIMjAAIIzpXEgb7gicIKiAAEgb7gjmIFtpXIPpAAEgdQAplIApAAIOuABEAP3ApmIOCAAIAAMeI1UAAEgJ/ApmIDHAAEAIlApmIDYAAEgGwA2EIxXAA");
	this.shape_71.setTransform(2017.85,-113.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAFABAGABAEYADAJAEAGAAAAYAAAAAAABABgBYAAAAAAAAAAAAYAAAAAEgGADgJYABgEABgGAAgFYAAgGgBgGgBgGYgCgXgFgYAAAAYAAAAgBgBAAABYAAAAAAAAAAAA");
	this.shape_72.setTransform(-1726.7,55.6587);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AAAgzYAAAAgFAagCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAKAEAGAAAAYAAABAAAAABAAYAAAAAAAAAAgBYAAAAAEgGADgKYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgaAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_73.setTransform(-1739.45,56.1094);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAAgyYAAAAgFAZgCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAJAEAHAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgHADgJYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgZAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_74.setTransform(-1714.55,56.0343);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAGABAFABAFYADAJAEAGAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgGADgJYABgFABgFAAgGYAAgGgBgGgBgGYgCgXgFgYAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_75.setTransform(-1649.4,55.7338);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AAAgzYAAAAgFAagCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAKAEAGAAAAYAAABAAAAABAAYAAAAAAAAAAgBYAAAAAEgGADgKYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgaAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_76.setTransform(-1637.6,56.1094);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAFABAGABAEYADAJAEAGAAAAYAAAAAAABABgBYAAAAAAAAAAAAYAAAAAEgGADgJYABgEABgGAAgFYAAgGgBgGgBgGYgCgXgFgYAAAAYAAAAgBgBAAABYAAAAAAAAAAAA");
	this.shape_77.setTransform(-1624.9,55.6587);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAGABAFABAFYADAJAEAGAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgGADgJYABgFABgFAAgGYAAgGgBgGgBgGYgCgXgFgYAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_78.setTransform(-1699.9,55.7338);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AAAgzYAAAAgFAagCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAKAEAGAAAAYAAABAAAAABAAYAAAAAAAAAAgBYAAAAAEgGADgKYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgaAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_79.setTransform(-1688.9,56.1094);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AAAgyYAAAAgFAZgCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAJAEAHAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgHADgJYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgZAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_80.setTransform(-1664.05,56.0343);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAFABAGABAEYADAJAEAGAAAAYAAAAAAABABgBYAAAAAAAAAAAAYAAAAAEgGADgJYABgEABgGAAgFYAAgGgBgGgBgGYgCgXgFgYAAAAYAAAAgBgBAAABYAAAAAAAAAAAA");
	this.shape_81.setTransform(-1676.15,55.6587);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAFABAGABAEYADAJAEAGAAAAYAAAAAAABABgBYAAAAAAAAAAAAYAAAAAEgGADgJYABgEABgGAAgFYAAgGgBgGgBgGYgCgXgFgYAAAAYAAAAgBgBAAABYAAAAAAAAAAAA");
	this.shape_82.setTransform(-1574.35,55.6587);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AAAgyYAAAAgFAZgCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAJAEAHAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgHADgJYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgZAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_83.setTransform(-1562.2,56.0343);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAGABAFABAFYADAJAEAGAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgGADgJYABgFABgFAAgGYAAgGgBgGgBgGYgCgXgFgYAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_84.setTransform(-1547.55,55.7338);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AAAgyYAAAAgFAZgCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAJAEAHAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgHADgJYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgZAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_85.setTransform(-1612.75,56.0343);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAGABAFABAFYADAJAEAGAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgGADgJYABgFABgFAAgGYAAgGgBgGgBgGYgCgXgFgYAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_86.setTransform(-1598.1,55.7338);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAAgzYAAAAgFAagCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAKAEAGAAAAYAAABAAAAABAAYAAAAAAAAAAgBYAAAAAEgGADgKYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgaAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_87.setTransform(-1587.1,56.1094);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AAAgzYAAAAgFAagCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAKAEAGAAAAYAAABAAAAABAAYAAAAAAAAAAgBYAAAAAEgGADgKYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgaAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_88.setTransform(-1486.25,56.1094);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAGABAFABAFYADAJAEAGAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgGADgJYABgFABgFAAgGYAAgGgBgGgBgGYgCgXgFgYAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_89.setTransform(-1497.25,55.7338);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AAAgyYAAAAgFAZgCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAJAEAHAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgHADgJYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgZAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_90.setTransform(-1461.4,56.0343);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAFABAGABAEYADAJAEAGAAAAYAAAAAAABABgBYAAAAAAAAAAAAYAAAAAEgGADgJYABgEABgGAAgFYAAgGgBgGgBgGYgCgXgFgYAAAAYAAAAgBgBAAABYAAAAAAAAAAAA");
	this.shape_91.setTransform(-1473.5,55.6587);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAAgzYAAAAgFAagCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAKAEAGAAAAYAAABAAAAABAAYAAAAAAAAAAgBYAAAAAEgGADgKYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgaAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_92.setTransform(-1536.8,56.1094);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAFABAGABAEYADAJAEAGAAAAYAAAAAAABABgBYAAAAAAAAAAAAYAAAAAEgGADgJYABgEABgGAAgFYAAgGgBgGgBgGYgCgXgFgYAAAAYAAAAgBgBAAABYAAAAAAAAAAAA");
	this.shape_93.setTransform(-1524.05,55.6587);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAAgyYAAAAgFAZgCAZYgBAHgBAGAAAGYAAAGABAGABAFYADAJAEAHAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgHADgJYABgFABgGAAgGYAAgGgBgGgBgHYgCgZgFgZAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_94.setTransform(-1511.9,56.0343);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAAgvYAAAAgFAYgCAXYgBAGgBAGAAAGYAAAGABAFABAFYADAJAEAGAAAAYAAAAAAAAABAAYAAAAAAAAAAAAYAAAAAEgGADgJYABgFABgFAAgGYAAgGgBgGgBgGYgCgXgFgYAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_95.setTransform(-1446.75,55.7338);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#AE674B").ss(2,1,1).p("AB3ixQAQBCAPBSIAAAKIAACgIAACgIAACgIAACgIiWAAAAAixIAACeIAACgIAACgIAACgICWAAAAAixIB3AAAiWgTQAQhYARhGIB1AAAiWgTICWAAICWAAAiWCNICWAAICWAAAiWCNIAAigAiWHNIAAigICWAAICWAAAiWHNICWAAIAACgIiWAAgAiWEtIAAigAAAmzQA7gCA8EEAAAmzIAAECAh1ixQA6j/A7gDAlKi0QFGuDFOOs");
	this.shape_96.setTransform(-2403.2,119.5826);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("EEfjgA/QAohTAohIQEQnuEQgHIAGHsIIkgKEEgzgDaIImgJEkx8AK8IL5qBILSKV");
	this.shape_97.setTransform(-364.05,0.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#87533D").ss(5,1,1).p("AH8rJIAAGLQFgASFxD4ICmM8AVzThIimAAIkPAAIi+AAIoSAAIjKAAIiAAAIlUAAIkZAAIAA1lIUExiIM4L2ATNg0IAAUVAj8hIIi0UpAj8hIICgUpArdy0IAAXJIAAPSIqVAAIAAv6IAA2hAj8hIQFwkKGIAU");
	this.shape_98.setTransform(-2296.775,77.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#87533D").ss(2,1,1).p("AHNikIAAFKAnMikIAAFK");
	this.shape_99.setTransform(-2247.075,186.15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#783518").ss(1,1,1).p("AyQh7IAAD3AxMh7IAAD3AzTh7IAAD3AuCh7IAAD3AvFh7IAAD3Ainh7IAAD3Ahjh7IAAD3Ajqh7IAAD3As+h7IAAD3AAjh7IAAD3ABnh7IAAD3ACqh7IAAD3ATVh7IAAD3ASRh7IAAD3AROh7IAAD3APHh7IAAD3ANAh7IAAD3AODh7IAAD3");
	this.shape_100.setTransform(-801.95,-62.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#783518").ss(2,1,1).p("AwKtYIBDAAIBEAAIBDAAIBGAAIAAj4IgCAAIhEAAIhDAAIhEAAIhDAAIhEAAIhDAAIhEAAIhDAAIAAD4IBDAAIBEAAIBDAAgAwKxQIAAD4AghtYIhDAAIhEAAIhDAAIhEAAIAAj4IBEAAIBDAAIBEAAAghtYIBDAAIBDAAIBEAAIBGAAIAAj4IgEAAIhCAAIhEAAIhDAAIhDAAgAQJtYIBEAAIBDAAIBEAAIBFAAIAAj4IgJAAIg8AAIhEAAIhDAAIhEAAIAAD4IhDAAIhEAAIhDAAIhEAAIAAj4IBEAAIBDAAIBEAAABZJxIDwAAIAADwIAADwIjwAAIjwAAIAAjwIAAjwIDwAAIAADwIAADwABZNhIDwAAAiXNhIDwAA");
	this.shape_101.setTransform(-801.85,35.625);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#E4C27B").ss(2,1,1).p("AsK7LIAAgMQAEjnCAjNICjisQBMhABJgdQCLg9CvgHQC4AJCPA7QBvAuBVBNQAFAFAGAFQBhBbA/CFIAOAfQA+CBABCgIAAAQQAAAEgBAFArN7LQDRmhDUijQAHgFAGgFQEDi9EGC9QAGAFAHAFQDXCjDbGhIEKAAIJ1AAAsK7LIA9AAIV6AAA4r7LIMhAAAKnf5QDVgxDVAxIADHgA28f5QDVgxDVAxQDdA4DNg4EAHrAkQICfAAIAADJIx9AAIAAjJICWAAgEgNtAjfIAABiICeAAEgNtAjfIClAAIAABiQgQBRBKBHEgLIAjfIA4AAEgSzAjVIApAAEgSzAk8IAAhnEgSzAk8QgMBTBEBKEgWFAjVIAwAAIAABnQAOBYhIBFEgVVAk8ICiAAEgVVAjVICiAAEgOVAjfIAoAAEgNtAlBQAKBWhOBCEAWbAjfIAABiQgQBRBKBHEAWbAjfIA4AAEATOAjfIAoAAIAABiICeAAEAT2AjfIClAAEAT2AlBQAKBWhOBCEAOwAjVIApAAEAOwAk8IAAhnEAMOAjVIAABnQAOBYhIBFEALeAjVIAwAAICiAAEAOwAk8QgMBTBEBKEAMOAk8ICiAAAjEbgIIRAAIAAITIoRAAgAwSf5IADHgEgFdAkQIAAzYINIAAIAATYARRf5QDdA4DNg4");
	this.shape_102.setTransform(-800.375,-22.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#831F1F").ss(2,1,1).p("Ak2zFIAAnqIEOAAIENAAIAAHqIAAHqAsC6vIAAHqIAAHqAwQ6vIAAHqIEOAAA0ezFIAAnqA0ezFIEOAAIAAHqAk1rbIgBAAIAAnqIEOAAIENAAA0erbIAAnqALtzFIAAnqIEOAAIEOAAIAAHqIAAHqALtzFIEOAAIEOAAAP76vIAAHqIAAHqIg8AAAgo6vIAAHqIAAHqIhDAAAgnrbIgBAAAQDrbIgIAAAL1rbIgIAAIAAnqAMETGIAAnqIEOAAIEOAAIAAHqIAAHqIkOAAIkOAAIAAnqIEOAAIEOAAAQSTGIAAHqAQSLcIAAHqAwQTGIAAHqIkOAAIAAnqIEOAAIEOAAIAAHqIkOAAA0eTGIAAnqAsCLcIAAHqAwQLcIAAHq");
	this.shape_103.setTransform(-801.2,-1.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#9A9381").ss(2,1,1).p("EAaRgjpIB+AAIAAB/Ih+AAgATK9jIB5AAIAAB5Ih5AAgAGymGIBeAAIAABeIheAAgAW8nfICIAAIAACIIiIAAgEgRYgmVIDaAAIAABlIjaAAgEgWpgj1IB/AAIAAB/Ih/AAgA2A8oICxAAIAAA7IixAAgA8OPkIBiAAIAABjIhiAAgA6iTRIBZAAIAABYIhZAAgAaofjIBZAAIAABYIhZAAgEAHbAgpICPAAIAACPIiPAAgEAH0Ak8IAABaIhuAAIAAhvIBhAAIANAAIAAAVIgNAAIAAgVIAAheIBzAAIAABzg");
	this.shape_104.setTransform(-1976.575,-2.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#9F7B63").ss(2,1,1).p("ACNjGQAggnAgggQAegeAegZQEXjmEAEdQAmAqAkA1IAAJaInSAAIkLAAgAtpjGQBBhOAJANQAEgDADgDQE+kPEBEPQAnAqAlA1IAAJaIn2AAIjmAAg");
	this.shape_105.setTransform(-1981.6,-129.8809);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#CCCCCC").ss(2,1,1).p("A3+2gMAvPAAAQCOAABHBnQA/BcgJCIQgKCFhGBfQhNBnhuAAMgvPAAAQhdAAg/hnQg6hfgHiFQgHiIA0hcQA8hnB0AAgAvMWhInrAAIAA9gQFimNFjGNIAAdgAM8k9QE5kvEKEvIAAOwIpDAAg");
	this.shape_106.setTransform(-1972.2789,114.825);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#999999").ss(2,1,1).p("AKWhvIDgAAIAADfIjgAAgAENhvIDgAAIAADfIjgAAgAt1hvIDgAAIAADfIjgAAgAhUhvIDfAAIAADfIjfAAgAnnhvIDhAAIAADfIjhAAg");
	this.shape_107.setTransform(-1975.725,-271.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#18457C").ss(5,1,1).p("AAAVgIAAkcIAAhPIAAi+IAAi+IAAjdIAAjOIAAjOIAAooIAAs3");
	this.shape_108.setTransform(299.15,87.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#184074").ss(2,1,1).p("AjNjNIGbAAIAAGbImbAAg");
	this.shape_109.setTransform(468.425,144.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#976449").ss(2,1,1).p("AFYljIAAOFAFYohIAAC+AlXljIAAOFAlXohIAAC+IKvAA");
	this.shape_110.setTransform(471.2,142.05);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#976449").ss(5,1,1).p("A04iNIVfAAIKwAAIJiAAAU5COMgpxAAA");
	this.shape_111.setTransform(432.875,210.85);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#42393C").ss(5,1,1).p("AU5GEImMAAIAArXIGMAAAmnmSIAADNIAADcIAAC/IAAC9IkwAAIkxAAIkwAAAwImSIExAAIAADNIAADcIAAC/IAAC9AwIjFIExAAIEwAAIExAAIAADcIAAC/IAAC9IkxAAAwImSIAADNIAADcIAAC/IAAC9AwIAXIExAAIEwAAIExAAAwIDWIExAAIEwAAIExAAArXmSIEwAAIExAAIAADNA04AXIEwAAA04mSIEwAAA04jFIEwAAA04DWIEwAA");
	this.shape_112.setTransform(432.875,148.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#432B38").ss(5,1,1).p("AxbqEIMHAAIAACXIsHAAgAGDp0IMvAAIAACWIhnAAIjSAAIjRAAIjGAAIhfAAgAU5KFIpiAAIqwAAI1fAAA04BbMApxAAA");
	this.shape_113.setTransform(432.875,22.975);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#184074").ss(5,1,1).p("AwrAAIAAkAICuAAIDeAAIDdAAIAAEAAQsAAIAAEBIjSAAIjRAAIjGAAIAAkBIDGAAIAAEBAKJAAIDRAAIAAEBANaAAIDSAAAqfAAIAAEBIjeAAIiuAAIAAkBICuAAIAAEBAqfAAIDdAAIAAEBIjdAAAt9AAIDeAAAt9kAIAAEAAqfkAIAAEAAKJj4IAAD4AHDAAIAAj4AQsj4IAAD4ANaj4IAAD4");
	this.shape_114.setTransform(435.975,0.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#686C87").ss(3,1,1).p("A04CLQTFocWsIA");
	this.shape_115.setTransform(432.875,-64.0879);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(3,1,1).p("EFVvgKlIVAAAIAAJfI1AAAgEEZBgKlIVAAAIAAJfI1AAAgElT9gRGMAg/AAAIAAYyMgg/AAAgElqugOoQHYvfJBOdIAABCMAAAAlRIwZAAMAAAglRIQZAA");
	this.shape_116.setTransform(-518.6,106.6091);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(2,1,1).p("EFNAAgXIhdAAIg4AAIgjAAEEs3AiAIAAosIAAhPIE0AAIAAJ7EEf9AQHQAPgKAPgJEEf9AQHQAJgFAHgEQAsgZAXgIQA1gRA6ABQAKAAALABQBFAEA/AeQBBAdAyAyQBwBwAACoIAAAZIl8AAIlSAAIAAgZQAAjLBxhqQAOgOAQgMQAAgBABAAEEf8AQIQAAgBABAAIAAAAEEi/APNIAAFKIAABZEEdvAiAIAArYIEzAAIA0AAIAOAAIFaAAIAAJkIAAB0ED3oAWsIH8AAIHgAAIHhAAIAAJkIneAAIi4AAIklAAIjdAAIkrAAIg8AAEEUFAiAIAApNIAAg6IE7AAIAAKHElFygh/IHrWiIiMAAIqVAAIiXAAgEkrFgOcIg8BoIg/hoEkrFgOcIh7AAIA1iDg");
	this.shape_117.setTransform(-320.125,30.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(2,1,1).p("EA/BghoQH7gTHxFNIAAA8IAARjIvsAAIvtAAIAAxjIPtAAIPsAAEA/BgKPIAAxjIAAl2EAvUgbyQH7llHygREhOsgGpIETAAIWWAAMAAAAuuEhKZgGpMAAAAuuEg0DgGpMAoMAAAEhOsgoEMBC1AAA");
	this.shape_118.setTransform(-2384.9,-4.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(1,1,1).p("EDEKAh8ISKAAQB9AABJAvQBCAqgCA9QgBA9hCAqQhJAvh6AAIyKAAQhiAAg8gvQg3gqgDg9QgCg9A1gqQA7gvBqAAgECOLAh8ISKAAQB+AABJAvQBBAqgBA9QgCA9hCAqQhJAvh6AAIyKAAQhhAAg8gvQg4gqgCg9QgDg9A2gqQA6gvBqAAgEigGgpEIDVAAIAADVIjVAAgEiYcglvIipAAIAAjVICpAAEiqFgpEIDVAAIAADVIjVAAgEilBgpEIDVAAIAADVIjVAAgEiu9gpEIDVAAIAADVIjVAAgAAuauIGSAAIAABbIAAGdIAABYIjJAAIjJAAIgdAAAthfWIAAiJIEoAAIAACJIAAJvAthfWIEoAAAAuauIAABbIAAH1AlkcJIAAhbIGSAAAlkcJIB6AAIEYAAIGSAAEgFSAj+IgSAAIAAn1EgNhApFIAApvEi4fgpEIDVAAIAADVIjVAAgEizhgpEIDVAAIAADVIjVAAgEi9jgpEIDVAAIAADVIjVAAgEjCbgpEIDVAAIAADVIjVAAgEjG/gpEIDWAAIAADVIjWAAgEjQ+gpEIDVAAIAADVIjVAAgEjL5gpEIDVAAIAADVIjVAAgEjaZgpEIDVAAIAADVIjVAAgEjV1gpEIDVAAIAADVIjVAAg");
	this.shape_119.setTransform(-1485.2733,-43.325);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A7DCEE").s().p("EAwCAZWIAArLIDtAAIAACVIjFAAIAAI2gEAmzAZWIAArLIEAAAIAALLgAb4ZWIAArLIEAAAIAALLgEghEAZWIAArLIEAAAIAALLgEgqTAZWIAArLIEAAAIAALLgEg1NAZWIAArLID/AAIAALLgEAwCAJ5IAArLIDtAAIAAJ9IAABOgEAmzAJ5IAArLIEAAAIAALLgAb4J5IAArLIEAAAIAALLgEghEAJ5IAArLIEAAAIAALLgEgqTAJ5IAArLIEAAAIAALLgEg1NAJ5IAArLID/AAIAALLgEAwCgFtIAArMIEAAAIAAHDIhvAAIAACyIBcAAIAABXgEAmzgFtIAArMIEAAAIAALMgAb4ltIAArMIEAAAIAALMgEghEgFtIAArMIEAAAIAALMgEgqTgFtIAArMIEAAAIAALMgEg1NgFtIAArMID/AAIAALMgEAvzgUAIAAlVIAAFVInYAAIAAlVIHYAAIHYAAIAAFVgEAobgUAInYAAIAAlVIHYAAIAAFVgEAhDgUAInYAAIAAlVIHYAAIAAFVgEghTgUAInYAAIAAk8IAAE8InYAAIAAk8IHYAAIHYAAIAAE8IAAk8IHZAAIAAE8gEg3KgUAIAAjqIAAhSIHHAAIAAE8g");
	this.shape_120.setTransform(919.725,66.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D5434E").s().p("AmjGgQirirAAj1QAAj0CrivQCvirD0AAQD2AACsCrQCtCvAAD0QAAD1itCrQisCvj2AAQj0AAivivgAlvltQiWCaAADVQAADWCWCUQCXCaDXAAQDVAACYiaQCWiUgBjWQABjViWiaQiYiUjVAAQjXAAiXCUgAlbFZQiNiLAAjMQAAjLCNiRQCQiMDLAAQDMAACPCMQCLCPACDCIAAAaQgCDBiLCHQiPCUjMAAQjLAAiQiUgAmjAdIFZAAIAAGYIBrAAIAAmYIGDAAIAAhjImDAAIAAlIIhrAAIAAFIIlZAAg");
	this.shape_121.setTransform(925.15,-25.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A7DCFE").s().p("AJ4MhIAAq+IAAK+IpfAAIAA1+IpfAAIl+AAIF+AAIAALAIl+AAIF+AAIAAK+Il+AAIAAq+IAArAIAAjEIeJAAIAADEIlNAAIpfAAIJfAAIAALAIFNAAIAAK+gACNDBIAAhcgApGMhIAAq+IAArAIJfAAIAAV+gAhaC4IAAhsgAPFBjIlNAAIAArAIFNAAIAALAgApGBjgApGpdg");
	this.shape_122.setTransform(927.65,165.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2C5B9F").s().p("AZaK7Mgy8AAAIiuAAIAAksICuAAMAy8AAAIDAAAIAAEsgAZamOMgy8AAAIi3AAIAAksMA4qAAAIAAEsg");
	this.shape_123.setTransform(919.75,-171.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F9FEF7").s().p("A5dGPIAAsdMAy7AAAIAAMdg");
	this.shape_124.setTransform(919.325,-171.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#ECEBF9").s().p("AZnYLMAAAgwVIHYAAIHYAAIHYAAIHYAAIAIAAIAAIuIiiAAIAABcIgvAAIAAnDIkBAAIAALMIDuAAIAAEbIjuAAIAALKIDuAAIAAETIjuAAIAALLIApAAIAACDIDFAAIAAA8gEAmvAVMIEAAAIAArLIkAAAgAb0VMIEAAAIAArLIkAAAgEAmvAFuIEAAAIAArKIkAAAgAb0FuIEAAAIAArKIkAAAgEAmvgJ3IEAAAIAArMIkAAAgAb0p3IEAAAIAArMIkAAAgEg3OAYLIAAjjIAAkcIAAhfIAArYIAAkMIAAopIAAtUIAAhWIHHAAIHYAAIHYAAIHZAAIAHAAMAAAAwVgEghIAVMID/AAIAArLIj/AAgEgqXAVMIEAAAIAArLIkAAAgEg1SAVMIEAAAIAArLIkAAAgEghIAFuID/AAIAArKIj/AAgEgqXAFuIEAAAIAArKIkAAAgEg1SAFuIEAAAIAArKIkAAAgEghIgJ3ID/AAIAArMIj/AAgEgqXgJ3IEAAAIAArMIkAAAgEg1SgJ3IEAAAIAArMIkAAAg");
	this.shape_125.setTransform(920.15,93.025);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A9A889").s().p("AkmEFIBfivIBiivIBdirIhdCrIhiCvIhfCvQwegF1QiKIGDl6IDRAAICPAAIepAAIG/AAIcVAAICPAAIE5AAQqsGa2NBXIgxiYIg7iuIAaAAIgaAAIg4irIA4CrIpUAAIJUAAIA7CuIAxCYQkPARkqAGIjKABIh+AAgAjHBWILxgBgAJbDtgAHvhZg");
	this.shape_126.setTransform(2531.4,144.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#98987C").s().p("EiYRAOhIAAgRICWAAIARARgEBtmgCqIhVkEIBVEEIxaAAICCjsIB/AAIDKgBII6ABIo6gBQEqgGEQgRQWNhXKsmbILIKsIAABKgEBcMgCqMgpuAAAIGDl7QVPCKQeAFIiCDsg");
	this.shape_127.setTransform(1898.875,211.425);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#243934").s().p("AjYEfIAAkmIAAkXIGxAAIAAEXIAAEmg");
	this.shape_128.setTransform(2553.075,88.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FAEEC8").s().p("Al9C+IF2l8IGFF8g");
	this.shape_129.setTransform(2562.1,-227.55);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#53230C").s().p("EAg4AUvIAAguIBFAAIBKAAIAAAugEgjUAUvIAAguIBGAAIBJAAIAAAugEAjCACHIhFAAIhEAAIgLAAIAAg/IA+gKIAcgFIBWgPIAABdgEghJACHIhFAAIhFAAIgKAAIAAhJIACAAICuAZIAAAwgAKvt9IAAlcIAAhVIEPAAIAABVIAAFcgAgXt9IAAlcIAAhDQCGAACHgDIAABGIAAFcgArAt9IAAlcIAAhVIBgAAQBWAGBYADIAABMIAAFcg");
	this.shape_130.setTransform(2546.2,-14.175);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#913A29").s().p("ANTBSIAAhUIkPAAIAABUIm5AAIAAhGQFKgIFNgeQDtgXDuggIAACjgAodBSIAAhMQDNAJDOAAIAABDgAzdBSIgfAAIAAiIQDAAXDAAQICwANIhfAAIAABUg");
	this.shape_131.setTransform(2556.925,-146.575);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B85835").s().p("ARkBGIiJAAIiKAAIiJAAIhsAAIhtAAIhsAAIhsAAIiMAAIiLAAIidAAIidAAIieAAIieAAIidAAIieAAIieAAIidAAIAAiLIGxAAIEPAAIGaAAIEOAAIG5AAIEPAAIGpAAIAACLg");
	this.shape_132.setTransform(2558.475,-96.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#73948B").s().p("EgnOAK9IgDgBIAJAAQQjAIEVlFQUfGQW3mQQILFgGBAUQyLC1yVAAQ05AA1HjrgAhqo+QmrgPmsgyQkhgjkigyIgDgBIAGAAQLAAGC3jYQNlEJPMkJQFbDpEAAOQiOAWiQATQnJA5nLAQQiuAGivAAQivAAiugGg");
	this.shape_133.setTransform(2533.775,-93.1863);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFEBD0").s().p("AWiT9IAAkmIAAEmImSAAIAAkmIAAEmImUAAIAAkmIAAEmImSAAIAAkmIGSAAIGUAAIGSAAIGUAAIAAEmgApiT9IAAkmIAAEmImbAAIAAkmIAAEmImcAAIAAkmIAAEmImcAAIAAkmIGcAAIGcAAIGbAAIGcAAIAAEmgAWiPXImSAAImUAAImSAAIAAkXImwAAIAAEXImcAAImbAAImcAAImcAAIAAnoIAAmUIAAgBIADABIDGAbIDFAWQBkALBjAIQBjAJBkAIQCCAJCEAIIEHALQCCAECEABQCDACCDgCQBzgBBzgEIDngJIDngNIDngSIAAFLIAAlLIABAAQBygKBzgMQBzgNB0gOIDmgeIDogkIAAAUIAAGqIjoAAIAAmaIAAGaIjmAAIAAl8IAAF8IjnAAIAAlhIAAFhIjmAAIjnAAIAAk5IAAE5IjnAAIAAksIAAEsIjnAAIAAkjIAAEjIhVAAIBVAAIDnAAIDnAAIDnAAIDmAAIDnAAIDmAAIDoAAIAAHogACRKSIEDAAIkDAAIAAijIAACjgAhxKSIECAAIkCAAIjZAAgAhxKSIAAijIBxAAICRAAIiRAAIAAkeIAAEeIhxAAIiVAAIAAkeIAAEeIkGAAIAAkjIAAEjIkHAAIAAkuIAAEuIkGAAIAAk/IAAE/IjIAAIABlQIgBFQIjGAAIAAljIAAFjIjHAAIAAl0IAAF0IjHAAIDHAAIDHAAIDGAAIDIAAIEGAAIEHAAIEGAAICVAAgADqPXgAjGPXgAZOHvgAVoHvgASBHvgAK0HvgAHNHvgADmHvgAhxHvgAkGHvgAoMHvgAsTHvgAwZHvgAzhHvgA2nHvgA5uHvgASspyIAAiiIAACiIiKAAIAAiiIAACiIiJAAIAAiiIAACiIiKAAIAAiiIAACiIhqAAIgCiiIACCiIhqAAIgEiiIAECiIhrAAIgGiiIAGCiIhqAAIgIiiIAICiIiPAAIgEiiIAECiIiPAAIAAiiIAACiIidAAIAAiiIAACiIieAAIAAiiIAACiIidAAIAAiiIAACiIieAAIAAiiIAACiIieAAIAAiiIAACiIidAAIAAiiIAACiIieAAIAAiiIAACiIieAAIAAiiICeAAICeAAICdAAICeAAICeAAICdAAICeAAICdAAICLAAICLAAIBsAAIBtAAIBsAAIBsAAICKAAICJAAICKAAICJAAIAACigAOLugIAAlcIGqAAIAAFcgADDugIAAlcIG5AAIAAFcgAnlugIAAlcIGbAAIAAFcgAylugIAAlcIGyAAIAAFcg");
	this.shape_134.setTransform(2551.325,-10.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#5F7E76").s().p("AgsVNQiDgBiDgDIkHgMQiDgHiDgJQhkgIhigJQhkgJhjgKIjGgXIjFgbIgDgBIAAABQiWgSiWgUIiugaQl1g3lxhNQDEgFCzgOUAnmAG5Am6gGCQmBgVoLlgQ23GR0fmRQkVFGwjgJQQQhUHDmiICdAAICeAAICeAAICdAAICeAAICeAAICcAAICeAAICPAAICPAAIBrAAIBqAAIBrAAIBqAAICJAAICKAAICJAAICJAAIATAAQFmGsOTB9QjLAsjLAmIhWAPIgcAEIg+ALIjFAgIAAgUIjnAkIjmAeQh0AOh0ANQhzAMhyAJIgBAAIjnASIjmAOIjnAJQhzADhzABIiEABIiDgBgAkKjLQhYgEhXgFIiwgNQjBgQi/gYQl3gulyhNQCCgDB3gJQEiAyEhAjQGsAyGrAPQFdAMFdgMQHLgQHJg6QCQgSCOgWQkAgOlbjpQvMEJtlkJQi3DYrAgGQKyg3EskWIDPAAIThAAIDlAAQDuEbJeBUQjuArjsAhQjuAgjtAWQlMAflKAJQiIADiHAAQjNAAjMgJgAkpreIJipvIJ/JvgAg2s9IL6AAImGl9g");
	this.shape_135.setTransform(2529.475,-125.55);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#735636").s().p("Ab4J0InKAAIhTAAIwoxaIw4RaIhMAAIhTAAIqiAAIhKAAIgyAAIAAhLIB8AAIMkAAIIzpWIABAAIAWgXIILovIIkI+IImI9IHqAAIBcAAIAABsg");
	this.shape_136.setTransform(2012.45,-396.275);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C3E9FE").s().p("EASqAj+IFQAAQiZAehlBSQgvAlgjAzgEgYIAj+ICwAAQhjAThNAqgAWLVKIB+AAQhXA5gnBggA30VKIB+AAQhYA5gmBggAWZU0IAAgyQAmhAA5gNQgXASglBtgA3mU0IAAgyQAmhAA4gNQgXASgkBtgAJQKsICoAAQhwAsg4CcgAA7KsICpAAQhwAsg5CcgAo8KsICpAAQhwAsg5CcgAWLJmIB+AAQhXA4gnBhgA30JFIB+AAQhYA5gmBggAWZJQIAAgzQAmg/A5gOQgXASglBugA3mIvIAAgzQAmg/A4gNQgXARgkBugAJQBEICoAAQhwAsg4CcgAA7BEICpAAQhwAsg5CcgAo8BEICpAAQhwAsg5CcgAWLgQIB+AAQhXA2gnBhgA30h0IB+AAQhYA4gmBggAWZgoIAAgxQAmhAA5gOQgXASglBtgA3miMIAAgxQAmhAA4gOQgXASgkBtgAJQoRICoAAQhwAsg4CbgAA7oRICpAAQhwAsg5CbgAo8oRICpAAQhwAsg5CbgA30q7IB+AAQhYA4gmBhgAWLrDIB+AAQhXA4gnBhgA3mrRIAAgzQAmg/A4gOQgXASgkBugAWZraIAAgyQAmhAA5gNQgXASglBtgAJQyBICoAAQhwArg4CdgAA7yBICpAAQhwArg5CdgAo8yBICpAAQhwArg5CdgAWL1EIB+AAQhXA5gnBggA302fIB+AAQhYA4gmBhgAWZ1bIAAgxQAmhAA5gNQgXARglBtgA3m22IAAgyQAmg/A4gOQgXASgkBtgAJQ8jICoAAQhwAsg4CcgAA78jICpAAQhwAsg5CcgAo88jICpAAQhwAsg5CcgEAWLggfIB+AAQhXA3gnBigEgX0ggfIB+AAQhYA3gmBigEAWZgg3IAAgxQAmhAA5gNQgXARglBtgEgXmgg3IAAgxQAmhAA4gNQgXARgkBtgEAJQgnEICoAAQhwArg4CcgEAA7gnEICpAAQhwArg5CcgEgI8gnEICpAAQhwArg5Ccg");
	this.shape_137.setTransform(2017.925,-57.75);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#86D3FD").s().p("EgAeAqQIAA1pIAAVpImJAAIAAqNIAAg2IgBlwQANidB1hTQBuhMCaAGIAVABQCkANB6BIQB6BGAJCaIAAQzgEARwAlYIAAhdQAjgyAvgmQBkhSCZgeICFAAIAAElgEgZDAlYIAAjoQBOgpBigUICFAAIAAElgAVRVFIAAgsQAnhhBXg4IBcAAIAADFgA4uVFIAAgsQAmhhBYg4IBcAAIAADFgAWCRpQAkhtAXgSQg4AOgnA/QAshNAzAAQAyABA7BMIAAAygA3+RpQAlhtAXgSQg4AOgnA/QAshNAzAAQAyABA6BMIAAAygAIWMGIAAhdQA4icBwgsIBCAAIAAElgAABMGIAAhdQA4icBwgsIBDAAIAAElgAp2MGIAAhdQA5icBvgsIBDAAIAAElgAVRJhIAAgtQAnhgBXg4IBcAAIAADFgA4uJAIAAgtQAmhgBYg5IBcAAIAADGgAWCGFQAkhtAXgSQAyABA7BMIAAAygA3+FkQAlhuAXgRQAyABA6BMIAAAygAW9EGQg4ANgnBAQAshNAzAAgA3CDlQg4ANgnBAQAshNAzAAgAIWCfIAAheQA4ibBwgrIBCAAIAAEkgAABCfIAAheQA4ibBwgrIBDAAIAAEkgAp2CfIAAheQA5ibBvgrIBDAAIAAEkgAVRgWIAAgtQAnhgBXg4IBcAAIAADFgA4uh6IAAgsQAmhhBYg4IBcAAIAADFgAWCjyQAkhuAXgRQAyABA7BMIAAAygAW9lxQg4ANgnBAQAshNAzAAgA3+lWQAlhtAXgSQAyABA6BMIAAAygA3CnVQg4AOgnA/QAshNAzAAgAIWm3IAAhdQA4icBwgsIBCAAIAAElgAABm3IAAhdQA4icBwgsIBDAAIAAElgAp2m3IAAhdQA5icBvgsIBDAAIAAElgA4urAIAAgtQAmhgBYg5IBcAAIAADGgAVRrIIAAgtQAnhhBXg4IBcAAIAADGgA3+ucQAlhuAXgRQAyABA6BMIAAAygAWCulQAkhtAXgSQg4AOgnA/QAshNAzAAQAyABA7BMIAAAygA3CwbQg4ANgnBAQAshNAzAAgAIWwnIAAhdQA4icBwgsIBCAAIAAElgAABwnIAAhdQA4icBwgsIBDAAIAAElgAp2wnIAAhdQA5icBvgsIBDAAIAAElgAVR1JIAAgsQAnhhBXg4IBcAAIAADFgA4u2kIAAgtQAmhhBYg4IBcAAIAADGgAWC4lQAkhtAXgSQAyABA7BMIAAAygAW96kQg4AOgnA/QAshNAzAAgA3+6BQAlhtAXgRQg4ANgnA/QAshMAzAAQAyABA6BLIAAAygAIW7IIAAheQA4icBwgsIBCAAIAAEmgAAB7IIAAheQA4icBwgsIBDAAIAAEmgAp27IIAAheQA5icBvgsIBDAAIAAEmgEAVRgglIAAgsQAnhhBXg4IBcAAIAADFgEgYugglIAAgsQAmhhBYg4IBcAAIAADFgEAWCgkBQAkhtAXgSQg4AOgnA/QAshNAzAAQAyABA7BMIAAAygEgX+gkBQAlhtAXgSQAyABA6BMIAAAygEgXCgmAQg4AOgnA/QAshNAzAAgEAIWglqIAAheQA4icBwgrIBCAAIAAElgEAABglqIAAheQA4icBwgrIBDAAIAAElgEgJ2glqIAAheQA5icBvgrIBDAAIAAElg");
	this.shape_138.setTransform(2023.75,-37.475);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEFEFE").s().p("EAFyAsQIAAwzQgJiah6hGQh6hIikgNIgVgBQiagGhuBMQh1BTgNCdIABFwIAAA2IAAKNIhDAAIgIr5IAAi8IgBjXQAPitCMhaQCMhaDGAOQDFANCQBPQCRBOAKCpIAAD1ICiAAIAAgVIAyAAIAJAAICAAAIAKAAIChAAIAAAVIB5AAIBTAAIhTAAMAAAhKIIBTAAMAAABKIIHJAAIBLAAIEGAAIAAB1IwcAAIAAgFIA2AAIAAhwIAABwIg2AAIj6AAID6AAIAAAFIAAAEIAAKIIj6AAIAAqIIAAgEIjYAAIAAh1IAAB1IAAAEIAAMegAKcfuIAAgFIg2AAIAAhwIAABwIA2AAgEAJiAsAIAAiGIAyAAIAIAAID6AAIAyAAIAACGgEgQUAsAIAAiGIAyAAIAIAAID6AAIj6AAIAAqIIuugBIgpgBIAAh3IAKAAIBLAAIKiAAIBTAAIhTAAMAAAhKIIBTAAMAAABKIIBXAAIAAgVIAyAAIAIAAICBAAIAKAAIChAAIAAAVICRAAIAAB5IjHAAIAAgJIj6AAID6AAIAAAJIAAKIIAyAAIAACGgAvafyIAAgJIg2AAIAAhwIAABwIA2AAgAqqfpIAAhwIAABwIg2AAgEAQDAn1QAyisgyi9IJmAAQgxCkAxDFgEARKAl7IAABdIHUAAIAAklIiEAAIlQAAgEgZoAn1IAAgdIE0AAIAAklIiEAAIiwAAIAAgFIjfAAIgIgiIJmAAQgxCkAxDFgAKcfpgAvafpgAMkdaQgvgBgjgiQgigjAAgxQAAgxAigjQAjgiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAjQghAhgvACgAtTdaQgugBgjgiQgigjAAgxQAAgxAigjQAjgiAwAAQAyAAAjAiQAiAjAAAxQAAAxgiAjQgiAhguACgAHMOkIAAlqIE0AAIAAFqgAHwMpIAABdIDrAAIAAklIhDAAIioAAgAhHOkIAAlqIEzAAIAAFqgAgkMpIAABdIDqAAIAAklIhCAAIioAAgAq/OkIAAlqIE0AAIAAFqgAqcMpIAABdIDrAAIAAklIhCAAIipAAgAHME8IAAlpIE0AAIAAFpgAHwDBIAABeIDrAAIAAkkIhDAAIioAAgAhHE8IAAlpIEzAAIAAFpgAgkDBIAABeIDqAAIAAkkIhCAAIioAAgAq/E8IAAlpIE0AAIAAFpgAqcDBIAABeIDrAAIAAkkIhCAAIipAAgAHMkaIAAlqIE0AAIAAFqgAHwmUIAABdIDrAAIAAklIhDAAIioAAgAhHkaIAAlqIEzAAIAAFqgAgkmUIAABdIDqAAIAAklIhCAAIioAAgAq/kaIAAlqIE0AAIAAFqgAqcmUIAABdIDrAAIAAklIhCAAIipAAgAHMuKIAAlpIE0AAIAAFpgAHwwEIAABdIDrAAIAAklIhDAAIioAAgAhHuKIAAlpIEzAAIAAFpgAgkwEIAABdIDqAAIAAklIhCAAIioAAgAq/uKIAAlpIE0AAIAAFpgAqcwEIAABdIDrAAIAAklIhCAAIipAAgAHM4rIAAlqIE0AAIAAFqgAHw6mIAABeIDrAAIAAkmIhDAAIioAAgAhH4rIAAlqIEzAAIAAFqgAgk6mIAABeIDqAAIAAkmIhCAAIioAAgAq/4rIAAlqIE0AAIAAFqgAqc6mIAABeIDrAAIAAkmIhCAAIipAAgEAHMgjNIAAlqIE0AAIAAFqgEAHwglIIAABeIDrAAIAAklIhDAAIioAAgEgBHgjNIAAlqIEzAAIAAFqgEgAkglIIAABeIDqAAIAAklIhCAAIioAAgEgK/gjNIAAlqIE0AAIAAFqgEgKcglIIAABeIDrAAIAAklIhCAAIipAAg");
	this.shape_139.setTransform(2027.525,-50.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E1CDB2").s().p("AIRGQIAAseIDYAAIAAKIIgIAAIgyAAIAACFIFmAAIAAiFIgyAAIAAqIIOCAAIAAMegARQB1IJmAAQgxjFAxikIpmAAQAyC9gyCsgA4bGQIAAkbIF/AAQgxjFAxikIpmAAIAIAjIhqAAIAAi9IApgBIOuABIAAKIIgIAAIgyAAIAACFIFmAAIAAiFIgyAAIAAqIIDHAAIABAmIAIL4g");
	this.shape_140.setTransform(2019.825,192.975);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#726D50").s().p("A7WE3IFupWIPpAAIo0JWgATsEWIolo9IMFAAIELI9gAl/kfIAWgXIgVAXg");
	this.shape_141.setTransform(2014.1,-372.0625);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CE5C6B").s().p("EAUWAtyMAAAhKJIHJAAMAAABKJgEAYEAhBQgzABgeAlQgeAkAABEIAAEHIEHAAIAAjIQAAimgygUQgvgUguAAIgJABgAYEVdQgzACgeAkQgeAkAABEIAAEHIEHAAIAAjJQAAilgygVQgvgTguAAIgJABgAYELkQgzACgeAlQgeAkAABDIAAEHIEHAAIAAjIQAAilgygVQgvgTguAAIgJAAgAYEAyQgzACgeAkQgeAlAABEIAAEHIEHAAIAAjKQAAilgygUQgvgTguAAIgJAAgAYEpNQgzACgeAkQgeAlAABDIAAEHIEHAAIAAjJQAAilgygVQgvgTguAAIgJABgAYE0qQgzACgeAlQgeAlAABDIAAEHIEHAAIAAjJQAAilgygVQgvgTguAAIgJAAgEARKAtyIAAgVIihAAIgKAAIiAAAIgJAAIgyAAIAAAVIiiAAIAAj2QgKioiRhOQiQhPjGgNQjFgOiMBZQiMBbgPCsIABDXIgBAfIiRAAIAAgVIihAAIgKAAIiBAAIgIAAIgyAAIAAAVIhXAAMAAAhKJIBLAAIQ4xaIQpRaMAAABKJgEANQAqIQgiAjAAAxQAAAxAiAiQAjAjAvAAIAGAAQAvgBAhgiQAigiAAgxQAAgxgigjQgigigyAAQgxAAgjAigEgMmAqIQgiAjAAAxQAAAxAiAiQAjAjAuAAIAHAAQAugBAigiQAigiAAgxQAAgxgigjQgjgigyAAQgwAAgjAigAJKedIE0AAIAAlrIk0AAgAA2edIE0AAIAAlrIk0AAgApBedIE0AAIAAlrIk0AAgAJKU1IE0AAIAAlqIk0AAgAA2U1IE0AAIAAlqIk0AAgApBU1IE0AAIAAlqIk0AAgAJKLeIE0AAIAAlqIk0AAgAA2LeIE0AAIAAlqIk0AAgApBLeIE0AAIAAlqIk0AAgAJKBuIE0AAIAAlpIk0AAgAA2BuIE0AAIAAlpIk0AAgApBBuIE0AAIAAlpIk0AAgAJKoyIE0AAIAAlrIk0AAgAA2oyIE0AAIAAlrIk0AAgApBoyIE0AAIAAlrIk0AAgAJKzUIE0AAIAAlqIk0AAgAA2zUIE0AAIAAlqIk0AAgApBzUIE0AAIAAlqIk0AAgEgbeAtyIAAywIANAAIAAixIgNAAMAAAg0oIKiAAMAAABKJgEgV8AhBQgyABgfAlQgeAkAABEIAAEHIEHAAIAAjIQAAimgygUQgugUgvAAIgJABgA18U7QgyACgfAkQgeAlAABEIAAEHIEHAAIAAjJQAAimgygUQgugTgvAAIgJAAgA18KAQgyACgfAlQgeAlAABDIAAEHIEHAAIAAjJQAAilgygVQgugTgvAAIgJAAgA18A6QgyACgfAlQgeAkAABDIAAEIIEHAAIAAjJQAAilgygVQgugTgvAAIgJAAgA18qpQgyACgfAlQgeAkAABDIAAEHIEHAAIAAjIQAAimgygVQgugSgvAAIgJAAgA180qQgyACgfAlQgeAlAABDIAAEHIEHAAIAAjJQAAilgygVQgugTgvAAIgJAAg");
	this.shape_142.setTransform(2014.925,-151.95);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A4C1CF").s().p("EAS4ApMIAAm5IAAG5QkQh1hJlEIFZAAIFAAAQARAdANAdIAAE/QgNAfANAXIAAA0IAAAWQjMgCiSg+gEgDrApMIAAm5IAAG5QkQh1hIlEIFYAAIE/AAQASAdAMAdIAAE/QgMAfAMAXIAAA0IAAAWQjLgCiSg+gEgYVAogIAAlFICGhhIAAHGgA4VXMICGiyIAAIXIiGBLgAS4ZzIAAm4IAAG4QkQh0hJlEIFZAAIFAAAQARAcANAeIAAE+QgNAgANAWIAAA0IAAAXQjMgCiSg/gAjrZzIAAm4IAAG4QkQh0hIlEIFYAAIE/AAQASAcAMAeIAAE+QgMAgAMAWIAAA0IAAAXQjLgCiSg/gA4VIfICGixIAAIWIiGBfgAS4LGIAAm4IAAG4QkQh0hJlEIFZAAIFAAAQARAdANAdIAAE/QgNAfANAWIAAA1IAAAVQjMgBiSg/gAjrLGIAAm4IAAG4QkQh0hIlEIFYAAIE/AAQASAdAMAdIAAE/QgMAfAMAWIAAA1IAAAVQjLgBiSg/gA4VmlICGiyIAAIXIiGB5gAS4k9IAAm4IAAG4QkQh0hJlEIFZAAIFAAAQARAcANAeIAAE/QgNAeANAXIAAA0IAAAXQjMgCiSg/gAjrk9IAAm4IAAG4QkQh0hIlEIFYAAIE/AAQASAcAMAeIAAE/QgMAeAMAXIAAA0IAAAXQjLgCiSg/gA4Vy7ICGiyIAAIXIiGCogAS4z/IAAm5IAAG5QkQh1hJlEIFZAAIFAAAQARAdANAdIAAE/QgNAeANAYIAAA0IAAAWQjMgDiSg9gAjrz/IAAm5IAAG5QkQh1hIlEIFYAAIE/AAQASAdAMAdIAAE/QgMAeAMAYIAAA0IAAAWQjLgDiSg9gA4V/1ICGiyIAAIXIiGCogEABygiSQjLgDiSg+IAAm4IAAG4QkQh0hIlEIFYAAIE/AAQASAdAMAeIAAE+QgMAfAMAWIAAA1IAeAsgEABygiSIAAgWgEAS4gjTIAAm4IAAG4QkQh0hJlEIFZAAIFAAAQARAdANAeIAAE+QgNAfANAWIAAA1IAAAWQjMgDiSg+g");
	this.shape_143.setTransform(119.95,-81.85);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#8A1E1E").s().p("AjDIrIEVxaIB0EzImLMsg");
	this.shape_144.setTransform(-24.35,-352.075);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#97A9BD").s().p("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");
	this.shape_145.setTransform(146.675,-73.825);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#844631").s().p("EgDPAptMAAAhMOIAUgoIGLstMAAABftgEgBoAhvIAAFGICFAfIAAnFgAhoVhIAAGwICFhLIAAoXgAhoG0IAAHEICFhfIAAoWgAhooQIAAHfICFh6IAAoXgAho0mIAAINICFioIAAoXgEgBoghgIAAINICFioIAAoXg");
	this.shape_146.setTransform(-25.35,-71.125);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#68110C").s().p("A2rCZIhzkxMApGAAAIH3Exg");
	this.shape_147.setTransform(140.625,-392.725);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#AC694E").s().p("EgXlAv3MAAAhftMAvLAAAMAAABftgEAB9ArgISuAAIAAiqIAAotIyuAAgEgUlArgISuAAIAAiqIAAotIyuAAgAB9cIISuAAIAAiqIAAouIyuAAgA0lcIISuAAIAAiqIAAouIyuAAgAB9NbISuAAIAAiqIAAouIyuAAgA0lNbISuAAIAAiqIAAouIyuAAgAB9ioISuAAIAAiqIAAouIyuAAgA0lioISuAAIAAiqIAAouIyuAAgAB9xrISuAAIAAiqIAAotIyuAAgA0lxrISuAAIAAiqIAAotIyuAAgEAB9gg+ISuAAIAAiqIAAotIyuAAgEgUlgg+ISuAAIAAiqIAAotIyuAAgEAUOAohIAAgWIAdArgEgCWAohIAAgWIAfArgEAUOAmhIAAA1QgNgWANgfgEgCWAmhIAAA1QgMgWAMgfgEATwAgoIAeAAIAAA6QgNgdgRgdgEgC0AgoIAeAAIAAA6QgMgdgSgdgAUOZIIAAgWIAdAsgAiWZIIAAgWIAfAsgAUOXIIAAA2QgNgXANgfgAiWXIIAAA2QgMgXAMgfgATwRQIAeAAIAAA6QgNgegRgcgAi0RQIAeAAIAAA6QgMgegSgcgAUOKbIAAgWIAdAsgAiWKbIAAgWIAfAsgAUOIcIAAA1QgNgXANgegAiWIcIAAA1QgMgXAMgegATwCjIAeAAIAAA6QgNgdgRgdgAi0CjIAeAAIAAA6QgMgdgSgdgAUOloIAAgWIAdAsgAiWloIAAgWIAfAsgAUOnoIAAA2QgNgXANgfgAiWnoIAAA2QgMgXAMgfgATwtgIAeAAIAAA6QgNgegRgcgAi0tgIAeAAIAAA6QgMgegSgcgAUO0qIAAgWIAdArgAiW0qIAAgWIAfArgAUO2qIAAA1QgNgXANgegAiW2qIAAA1QgMgXAMgegATw8jIAeAAIAAA6QgNgdgRgdgAi08jIAeAAIAAA6QgMgdgSgdgEAUOgj9IAAgWIAdArgEAUOgl9IAAA1QgNgXANgegEATwgr2IAeAAIAAA6QgNgdgRgdg");
	this.shape_148.setTransform(146.4,-71.125);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#94E2D0").s().p("AJEghIE0AAIAAJ7gAJEJaIAAotIDtItgAgcJaIAArXIFgLXgAmDh9IEELXIkEAAIAArXIEzAAIAALXgAvtgtIE7AAIAAKHgAvtJaIAApOIDSJOgEApNAHwInlpjIHhAAIABA+IADIlIgDolIHgIlInhpjIHhAAIAAJjgEAm4AHwIlOoEIgChfIGIJjgEAhvAHwIgFmlIAFGlIoCpjIH7AAIACBfIAABfIErGlgAZmHwIAHoeIgHIeIkXo1IAAguIEeAAIAABFIEmIegAVPHwIAAo1IDdI1gA1NHpInhpjIAAA/IADIkInjpjIHgAAIHhAAIAAJjgA8rHpIgDokIHhIkgEgkIAHpIoCpjIH8AAIABC+IAFGlIgFmlIEqGlgEgsQAHpIAGoeIgGIeIkZo1IAAguIEfAAIAABFIElIegEgwpAHpIAAo1IDdI1gAgOh9IFZAAIAAJigAgzi1IlSAAIAAgZQAAjLBxhrQAOgOAQgMIABAAIgBAAIAAAAIABAAIAAAAIAQgKIgQAKQAPgLAPgIIgOAJQAsgZAXgHQA1gSA6ACIAAFKIjCkPIgRANIDTFbIAAhZIAAlKIAVAAQBEAFA/AdQBBAeAyAxQBwBxAACoIAAAZg");
	this.shape_149.setTransform(1547.375,188.1941);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#272527").s().p("AP8H4IAAtKIjfAAIAAilMAgvAAAIAAPvgAUEEYIVAAAIAApdI1AAAgEgtLAH4IAAp9IAAkbIAAhXMAgHAAAIAAC/Ii4AAIAAMwgEgopAEYIVAAAIAApdI1AAAg");
	this.shape_150.setTransform(1540.025,71.475);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#9F4136").s().p("APcRwIAAqtIlxAAIAAKtIiyAAIAArvQAAj8h/iXQg3hEhGgcQhHgchLACQhLADhNAVQhNAWg4BCQh+CWAAEHIAALvIjgAAIAAqtIlxAAIAAKtI+QAAIAAgGIAAg8IZuAAIAAq6I5uAAIAAiUIAAkSIAAhOIdPAAIAAswIC4AAIAAi/IZgAAIAACkIDgAAIAANLIdPAAIAAvvIANAAIAASuIAAB3IAAABIAAC9I3rAAIAAK6IXrAAIAABCg");
	this.shape_151.setTransform(1540.675,134.725);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#783524").s().p("ATSO9IgIgLMgmTAAAIgGALQgMAKgOAAQgPAAgLgKQgLgLABgPIAA9FQgBgPALgKQALgLAPAAMAnTAAAQAQAAAKALQAKAKAAAPIAAdFQAAAPgKALQgKAKgQAAQgPAAgJgKgAzFOUICfAAIH6AAIbyAAIAAtnIAAABIgCAAIAAABIgFACIgDAAIAAABIgCAAIgDABIgBABIgPAAIgCgBIgDgBIgCAAIAAgBIgDAAIgFgCIgBgBIgBAAIgBgCIgHgFIAAAAIgBgBIAAAAIABgCIAIAAIACAAIAsAAIACAAIAAAAIAAhxIgGAAIgFgBIgCAAIAAAAIgFgCIgCAAIgCgCIgCgBIgGgDIAAgBIgBAAIAAgBIgBgBIgCAAIAAgCIACgCIAIAAIACAAIAWgBIAAkZMgmLAAAIAACLIAAAAIAGAAIACgBIADAAIALgBIAOABIACABIAJAAIACABIAHACIACAAIATAHIAAAAIADACIACAAIAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgCAAIgDABIAAAAIgCABIgKAFIgHACIgCAAIgHABIgCABIgJAAIgCABIgcAAIgCgBIgGAAIAAAAIAADaIAEgEIADgBIABgBIAAAAIADgBIABAAIAFgBIADABIABAAIAEABIABAAIAAABIACABIADACIAHAHIABABIAAABIgBABIgCAAIgEAAIgBACIgeAAIgBgCIAAAAIAAHbIAAgBIAFgDIAGgEIADAAIABgBIACAAIACgBIACAAIABAAIAGgBIAFABIACAAIABAAIADABIACAAIABABIACAAIAHAEIAEADIACADIABAAIABACIAAAAIgBABIgDABIgEAAIgDAAIgoAAIgDAAIgFAAIAAC9IABgBIABgBIADgCIADgBIAAgBIACAAIACgBIACAAIAEgBIADABIACAAIADABIABAAIABABIACABIAEACIAHAHIABACIAAABIgBAAIgCABIgDAAIgCABIggAAIgCgBIAAAAgAzFmUMAmLAAAIAAipIgKAAIgCgBIgDgBIgCAAIgBgBIgDgBIgBAAIgBAAIgMgGIgBgBIgBAAIgBgCIAAgBIgCAAIAAgBIACgBIAIAAIADgBIAbgBIAAkvMgmLAAAIAAAzIACgBIALgBIADgBIAgAAIADABIALABIABABIAJABIACAAIAVAGIACABIABAAIABACIACAAIABABIgBABIgCABIgBABIgBAAIgXAHIgCAAIgDABIgGABIgBAAIgFAAIgJACIggAAIgJgCIgFAAIgBAAIgBAAIAABIIAIgBIAIABIACAAIACAAIAEABIADAAIABABIADABIACABIADAAIANAHIAAAAIACABIACAAIAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAIgCAAIgCACIAAAAIgBABIgMAGIgDAAIgCABIgDAAIgBABIgDAAIgEABIgCABIgSAAIAABlIAIgCIAEAAIAPgCIACAAIAngCIAMgBIAyADIADAAIANACIAFAAIAmAHIABAAIADABIADAAIABACIgBACIgDAAIgDABIgBAAIgDABIgjAHIgSABIgDABIgSAAIgFABIg2AAIgGgBIgSAAIgCgBIgTgBIgIgBIAABZIAFgCIAHACIADAAIAFABIADAAIABABIAFABIABAAIAOAHIABAAIABACIABAAIAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgBABIgBABIgBAAIgBACIgNAGIgBAAIgFABIgBABIgDAAIgDABIgCABIgPAAgASaNSIgCAAIgCAAIgBgBIgBAAIgBgBIACgBIACgFIADgDIAEgDIAAgBIACAAIABAAIABgBIACAAIADgBIADABIABAAIABABIACAAIABAAIAAABIAEADIAFAFIACADIAAABIAAABIAAAAIgCABIgDAAIgCAAgAIvMuIgDgBIgHAAIgDgBIgCAAIABgCIABgBIAAAAIACgCIAAAAIAOgGIABAAIABgCIAFAAIAAgBIADAAIAEgBIACgBIATAAIACABIAEABIACAAIABABIAEAAIACACIABAAIANAGIAAAAIABAAIABACIACAAIAAABIAAABIAAABIgEABIgIAAIgDABgAR9LoIgCgBIgGAAIgDAAIgBAAIAAgCIABgBIAAAAIABgBIABAAIANgHIABAAIAFgCIAAgBIAEAAIAEgBIACAAIAHgBIAIABIABAAIAGABIACAAIABABIAFACIABAAIADABIABAAIAIAFIAAABIABAAIABABIACAAIABABIAAABIgBABIgEAAIgGAAIgDABgAh3K6IgCgBIgDAAIgBAAIgBAAIgBgBIACgCIABgCIAIgHIACgBIABgBIAAAAIAEgBIABAAIAEgBIAEABIAAAAIAEABIABAAIAAABIACABIAEACIAGAHIACACIAAAAIgCABIgCAAIgDAAIgBABgAQVJJIgGgBIgDAAIgLgCIgCAAIgMgDIgBAAIAAgBIgDgBIgBgBIgBAAIgBAAIABgBIAAgBIABAAICMgJQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBACIgBABIgEACIgBAAIgLAFIgUAFIgEAAIgJACIgEAAIgCABIgEAAIgBABgASRHRIgCAAIgCAAIgBgBIgBAAIAAgCIABAAIADgHIACgBIAEgDIAAAAIABAAIACgBIAAgBIABAAIAEgBIADABIAAAAIABABIACABIABAAIAAAAIAEADIACABIAAACIACACIADADIAAAAIAAABIAAABIgDABIgCAAIgCAAgASBDSIgBgBIgDAAIgBAAIgBgBIgCgBIgIgHIgCgDIgBgBIAAgBIABgBIAFAAIADgBIAfAAIABABIAGAAIAAAAIABACIgBABIgCADIgFAFIgDACIgDABIgBABIgBAAIgCAAIgBABgAnVgqIgBgBIgEAAIgCAAIgCAAIAAgCIACgCIACgCIACgBIADgDIAGgEIAAAAIACAAIAEgBIABAAIAEgBIAFABIABAAIABAAIACABIACAAIAGAEIADADIADABIACACIAAACIAAABIAAABIgCAAIgFAAIgBABgAkhjIIgGgBIgUgBIgCAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAABAAIAAgBIACAAIACgCIABAAIABAAIAZgHIAEAAIAKgBIACgBIAlgDIAjADIACABIAJABIAFAAIAYAHIACAAIACAAIACACIABAAIAAABIABAAIgBABIgUABIgGABgAvdjRIgDgBIgHAAIgDAAIgBAAIAAgCIABgBIABAAIAAgBIABAAIABgBIANgGIABAAIACgBIAEgBIAAgBIADAAIAGgBIACAAIAIgBIAHABIACAAIAGABIADAAIABABIADABIACABIABAAIANAGIAAABIABAAIABABIABAAIAAABIACABIgCABIgDAAIgHAAIgDABgASIjuIgBAAIgEgBIgCAAIAAAAIgFgCIgCAAIgLgHIAAAAIgBAAIgBgBIgBgBIgBAAIAAgCIABgBIAJAAIADgBIAyAAIAEABIAJAAIABAAIAAADIgBAAIgBABIgBABIgBAAIgBAAIgLAHIgBAAIgFACIgBAAIgCAAIgFABgAE1oWIgDAAIgGAAIgEgBIgCAAIABgCIABAAIABAAIABgCIAAAAIAGgDIACgCIAGgCIACAAIAGgCIADAAIAEgBIACgBIATAAIADABIAEABIACAAIAGACIACAAIAHACIABACIAHADIAAAAIABACIABAAIAAAAIABABIgBABIgEABIgGAAIgDAAgASlqoIgBAAIgDgBIgBAAIAAgBIgCgBIgDgCIgFgFIgBgDIgCgBIAAgBIACgBIAEAAIACgBIAPAAIAPAAIABABIAGAAIAAABIABABIgBABIgDADIgEAFIgDACIgEACIAAAAIgDABgAmtqwIgDgBIgGAAIgDgBIgCAAIACgDIABAAIAAgCIABAAIAMgGIACAAIAFgCIABgBIACAAIAFgBIABAAIACAAIAIgBIAHABIACAAIAFABIADAAIAAABIAGACIABAAIAGADIACABIAEACIABAAIABAAIAAACIACAAIAAABIABACIgBAAIgEABIgGAAIgDABgAGbrWIgCAAIgEAAIgDgBIgBAAIAAgCIAEgEIAEgDIABAAIAJgFIACAAIADgBIABgBIACAAIAGAAIAEAAIACAAIACABIADABIABAAIABAAIACABIAHAEIAFADIACADIAAAAIABABIAAABIgDACIgFAAIgCAAgAR6sbIgIgBIgDAAIgCgBIgHgBIgDAAIgTgIIgBAAIgCgBIAAgBIgBAAIgBgBIACgCIAOAAIAEgBIBTAAIAEABIAPAAIABACIgBABIgDACIgBAAIgTAIIgDAAIgHABIgBABIgFAAIgIABg");
	this.shape_152.setTransform(-1088.45,143.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#DAD0D1").s().p("AwKHtIAAvZIH6AAIAAPZgAuLj6IhRKtIGBAAIg/qtQg6g9g8AAQg8AAg/A9gAjOCXIAApgITZAAIAAJfIgBAAIAAABgAGbBjIIWAAIAAi1IoWAAgAiMBjIIKAAIAAi1IoKAAgAGbhvIIWAAIAAi2QkOhHkIgDgAiMklIAAC2IIKAAIAAkAQkJADkBBHg");
	this.shape_153.setTransform(-1091.3,185.575);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A65E2C").s().p("AosOKIAAvZIn6AAIAAPZIifAAIAAjeIAAAAIACABIAgAAIACgBIADAAIACgBIABAAIAAgBIgBgCIgHgHIgEgCIgCgBIgBAAIgBAAIgDgCIgCAAIgDgBIgEABIgCAAIgCACIgCAAIAAAAIgDABIgDACIgBABIgBABIAAi9IAFAAIADAAIAoAAIADAAIAEAAIADgBIABgBIAAAAIgBgCIgBAAIgCgCIgEgEIgHgDIgCgBIgBgBIgCAAIgDAAIgBgBIgCAAIgFgBIgGABIgBAAIgCABIgCAAIgCAAIgBABIgDABIgGADIgFAEIAAABIAAnbIAAAAIABABIAeAAIABgBIAEAAIACgBIABgBIAAAAIgBgCIgHgGIgDgCIgCgBIAAgBIgBAAIgEgBIgBAAIgDgBIgFABIgBAAIgDABIAAAAIgBABIgDABIgEAEIAAjbIAAAAIAGABIACABIAcAAIACgBIAJgBIACgBIAHgBIACAAIAHgCIAKgFIACAAIAAAAIADgCIACAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAAAIgCAAIgDgCIAAAAIgTgHIgCAAIgHgBIgCgBIgJgBIgCAAIgOgBIgLABIgDAAIgCAAIgGABIAAAAIAAiMMAmLAAAIAAEZIgWABIgCABIgIAAIgCABIAAACIACAAIABABIAAABIABAAIAAABIAGADIACACIACABIACAAIAFACIAAAAIACAAIAFACIAGAAIAABwIAAAAIgCAAIgsAAIgCAAIgIAAIgBACIAAAAIABABIAAABIAHAEIABACIABAAIABABIAFACIADABIAAABIACAAIADAAIACABIAPAAIABgBIADAAIACAAIAAgBIADgBIAFgCIAAgBIACAAIAAgBIAANogASeM5IgEADIgDADIgCAFIgCABIABABIABAAIABABIACAAIACABIAZAAIACgBIADAAIACgBIAAAAIAAgBIAAgBIgCgDIgFgFIgEgDIAAAAIgBAAIgCgBIgBgBIgBAAIgDAAIgDAAIgCAAIgBABIgBABIgCAAgAIhMfIgBACIACAAIADABIAHAAIADABIA4AAIADgBIAIAAIAEgBIAAgBIAAgBIAAgBIgCAAIgBgBIgBAAIAAgBIgNgGIgBAAIgCgBIgEgBIgBgBIgCAAIgEAAIgCgBIgTAAIgCABIgEAAIgDAAIAAABIgFABIgBABIgBAAIgOAHIAAAAIgCABIAAAAgARxLaIAAACIABAAIADABIAGAAIACABIA2AAIADgBIAGAAIAEgBIABgBIAAgBIgBgBIgCAAIgBgBIgBAAIAAgBIgIgEIgBgBIgDgBIgBAAIgFgCIgBgBIgCAAIgGgBIgBAAIgIgBIgHABIgCAAIgEABIgEAAIAAABIgFACIgBAAIgNAHIgBAAIgBABIAAAAgAhyKhIgCABIgIAHIgBACIgCACIABABIABAAIABABIADAAIACABIAeAAIABgBIADAAIACgBIACgBIAAAAIgCgCIgGgHIgEgCIgCgBIAAgBIgBAAIgEgBIAAAAIgEgBIgEABIgBAAIgEABIAAAAgAjrI0ITYAAIgBABIABAAIABAAIABABIADABIAAABIABAAIAMADIACAAIALACIADAAIAGABIAoAAIABgBIAEAAIACAAIAEAAIAJgDIAEAAIAUgFIALgFIABAAIAEgCIABgBIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAABIiMAIIAApfIzZAAgASVG4IgEADIgCACIgDAGIgBABIAAABIABAAIABABIACAAIACABIAXAAIACgBIACAAIADgBIAAAAIAAgBIAAgBIgDgDIgCgCIAAgBIgCgCIgEgDIAAAAIgBAAIgCgBIgBgBIAAAAIgDAAIgEAAIgBAAIAAABIgCABIgBAAgARuC5IAAAAIABABIACADIAIAHIACABIABABIABAAIADAAIABABIAKAAIABgBIACAAIABAAIABgBIADgBIADgCIAFgFIACgDIABgBIgBgBIAAgBIgGAAIgBAAIgfAAIgDAAIgFAAgAnPhDIgGADIgDADIgCACIgCACIgCABIAAACIACAAIACAAIAEAAIABABIAiAAIABgBIAFAAIACAAIAAgBIAAgBIAAgBIgCgCIgDgCIgDgDIgGgEIgCAAIgCgBIgBAAIgBAAIgFgBIgEABIgBAAIgEABIgCAAgAk7jWQgBAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIACABIAUAAIAGABIByAAIAGgBIAUAAIABgCIgBAAIAAgBIgBAAIgCgCIgCAAIgCAAIgYgHIgFAAIgJgBIgCgBIgjgCIglACIgCABIgKABIgEAAIgZAHIgBAAIgBAAIgCACIgCAAgAvrjfIAAACIABAAIADABIAHAAIADABIA5AAIADgBIAHAAIADgBIACgBIgCgBIAAgBIgBAAIgBgBIgBAAIAAgBIgNgGIgBAAIgCgBIgDgBIgBgBIgDAAIgGgBIgCAAIgHgBIgIABIgCAAIgGABIgDAAIAAABIgEABIgCABIgBAAIgNAGIgBABIgBAAIAAABIgBAAgARrkHIAAACIABAAIABABIABABIABAAIAAABIALAGIACAAIAFACIAAAAIACAAIAEABIABABIASAAIAFgCIACAAIABAAIAFgCIABAAIALgGIABgBIABAAIABgBIABgBIABAAIAAgCIgBgBIgJAAIgEgBIgyAAIgDABIgJAAgAzFmfIAAhQIAPAAIACgBIADgBIADAAIABAAIAFgCIABAAIANgGIABgBIABAAIABgCIABAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIAAgBIgBAAIgBgCIgBAAIgOgHIgBAAIgFgBIgBgBIgDAAIgFgBIgDAAIgHgBIgFABIAAhZIAIABIATABIACABIASABIAGABIA2AAIAFgBIASgBIADgBIASgBIAjgGIADgBIABAAIADgCIADAAIABgCIgBgBIgDAAIgDgCIgBAAIgmgHIgFAAIgNgBIgDgBIgygCIgMABIgnABIgCABIgPABIgEAAIgIACIAAhlIASAAIACgBIAEAAIADAAIABgBIADgBIACgBIADAAIAMgGIABgBIAAAAIACgBIACgBQAAAAAAAAQABAAAAAAQAAgBgBAAQAAgBAAAAIAAgBIgCAAIgCgBIAAAAIgNgHIgDAAIgCgBIgDgBIgBgBIgDAAIgEAAIgCgBIgCAAIgIgBIgIABIAAhIIABAAIABABIAFAAIAJABIAgAAIAJgBIAFAAIABgBIAGAAIADgBIACAAIAXgHIABAAIABgCIACgBIABgBIgBgBIgCAAIgBgCIgBAAIgCgBIgVgGIgCAAIgJgBIgBgBIgLgBIgDgBIggAAIgDABIgLABIgCABIAAgzMAmLAAAIAAEvIgbABIgDABIgIAAIgCABIAAACIACAAIAAAAIABACIABAAIABABIAMAGIABAAIABABIADAAIABABIACAAIADABIACABIAKAAIAACpgAEnokIgBACIACAAIAEABIAGAAIADABIA8AAIADgBIAGAAIAEgBIABAAIgBgCIAAAAIgBAAIgBgCIAAAAIgHgDIgBgBIgHgDIgCAAIgGgCIgCAAIgEgBIgDgBIgTAAIgCABIgEABIgDAAIgGACIgCAAIgGADIgCABIgGADIAAAAIgBACIgBAAgASTrBIAAABIACAAIABADIAFAFIADACIACABIAAABIABAAIADABIABAAIAKAAIADgBIAAAAIAEgCIADgCIAEgFIADgDIABAAIgBgCIAAgBIgGAAIgBAAIgPgBIgPABIgCAAIgEAAgAm7q9IACAAIADABIAGAAIADABIA3AAIADgBIAGAAIAEgBIABAAIgBgCIAAgBIgCAAIAAgBIgBAAIgBgBIgEgCIgCgBIgGgDIgBAAIgGgCIAAAAIgDAAIgFgCIgCAAIgHgBIgIABIgCAAIgBABIgFABIgCAAIgBAAIgFACIgCAAIgMAHIgBAAIAAABIgBAAgAGarrIgBAAIgEAEIgEADIAAACIABAAIADABIAEAAIACAAIAqAAIACAAIAFAAIADgCIAAgBIgBgBIAAAAIgCgCIgFgEIgHgDIgCgBIgBgBIgBAAIgDAAIgCgBIgCAAIgEgBIgGABIgCAAIgBABIgDAAIgCAAgARLs0IABABIABAAIAAABIACACIABAAIATAHIADAAIAHABIACABIADAAIAIABIAcAAIAIgBIAFAAIABgBIAHgBIADAAIATgHIABAAIADgDIABgBIgBgBIgPAAIgEgBIhTAAIgEABIgOAAg");
	this.shape_154.setTransform(-1088.45,144.275);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000100").s().p("EAjtACWgARjCWIAAkrISKAAQB9AABJAvQBCArgCA7QgBA9hCAqQhJAvh6AAIAAkrIAAErgARjCWQhiAAg8gvQg3gqgDg9QgCg7A1grQA7gvBqAAIAAErgAyRCWgEgkbACWIAAkrISKAAQB+AABJAvQBBArgBA7QgCA9hCAqQhJAvh6AAIAAkrIAAErgEgkbACWQhhAAg8gvQg4gqgCg9QgDg7A2grQA6gvBqAAIAAErg");
	this.shape_155.setTransform(-342.1789,188.85);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#9F9BAC").s().p("AMHDRIroAAIrmAAIjOAAIAAhXIAAlKIcrAAIAAFKIAABXg");
	this.shape_156.setTransform(-349.825,117.325);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#29456C").s().p("A2nC+IuRAEIFwj0QHDA+HBAiIAAjwIA7D0QO5BFOzg+IA7gBQIFghINhJIGJD1g");
	this.shape_157.setTransform(-341.725,65.025);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#295C73").s().p("EAoyAGlI7PAAIAAlMI8rAAIAAFMI5SAAIldAAIFenBID/gBIORgFMA7hAAGIEAAAIEgHBgAOBmfIAAgFIA0AAIAHAAIAAD9Ig7ABgAwmmiIAAgCIA7AAIAAAFIAADyg");
	this.shape_158.setTransform(-344.75,87.45);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000700").s().p("AAAHOIAAubIAAObIrmAAIAAjOIAArNILmAAILoAAIAALUIAADHgADnDnIiQjagAljDbICQjggADJjlIgGAGQg0A0AABIQAABJA0AyQAzAzBJAAQBIAAAzgzIAGgHIAHgGQAzgyAAhIQAAhJgzgzQg0gzhIAAQhJAAgzAzIgGAGIAGgGQAzgzBJAAQBIAAA0AzQAzAzAABJQAABIgzAyIgHAGQAtgwAAhEQABhIg0g0QgzgzhIAAQhFAAgxAtgAnxkJQgtAvAABCQAABDAtAuQAvAtBDAAQBCAAAugtQAvguAAhDQAAhCgvgvQguguhCAAQhDAAgvAug");
	this.shape_159.setTransform(-346.7,184.475);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#438C8F").s().p("ALIH6IAAjHIAArVICQAAIAAhXIbPAAIAAMsI9fAAIdfAAIAADHgAPMgOQg1ApACA8QADA+A3AqQA8AuBiAAISKAAQB6AABJguQBCgqABg+QACg8hCgpQhJgwh9ABIyKAAQhqgBg7AwgEgomAH6IAAjOIAAslIZSAAIAABXIDOAAIAALOI8gAAIcgAAIAADOgEgmxgAOQg2ApADA8QACA+A4AqQA8AuBhAAISKAAQB6AABJguQBCgqACg+QABg8hBgpQhJgwh+ABIyKAAQhqgBg6AwgEAonAEzgAsGEsg");
	this.shape_160.setTransform(-343.575,180.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#858DA2").s().p("AhmGSQg1gCAAhCIAAiGIAAm7IAAhbQAAhDA2AAIAkAAICKAAIAcAAQA2AAABBDIAAKcQAABCg1ACgAhBkBIAACRQAAAOAXAAIBRAAQAXAAgBgOIAAiRQABgPgXAAIhRAAQgXAAAAAPg");
	this.shape_161.setTransform(-1335.6,203.275);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FCBA11").s().p("AhmGSQg0gCAAhCIAAhQIAAg2IAAm7IAAhbQAAgeAKgQQAOgVAeAAIAjAAICJAAIAdAAQA2AAAABDIAAKcQAABCg0ACgAhBkBIAACRQAAAOAWAAIBSAAQAXAAAAgOIAAiRQAAgPgXAAIhSAAQgWAAAAAPg");
	this.shape_162.setTransform(-1416.875,203.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#20175A").s().p("AL+AhIAAhBIBnAAIAABBgAgtAhIAAhBIBlAAIAABBgAtkAhIAAhBIBnAAIAABBg");
	this.shape_163.setTransform(-1417.65,189.05);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#B9242A").s().p("AhmGSQg1gCAAhCIAAhQIAAg2IAAm7IAAhbQABhDA2AAIAjAAICJAAIAFAAIAZAAQA2AAAABDIAABjIAABIIAAFGIAABbIAABQQAABCg1ACgAhBkBIAACRQAAAOAWAAIBTAAQAWAAAAgOIAAiRQAAgPgWAAIhTAAQgWAAAAAPg");
	this.shape_164.setTransform(-1499.15,203.275);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#006666").s().p("AL+AlIAAhJIBnAAIAABJgAgtAlIAAhJIBlAAIAABJgAtkAlIAAhJIBnAAIAABJg");
	this.shape_165.setTransform(-1417.65,180.775);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#67676F").s().p("A0dCDIAAhDIC1AAIDOAAIJpAAIDNAAIJfAAIDOAAIDQAAIAAjCIAtAAIB1AAIAgAAIAADCIDDAAIAABDg");
	this.shape_166.setTransform(-1396.55,237.025);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B41E20").s().p("ARGAtIAAhaIFsAAQAYBCB7gdIAAA1gAAGAtIAAhaIDNAAIEoAAICBAAQAYBCB6gdIAAA1gA5EAtIAAhaIDzAAIAABagAXigtIBQAAIAAADQgZAGgSAAQgXAAgOgJgAKrgtIBRAAIAAADQgZAGgTAAQgXAAgOgJg");
	this.shape_167.setTransform(-1592.95,224.15);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(204,204,204,0.698)").s().p("ADJD7QghjniokOQCABmESE3IAABYgAgcD7IAAhIIAcBIgAhvANIAAgGIAEAGgAmRj6IB5AAQBABSA4BaIhaAAIAAAlQhEhvhThig");
	this.shape_168.setTransform(-1480.7,161.825);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#999999").s().p("AqrBUIDVinIPiAAICgCng");
	this.shape_169.setTransform(-1660.8,123.075);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#424033").s().p("AqrI6IAAhbQAUm1gUm7IVXAAIigioICgAAIAACoQgcGpAcHHIAABbgAqrmRIAAioIDVAAIjVCoIAAAAg");
	this.shape_170.setTransform(-1660.8,171.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B21C1E").s().p("A5KBEIAAiHMAyVAAAIAACHg");
	this.shape_171.setTransform(-1592.425,75.95);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C2B789").s().p("AXdKsQgLgGgEgJQgQgzBDiBQALgTAchEQgGCXALCDgARAKsIAAlHIAdAAIDJAAIDKAAIAAhYIAAmdIAAhbImTAAImSAAIAABbIAAH1IARAAQgmBcgMAXQhMCUAXA8IACAEIiBAAIAApwIAAiHIkoAAIAACHIAAJwIjOAAQgbnHAbmpIAAioIifAAIvjAAIjVAAIAACoQAVG7gVG1IjzAAIAA1XMAyVAAAIAAM2QgLARAAAdIAABcQgEAAgFACQgGADgCAGQg+CZgQAfQhNCUAYA8IABAEgAKmKsQgKgGgFgJQgQgzBEiBQAKgTAchEQgFCXAKCDg");
	this.shape_172.setTransform(-1592.425,151.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#948774").s().p("AFQLRIqUAAIiXAAIHN2hIHqWhg");
	this.shape_173.setTransform(-2403.725,-114.75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0F3E4E").s().p("AAAIQIAAigIiVAAICVAAIAACgIiVAAIAAigIAAigICVAAIiVAAIAAigICVAAIiVAAIAAifICVAAIAACfIAAifIiVAAQAQhZAQhFQA7kAA6gCIAAECIAAkCQA8gDA8EFIh4AAIh1AAIB1AAIB4AAQAPBBAPBTIAAAKIiWAAIAAieIAACeICWAAIAACfIiWAAIAACgIAACgIAAigIAAigICWAAIAACgIiWAAICWAAIAACgIiWAAICWAAIAACgg");
	this.shape_174.setTransform(-2403.225,128.8238);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#006244").s().p("AHFDQQgkgEgZglQgdgpAAg6QAAg6AbhnQAahpAogJQAogJAfByQAfBwAAA6QAAA6gcApQgdApgoAAIgIAAgAnUDQQgjgEgaglQgcgpAAg6QAAg6AahnQAahpAogJQAogJAgByQAfBwAAA6QAAA6gdApQgcApgpAAIgIAAg");
	this.shape_175.setTransform(-2246.275,148.8169);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#901E13").s().p("AkIEOIAAocIIRAAIAAIcgAAogKICbAAIAAiaIibAAgAi5gKICbAAIAAiaIibAAg");
	this.shape_176.setTransform(-2246.475,175.65);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F4C575").s().p("A1yTnIAAv6IAA2hIKVAAIAAXKQirnfipgBIAAAAIAAAAQigABicGqIgBACIgCAEIgCAGIACgGIACgEIABgCQCcmqCggBIAAAAIAAAAQCpABCrHfIAAPRgAwogRQg7ADg6D+QgRBFgQBZIAACgIAAChIAACgIAACfICWAAICXAAIAAifIAAigIAAihIAAigIAAgKQgPhTgQhBQg7kBg8AAIgBAAgATNThIAA0VIAAUVIkPAAIAAlLIAAFLIi+AAIAAodIoSAAIAAIdIjKAAIAAlLIAAFLIiAAAIig0pQFWj3FrAAIAAAAIAAAAIAzABIABAAIADABQFgARFxD4ICmM8Iims8IrRqVIr4KBIi0UpIC00pICgUpIlUAAIkZAAIAA1lIUExiIM4L2IAAKxIAABjIAAHkIAAHZgAPBH3QgoAIgaBpQgbBoAAA6QAAA6AdApQAZAmAkADIAIAAQAoAAAdgpQAcgpAAg6QAAg6gfhxQgdhpgkAAIgGABgAAnH3QgnAIgaBpQgaBoAAA6QAAA6AcApQAZAmAjADIAIAAQApAAAcgpQAdgpAAg6QAAg6gfhxQgdhpglAAIgGABgArdEWIAAAAgATNg0IAAAAgAH8k9IAAmMILRKVQlxj4lggRgAj8hIgAj8hIgAH8rJIAAGMIgDgBIgBAAIgzgBIAAAAIAAAAQlrAAlWD3g");
	this.shape_177.setTransform(-2296.775,77.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#603F36").s().p("Ao+LQIAAjIICWAAIAAzXINHAAIAATXItHAAINHAAICgAAIAADIgAkPHqIIRAAIAAoRIoRAAgAjxldIAADwIDxAAIDvAAIAAjwIAAjxIjvAAIjxAAg");
	this.shape_178.setTransform(-792.85,157.175);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFCF5").s().p("AQRawIAAnqIkOAAIAAnqIEOAAIEOAAIAAHqIkOAAIAAnqIAAHqIEOAAIAAHqgAMDawIAAnqIEOAAIAAHqgAwQawIkOAAIAAnqIEOAAIAAHqIAAnqIEOAAIAAHqgABSXHIAAjwIAAjxIDwAAIAADxIjwAAIDwAAIAADwgABSXHIjvAAIAAjwIDvAAIjvAAIAAjxIDvAAIAADxIAADwgAFCTXgAQRTGgAsCTGIkOAAIAAnqIAAHqIkOAAIAAnqIEOAAIEOAAIAAHqgAwQTGgAwQTGgATNrbIhEAAIhDAAIhEAAIgHAAIAAnqIEOAAIkOAAIAAnqIEOAAIAAHqIAAHqgAO/rbIhEAAIhDAAIhEAAIgHAAIAAnqIEOAAIAAHqgACirbIhDAAIhEAAIhCAAIgBAAIAAnqIENAAIAAHqgAgorbIhDAAIhDAAIhEAAIhDAAIgBAAIAAnqIAAnqIEOAAIAAHqIAAnqIENAAIAAHqIkNAAIkOAAIEOAAIAAHqgAtGrbIhDAAIhEAAIhDAAIAAnqIAAHqIhEAAIhDAAIhEAAIhDAAIAAnqIEOAAIEOAAIAAHqgAP7zFgALtzFIAAnqIEOAAIAAHqgADlzFgAwQzFIAAnqIEOAAIAAHqgA0ezFIAAnqIEOAAIAAHqgAP76vgAwQ6vg");
	this.shape_179.setTransform(-801.2,-1.725);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B47333").s().p("AjtRvIAAoSIIRAAIAAISgAsLsGIAAloIYXAAIAAFog");
	this.shape_180.setTransform(-796.3,92.675);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#783518").s().p("AsLF8IAAjIIYXAAIAADIgAsLizIAAjIIYXAAIAADIg");
	this.shape_181.setTransform(-796.3,-2.85);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#DBBF80").s().p("A4rGGIAAsLINJAAIAAFoIAADHIYXAAIAAjHIAAloIL3AAIAAMLg");
	this.shape_182.setTransform(-800.375,18.15);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#AA3023").s().p("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");
	this.shape_183.setTransform(-800.375,-22.875);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CCCCCC").s().p("AfgLnQgXAAAAgOIAAiRQAAgPAXAAIBSAAQAWAAAAAPIAACRQAAAOgWAAgAfULcIBnAAIAAhBIhnAAgAfUKOIBnAAIAAhKIhnAAgASyLnQgWAAAAgOIAAiRQAAgPAWAAIBTAAQAXAAAAAPIAACRQAAAOgXAAgASoLcIBmAAIAAhBIhmAAgASoKOIBmAAIAAhKIhmAAgAF8LnQgXAAAAgOIAAiRQAAgPAXAAIBTAAQAWAAAAAPIAACRQAAAOgWAAgAFxLcIBnAAIAAhBIhnAAgAFxKOIBnAAIAAhKIhnAAgEghHgHzIBli2IAnAAQBNhfAzBfIB5AAQBdhuA2BuIBuAAQA/hmBABmIB5AAQBKhgBJBgIB2AAQA/hYBABYIB5AAQBKhVBJBVIBuAAQBAhGA/BGIB6AAQBChZBQBZIBrAAQBAh6A/B6IB6AAQBJhzBJBzIBuAAQA6hgBGBgIB5AAQBKhQBIBQIBPAAIBLC2gAIopAIAAhpgAAvpAIAAhpgAnHpAIAAhpgAvApAIAAhpgA3BpAIAAhpgA+7pAIAAhpgAMhpCIAAhngAEopCIAAhngAjOpCIAAhngArIpCIAAhngAzJpCIAAhngA7CpCIAAhngAOzpIIAAhhgAG6pIIAAhhgAg8pIIAAhhgAo1pIIAAhhgAw2pIIAAhhgA4vpIIAAhhgAKopJIAAhggACupJIAAhggAlIpJIAAhggAtBpJIAAhggA1CpJIAAhggA87pJIAAhgg");
	this.shape_184.setTransform(-1541.475,119.0625);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#72B1B6").s().p("AEJlEQEXjmEAEdQAmAqAkA1IAAJagACOGsIAApyIEJJygAsfkHIAIgGQE9kPECEPQAmAqAlA1IAAJagAtpGsIAApyIDmJygADOkNQAegeAdgZIh7B+QAfgnAhgggAsfkHIhKBBQBBhOAJANgAsfkHIAAAAg");
	this.shape_185.setTransform(-1981.6,-129.8809);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#DBA195").s().p("AxWPUIAA0AIAAg7IAAA7IiwAAIAAg7ICwAAIAAhxQTmvqR3PTIAAXDgAQzMYIAAxiIvsAAIPsAAIAARiIvsAAgABHlKIAARiIAAxiIAAl2gAulMYIPsAAIvsAAIAAxiIPsAAIvsAAQH7lkHxgSIA2gBIAAAAIABAAQHVAAHOEvIACACIAHAEIAHAFIACACIAAA7IAAg7IgCgCIgHgFIgHgEIgCgCQnOkvnVAAIgBAAIAAAAIg2ABQnxASn7FkIAARigAFRh+QgeAZgeAfQggAgggAmIAAJyIEKAAIHSAAIAApbQgkgzgmgqQiNifiVAAQh4AAh8BngAsiAAIAAJyIDmAAIH2AAIAApbQglg0gmgpQkBkQk+EQIgHAGQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgPAAg4BCg");
	this.shape_186.setTransform(-1988.725,-149.7097);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AqQHMIAApvIEoAAIAAJvgAD/CFIAAn1QCnEPAhDmgAD/CFIgdhIIAAhjQAAhCg2AAIgZAAIgFgGIAAhWIgxAAQg3hag/hSIEYAAIAAhbIGSAAIAABbImSAAIAAH1gAiTCFIAAn1QBTBiBEBvIAAA3IgiAAQg2AAgBBCIAABbQgDAAgFACQgGACgDAHIgcBFgAD/lwIGSAAIAAGdQkSk3iAhmgAloijIkoAAIAAiIIEoAAIAACIgAqQijgAD/lwgAgZlwIh6AAIAAhbIGSAAIAABbgAD/nLg");
	this.shape_187.setTransform(-1506.15,173.625);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.698)").s().p("EAHdAg7Inn9sIgEgNIK+d5gEgJ3Ag7Inr9iIBQhOIJ2ewgAKQ1JIkKpyIB8h/IJgLxgAmK1JIjnpyIBLhBIKQKzg");
	this.shape_188.setTransform(-2006.45,48.275);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0D7B78").s().p("AlHtkQGAlFE+FdIAAZRIAABvIAACggAlNQUIAA9gIAKgLIHndrgA1LubIhQBPIHrdgInrAAIAA9gQFjmOFjGOIAAdggANZDmIAAuxQE4kuELEuIAAOxg");
	this.shape_189.setTransform(-1975.15,154.55);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CC8A7E").s().p("AKuWhIAA/6INeAAIAAf6gAM8k9IAAOwIJDAAIAAuwQiFiYiRAAQiRAAicCYgA3+sKQhdAAg/hnQg6hfgHiFQgHiIA0hcQA8hnB0AAMAvPAAAQCOAABHBnQA/BcgJCIQgKCFhGBfQhNBnhuAAg");
	this.shape_190.setTransform(-1972.2789,114.825);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#B6DCDD").s().p("AKWBwIAAjfIDgAAIAADfgAENBwIAAjfIDgAAIAADfgAhUBwIAAjfIDfAAIAADfgAnnBwIAAjfIDhAAIAADfgAt1BwIAAjfIDgAAIAADfg");
	this.shape_191.setTransform(-1975.725,-271.975);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EEEDDB").s().p("Eg+UAsTIAA/7IteAAIAAf7IlUAAIAAigIBvAAIAAhaIAAgVIgNAAIAAhfIBzAAIAAB0IhmAAIBmAAIAAh0IhzAAIAABfIhiAAIAA5SQk+ldmBFFIAEANIgKALIAAdhImJAAIAA9hQlimOljGOIAAdhImCAAIAAozIAAnZIAAnjIAAhjIBjAAIAABjIhjAAIBjAAIAAhjIhjAAIAAqzMAAAgq6IGSAAIJbpmIcAAAIHnJmIGSAAMAAABO/gEhNhAmVIAAiPIiPAAICPAAIAACPIiPAAIAAiPIAACPICPAAgEg7LAkYIAAhYIhYAAIBYAAIAABYIhYAAIAAhYIAABYIBYAAgEhxuAYGIBZAAIAAhZIhZAAIBZAAIAABZIhZAAIAAhZIAABZgEhxPAA4Qg1BcAHCIQAHCFA7BfQA/BmBdAAMAvQAAAQBuAABMhmQBHhfAJiFQAKiIg/hcQhHhmiOgBMgvQAAAQh1ABg7BmgEhQagBLIBfAAIAAheIhfAAIBfAAIAABeIhfAAIAAheIAABegEhAQgB7ICIAAIAAiHIiIAAICIAAIAACHIiIAAIAAiHIAACHgEhtMgYQICwAAIAAUCMAleAAAIAA3FQx3vTznPqIAABxIiwAAgEhECgYNIB5AAIAAh6Ih5AAIB5AAIAAB6Ih5AAIAAh6IAAB6gEg87geNIB/AAIAAh/Ih/AAIB/AAIAAB/Ih/AAIAAh/IAAB/gEht1geZIB/AAIAAh/Ih/AAIB/AAIAAB/Ih/AAIAAh/IAAB/gEholghTIDbAAIAAhlIjbAAIDbAAIAABlIjbAAIAAhlIAABlgEhMtgk5IDgAAIAAjhIjgAAgEhS2gk5IDgAAIAAjhIjgAAgEhYYgk5IDgAAIAAjhIjgAAgEhergk5IDhAAIAAjhIjhAAgEhk5gk5IDgAAIAAjhIjgAAgEhRGApzIAAhvIBiAAIAAAVIANAAIAABagEhPkAoZIAAgVIANAAIAAAVgEhPkAoEgEBongj+IgKgKIAKAKIgLAAIgLgKIAMAAIK3AAIAIAKg");
	this.shape_192.setTransform(-1418.525,-24.55);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E4DEE8").s().p("AjNDOIAAmbIGbAAIAAGbg");
	this.shape_193.setTransform(468.425,144.425);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E2DBC9").s().p("AmnGUIAAi+IAAi/IkwAAIEwAAIAAC/IkwAAIEwAAIAAC+IkwAAIAAi+IkxAAIAAi/IExAAIAAC/IAAi/IkxAAIAAjbIExAAIAAjOIAADOIkxAAIAAjOIAADOIkwAAIEwAAIAADbIkwAAIEwAAIAAC/IkwAAIEwAAIAAC+IkwAAIAAi+IAAi/IAAjbIAAjOIEwAAIExAAIEwAAIAADOIAAjOIExAAIAADOIkxAAIkwAAIAADbIAAjbIEwAAIAADbIAAjbIExAAIAADbIkxAAIExAAIAAC/IkxAAIExAAIAAC+gAwIGUIAAi+IExAAIAAC+gAOtGEIAArXIGMAAIAALXgAwIDWgAmnAXgAwIAXgAmnjEgAwIjEg");
	this.shape_194.setTransform(432.875,148.35);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A96A58").s().p("ALXKFIqwAAI1fAAIAAoqMApxAAAIAAIqgARLneIjSAAIjRAAIjGAAIhfAAIAAiWIMvAAIAACWgAxbntIAAiXIMHAAIAACXg");
	this.shape_195.setTransform(432.875,22.975);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#976449").s().p("A1AE0IAAk8QG9jAG8hFQHuhMHvBMQGVA/GWCmIAADpIAABWQ2sn/zFIcg");
	this.shape_196.setTransform(432.075,-80.975);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#18457C").s().p("EkIbAmBMAAAglTQHYvdJBOcIAABBIwZAAIQZAAMAAAAlTgEDiEAh4IAAkcIAAhPIEwAAIExAAIEwAAIExAAIAAi+IAAi/IAAjcIAAjOIkxAAIkwAAIkxAAIkwAAIAAjOIVgAAIKwAAIJiAAIAAENImMAAIAALYIGMAAIAABfIpiAAIqwAAIAAuGIAAi+IAAC+IAAOGI1gAAIVgAAIKwAAIJiAAIAAEcgEECUAdcIAAuGIAAi+IAAC+IqwAAIKwAAgED5TAYfIGbAAIAAmbImbAAgED3kAdcgEjxrgBuMAg/AAAImjTPI6cFigEECUAPWgEDiEADvIAAs3QTFodWtIBIAANTgED9AgFLIBfAAIAAD6IAAEAIDGAAIDRAAIDSAAIAAkAIAAj6IBnAAIAAiVIsvAAgEDmwgBRIAAEAICuAAIDeAAIDdAAIAAkAIAAkCIjdAAIjeAAIiuAAgEDlhgFaIMHAAIAAiWIsHAAgEj4CAAugEjYlgN2IAAkqIF5AAQgdBWhJBaIABAAQhlB8iLAAQgSAAgSgCgEjuUgN2IAAkqIF6AAQgdBWhKBaIABAAQhlB8iLAAQgSAAgSgCgEkFEgN2IAAkqIF6AAQgdBWhJBaIAAAAQhlB8iKAAQgSAAgTgCgEjdYgQRQhHhJgghGIFzAAIAAEkQiYgeh0h3gEjzGgQRQhIhJgfhGIFyAAIAAEkQiXgeh0h3gEkJ2gQRQhHhJgghGIFzAAIAAEkQiYgeh0h3gEjYlgTHIAAm0IGFAAQAFENAABmQAAAggGAhgEjfNgTHQgKghAAggIAAlzIGLAAIAAG0gEjuUgTHIAAm0IGFAAQAGENAABmQAAAggHAhgEj08gTHQgKghAAggIAAlzIGLAAIAAG0gEkFEgTHIAAm0IGGAAQAFENAABmQAAAggHAhgEkLrgTHQgKghAAggIAAlzIGLAAIAAG0gEjYlgaLIAAlpIGKgHQgJC/ADChIABAQgEjfXgaLIAAlhIGLgHIAAFogEjuUgaLIAAlpIGLgHQgKC/AEChIAAAQgEj1GgaLIAAlhIGLgHIAAFogEkFEgaLIAAlpIGLgHQgJC/ADChIABAQgEkL1gaLIAAlhIGLgHIAAFogEjdagj8QB0h8CagIIAAFnImJAGQAJhuByh7gEjzIgj8QBzh8CagIIAAFnImJAGQAKhuByh7gEkJ4gj8QBzh8CbgIIAAFnImKAGQAKhuByh7gEjYlgmAQCgAIB1CCQBoByAMBjImJAHgEjuUgmAQCgAIB1CCQBoByAMBjImJAHgEkFEgmAQCgAIB2CCQBnByANBjImKAHg");
	this.shape_197.setTransform(-1147.625,8.25);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("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ADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgEle5gnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgEljqgnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgElokgnbQgDgEAAgFQAAgGADgDQAEgEAGAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgGAAgEgEgEltlgnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQAAAFgDAEQgEAEgGAAQgFAAgEgEgElyWgnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEgEl3LgnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgEl77gnXQgGgBgDgDQgEgEAAgFQAAgGAEgDQADgEAGAAIAAAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAgEmAwgnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEgEmF3gnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEAEQADADAAAGQAAAFgDAEQgEAEgGAAQgFAAgEgEgEmKhgnbQgEgEAAgFQAAgGAEgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_198.setTransform(-333.6754,-41.775);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#886891").s().p("EgGwAsEMAAAgutMAoKAAAMAAAAutgAjEdHMAg/AAAIAA4zMgg/AAAgEgGwAsEIirAAMAAAglSIAAhCQpBucnYPeMAAAAlSIjSAAMAAAgutIWWAAI2WAAMAAAAutIkTAAMAAAgutMAAAghbIAAn/MBCzAAAIAAA+IipAAIAADVICpAAIAADsMhCzAAAMBCzAAAMAAAAhbMgoKAAAMAAAAutgA9GipIkTAAgAQx+TQiJCTABCEIAAL4QAAArAQAuIAAACIAAAAIABABQAeBZBbBdQCGCJCxAbIACAAIAIABIABAAQC7AZCDigQBWhqAchjIABgCQAFgFAAgJIAAgHQAIgmAAgmQAAhogGkUIAAgZQgDihAJjAIAAgQIAAgBQgCh3h+iLQiFiUi5gDQgEgBgEABIgDAAQi0AAiFCRgAk9+TQiICTAACEIAAL4QAAArAQAuIAAACIABAAIAAABQAfBZBbBdQCFCJCxAbIACAAIAHABIABAAQC7AZCDigQBWhqAchjIABgCQAGgFAAgJIgBgHQAIgmAAgmQAAhogFkUIgBgZQgDihAJjAIAAgQIAAgBQgCh3h9iLQiGiUi5gDQgEgBgDABIgCAAQi1AAiFCRgA7t+TQiICTABCEIAAL4QAAArAPAuIAAACIABAAIABABQAeBZBbBdQCGCJCxAbIABAAIAJABIAAAAQC7AZCDigQBWhqAchjIACgCQAFgFAAgJIgBgHQAIgmAAgmQAAhogFkUIgBgZQgCihAIjAIABgQIAAgBQgDh3h9iLQiGiUi5gDQgEgBgEABIgCAAQi0AAiGCRgEAZwgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEAU1gnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEAPxgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEAK5gnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEAGVgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEABXgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEgDsgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEgIkgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEgNIgnwIDWAAIAAjVIjWAAIDWAAIAADVIjWAAIAAjVIAADVgEgSCgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEgXHgnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEgb+gnwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEggignwIDVAAIAAjVIjVAAIDVAAIAADVIjVAAIAAjVIAADVgEAd1gpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgEAEgEAYwgpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgGAAQgFAAgEAEgEATsgpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgEAEgEAO5gpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgEAEgEAKIgpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgEAEgEAFOgpeQgDADAAAGQAAAFADAEQAEAEAGAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgGAAgEAEgEAANgpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAGAAAEgEQADgEAAgFQAAgGgDgDQgEgEgGAAQgFAAgEAEgEgEjgpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgGAAQgFAAgEAEgEgJYgpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgEAEgEgOTgpeQgEADAAAGQAAAFAEAEQAEAEAFAAIACAAIAAAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAIAAAAIgCAAQgFAAgEAEgEgS9gpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgEAEgEgYEgpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAGAAAEgEQADgEAAgFQAAgGgDgDQgEgEgGAAQgFAAgEAEgEgcugpeQgEADAAAGQAAAFAEAEQAEAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgEAEgEAexgnwIAAjVICpAAIAADVgEAhagrFg");
	this.shape_199.setTransform(-2674.775,-30.475);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("EEUoAZQIAArYIA0AAIAALYgEiV2AWPIBRquQB+h6BzB6IA/KugEi9/AUwIgCgDQgXg9BNiUQAPgeA+iaQADgGAGgDQAFgCAEAAIAAG8QgmAJgdAAQhAAAgQgugEi8rARtQhDCBAPAzQAFAJALAGQAYAPA4gMIAAgDQgMiDAHiXQgdBEgKATgEjK2AUwIgBgDQgYg9BNiUQAMgXAmhcIAchFQACgGAHgDQAEgCAEAAIAAG8QgmAJgcAAQhAAAgRgugEjJhARtQhECBAQAzQAFAJAJAGQAZAPA4gMIAAgDQgKiDAFiXQgdBEgJATgEiwmAVYIgBAAQgzgQAAg9QAAgyAohVQAJgTALgUIAAgBQAPgeA/iaQACgGAGgDQAEgCAEAAIAAG8QgkAJgcAAQgWAAgQgGgEivTAUzQgKiEAGiZQgcBEgMATIgSAmQgjBLgBAtQAAAgAaALIgBAAQAaAHAvgKgEh/+AQ/IAAi2IIWAAIAAC2gEiImAQ/IAAi2IILAAIAAC2gAvAPpQg0gzAAhJQAAhIA0g0IAGgGQgtAyAABEQAABIAzAzQAzA0BJAAQBEAAAxguQgxAuhEAAQhJAAgzg0QgzgzAAhIQAAhEAtgyQAxgtBFAAQBIAAAzAzQA0A0gBBIQAABEgtAxIgGAHQgzAzhIAAQhJAAgzgzgA51OpQgtguAAhDQAAhCAtgvQAvguBDAAQBCAAAuAuQAvAvAABCQAABDgvAuQguAuhCAAQhDAAgvgugEk6RANuIAAibICbAAIAACbgEk9zANuIAAibICbAAIAACbgEh/+ANsIAAkAQEIADEOBHIAAC2gEiImANsIAAi2QEChHEJgDIAAEAgAu6LrIAAAAgEEozAB/IAApdIVBAAIAAJdgEDsFAB/IAApdIVBAAIAAJdgEk66gXMIB6AAIg7BogEk66gXMIA1iDIBFCDgEk66gXMg");
	this.shape_200.setTransform(-231.1,86.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shadow
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#999999").s().p("AhGB5IAAjxIApAAIAADPIBkAAIAAAig");
	this.shape_201.setTransform(-102.525,-72.375);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#999999").s().p("ABHB5IgYhAIheAAIgYBAIgqAAIBfjxIAmAAIBeDxgAAkAaIgOgmIgGgQIgFgPIgGgOIgFgRIAAAAIgKAfIgMAfIgOAmIBIAAg");
	this.shape_202.setTransform(-125.875,-72.375);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#999999").s().p("AgUB5IAAjPIhIAAIAAgiIC5AAIAAAiIhJAAIAADPg");
	this.shape_203.setTransform(-148.85,-72.375);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#999999").s().p("AgUB5IAAjxIApAAIAADxg");
	this.shape_204.setTransform(-165.275,-72.375);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#999999").s().p("AhSB5IAAjxIBQAAQASAAAPAFQARAFALAJQAMAKAFANQAHAOAAASQAAATgHAPQgHANgMAJQgMAKgRAEQgRAFgTAAIghAAIAABcgAgpgDIAWAAIAXgCQALgBAIgFQAIgFAFgIQAEgIAAgOQABgLgFgIQgEgIgHgFQgIgFgJgCQgIgDgKAAIgfAAg");
	this.shape_205.setTransform(-181.4,-72.375);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#999999").s().p("AgqB5QgTgDgTgKIAKgfQAQAIAQAEQAQADARAAQAUAAANgJQANgIAAgSQAAgLgJgLQgJgJgZgIIgXgIQgagIgQgOQgPgPAAgbQAAgfAWgUQAVgSAogBQAoAAAdAPIgJAgQgQgHgOgEQgOgDgNAAQgUgBgMAKQgMAIAAAQQAAAOAJAIQAKAIAUAHIAXAHQAfAKAPARQAPASAAAXQAAAQgHANQgGANgLAKQgLAIgQAFQgRAGgSAAQgUgBgTgDg");
	this.shape_206.setTransform(-204.225,-72.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#999999").s().p("AguB0QgVgIgPgPQgQgQgIgXQgJgXAAgfQAAgdAJgXQAJgYAPgPQAQgQAWgJQAVgHAYgBQAZABAVAHQAVAJAPAPQAQAQAIAXQAJAYAAAdQAAAegJAXQgJAYgPAPQgQARgWAHQgVAJgYAAQgZAAgVgJgAgchWQgNAGgJALQgKAMgFASQgGARAAAWQAAAXAGASQAGARAKAMQAJAMAOAFQANAGAOgBQAPABANgGQANgFAJgMQAKgMAFgRQAGgSAAgXQAAgXgGgSQgGgRgKgMQgJgLgOgFQgNgGgOABQgPgBgNAGg");
	this.shape_207.setTransform(-229.225,-72.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#999999").s().p("AA1B5IAAhtIhpAAIAABtIgqAAIAAjxIAqAAIAABkIBpAAIAAhkIAqAAIAADxg");
	this.shape_208.setTransform(-256.675,-72.375);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#999999").s().p("Ag/BtIAAjaIAlAAIAAC8IBaAAIAAAeg");
	this.shape_209.setTransform(636.375,-197.75);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#999999").s().p("AhDBtIAAjaICGAAIAAAeIhhAAIAAA9IBYAAIAAAcIhYAAIAABFIBiAAIAAAeg");
	this.shape_210.setTransform(617.525,-197.75);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#999999").s().p("AgSBtIAAi6IhBAAIAAggICnAAIAAAgIhCAAIAAC6g");
	this.shape_211.setTransform(597.7,-197.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#999999").s().p("AgpBpQgUgHgNgOQgOgOgIgVQgIgVAAgcQAAgaAIgVQAIgVAOgPQAOgOAUgHQATgIAWAAQAWAAATAIQATAHAOAOQAOAOAIAWQAIAUAAAbQAAAbgIAWQgIAUgOAPQgPAOgTAHQgTAIgWAAQgWAAgTgIgAgZhNQgMAEgIALQgJALgFAPQgFAQAAAUQAAAVAFAQQAFAQAJAKQAJAKAMAGQAMAFANAAQANAAAMgFQAMgGAIgKQAJgKAFgQQAFgQAAgVQAAgVgFgQQgGgPgIgLQgJgKgMgEQgMgGgNAAQgNAAgMAGg");
	this.shape_212.setTransform(575.275,-197.75);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#999999").s().p("AAwBtIAAhhIhgAAIAABhIglAAIAAjaIAlAAIAABbIBgAAIAAhbIAlAAIAADag");
	this.shape_213.setTransform(550.45,-197.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#999999").s().p("AgRBRIAAhIQgkgEAAgfIAAg2IAkAAIAAA2QAAAIAGAFQAEAFAHAAQAIAAAFgFQAFgFAAgIIAAg2IAkAAIAAA2QAAAfgkAEIAABIg");
	this.shape_214.setTransform(306.5,92.35);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#999999").s().p("AASBRIAAg2QAAgHgFgGQgGgFgHAAIgRAAIAABIIgkAAIAAihIBHAAQAPAAALALQAKALAAAOIAAAKQAAAMgIALQgIALgSAAIgCAAIACAAIAQAAQAHAAAGAEQAFAGAAAHIAABAgAgRgIIARAAQAHAAAGgFQAFgFAAgIIAAgSQAAgHgFgGQgGgFgHAAIgRAAg");
	this.shape_215.setTransform(285.95,92.35);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#999999").s().p("AASBRIAAhIIgjAAIAABIIgkAAIAAh9QAAgPALgKQAKgLAPAAIAjAAQAPAAAKALQALALAAAOIAAB9gAgMg5QgFAGAAAHIAAAkIAjAAIAAgkQAAgHgFgGQgGgFgHAAQgHAAgFAFg");
	this.shape_216.setTransform(265.4,92.35);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#999999").s().p("AASBRIAAg2QAAgHgFgGQgFgFgIAAIgRAAIAABIIgkAAIAAihIBHAAQAPAAALALQAKALAAAOIAAAKQAAAMgIALQgIALgSAAIgCAAIACAAIAQAAQAIAAAFAEQAFAGAAAHIAABAgAgRgIIARAAQAIAAAFgFQAFgFAAgIIAAgSQAAgHgFgGQgFgFgIAAIgRAAg");
	this.shape_217.setTransform(244.85,92.35);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#999999").s().p("Ag1BRIAAihIBHAAQAPAAALALQAKALAAAOIAAAJQAAAQgJAJQgJAJgSABQASAAAJALQAJAKAAAPIAAAJQAAAPgKAKQgMALgOAAgAgRA/IARAAQAHAAAGgGQAFgEAAgIIAAgSQAAgSgSAAIgRAAgAgRgIIARAAQAHAAAGgFQAFgFAAgIIAAgSQAAgHgFgGQgGgFgHAAIgRAAg");
	this.shape_218.setTransform(224.3,92.35);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#999999").s().p("AgRBRIAAihIAjAAIAAChg");
	this.shape_219.setTransform(205.55,92.35);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#999999").s().p("AgsBRIAAihIAkAAIAACPIA1AAIAAASg");
	this.shape_220.setTransform(187.7,92.35);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#999999").s().p("AgnA2QgDgCAAgFIAAgQIAAgQIAAg6QAAgFAEgEQADgFAHABIASABQAKABAHAEQAeAQAAAXQAAAJgGAHQgHAHgNAFQAUALAJALQADADAAAEQAAAEgDADQgDADgEAAQgFAAgCgDQgXgVgZgIIAAAXQAAAFgDACQgCADgFAAQgEAAgDgDgAgWACIAEAAQASAAAHgDIAHgFQADgEAAgBQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_221.setTransform(-1008.95,61.7227);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#999999").s().p("AghA4QgIgIAAgXIACgcIABgeIgBgHIgBgHQAAgMALAAIAFACIAQgDIAOgBQASAAALAEQAHADAAAHQAAAEgCACQgEADgEABIgDgBQgMgDgLAAIgLABIgNADIgBAcIAbgCIASgCQAFAAADADQACADAAAEQAAAIgJABIgRACIgeACIAAAPQAAAPABACQAAABAJAAIANgBIAOAAIADAAIAFgBQAEAAADADQADACAAAFQAAAIgIACQgHABgWAAQgYAAgHgGg");
	this.shape_222.setTransform(-1028.65,61.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#999999").s().p("AgzA4QgDgDABgEIAAgJIAAgJIABgMIAAgOIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgDAFgBQAGAAAHAKQAfAvAhAdIAAgMIgBgvIgBgIIAAgIQgBgJALgBQAMAAAAAlIgBAMIAAAtIgBALQgCAJgIABQgGAAgGgHQgcgZgjgsIAAAWIAAASIAAARQAAAVgKAAQgFABgEgEg");
	this.shape_223.setTransform(-1049.9,61.85);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#999999").s().p("AgzA4QgDgDAAgEIABgJIAAgJIABgMIAAgOIAAgMIAAgOIgBgNIgBgOQAAgEAEgDQADgDAFgBQAGAAAHAKQAgAvAgAdIAAgMIgBgvIgBgIIAAgIQAAgJAKgBQAMAAAAAlIgBAMIAAAtIgBALQgCAJgIABQgGAAgGgHQgcgZgjgsIAAAWIAAASIAAARQAAAVgKAAQgFABgEgEg");
	this.shape_224.setTransform(-1072.3,61.85);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#999999").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgDAFAAIAOgBIAAghQAAgTABgSIgPABQgFAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgEADQgDACgDAAIgTgCIgBAjIAAAgIATAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAIgMAAIgNAAIgOACIgOABQgFAAgDgDg");
	this.shape_225.setTransform(-1092.825,61.875);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#999999").s().p("AgWA7QgIgCgFgDQgEAAgDgDQgDgDAAgEIAAgWIABgWIAAgXIgBgYQAAgEAEgEQAEgEAFAAIAMAEIANAGQAUAHAPAPQASARAAAUQAAANgGALQgGAMgLAHQgMAHgVAAIgMgBgAgZAlQADACAEABIAIABQAPAAAHgFQAGgEAEgHQAEgHAAgIQAAgRgVgNQgGgEgYgKg");
	this.shape_226.setTransform(-1112.275,61.875);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#999999").s().p("AgMAuIgHgDIgGgCIgFgCIAAgYIAPAAIAAANIAAAAIAHACIAHABQAGAAAEgCQAEgDAAgFQAAgFgDgDIgJgEIgJgFIgKgEQgFgDgDgEQgEgFAAgIQAAgFADgFQACgFAEgEQAEgCAFgCQAGgCAGgBQAIAAAHACIANAEIAAAaIgPAAIAAgPIgBAAIgGgBIgGgBQgFABgDACQgEADAAADQAAAFAEADIAIAEIAJAFIAKAFQAFACADAFQADAEAAAIQABAHgDAEQgDAGgEADQgFAEgGACQgGACgHAAIgJgBg");
	this.shape_227.setTransform(-1705.3,38.35);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#999999").s().p("AAUAtIgHgUIgaAAIgGAUIgSAAIAehZIAQAAIAdBZgAAKALIgJgdIgBAAIgIAdIASAAg");
	this.shape_228.setTransform(-1713.05,38.325);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#999999").s().p("AgIArQgHgCgFgHQgGgFgDgJQgDgJAAgLQAAgMAEgJQADgIAGgGQAHgGAHgCQAGgDAIAAIANACIAJADIAAAaIgOAAIAAgOIgCgBIgGAAQgFAAgEACQgDACgEADQgDAEgCAGQgCAGAAAHQAAAIACAFQACAGADADQADAEAEADQAEABAFAAIAGAAIAEgBIAAgSIgRAAIAAgMIAfAAIAAAoQgEADgHADQgHACgIAAQgHAAgIgEg");
	this.shape_229.setTransform(-1720.65,38.35);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#999999").s().p("AhGB5IAAjxIApAAIAADPIBkAAIAAAig");
	this.shape_230.setTransform(542.575,-115.475);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#999999").s().p("ABHB5IgYhAIheAAIgYBAIgqAAIBfjxIAmAAIBeDxgAAkAaIgOgmIgGgQIgFgPIgGgOIgFgRIAAAAIgKAfIgMAfIgOAmIBIAAg");
	this.shape_231.setTransform(519.225,-115.475);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#999999").s().p("AgUB5IAAjPIhIAAIAAgiIC5AAIAAAiIhJAAIAADPg");
	this.shape_232.setTransform(496.25,-115.475);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#999999").s().p("AgUB5IAAjxIApAAIAADxg");
	this.shape_233.setTransform(479.825,-115.475);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#999999").s().p("AhSB5IAAjxIBPAAQATAAAPAFQAQAFAMAJQAMAKAFANQAHAOAAASQAAATgHAPQgHANgMAJQgMAKgRAEQgRAFgSAAIgiAAIAABcgAgpgDIAWAAIAXgCQALgBAIgFQAIgFAFgIQAEgIAAgOQABgLgFgIQgEgIgIgFQgGgFgKgCQgIgDgLAAIgeAAg");
	this.shape_234.setTransform(463.7,-115.475);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#999999").s().p("AgqB5QgTgDgTgKIAKgfQAQAHAQAEQAQAEARAAQAUAAANgJQANgIAAgRQAAgMgJgLQgJgJgZgIIgXgIQgagIgQgOQgPgPAAgbQAAgfAWgUQAVgTAoAAQAoAAAdAPIgJAhQgQgIgOgEQgOgDgNAAQgUgBgMAKQgMAJAAAPQAAAOAJAIQAKAIAUAHIAXAHQAfAKAPARQAPASAAAXQAAAQgHANQgGANgLAKQgLAJgQAEQgRAGgSgBQgUAAgTgDg");
	this.shape_235.setTransform(440.875,-115.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#999999").s().p("AguB0QgVgHgPgQQgQgQgIgXQgJgXAAgfQAAgdAJgXQAJgXAPgQQAQgQAWgJQAVgHAYgBQAZABAVAHQAVAJAPAPQAQAQAIAXQAJAYAAAdQAAAegJAXQgJAYgPAPQgQARgWAHQgVAJgYgBQgZABgVgJgAgchWQgNAGgJALQgKAMgFASQgGAQAAAXQAAAXAGASQAGASAKALQAJAMAOAFQANAGAOgBQAPABANgGQANgFAJgMQAKgLAFgSQAGgSAAgXQAAgXgGgRQgGgSgKgMQgJgKgOgGQgNgFgOAAQgPAAgNAFg");
	this.shape_236.setTransform(415.875,-115.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#999999").s().p("AA1B5IAAhtIhpAAIAABtIgqAAIAAjxIAqAAIAABkIBpAAIAAhkIAqAAIAADxg");
	this.shape_237.setTransform(388.425,-115.475);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#999999").s().p("Ag/BuIAAjbIAlAAIAAC8IBaAAIAAAfg");
	this.shape_238.setTransform(1281.525,-240.85);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#999999").s().p("AhDBuIAAjbICGAAIAAAfIhhAAIAAA8IBYAAIAAAdIhYAAIAABEIBiAAIAAAfg");
	this.shape_239.setTransform(1262.675,-240.85);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#999999").s().p("AgSBuIAAi7IhBAAIAAggICnAAIAAAgIhCAAIAAC7g");
	this.shape_240.setTransform(1242.85,-240.85);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#999999").s().p("AgpBpQgUgGgNgPQgOgOgIgVQgIgVAAgcQAAgaAIgVQAIgVAOgPQAOgOAUgHQATgIAWAAQAWAAATAIQATAHAOAOQAOAOAIAVQAIAWAAAaQAAAbgIAWQgIAUgOAPQgPAOgTAHQgTAIgWAAQgWAAgTgIgAgZhNQgMAEgIALQgJALgFAPQgFAQAAAUQAAAVAFAQQAFAQAJAKQAJAKAMAGQAMAFANAAQANAAAMgFQAMgGAIgKQAJgKAFgQQAFgQAAgVQAAgVgFgQQgGgPgIgLQgJgKgMgEQgMgGgNAAQgNAAgMAGg");
	this.shape_241.setTransform(1220.425,-240.85);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#999999").s().p("AAwBuIAAhiIhfAAIAABiIgmAAIAAjbIAmAAIAABbIBfAAIAAhbIAlAAIAADbg");
	this.shape_242.setTransform(1195.6,-240.85);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#999999").s().p("AgRBRIAAhIQgkgEAAgfIAAg2IAkAAIAAA2QAAAIAGAEQAFAGAGAAQAHAAAGgGQAFgEAAgIIAAg2IAkAAIAAA2QAAAfgkAEIAABIg");
	this.shape_243.setTransform(951.7,49.25);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#999999").s().p("AASBRIAAg2QAAgHgFgGQgFgFgIAAIgRAAIAABIIgkAAIAAihIBHAAQAPAAAKALQALALAAAOIAAAKQAAAMgIALQgIALgSAAIgCAAIACAAIAQAAQAIAAAFAEQAFAGAAAHIAABAgAgRgIIARAAQAIAAAFgGQAFgEAAgIIAAgSQAAgHgFgGQgFgFgIAAIgRAAg");
	this.shape_244.setTransform(931.15,49.25);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#999999").s().p("AASBRIAAhIIgjAAIAABIIgkAAIAAh9QAAgPAKgKQALgLAPAAIAjAAQAPAAAKALQALALAAAOIAAB9gAgLg5QgGAGAAAHIAAAkIAjAAIAAgkQAAgHgFgGQgGgFgHAAQgHAAgEAFg");
	this.shape_245.setTransform(910.6,49.25);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#999999").s().p("AASBRIAAg2QAAgHgFgGQgGgFgHAAIgRAAIAABIIgkAAIAAihIBHAAQAPAAALALQAKALAAAOIAAAKQAAAMgIALQgIALgSAAIgCAAIACAAIAQAAQAHAAAGAEQAFAGAAAHIAABAgAgRgIIARAAQAHAAAGgGQAFgEAAgIIAAgSQAAgHgFgGQgGgFgHAAIgRAAg");
	this.shape_246.setTransform(890.05,49.25);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#999999").s().p("Ag1BRIAAihIBHAAQAPAAAKALQALALAAAOIAAAJQAAAQgJAJQgJAJgSABQASAAAJALQAJAKAAAPIAAAJQAAAOgLAMQgKAKgPAAgAgRA/IARAAQAIAAAFgGQAFgEAAgIIAAgSQAAgSgSAAIgRAAgAgRgIIARAAQAIAAAFgGQAFgEAAgIIAAgSQAAgHgFgGQgFgFgIAAIgRAAg");
	this.shape_247.setTransform(869.5,49.25);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#999999").s().p("AgRBRIAAihIAjAAIAAChg");
	this.shape_248.setTransform(850.75,49.25);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#999999").s().p("AgsBRIAAihIAkAAIAACPIA1AAIAAASg");
	this.shape_249.setTransform(832.9,49.25);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#999999").s().p("AgnA2QgDgCAAgFIAAgQIAAgQIAAg6QAAgFADgEQAEgFAHABIASABQAKABAHAEQAeAQAAAXQAAAJgGAHQgHAHgNAFQAUALAJALQADADAAAEQAAAEgDADQgDADgFAAQgEAAgCgDQgWgVgagIIAAAXQAAAFgDACQgCADgFAAQgEAAgDgDgAgWACIAEAAQARAAAIgDIAHgFQADgEAAgBQAAgIgKgIQgJgHgLgBIgJgBg");
	this.shape_250.setTransform(-363.75,18.6727);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#999999").s().p("AghA4QgIgHAAgYIABgcIACgdIgBgIIgBgIQAAgKALgBIAFACIAQgDIAOgBQASAAALAEQAHADAAAGQAAAEgDADQgDADgEAAIgDAAQgMgDgLAAIgLABIgNACIgBAdIAcgDIARgBQAEAAAEADQACACAAAFQABAIgKABIgRACIgeACIAAAPQAAAOABACQABABAIAAIANAAIAOAAIADgBIAFAAQAEAAADADQADACABAFQAAAIgJACQgHABgWAAQgYAAgHgGg");
	this.shape_251.setTransform(-383.45,18.65);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#999999").s().p("AgzA4QgCgDAAgEIAAgJIABgIIAAgOIAAgMIAAgOIAAgNIgBgOIgBgNQAAgDAEgEQAEgEAEABQAGAAAGAJQAgAvAhAdIAAgMIgBguIgBgIIgBgJQAAgKALABQAMAAAAAkIAAALIAAAtIgCAMQgCAKgIAAQgGgBgGgFQgcgagjgsIAAAWIAAASIAAARQAAAWgKgBQgFAAgEgDg");
	this.shape_252.setTransform(-404.7,18.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#999999").s().p("AgzA4QgCgDAAgEIAAgJIAAgIIABgOIAAgMIAAgOIAAgNIgBgOIgBgNQAAgDAEgEQAEgEAEABQAGAAAHAJQAfAvAhAdIAAgMIgBguIgBgIIAAgJQgBgKALABQAMAAAAAkIgBALIAAAtIgBAMQgCAKgIAAQgGgBgGgFQgcgagjgsIAAAWIAAASIAAARQAAAWgKgBQgFAAgEgDg");
	this.shape_253.setTransform(-427.1,18.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#999999").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgDAFAAIAOgBIAAghQAAgTABgSIgPABQgFAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgEADQgDACgDAAIgTgCIgBAjIAAAgIATAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAIgMAAIgNAAIgOACIgOABQgFAAgDgDg");
	this.shape_254.setTransform(-447.625,18.825);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#999999").s().p("AgWA7QgIgCgFgDQgEAAgDgDQgDgDAAgEIAAgWIABgWIAAgXIgBgYQAAgEAEgEQAEgEAFAAIAMAEIANAGQAUAHAPAPQASARAAAUQAAANgGALQgGAMgLAHQgMAHgVAAIgMgBgAgZAlQADACAEABIAIABQAPAAAHgFQAGgEAEgHQAEgHAAgIQAAgRgVgNQgGgEgYgKg");
	this.shape_255.setTransform(-467.075,18.825);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#999999").s().p("AgLAtIgIgCIgHgCIgDgCIAAgYIANAAIAAANIABAAIAGADIAIAAQAGAAAEgDQAEgDAAgEQAAgFgEgCIgIgFIgJgEIgKgFQgFgCgDgGQgEgEABgIQgBgFADgFQACgFAEgDQAEgEAGgCQAFgCAGAAQAIABAIABIALAEIAAAaIgNAAIAAgPIgCAAIgFgBIgHAAQgFgBgEADQgDACAAAFQAAAEADADIAJAEIAIAFIALAFQAFACADAFQAEAFAAAGQAAAHgDAGQgDAFgEAEQgFADgGABQgHACgFAAIgJgBg");
	this.shape_256.setTransform(-1060.15,-4.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#999999").s().p("AATAtIgGgUIgaAAIgGAUIgRAAIAchZIARAAIAcBZgAAJALIgJgdIAAAAIgIAdIARAAg");
	this.shape_257.setTransform(-1067.9,-4.725);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#999999").s().p("AgHArQgIgCgGgHQgFgFgDgJQgDgJAAgLQAAgMADgIQAFgKAFgFQAHgGAHgCQAHgCAHgBIANABIAJAEIAAAaIgOAAIAAgOIgCAAIgFgBQgGAAgEACQgEABgDAFQgDADgCAGQgCAGAAAHQAAAHACAGQACAFADAFQADADAEACQAEADAFAAIAGgBIAEgCIAAgSIgQAAIAAgLIAeAAIAAAoQgEADgHACQgHACgIAAQgHAAgHgDg");
	this.shape_258.setTransform(-1075.5,-4.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#999999").s().p("AhGB5IAAjxIApAAIAADPIBkAAIAAAig");
	this.shape_259.setTransform(1035.025,-120.825);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#999999").s().p("ABHB5IgYhAIheAAIgYBAIgqAAIBfjxIAmAAIBeDxgAAkAaIgOgmIgGgQIgFgPIgGgOIgFgRIAAAAIgKAfIgMAfIgOAmIBIAAg");
	this.shape_260.setTransform(1011.675,-120.825);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#999999").s().p("AgUB5IAAjPIhIAAIAAgiIC5AAIAAAiIhJAAIAADPg");
	this.shape_261.setTransform(988.7,-120.825);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#999999").s().p("AgUB5IAAjxIApAAIAADxg");
	this.shape_262.setTransform(972.275,-120.825);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#999999").s().p("AhSB5IAAjxIBPAAQATAAAQAFQAQAFALAJQALAKAHANQAGAOAAASQAAATgHAPQgHANgMAJQgNAKgQAEQgRAFgTAAIggAAIAABcgAgogDIAVAAIAXgCQALgBAIgFQAIgFAEgIQAGgIAAgOQgBgLgEgIQgEgIgIgFQgHgFgJgCQgIgDgLAAIgdAAg");
	this.shape_263.setTransform(956.15,-120.825);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#999999").s().p("AgqB5QgTgEgTgIIAKghQAQAIAQAFQAQADARAAQAUABANgKQANgIAAgSQAAgMgJgJQgJgKgZgIIgXgHQgagKgQgNQgPgPAAgaQAAggAWgUQAVgSAoAAQAoAAAdAOIgJAgQgQgHgOgDQgOgEgNgBQgUABgMAIQgMAKAAAPQAAAOAJAIQAKAIAUAGIAXAIQAfAKAPARQAPASAAAYQAAAPgHANQgGANgLAJQgLAKgQAEQgRAFgSABQgUAAgTgEg");
	this.shape_264.setTransform(933.325,-120.85);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#999999").s().p("AguB1QgVgJgPgPQgQgQgIgXQgJgXAAgfQAAgdAJgXQAJgXAPgQQAQgQAWgIQAVgJAYABQAZgBAVAJQAVAHAPAQQAQAQAIAYQAJAXAAAdQAAAegJAYQgJAWgPAQQgQAQgWAJQgVAHgYABQgZgBgVgHgAgchWQgNAGgJALQgKAMgFARQgGARAAAXQAAAXAGASQAGARAKAMQAJALAOAGQANAFAOAAQAPAAANgFQANgGAJgLQAKgMAFgRQAGgSAAgXQAAgXgGgSQgGgRgKgLQgJgMgOgFQgNgGgOAAQgPAAgNAGg");
	this.shape_265.setTransform(908.325,-120.85);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#999999").s().p("AA1B5IAAhtIhpAAIAABtIgqAAIAAjxIAqAAIAABkIBpAAIAAhkIAqAAIAADxg");
	this.shape_266.setTransform(880.875,-120.825);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#999999").s().p("Ag/BuIAAjbIAlAAIAAC8IBaAAIAAAfg");
	this.shape_267.setTransform(1773.975,-246.25);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#999999").s().p("AhDBuIAAjbICGAAIAAAfIhhAAIAAA8IBYAAIAAAdIhYAAIAABEIBiAAIAAAfg");
	this.shape_268.setTransform(1755.125,-246.25);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#999999").s().p("AgSBuIAAi7IhBAAIAAggICnAAIAAAgIhCAAIAAC7g");
	this.shape_269.setTransform(1735.3,-246.25);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#999999").s().p("AgpBpQgUgGgNgPQgOgOgIgVQgIgVAAgcQAAgaAIgVQAIgVAOgPQAOgOAUgHQATgIAWAAQAWAAATAIQATAHAOAOQAOAOAIAVQAIAWAAAaQAAAbgIAWQgIAUgOAPQgPAOgTAHQgTAIgWAAQgWAAgTgIgAgZhNQgMAEgIALQgJALgFAPQgFAQAAAUQAAAVAFAQQAFAQAJAKQAJAKAMAGQAMAFANAAQANAAAMgFQAMgGAIgKQAJgKAFgQQAFgQAAgVQAAgVgFgQQgGgPgIgLQgJgKgMgEQgMgGgNAAQgNAAgMAGg");
	this.shape_270.setTransform(1712.875,-246.25);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#999999").s().p("AAxBuIAAhiIhhAAIAABiIglAAIAAjbIAlAAIAABbIBhAAIAAhbIAkAAIAADbg");
	this.shape_271.setTransform(1688.05,-246.25);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#999999").s().p("AgRBRIAAhIQgkgEAAgfIAAg2IAkAAIAAA2QAAAHAGAGQAEAFAHAAQAIAAAFgFQAFgGAAgHIAAg2IAkAAIAAA2QAAAfgkAEIAABIg");
	this.shape_272.setTransform(1444.1,43.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#999999").s().p("AASBRIAAg2QAAgHgFgGQgGgFgHAAIgRAAIAABIIgkAAIAAihIBHAAQAPAAALAKQAKAMAAAOIAAAKQAAAMgIALQgIALgSAAIgCAAIACAAIAQAAQAHAAAGAFQAFAFAAAHIAABAgAgRgIIARAAQAHAAAGgFQAFgGAAgHIAAgSQAAgIgFgEQgGgGgHAAIgRAAg");
	this.shape_273.setTransform(1423.55,43.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#999999").s().p("AASBRIAAhIIgjAAIAABIIgkAAIAAh9QAAgPALgLQAKgKAPAAIAjAAQAPAAAKAKQALAMAAAOIAAB9gAgMg4QgFAEAAAIIAAAkIAjAAIAAgkQAAgIgFgEQgGgGgHAAQgHAAgFAGg");
	this.shape_274.setTransform(1403,43.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#999999").s().p("AASBRIAAg2QAAgHgFgGQgFgFgIAAIgRAAIAABIIgkAAIAAihIBHAAQAPAAALAKQAKAMAAAOIAAAKQAAAMgIALQgIALgSAAIgCAAIACAAIAQAAQAHAAAGAFQAFAFAAAHIAABAgAgRgIIARAAQAIAAAFgFQAFgGAAgHIAAgSQAAgIgFgEQgFgGgIAAIgRAAg");
	this.shape_275.setTransform(1382.45,43.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#999999").s().p("Ag1BRIAAihIBHAAQAPAAALAKQAKAMAAAOIAAAJQAAAQgJAJQgJAJgSABQASAAAJALQAJALAAAOIAAAJQAAAOgKALQgMALgOAAgAgRA/IARAAQAHAAAGgFQAFgGAAgHIAAgSQAAgSgSAAIgRAAgAgRgIIARAAQAHAAAGgFQAFgGAAgHIAAgSQAAgIgFgEQgGgGgHAAIgRAAg");
	this.shape_276.setTransform(1361.9,43.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#999999").s().p("AgRBRIAAihIAjAAIAAChg");
	this.shape_277.setTransform(1343.15,43.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#999999").s().p("AgsBRIAAihIAkAAIAACPIA1AAIAAASg");
	this.shape_278.setTransform(1325.3,43.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#999999").s().p("AgnA2QgDgCAAgFIABgQIAAgQIAAg6QAAgFADgEQADgFAHABIASABQAKABAGAEQAfAQABAXQAAAJgHAHQgGAHgNAFQASALALALQACADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDQgVgVgagIIABAXQAAAFgDACQgDADgEAAQgFAAgDgDgAgVACIACAAQATAAAHgDIAHgFQADgEAAgBQAAgIgLgIQgJgHgKgBIgIgBg");
	this.shape_279.setTransform(128.6,13.2727);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#999999").s().p("AghA4QgIgHAAgYIABgcIABgeIAAgHIgBgIQAAgKAKgBIAHACIAQgDIANgBQASAAALAEQAHADAAAGQAAAEgCADQgDADgFAAIgDAAQgMgDgLAAIgLABIgOACIAAAdIAbgDIASgBQAEAAADADQADACABAFQgBAIgIABIgSACIgeACIgBAPQABAOABACQAAABAJAAIANAAIANAAIAFgBIAEAAQAEAAADADQADACAAAFQABAIgJACQgHABgWAAQgYAAgHgGg");
	this.shape_280.setTransform(108.9,13.25);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#999999").s().p("AgyA4QgEgDAAgEIABgJIAAgIIABgOIAAgNIAAgNIAAgNIgBgOIgBgMQAAgEAEgEQADgEAGABQAFAAAGAJQAgAvAgAdIAAgMIAAguIgBgIIAAgIQgBgLALABQAMAAAAAkIgBALIAAAtIgBAMQgBAKgKAAQgEgBgHgGQgcgZgigsIgBAWIABASIAAARQAAAWgLAAQgFgBgDgDg");
	this.shape_281.setTransform(87.65,13.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#999999").s().p("AgyA4QgDgDgBgEIABgJIABgIIAAgOIAAgNIAAgNIAAgNIgBgOIgBgMQAAgEAEgEQAEgEAFABQAFAAAGAJQAhAvAfAdIAAgMIAAguIgBgIIgBgIQAAgLALABQAMAAAAAkIAAALIAAAtIgCAMQgBAKgKAAQgEgBgHgGQgcgZgigsIgBAWIABASIAAARQAAAWgLAAQgFgBgDgDg");
	this.shape_282.setTransform(65.25,13.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#999999").s().p("AgiA1QgDgDAAgEQAAgEADgDQADgDAFAAIAOgBIAAghQAAgTABgSIgPABQgFAAgDgDQgDgDAAgEQAAgFADgCQADgDAEAAIAVgBQANAAAWADQAJACAAAIQAAAFgEADQgDACgDAAIgTgCIgBAjIAAAgIATAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAIgMAAIgNAAIgOACIgOABQgFAAgDgDg");
	this.shape_283.setTransform(44.725,13.425);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#999999").s().p("AgWA7QgIgCgFgDQgEAAgDgDQgDgDAAgEIAAgWIABgWIAAgXIgBgYQAAgEAEgEQAEgEAFAAIAMAEIANAGQAUAHAPAPQASARAAAUQAAANgGALQgGAMgLAHQgMAHgVAAIgMgBgAgZAlQADACAEABIAIABQAPAAAHgFQAGgEAEgHQAEgHAAgIQAAgRgVgNQgGgEgYgKg");
	this.shape_284.setTransform(25.275,13.425);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#999999").s().p("AgMAuIgHgCIgGgDIgFgCIAAgXIAPAAIAAAMIAAAAIAHACIAHABQAGAAAEgDQAEgDAAgFQAAgEgDgDIgIgEIgKgFIgKgEQgFgCgDgFQgEgFAAgHQAAgHADgEQACgFAEgEQAEgDAFgBQAGgCAGAAQAIAAAHABIANADIAAAaIgPAAIAAgNIgBAAIgGgCIgGgBQgFAAgDADQgEACAAAEQAAAFAEACIAIAGIAJADIAKAGQAFACADAFQAEAEgBAIQABAGgDAFQgDAGgEADQgFAEgGACQgGABgHAAIgJAAg");
	this.shape_285.setTransform(-567.7,-10.05);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#999999").s().p("AAUAtIgHgUIgaAAIgGAUIgSAAIAehZIAQAAIAdBZgAAKALIgJgdIgBAAIgIAdIASAAg");
	this.shape_286.setTransform(-575.45,-10.075);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#999999").s().p("AgIAsQgHgEgFgFQgGgHgDgIQgDgJAAgLQAAgMAEgJQAEgIAFgGQAGgFAIgDQAHgCAHAAIANABIAJADIAAAaIgOAAIAAgOIgCgBIgGAAQgFAAgEACQgDABgEAEQgDAEgCAGQgCAGAAAHQAAAHACAGQACAFADAEQADAFAEABQAEACAFAAIAGAAIAEgCIAAgSIgRAAIAAgLIAfAAIAAAnQgEAEgHADQgHABgIAAQgHAAgIgCg");
	this.shape_287.setTransform(-583.05,-10.05);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#999999").s().p("AgFAAYAAAAABADABADYABACABACABAAYABAAACgCABgCYABgDABgDAAAAIAAAAYAAAAgBgCgBgDYgBgCgCgCgBAAYgBAAgBACgBACYgBADgBACAAAAIAAAA");
	this.shape_288.setTransform(-293.2,145.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#999999").s().p("AqNAAYAAAABSADB7ADYB6ACCkACCiAAYCjAACkgCB6gCYB7gDBSgDAAAAIAAAAYAAAAhSgCh7gDYh6gCikgCijAAYiiAAikACh6ACYh7ADhSACAAAAIAAAA");
	this.shape_289.setTransform(-939.9,188.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#999999").s().p("AJ4AAYAAAAhPgCh3gDYh2gCiegCieAAYidAAieACh2ACYh3ADhPACAAAAIAAAAYAAAABPADB3ADYB2ACCeACCdAAYCeAACegCB2gCYB3gDBPgDAAAAIAAAA");
	this.shape_290.setTransform(-1171.475,188.25);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#999999").s().p("AgxhKYAAAAAXAnAYAlYAFAKAFAKAGAJYAGAJAGAIAFAGYAKAOAIAIAAAAYABAAAAAAAAAAYAAAAAAAAAAAAYAAAAgEgLgIgPYgFgIgFgIgFgJYgGgJgHgJgHgIYgZglgaglAAAAYAAAAgBAAAAAAYAAAAAAAAAAAB");
	this.shape_291.setTransform(-1045.7265,178.9224);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#999999").s().p("AAxhNYAAAAgaAmgZAmYgHAIgHAKgGAJYgGAJgEAJgFAHYgIAQgEALAAAAYAAAAAAAAAAAAYAAAAABAAAAAAYAAAAAIgIAKgOYAFgHAGgIAGgKYAGgJAFgKAFgKYAYgmAXgpAAAAYAAAAAAAAAAAAYAAgBgBABAAAA");
	this.shape_292.setTransform(-1076.4735,177.8474);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAFABAEABADYADAHAEAEAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgDABgEAAgFYAAgEgBgEgBgFYgCgRgFgSAAAAYAAgBgBAAAAAAYAAAAAAABAAAA");
	this.shape_293.setTransform(-1881.25,81.5569);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#999999").s().p("AAAgiYAAAAgFARgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgRAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_294.setTransform(-1864,81.4818);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_295.setTransform(-1872.45,81.2314);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#999999").s().p("AAAgiYAAAAgFARgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgRAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_296.setTransform(-1898.85,81.4818);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_297.setTransform(-1888.7,81.2815);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAFABAEABADYADAHAEAEAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgDABgEAAgFYAAgEgBgEgBgFYgCgRgFgSAAAAYAAgBgBAAAAAAYAAAAAAABAAAA");
	this.shape_298.setTransform(-1916.1,81.5569);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_299.setTransform(-1923.75,81.2815);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_300.setTransform(-1907.3,81.2314);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#999999").s().p("AAAgiYAAAAgFARgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgRAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_301.setTransform(-1933.9,81.4818);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_302.setTransform(-1942.3,81.2314);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_303.setTransform(-1818.9,81.2815);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#999999").s().p("AAAgiYAAAAgFARgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgRAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_304.setTransform(-1829.05,81.4818);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_305.setTransform(-1837.4,81.2314);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#999999").s().p("AAAgkYAAAAgEATgDARYAAAFgCAEAAAFYgBAEACAEABAEYACAGAFAFAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgEABgEAAgEYAAgEgBgFgBgFYgCgRgEgTAAAAYAAAAgBgBgBAAYAAABAAAAAAAA");
	this.shape_306.setTransform(-1846.2187,81.4821);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_307.setTransform(-1853.85,81.2815);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_308.setTransform(-1959.3,81.2815);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAFABAEABADYADAHAEAEAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgDABgEAAgFYAAgEgBgEgBgFYgCgRgFgSAAAAYAAgBgBAAAAAAYAAAAAAABAAAA");
	this.shape_309.setTransform(-1951.1,81.5569);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_310.setTransform(-1977.8,81.2314);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#999999").s().p("AAAgiYAAAAgFARgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgRAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_311.setTransform(-1969.45,81.4818);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#999999").s().p("AAAgiYAAAAgFARgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgRAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_312.setTransform(-2004.4,81.4818);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAFABAEABADYADAHAEAEAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgDABgEAAgFYAAgEgBgEgBgFYgCgRgFgSAAAAYAAgBgBAAAAAAYAAAAAAABAAAA");
	this.shape_313.setTransform(-1986.65,81.5569);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_314.setTransform(-1994.25,81.2815);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAFABAEABADYADAHAEAEAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgDABgEAAgFYAAgEgBgEgBgFYgCgRgFgSAAAAYAAgBgBAAAAAAYAAAAAAABAAAA");
	this.shape_315.setTransform(-2021.65,81.5569);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_316.setTransform(-2012.85,81.2314);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#999999").s().p("AAAk/YAAAAgFCggCCfYgBAogBAoAAAmYAAAlABAjABAeYADA8AEAoAAAAYAAABAAAAAAAAYABAAAAAAAAgBYAAAAAEgoADg8YABgeABgjAAglYAAgmgBgogBgoYgCifgFigAAAAYAAgBAAAAgBAAYAAAAAAAAAAAB");
	this.shape_317.setTransform(-1056.75,170.4711);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_318.setTransform(-1227.25,38.1314);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAIAAAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgSAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_319.setTransform(-1218.85,38.4069);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAIAAAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgSAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_320.setTransform(-1253.7,38.4069);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAFABAEABADYADAHAEAEAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgDABgEAAgFYAAgEgBgEgBgFYgCgRgFgSAAAAYAAgBgBAAAAAAYAAAAAAABAAAA");
	this.shape_321.setTransform(-1236.1,38.4569);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_322.setTransform(-1243.55,38.1815);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#999999").s().p("AAAggYAAAAgFARgCAPYgBAEgBAEAAAEYAAAEABAEABADYADAGAEAEAAAAYAAABAAAAABgBYAAAAAEgEADgGYABgDABgEAAgEYAAgEgBgEgBgEYgCgPgFgRAAAAYAAAAgBgBAAAAYAAABAAAAAAAA");
	this.shape_323.setTransform(-1192.25,38.1314);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAEABAEABAEYADAGAEAFAAAAYAAAAAAAAABAAIAAAAYAAAAAEgFADgGYABgEABgEAAgEYAAgEgBgEgBgFYgCgRgFgSAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_324.setTransform(-1183.85,38.4069);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#999999").s().p("AAAgjYAAAAgFASgCARYgBAFgBAEAAAEYAAAFABAEABADYADAHAEAEAAAAYAAABAAAAABgBYAAAAAAAAAAAAYAAAAAEgEADgHYABgDABgEAAgFYAAgEgBgEgBgFYgCgRgFgSAAAAYAAgBgBAAAAAAYAAAAAAABAAAA");
	this.shape_325.setTransform(-1201.1,38.4569);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_326.setTransform(-1208.7,38.1815);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#999999").s().p("AAAggYAAAAgFAQgCAQYgBAEgBAFAAADYAAAEABAEABADYADAGAEAFAAAAYAAAAAAAAABAAYAAAAAEgFADgGYABgDABgEAAgEYAAgDgBgFgBgEYgCgQgFgQAAAAYAAgBgBAAAAAAYAAAAAAAAAAAB");
	this.shape_327.setTransform(-1173.7,38.1815);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#999999").s().p("AB8ADIgBAMYgBAEgBAFgBAEYgBAEgBAEgBAEYgCADgBAEgCAEYgCAEgBAEgDADYgCADgCAEgDADYgDADgCADgDADIgEAFIgFAEIAAAAIgJAHIgEADIgFADYgDACgEACgDABIgKAFYgIACgGACgIABIgFAAIgGAAIgFABIgDAAIgDAAIgKgBIgLgCYgHgCgHgCgHgDIgFgCIgEgDIgKgGYgGgFgFgFgFgEIgIgJYgCgDgCgDgCgCYgCgDgBgEgCgDYgCgDgBgDgCgDYgDgHgCgHgBgHYgBgHgBgHAAgIYAAgCAAgEABgEYAAgEAAgDABgDYABgHACgHACgHYACgDABgDACgEYABgDACgDACgDIAGgJIAHgIIgBABIAOgMYAEgDAEgDAFgDYAFgDAFgCAFgDYAFgBAGgCAFgBYAFgCAGAAAGgBIAHgBYACAAAEAAADAAYADAAADABACAAYADAAADAAACABIAJACIAIACYACABADABACACYADABADABACABYAFADAFADAEADYAFAEAEADAEAFYADACACACACACIAFAHYACACACACABADYACACACACABADYADAFACAFADAGYABAFADAGABAGYABAGABAGABAFAB+ADYAAgFAAgHAAgGYgBgGgBgGgBgGYgCgGgBgHgDgFYgBgDgCgDgBgDYgCgDgBgDgCgCIgGgJYgCgCgCgCgBgDYgFgFgEgEgFgFYgFgEgFgEgGgDYgCgCgDgCgDgBYgDgCgDgBgDgBYgDgBgDgCgDgBIgKgCYgDgBgDgBgEAAYgDgBgDAAgDAAYgEAAgCgBgEAAIgJABYgDAAgDAAgEABYgDAAgDAAgDABYgHACgGACgHACYgGADgGADgFADYgGADgFAFgGAEIgNAMIgBABIAAAAIgHAKIgHALYgCADgCAEgCAEYgBAEgCADgBAEYgDAIgCAIgBAIYAAAEgBAFAAAEYAAAEAAACAAAFYAAAIABAIACAIYACAIACAIAEAHYACAEABAEACADYACAEACADADAEYACADADADACADIAIAJYAHAFAGAGAHAEIAKAGIAFADIAGACYAHAEAIACAIABIAMACIALABIADAAYABAAABAAABAAIAGgBIAGAAIAGgBYAHgBAIgDAIgDIAKgEYAEgCADgCAEgDIAFgDIAEgEIAJgHIAAAAIAFgFIAEgFYADgDADgDACgEYADgDACgEACgEYADgDABgEACgEYACgEABgEACgEYABgEABgFABgEYAAgEABgEAAgFIABgM");
	this.shape_328.setTransform(-1034.152,162.4253);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#999999").s().p("ABxADYAAAAAAACgBAFYAAADAAADgBAEYAAADgCAEgBAFYgDAJgEAKgHALYgIAKgLALgNAJYgNAIgQAGgSABYgEABgFAAgEAAYgEgBgFAAgFgBYgJgBgJgDgJgEYgRgIgQgOgLgQYgFgJgEgJgDgKYgCgJgBgLAAgJYAAgLACgJACgJYAEgKAEgJAGgIYADgEADgEADgDIADgDYAAAAABgBgBABIACgCIAGgFYAHgFAIgGAJgDYAQgHASgDARACYARABAQAFAMAIYAHAEAGAFAEAEYADADADADACACYACADACACACACYAIAKAEALADAIYACAEABAEABAEYABAEAAADABACYAAAEABADAAAAABzADYAAAAAAgDAAgEYAAgDAAgDAAgEYAAgEgBgEgBgFYgCgJgDgMgHgMYgCgDgCgDgCgDYgDgDgCgDgCgDYgGgGgGgGgHgFYgOgLgSgHgVgDYgSgCgWACgVAJYgKAEgKAHgJAHIgFAFIgCACYgBABAAAAgBABIgCADYgEAEgDAFgEAFYgGAKgFAKgDAMYgDALgBANAAAJYAAAMACALADAMYADALAFAKAHAKYANASASAPAUAIYAKAEAKADAKABYAGABAEAAAEAAYAFAAAFgBAFAAYATgDASgHAOgJYANgKAKgMAIgLYAHgMAEgLADgJYABgFABgEAAgEYAAgEABgDAAgCYAAgFAAgDAAAA");
	this.shape_329.setTransform(-1083.7226,159.6247);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#999999").s().p("AAAgLYAAAAgFAGgCAFYgBACgBABAAABYAAACABABABABYADACAEACAAAAYAAAAAAAAABAAYAAAAAEgCADgCYABgBABgBAAgCYAAgBgBgBgBgCYgCgFgFgGAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_330.setTransform(-856.65,30.6086);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#999999").s().p("AAAgLYAAAAgFAGgCAFYgBACgBABAAABYAAACABABABABYADACAEACAAAAYAAAAAAAAABAAYAAAAAEgCADgCYABgBABgBAAgCYAAgBgBgBgBgCYgCgFgFgGAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_331.setTransform(-866.8,30.6086);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#999999").s().p("AAAgLYAAAAgFAGgCAFYgBACgBABAAABYAAACABABABABYADACAEACAAAAYAAAAAAAAABAAYAAAAAEgCADgCYABgBABgBAAgCYAAgBgBgBgBgCYgCgFgFgGAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_332.setTransform(-875.25,30.6086);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#999999").s().p("AAAgLYAAAAgFAGgCAFYgBACgBABAAABYAAACABABABABYADACAEACAAAAYAAAAAAAAABAAYAAAAAEgCADgCYABgBABgBAAgCYAAgBgBgBgBgCYgCgFgFgGAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_333.setTransform(-884.05,30.6086);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#999999").s().p("AAAgLYAAAAgFAGgCAFYgBACgBABAAABYAAACABABABABYADACAEACAAAAYAAAAAAAAABAAYAAAAAEgCADgCYABgBABgBAAgCYAAgBgBgBgBgCYgCgFgFgGAAAAYAAAAgBAAAAAAYAAAAAAAAAAAA");
	this.shape_334.setTransform(-849.05,30.6086);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#999999").s().p("AAAhnYAAAAgBANgBATYgBAUgBAaAAAZYAAAaABAaABAUYABATABANAAAAIAAAAYAAAAACgNABgTYABgUABgaAAgaYAAgZgBgagBgUYgBgTgCgNAAAAIAAAA");
	this.shape_335.setTransform(-1134.7,173.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#999999").s().p("AAAhnYAAAAgBANgBATYgBAUgBAaAAAZYAAAaABAaABAUYABATABANAAAAIAAAAYAAAAACgNABgTYABgUABgaAAgaYAAgZgBgagBgUYgBgTgCgNAAAAIAAAA");
	this.shape_336.setTransform(-1215.2,173.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#999999").s().p("AAAhnYAAAAgBANgBATYgBAUgBAaAAAZYAAAaABAaABAUYABATABANAAAAIAAAAYAAAAACgNABgTYABgUABgaAAgaYAAgZgBgagBgUYgBgTgCgNAAAAIAAAA");
	this.shape_337.setTransform(-975.85,173.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#999999").s().p("AAAhnYAAAAgBANgBATYgBAUgBAaAAAZYAAAaABAaABAUYABATABANAAAAIAAAAYAAAAACgNABgTYABgUABgaAAgaYAAgZgBgagBgUYgBgTgCgNAAAAIAAAA");
	this.shape_338.setTransform(-895.35,173.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#999999").s().p("AgEjAYAAAAgDAYgDAlYgCASgCAVgCAXYAAALgBALgBANYgBALAAANgBALYgBAMgBAMgBAMYgBAMgBALAAAMYAAAWADAVAEASYACAJACAJACAHYACAHACAHACAFYADAKADAGAAAAYAAACACAAABAAYABgBAAAAAAgBYAAAAADgGAEgKYABgGACgGACgIYACgHABgIACgJYADgSACgWAAgWYAAgMgCgLgBgMYgCgMgBgMgBgMYgCgXgCgYgCgXYgCgWgCgVgCgSYgEglgDgYAAAAYAAgBgBgBgBAAYgBAAgBABAAAB");
	this.shape_339.setTransform(740.1668,140.7178);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#999999").s().p("AgCgfYAAAAgDAEgDAGYgCAEgCADgCAEYgCAEgBAEgCADYgBACgBACgBACYgCACgBABAAACYAAAEADAEADADYACABACABABACYACABACABACABYAEABADABAAAAYABABABAAACgBYAAAAADgBADgBYACgBACgBACgCYACgBABgBACgCYADgDADgDAAgEYAAgCgBgCgCgCYgBgCgBgCgBgCYgCgDgBgEgCgDYgCgEgCgEgCgDYgEgGgDgEAAAAYgBgBgBAAgBABYAAAAgBAAAAAA");
	this.shape_340.setTransform(773.2343,124.608);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#999999").s().p("AgCAAYAAAAgCAAgEAAYgCAAgCAAgCAAYgBAAgCAAgCAAIgDAAYgCAAgBAAAAABYAAAAADAAADAAYAKAAAHABAAAAYACAAABAAABAAYAAAAAIgBAKAAYADAAADAAAAAAYAAgBgBAAgCAAIgDAAYgCAAgCAAgBAAYgCAAgCAAgCAAYgEAAgDAAAAAAYgBgBgBAAgCAB");
	this.shape_341.setTransform(704.5,148.5974);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#999999").s().p("AgCgNYAAAAgCACgEACYgCACgCABgCACYgCACgBABgCABYgBABgBABgBABYgCABgBABAAABYAAABADACADABYACABACABABAAYACABACAAACABYAEAAACABAAAAYACAAABAAABAAYAAAAADgBAEAAYACgBACAAACgBYABAAACgBACgBYADgBADgCAAgBYAAgBgBgBgCgBYgBgBgBgBgBgBYgCgBgBgBgCgCYgCgCgCgBgCgCYgEgCgDgCAAAAYgBgBgBAAgCAB");
	this.shape_342.setTransform(1083.05,123.3243);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#999999").s().p("AgCgEYAAAAgCABgEABYgCAAgCABgCAAYgCABgBAAgCAAYgBAAgBABgBAAYgCAAgBABAAAAYAAABADAAADABYACAAACAAABAAYADABABAAACAAYAEAAACAAAAAAYACAAABAAABAAYAAAAADAAAEAAYACAAABAAADgBYABAAACAAACAAYADgBADAAAAgBYAAAAgBgBgCAAYgBAAgBgBgBAAYgCAAgBAAgCgBYgCAAgCgBgCAAYgEgBgDgBAAAAYgBgBgBAAgCAB");
	this.shape_343.setTransform(1049.75,124.2638);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#999999").s().p("AgBgEYAAAAgDAAgEABYgCAAgCABgBAAYgDABgBABgCAAYgBAAgBAAgBAAYgCAAgBAAAAABYAAAAADABADABYACAAACAAABABYACAAACAAACAAYAEABACAAAAAAYACAAABAAABAAYAAAAADAAAEAAYABAAACAAACAAYACAAACAAACAAYADgBADAAAAgBYAAAAgBAAgCgBYgBAAgBgBgBAAYgCgBgBAAgCAAYgCgBgCgBgCAAYgEgBgCgBAAAAYgCgBgBAAgBAB");
	this.shape_344.setTransform(1014.5657,124.2654);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#999999").s().p("AgDjTYAAAAgDAbgDAoYgCATgCAYgBAZYgCAYgCAbgBAZYgBAOgBANgCANYgBANgBANAAAMYAAAZADAXADAUYACAKACAJACAIYACAIACAHACAGYADAMADAGAAAAYABACAAAAACAAYAAgBABAAAAgBYAAAAADgGAEgMYABgGACgHACgIYACgIACgJABgKYAEgUACgXAAgZYAAgMgBgNgCgNYgBgNgBgOgBgNYgCgZgCgbgCgZYgCgYgCgYgCgTYgEgogDgbAAAAYAAgBgBgBgBAAYgBAAgBABAAAB");
	this.shape_345.setTransform(128.1874,185.7198);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#999999").s().p("AABjTYAAAAgDAbgEAnYgCAUgCAXgCAZYgCAZgCAbgCAZYgBANgCAOgBANYgCANgBAMAAANYAAAZACAXADAUYACAKACAJABAIYACAIACAHACAGYADAMADAGAAAAYABACABAAABAAYAAgBABAAAAgBYAAAAADgGAEgMYACgGACgHACgIYACgIACgJABgKYAEgUADgXAAgZYAAgMgBgNgBgNYgBgNgBgNgBgNYgCgagBgbgCgYYgBgZgCgXgCgUYgDgogCgbAAAAYgBgBgBgBgBAAYgBAAgBABAAAB");
	this.shape_346.setTransform(59.2906,185.7198);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#999999").s().p("AgEjTYAAAAgDAbgDAoYgCAUgCAXgCAZYAAAMgBANgBANYgBANAAANgBANYgBANgBANgBANYgBANgBANAAAMYAAAZADAXAEAUYACAKACAJACAIYACAIACAHACAGYADAMADAGAAAAYAAACABAAACAAYAAgBABAAAAgBYAAAAADgGADgMYACgGACgHACgIYACgIABgJACgKYADgUACgXAAgZYAAgNgCgMgBgNYgCgNgBgOgBgNYgBgMgBgNgBgNYgBgNgBgNgBgNYgCgYgCgYgCgUYgEgngDgbAAAAYAAgBgBgBgBAAYgBAAgBABAAAB");
	this.shape_347.setTransform(95.0275,185.7198);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#999999").s().p("AgDjTYAAAAgDAbgDAoYgCATgCAYgCAZYgCAYgBAbgBAZYgBAOgBANgCANYgBANgBANAAAMYAAAZADAXADAUYACAKACAJACAIYACAIACAHACAGYADAMADAGAAAAYABACABAAABAAYABgBAAAAAAgBYAAAAADgGAEgMYABgGACgHACgIYACgIACgJABgKYAEgUACgXAAgZYAAgMgBgNgCgNYgBgNgCgOAAgNYgCgZgCgbgCgZYgCgYgCgYgCgUYgEgngDgbAAAAYAAgBgBgBgBAAYgBAAgBABAAAB");
	this.shape_348.setTransform(438.0217,186.1698);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#999999").s().p("AgFjTYAAAAgCAbgDAoYgCAUgCAXgBAZYgCAYgBAbgCAaYgBANgBANgBANYgBANgBANAAAMYAAAZADAXAEAUYABAKACAJACAIYACAIACAHACAGYAEAMADAGAAAAYAAACABAAACAAYAAgBABAAAAgBYAAAAADgGADgMYACgGACgHACgIYABgIACgJACgKYADgUACgXAAgZYAAgNgBgMgCgNYgBgNgCgOgBgNYgCgZgCgbgCgZYgCgZgCgXgCgUYgEgngDgbAAAAYAAgBgBgBgBAAYgCAAAAABgBAB");
	this.shape_349.setTransform(404.8594,186.1697);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#999999").s().p("AABjSYAAAAgDAagEAoYgCATgCAYgCAYYgCAZgCAbgCAZYgBANgCAOgBANYgCANgBAMAAANYAAAZACAXADAUYACAKACAJABAIYACAIACAHACAGYADALADAHAAAAYABABABABABgBYAAAAABAAAAgBYAAAAADgHAEgLYACgGACgHACgIYACgIACgJABgKYAEgUADgXAAgZYAAgMgBgNgBgNYgBgNgBgNgBgNYgCgagBgagCgZYgBgZgCgXgCgUYgDgogCgaAAAAYgBgCgBgBgBAAYgBAAgBABAAAC");
	this.shape_350.setTransform(369.0906,186.1447);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#999999").s().p("AgDh6YAAAAgCAPgEAXYgCAMgBAOgCAOYgCAPgCAPgBAPYgBAHgBAIgCAIYgBAHgBAIAAAHYAAAPADANADAMYACAFACAGACAEYACAFACAEABAEYAEAGADAEAAAAYABACABAAABgBYABAAAAgBAAAAYAAAAADgEADgHYACgDACgEACgFYACgEACgGABgGYADgLADgOAAgOYAAgIgBgHgCgIYgBgHgBgIgBgIYgCgOgCgQgCgOYgCgPgCgNgCgMYgDgXgEgPAAAAYAAgCgBgBgBABYgBAAAAABgBAB");
	this.shape_351.setTransform(1575.653,146.5339);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#999999").s().p("AgDh6YAAAAgDAPgDAXYgCAMgCAOgCAOYgCAPgBAPgBAPYgBAHgBAIgCAIYgBAHgBAIAAAHYAAAPADANADAMYACAFACAGACAEYACAFACAEACAEYADAGADAEAAAAYABACABAAACgBYAAAAAAgBAAAAYAAAAADgEAEgHYABgDACgEACgFYACgFACgFABgGYAEgLACgOAAgOYAAgIgBgHgCgIYgBgHgCgIAAgIYgCgOgCgQgCgOYgCgPgCgNgCgMYgEgXgDgPAAAAYAAgCgBgBgBABYgBAAgBABAAAB");
	this.shape_352.setTransform(1542.5217,146.5339);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#999999").s().p("AAAh6YAAAAgDAPgEAXYgCAMgCANgCAPYgCAOgCAQgCAOYAAAIgCAIgBAHYgCAIgBAHAAAIYAAAOACAOAEALYABAGACAFACAFYACAFACAEABADYAEAHADAEAAAAYABACABAAABgBYAAAAABgBAAAAYAAAAADgEADgGYACgEACgEACgFYACgEACgGACgFYADgMADgNAAgPYAAgHgBgIgBgHYgCgIgBgIgBgHYgBgPgBgPgCgPYgCgOgCgOgCgMYgDgXgDgPAAAAYAAgCgBgBgCABYgBAAAAABAAAB");
	this.shape_353.setTransform(1506.6283,146.5339);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#999999").ss(5,1,1).p("EEtFgOgIF8gHEEnfgPCQCxkuCxgFIAEFVEEnfgOaIFmgGEBZ6gO5IAAhzEBeggOCIAiAAIAACyICaAAIAACyIiaAAIgcAAEBeggLQIAiAAIAACyEBcTgO5IAAg2IIZAAIAABoImMAAEBhcgOCIAACyICZAAIAACyIiZAAEBhcgOCICZAAIAACyEBtmgLQIAAisIhCAAIAAhoII1AAIAABoIhIAAIAACsIAABQEBfCgOCICaAAEBvvgN8IAACsICRAAICRAAEByAgN8IAACsIAACyEByAgN8IiRAAIiJAAEB0RgN8IiRAAEB1YgG1QARggASgdQBJh4BJhGQBYhUBZgLQAKgBAJAAIAEFUIF8gGEBtmgLQICJAAIAACyIiJAAgEB0hgFKQAbg5AcgyIF9gHEBy8gIeIg8AAIiRAAEBemgHyITzAAEhw0gNCIE2kOII7INEhw0gGkQCEgqCGAHQCkAICpBQAIynOIhBAAIAAhnII0AAIAABnIhHAAIAACtIAACyIiSAAIiRAAIiJAAIAAiygAK7nOIAACtICRAAICSAAAIykhICJAAIAACyAK7nOIiJAAANMnOIAACtIAACyANMnOIiRAAAPenOIiSAAASDE8ImnAAIncAAIu5AAIAAiMIAAg3IAAi8IAAo6Aq5QxIO5AAIHcAAIGnAAASDPvIkTAAIAAn4IETAAAogpBIIZAAIAABpIoZAAgAjXnTIAACyICZAAIAACyIiZAAIiZAAIh5AAIAAiyIAAiyIB5AAIAACyIAACyAjXnTICZAAIAACyAjXkhIAACyAnpkhIB5AAICZAAAnmJZIAACZIDTAAIAACEIAACEIjTAAIjTAAIAAg7IAAhJIDTAAIAACEAkTJZIAACZIDTAAIAACEIAACEIjTAAAkTHKIAACPIDTAAIAACZIDSAAIAACEIAACEIjSAAAnmHKIAACPIDTAAAnmHKIDTAAIDTAAIDSAAIAACPIAACZAq5HKIAAhmIAAgoAq5LyIAAiZIAAiPIDTAAAq5QxIAAg3AnmN2IDTAAIDTAAIDSAAAq5LyIDTAAIAACEAq5JZIDTAAAq5N2IAAiEAhAHKIAACPIDSAAAlwnTICZAAASDT2I88AAIAAjFAq5hDIc8AAEhw0gH5IEKjgIAAESEhsqgLZIFtFOEkeaAAcQDnAMDyCaQANAJAOAKIAAOGIi8AAIp+AAIhaAAIjsAAIjCAAIAAu+IN6sIIGtGKICOCDEkeagD1IAAEREkmpADGIIPm7IH0HKIBzI+EkmpADGQEAi4EPAOEkUzARbIhzAAEkmpADGIBvOVEkr2gJJIAAQCIAAKmInKAAIAArCIAAvmEkmpADGIh9OVEjG1ABfIAAlwIN7sJIGsGKICOCDEi0sgFCQBPAjBPAzQAOAJAOAJIAAOGIgcAAIigAAIiBAAEi0vgGHIC9CtIByI+Ei5mgKkIAAC+Ei5mgKkIBdBWEjB1gDoQD0ivECAFEjB1gDoIIPm8Ei4AAKsImtAAIhZAAIjsAAIicAAEiwAAKsIhyAAEjB1gDoIBvOUEjOMAAXIAAgoIAAvmEjHCgP3IAAQBIAAA1EjB1gDoIh9OU");
	this.shape_354.setTransform(-539.525,71.65);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#999999").s().p("ACQkGYAAAAgBACgDAEYgDADgEAFgFAHYgLANgOATgQAXYghAugoA/gjBCYgkBBggBDgWA1YgLAagIAWgFAQYgDAHgCAHgBAEYgCAEAAADAAAAIAAAAYAAAAABgCADgEYADgDAEgFAGgHYAKgNAOgSARgYYAgguAog/AjhCYAkhAAghEAWg0YALgbAIgWAFgQYADgHACgHABgEYACgEAAgDAAAAIAAAA");
	this.shape_355.setTransform(922.125,151.05);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#999999").s().p("AhWkGYAAAAABADAAAEYABAEAAAGABAIYACAPAEAVAFAaYAFAaAHAdAIAgYAFAPAEAQAFARYAFAQAGAQAFAQYAVBBAZBBAWAvYALAYAKATAHANYAEAHADAFACAEYACAEABACAAAAIAAAAYAAAAAAgDAAgEYgBgEAAgGgBgIYgCgPgEgVgFgaYgKgzgRhDgWhBYgFgQgGgRgGgQYgGgQgEgPgHgPYgMgfgMgbgLgYYgLgYgKgTgHgNYgEgHgDgFgCgEYgCgEgCgCAAAAIAAAA");
	this.shape_356.setTransform(976.2,151.05);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#999999").s().p("AAAg4YAAAAAAAAgBABYgBABgBABgCACYgCADgEAFgDAFYgGALgEAOAAANYAAAPAFAOAGAKYADAGAEAEADADYABACACABAAABYAAABABAAAAAAIAAAAYAAAAAAAAABgBYABgBABgBACgCYACgDAEgFADgFYAGgLAEgOAAgOYAAgOgFgOgGgKYgDgGgEgEgDgDYgBgCgCgBAAgBYgBgBAAAAAAAAIAAAA");
	this.shape_357.setTransform(249.875,32.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#999999").s().p("AjejgYAAAAADAAAFABYACABADAAAEABYADABAEABAEABYADAAACABACABYADAAACABADABYAFACAFACAGACYAGACAGADAGADYADACADABADACYADACADABAEACYANAHANAKANAKYAOALAOALANANYAOANANAOANAPYAMAPANAPANAQIAJAMIAFAGIAEAGYAGAIAHAIAGAIYAMAQAKAQAMAQYALAPAKAQALAPYACAEADADACAEIACACIABACIABAAIAAABYAAgBAAABAAgBIAAAAIADAGYAFAHAFAHAEAGYAIANAJAMAHAKYAHALAGAJAGAIYAFAHAEAGADAEYADAEACACAAAAIAAAAYAAAAgBgCgBgFYgCgFgCgHgCgJYgDgJgEgKgEgNYgEgMgGgNgGgPYgDgHgDgHgDgIIgDgGYgBgCgBgCgBgDYgCgDgCgEgCgEYgIgRgJgQgKgSYgFgIgFgJgFgJYgGgIgFgJgGgJYgGgIgGgJgGgIIgEgGYgCgDgBgCgCgCIgKgNYgNgRgPgQgOgPYgPgPgPgPgQgMYgQgNgRgLgQgJYgRgKgQgHgQgFYgHgDgIgCgHgCYgIgBgHgCgGAAYgHgBgGgBgGAAYgDAAgCAAgDAAYgDAAgCAAgDAAYgJAAgHACgFABYgFAAgDABAAAAIAAAA");
	this.shape_358.setTransform(271.675,15.6717);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#999999").s().p("ACTkLYAAAAgBACgDADYgDAEgFAFgFAHYgKANgPATgQAYYghAvgpBBgkBDYgSAhgSAigPAgYgIAQgHAQgHAPYgHAPgGAOgGANYgLAbgIAXgGAQYgDAIgCAGgBAEYgCAFAAACAAAAIAAAAYAAAAABgCADgDYADgEAFgFAFgHYAKgNAPgTARgYYAIgLAJgNAJgOYAJgOAJgOAKgQYATgeASghASgiYASggASgiAQghYAPggAOgfALgaYALgbAIgXAGgQYADgHACgHABgEYACgFAAgCAAAAIAAAA");
	this.shape_359.setTransform(2060.025,102.05);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#999999").s().p("AhXkLYAAAAAAACABAEYAAAFABAGABAHYACAQAEAWAFAaYACANADAOAEAPYADAPAEAQAFAQYAEAQAFAQAFARYAFAQAFARAGAQYAWBDAZBBAWAxYALAYAKAUAIANYAEAHADAGACADYACAEABACAAAAIAAAAYAAAAAAgCAAgEYgBgFAAgGgCgIYgCgPgDgWgFgaYgLg1gShEgWhCYgFgRgGgRgGgQYgGgQgFgQgGgPYgGgQgHgPgGgNYgFgOgGgOgGgMYgLgYgKgUgIgOYgDgGgEgGgCgEYgCgDgBgCAAAAIAAAA");
	this.shape_360.setTransform(2113.625,102.05);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#999999").s().p("ACTkLYAAAAgBACgDAEYgDADgFAFgFAHYgKANgPATgQAYYgRAYgTAcgSAeYgKAPgJAQgKAQYgIARgKAQgJARYgSAhgSAigPAgYgIAQgHAQgHAPYgHAPgGAOgGANYgLAbgIAWgGAQYgDAIgCAHgBAEYgCAEAAADAAAAIAAAAYAAAAABgCADgEYADgDAFgFAFgHYAKgNAPgTARgYYAIgLAJgNAJgOYAJgOAJgOAKgQYATgeASghASgiYAJgQAJgQAJgRYAIgRAJgQAHgRYAQggAOgfALgaYALgbAIgWAGgQYADgIACgHABgEYACgEAAgDAAAAIAAAA");
	this.shape_361.setTransform(1567.575,107.425);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#999999").s().p("AhXkLYAAAAAAACAAAFYABAEAAAGACAIYACAPADAWAGAaYAFAaAHAfAJAgYAEAQAFAQAFARYAFAQAFARAGAQYAVBDAaBBAWAxYALAYAKAUAIANYAEAHADAFACAEYACAEABACAAAAIAAAAYAAAAAAgCAAgFYgBgEAAgGgCgIYgCgPgDgWgFgaYgLg1gShEgWhCYgFgRgGgRgGgQYgGgQgFgQgGgPYgNgfgMgcgLgZYgLgYgKgUgIgNYgEgHgDgFgCgEYgCgEgBgCAAAAIAAAA");
	this.shape_362.setTransform(1621.175,107.425);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#999999").s().p("AjJi2YAAAAAJACAQAEYADABAFABAEACYAEABAFABAFACYAFACAFADAFACYAGACAFADAGADYAGADAFADAGAEYAGAEAGADAGAFYAGAEAGAEAGAFYAGAFAGAEAGAFYAGAGAGAFAGAGYAHAFAFAGAGAGYADADAEADADADIAHAKYAGAGAGAGAGAHYAGAGAFAHAGAGYAGAHAFAGAGAGYALANAKAOALAMYAUAbATAYAQAVYAIALAIAKAHAIYAHAJAGAHAFAHYAEAGAFAFACADYADADACACAAAAIAAAAYAAAAgBgCgBgEYgBgFgCgGgDgHYgCgIgDgJgEgKYgFgLgEgLgGgNYgGgMgGgNgHgOYgIgOgIgPgJgOYgKgOgJgPgLgOYgGgHgFgIgGgHYgGgHgGgHgGgHYgGgHgHgGgGgHYgHgHgGgGgHgGYgOgNgOgLgOgKYgHgFgIgEgHgFYgHgEgIgEgIgDYgHgEgHgDgIgCYgHgDgHgCgHgCYgHgBgGgCgHgBYgGgBgGgBgGAAYgMgCgKACgIAAYgIABgGABgEABYgEAAgDABAAAAIAAAA");
	this.shape_363.setTransform(1407.175,-36.9899);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#999999").s().p("AAAgdYAAAAAAAAgBABYgBAAgBABgBABYgDABgEADgDADYgGAFgEAIAAAGYAAAIAEAHAHAGYADADAEACACACYACAAABABABAAYAAABAAAAAAAAIAAAAYAAAAABAAABgBYABAAABgBABgBYADgBAEgDADgDYAGgFAEgIAAgHYAAgHgEgHgHgGYgDgDgEgCgCgCYgCAAgBgBgBAAYgBgBAAAAAAAAIAAAA");
	this.shape_364.setTransform(1387.45,-18.25);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#999999").s().p("AAAgWYAAAAAAABgBAAYAAAAgCABgBAAYgDACgDACgEACYgGAEgEAGAAAEYAAAGAEAFAHAFYADACADABADACYACAAABABABAAYAAAAAAABAAAAIAAAAYAAAAABgBABAAYAAAAACgBABAAYADgCADgCAEgCYAGgEAEgGAAgFYAAgFgEgFgHgFYgDgCgDgBgDgCYgCAAgBgBgBAAYgBAAAAgBAAAAIAAAA");
	this.shape_365.setTransform(1387.525,-12.15);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#999999").ss(1.5,1,1).p("ANMhlIAAkHAKrhlIAAj1AIMhlIAAjmAFshlIAAjZADMhlIAAjQAhyhlIAAjGAAshlIAAjKAj9G4IAAjMIAAjBIEsAAIAADBIAADMAkphlIAAjGAqVhlIAAjSAnehlIAAjKAtKhlIAAjdAvUhlIAAjpAzohlIAAkCAxdhlIAAj2EBQIgCbIAAjPEBLJgCbIAAjGEBNogCbIAAjJEBITgCbIAAjGEBI/AGCIAAjMIAAjAIEtAAIAADAIAADMEBFdgCbIAAjJEBCngCbID2FRICVDMIAHALEBXogCbIAAj0EBaIgCbIAAkHEBcogCbIAAkcEA7egCbIAAj2EA5UgCbIAAkCEA/xgCbIAAjdEA9ngCbIABjoEBSogCbIAAjZEBVIgCbIAAjlAPrhlIAAkcEhVIAFJIAAkcEhcnAFJIAAjmEhaHAFJIAAj1EhXnAFJIAAkH");
	this.shape_366.setTransform(1607.65,36.675);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#999999").ss(0.5,1,1).p("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");
	this.shape_367.setTransform(723.4,-16.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#999999").ss(1,1,1).p("EFt5gIBIAAEmIi7AAIAAksIBCAAEFl8gHMIAAhfEFn/gAKIhtAAEFn/gB6IAABwEFyOgAKIhtAAIhtAAIhuAAIhtAAIhtAAIhtAAEFyOgB6IAABwEFwhgB6IAABwEF1cgB6IADBwIhjAAIhuAAEFz8gB6IAABwEF1RgH8IAAEhIi7AAIAAkfEFpsgB6IAABwEFrZgB6IAABwEFtGgB6IAABwEFu0gB6IAABwEGBlgHMIAAhxEF6DgIHIC7AAIAAEsIi7AAgEF+ngB6IAABwIhfAAIhfAAEF9IgB6IAABwEGBlgAKIhfAAEGAGgB6IAABwIhfAAEF4HgB6IAFBwIhKAAIhjAAEF29gB6IAFBwEF6fgAKIhKAAEF6egB6IABBwEF7pgB6IAABwIhKAAEF5TgB6IACBwIhJAAEGK4AHtIgeAtEGJZAHtIAnA5EElPgcUIgiAAIAAg0IBWAAID+mfIK1AAED/BgcpIA/AAIAABLED/BgcpIlUAAIl9mOIIYAAgED6PgbeIE9AAEEg9gHLIAAEmIi7AAIAAksIBCAAEEcwAArIhuAAIhtAAEEbCgBFIAABwEEcwgBFIAABwEElSgBFIAABwIhtAAIhtAAEEm/gBFIAABwEEoggBFIACBwIhjAAIhtAAEEoVgHGIAAEhIi8AAIAAkfEEgKAArIhtAAIhtAAEEedgBFIAABwEEgKgBFIAABwEEjlgBFIAABwEEh4gBFIAABwIhuAAEEZAgGWIAAhfEFL9gdfIBAAAIAABLEFHMgcUIE9AAEFL9gdfIlUAAIl8mOIIYAAgEE1CgjzIgMAMIAAAAgEEuPgcUIA0AAILtsEILiMEEEmDgdIIIsAAIGHmfEFAtgjtIl9mNIluGHEEtGgHRIC8AAIAAEsIi8AAgEE0pgGWIAAhIIAAgUIAAgWEEzKAArIhfAAIhgAAIhfAAIhJAAEExrgBFIAABwEEzKgBFIAABwEE0pAArIhfAAEErPAArIhKAAIhjAAEEsZAArIhKAAEEsWgBFIADBwEErLgBFIAEBwEEqAgBFIAFBwEEusgBFIAABwEEwLgBFIAABwEEthgBFIACBwIhKAAEFaJAHtIAnA5EFboAHtIgeAtEEmDgcUIHTAAEFEaAYXIJtAAIAAIpIuxAAEE8cAIjIAkA1IADAEEEtGASGIAADMEExeASGIAADMEE11ASGIAADMEEfmASGIAADMEEWsASGIAADMEEbJASGIAADMEEOsAIjIgYAkIgGAIED3cAZMIJvAAIAAIpIiLAAIjaAAIpMAAEE0uAhAIsCAAEGCxARQIAADMEF6DARQIAADMEF+aARQIAADMEFsiARQIAADMEFjoARQIAADMEFoGARQIAADMEE97AIjIgeAsEENNAIjIAmA5ECaNgV6IA/AAIAABLECaNgV6IlUAAIl8mNIIXAAgECVcgUvIE9AAECbMgBvIAUAAIAUAAIAAAIIAADfIAAAEIgoAAEChPABGIk7AAIAAihIAAg5IE7AAIFHAAIAADagEChPgCUIAADaEC0MAAYIAAheECrdgCUIBTAAECwlgBnIAACtECrdgCUIAADaIlHAAEC5OABGIAAhoIBCAAEDDhgAYIAABeEDAmABGIAAhbEC8JgAcIAABiECmWgCUIFHAAEDzwgi3Il8mNIlrGDIgEAEIgMAMIABAAIALgMEDhTgbeIA0AAILtsFILiMFEDZHgcSIIsAAIGGmfEDYTgbeIgjAAIAAg0IBXAAID9mfIK1AAEDP1AAYIAAhxEDM3AFpIAABxIhfAAIgCAAEDLYAFpIAABxEDOWAFpIAABxEDP1AHaIhfAAIhfAAEDITABGIAAhoIC7AAIAABoEDUVgCTIAAgSID+AAEDYTABGIj+AAIAAjMEDZHgbeIHTAAEAszAE/IDFAAIAVAAIBtAAIAADsIlHAAEAx6AE/IAUAAIANAAICZAAICNAAIAAAxIAAAGIAACyIAAADIlHAAEBUTAB8Ik8AAIAAihIAAg5IE8AAgEBZagBeIAlAAIBHAAIBIAAICTAAIAADaIlHAAIlHAAEBZagBeIAADaEBUTgBeIFHAAEB0TgVjIAwhOIAMgUIDBk9IAyAAIDzAAIAVAAICBAAID7AAECDSgcOIgMAMIAAAAgECO9gcHIl9mOIluGHEBzfgUvIgiAAIAAg0IBWAAIIsAAIGHmfEBehgBeIFHAAIAAC+IAAAWIAAAGIlHAAEB8fgUvIA0AAILtsFILiMFEB0TgUvIHTAAECAuAf7ICKAAECNmAf7ICWAAEBzYAT9IAHAAEBzYAR1IAHAAECC+AokIsCAAEBz0Af6IKNABEDliAZMICKAAEDnyAh1IlVAAEDyaAZMICWAAEDZHAPUIgeAqEDXpAPSIAnA4EDRBAY1IAADMEDMqAY1IAADMEDi1AZMIqdAAIgMgBECp4APSIgeAsECoZAPSIAnA4ECSpAf7IAnAAIDnAAIA+AAIDEAAIBeAAIAACXIAABOIAAFEIuxAAAwgIrIk7AAIAAiiIAAg5IE7AAgArZFQIAADbIlHAAAmSFQIAADbIlHAAArZFQICpAAICeAAIFIAAIAADbIlIAAAwgFQIFHAAAlNgUIAACrAjwgUIAACrAkegUIAACrAhjgUIAABbAiSgUIAABbEAnsAIrIlHAAIAAjsIAqAAIAUAAID/AAIAKAAgEAnsAE/IEaAAIAtAAIAADsIlHAAEhrpAiLIMlAAQAQAAAOABQAiACAcAJQAZAIAUAMQAuAegBAqQgBAngnAbQgDADgEACQgOAJgRAHQgrARg9AAIslAAQhEAAgpghQgIgFgGgHQgCgCgCgCQgVgYgCgeIAAgBQgBgiAYgaQACgCACgCQAEgEAFgEQAoggBKAAgEiRDAiLIMlAAQBXAAAzAgQAtAegBAqIAAABQgBApgtAdQgzAhhVAAIslAAQgHAAgHgBQgwgCgigUQgGgFgHgFQgmgdgCgqQgBgQAFgOQAEgMAJgLQAHgKALgJQAJgGAJgFQASgKAWgFQATgFAXgBQAHAAAHAAgEiSmAXbIAAg/IEXAAEiYHAZpIAAhfIDNAAIAABaEiU6AdYIAADBEiYHAZpIDKAAEiYHAgZIAAmwEiSmAXbIC5AAEiSmAYgIAAhFAHNasIAAiIIU5AAIAACIIAAHoIAAHnIjnAAImlAAImkAAIkJAAIAAnnIAAnoIEJAAIAAHoIkJAAAYfasIDnAAEAYfAiUIDnAAAYfasIAAHoIAAHnAhFbcIAMAAAg5esIgMAAEAQqAiEIAABLEATLAiWIAAA/ALWasIGkAAIAAPPAR6asIGlAAEALWAiUIAAHnEic7AHQIAACrEicMAHQIAACrEidpAHQIAACrEjZGgZXICTAAIAACUIiTAAgEjV8gZXICTAAIAACUIiTAAgEjSkgZXICTAAIAACUIiTAAgEkBEgYhICUAAIAACTIiUAAgEj4WgWOIh1AAIAAiTIB1AAEj9qgYhICUAAIAACTIiUAAgEkElgYhICUAAIAACTIiUAAgEi0IgZXICUAAIAACUIiUAAgEi3ogZXICTAAIAACUIiTAAgEiwugZXICUAAIAACUIiUAAgEiragXDIh1AAIAAiUIB1AAEjOPgXDIg1AAIAAiUICUAAIAAAzEjLqgYuIAAgpICUAAIAAApEjIfgYuIAAgpICTAAIAAApEjFIgYuIAAgpICUAAIAAApEjBngYuIAAgpICUAAIAAApEi+KgYuIAAgpICTAAIAAApEi7AgYuIAAgpICTAAIAABREiqqAHQIAABZIAABSEliegRzICUAAIAACUIiUAAgEldKgPfIh1AAIAAiUIB1AAElpYgRzICTAAIAACUIiTAAgEll4gRzICUAAIAACUIiUAAgEkcAgYhICUAAIAACTIiUAAgEkYmgYhICUAAIAACTIiUAAgEkVcgYhICUAAIAACTIiUAAgEkSEgYhICUAAIAACTIiUAAgEkOjgYhICTAAIAACTIiTAAgEkH9gYhICUAAIAACTIiUAAgEkLHgYhICUAAIAACTIiUAAgEkmDgYhICUAAIAACTIiUAAgEkfhgYhICUAAIAACTIiUAAgEki5gYhICUAAIAACTIiUAAgEkN8AnIQAEhpAChpQADjHgJjKIAAh0ICTAAEisHAHQIAACDIAAAoEj3aAeKIAAg/IEXAAIEXAAIAAA/IAAFbIkXAAIgUAAEkA3AbxIBuAAIAAB0QgMDEAEDNQAAAUABATQACBVAFBWEj86AnIIAAmwIDNAAIAAGwEj3NAjlIgNAAIAAlbIEXAAIEXAAEj86AgYIAAhfIDNAAIAABfEjzDAdLIAAA/IAAFbEinvAHQIAACrEiodAHQIAACrEigkAHQIAACrEirYAHQIAACrEipMAHQIAACrEif2AHQIAACrEifHAHQIAACrEi2OAHQIAACrEi29AHQIAACrEiykAHQIAACrEi1gAHQIAACrEizTAHQIAACrEi0CAHQIAACrEmHsgRzICTAAIAACUIiTAAgEmEUgRzICTAAIAACUIiTAAgEmK3gRzICUAAIAACUIiUAAgElswgRzICTAAIAACUIiTAAgElv7gRzICUAAIAACUIiUAAgEl24gRzICUAAIAACUIiUAAgElzXgRzICUAAIAACUIiUAAgEl6PgRzICTAAIAACUIiTAAgEl9agRzICUAAIAACUIiUAAgEmA0gRzICUAAIAACUIiUAAg");
	this.shape_368.setTransform(-286.825,-55.55);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#999999").ss(2,1,1).p("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");
	this.shape_369.setTransform(-604.525,-13.75);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#999999").ss(3,1,1).p("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");
	this.shape_370.setTransform(-274.275,-17.375);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#999999").s().p("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AgEjumANEgEjumANEgEFF3ANAgElLLAM2gEFDpAMxIAAgjIACgDQAegyAiAAQAiAAApA1IAAAjgECUHAMkgEFDSAMjIAAAAgEBFmAMigEAvjAMigECR5AMUIAAgiIACgEIACgDQASgdATgLQAMgHANAAQAhAAAnAyIADAEIAAAigEFDpAMOIAAAAgEB0PAMNgA/kMKIAAitICSAAIAACtgA/kMKgEgwIAMKgECRiAMHIAAAAgEByCAL9IAAgjQAeg1AjAAQAJABAJADQAbAKAeAnIAAAjgECR5ALyIAAAAgEBxqALwIAAAAgEBXSALigEBVeALigEByCALaIAAAAgEBInAJ2IAAAAgEBJKAI5QBJh4BJhGQBYhUBZgKIATgCIAEFUIl9AHQARgfASgegEBOkAJvgEBOgAEbIAHAAIAAAAIAAAAQCLAACMC4IACACQAdAmAdAvQATAeATAhIl8AGgEBUgAJpIAAAAgEEyaAJogEEv7AJogEEtaAJogEEq7AJogEEobAJogEEl7AJogEEjbAJogEEfsAJogEEeFAJogEEbQAJogEEYZAJogEEVkAJogEETaAJogEERRAJogEEPGAJogA/kJdgEhb7AJLgEFvdAIygEFrCAIygEFoMAIygEFigAIygEFgWAIygEFeNAIygEFcDAIygED2VAIOIAAi2QAAgOACgNQAFgcAOgRQAKgMAPgIQAJgDAKgCIAMgCIADAAIADAAIAAAAIABAAQAYAAAYAHIAQAHQAiAOAAByIAACLgED2jAH+ICYAAIAAiJIiYAAIAACJgED2tAFlICMAAIAAgiQgog2giAAQgNAAgMAHQgUALgSAeIgDAGIAAAigEA0rAINgEh/WAIJQgxAAgmg0IgCgCIgBgCQgthAAAhXIAAgHQADhcAvhQQASgdATgQQAVgRAYAAIAAAAIAAAAQALAAAMAEIABABQAPAEANAIQAmAZAVAyQAbBDAABFQAABFgbBFQgaBEg/AMQgKACgIAAIgBAAIAAAAgECRiAIHIAAi2QAAgUADgQQAGgWALgOQAVgZAjgCIADAAIACAAIAAAAIAAAAQAeAAAdALIAAAAIAEABIABABIACABQAdAMAFBPIABAbIAAAJIAAABIAACLgECRwAH3ICXAAIAAiJIiXAAIAACJgECR5AFeICNAAIAAgjQgpg0gigBQgjA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");
	this.shape_371.setTransform(-253.025,-35.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]}).wait(1));

	// road
	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#DAD7C4").s().p("EnByAIgIAAw/MCq8AAAIAABAMBMgAAAIAAhAMKMJAAAIgBQ/g");
	this.shape_372.setTransform(-0.95,224);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFF33").s().p("EGuyAAyIAAhjISlAAIA3BJIAAAWIg3AEgEF1SAAyIAAhjMAocAAAIAABjgEE3SAAyIAAhjMAocAAAIAABjgED9yAAyIAAhjMAocAAAIAABjgEDGyAAyIAAhjMAocAAAIAABjgECNSAAyIAAhjMAocAAAIAABjgEBPSAAyIAAhjMAocAAAIAABjgAVyAyIAAhjMAocAAAIAABjgEgkNAAyIAAhjMAobAAAIAABjgEhdtAAyIAAhjMAocAAAIAABjgEibtAAyIAAhjMAocAAAIAABjgEjVNAAyIAAhjMAocAAAIAABjgEkRNAAyIAAhjMAocAAAIAABjgElKtAAyIAAhjMAocAAAIAABjgEmItAAyIAAhjMAocAAAIAABjgEnCNAAyIAAhjMAocAAAIAABjg");
	this.shape_373.setTransform(1.775,414.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#736F70").s().p("EnByAUXIAAy4MAodAAAIAAhjMgodAAAIAA0cMODlAAAIAAUcIymAAIAABjISmAAIAATCgEF1tABfMAodAAAIAAhjMgodAAAgEE3tABfMAodAAAIAAhjMgodAAAgED+NABfMAodAAAIAAhjMgodAAAgEDHNABfMAodAAAIAAhjMgodAAAgECNtABfMAodAAAIAAhjMgodAAAgEBPtABfMAodAAAIAAhjMgodAAAgAWNBfMAodAAAIAAhjMgodAAAgEgjyABfMAocAAAIAAhjMgocAAAgEhdSABfMAodAAAIAAhjMgodAAAgEibSABfMAodAAAIAAhjMgodAAAgEjUyABfMAodAAAIAAhjMgodAAAgEkQyABfMAodAAAIAAhjMgodAAAgElKSABfMAodAAAIAAhjMgodAAAgEmISABfMAodAAAIAAhjMgodAAAg");
	this.shape_374.setTransform(-0.975,409.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_374},{t:this.shape_373},{t:this.shape_372}]}).wait(1));

	// background
	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(3,2,0,3).p("EAvhAAAMhfBAAA");
	this.shape_375.setTransform(1492.375,541);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("ECV4hUTIAAgEMkrvAAAIAAADECVxBUYIADAA");
	this.shape_376.setTransform(1.025,0.65);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(1,1,1).p("EAAWBUYIgrAAMAAAiovIAnAA");
	this.shape_377.setTransform(-2877.4125,0);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#FFFF47","#00CCFF","#FFFFFF","#FFFFFF"],[0,1,1,1],0,-959.2,0,959.2).s().p("EiVzBUYIABAAIAAgEIgBgRIgCAAIgCAAMAAAioaIACAAIAHAAMErmAAAMAAACovg");
	this.shape_378.setTransform(1918.525,1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#FFFF47","#00CCFF","#FFFFFF","#FFFFFF"],[0,1,1,1],0,-959.2,0,959.2).s().p("EiVzBUYIABgBIgBgUIgEAAMAAAioaIACAAIAFAAMEroAAAIAAABIgCgBMAAACobIACAAIAAARIAAADg");
	this.shape_379.setTransform(0.275,0.95);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#FFFF47","#00CCFF","#FFFFFF","#FFFFFF"],[0,1,1,1],0.8,-959.2,0.8,959.3).s().p("EiVvBUYIAAgJMAAAiomMErcAAAIAAABIgCAAMAAACoZIAEAAIABAVg");
	this.shape_380.setTransform(-1916.825,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-2889.6,-541,5772.799999999999,1083.5), null);


// stage content:
(lib._final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.Frame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		this.stop(); 
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.PizzaBoy_mc.currentFrame == 9){
				root.PizzaBoy_mc.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -21.25) {
				root.PizzaBoy_mc.scaleX = 0.2399;
				root.background_mc.x = root.background_mc.x - speed;
				
			}
			if (event.keyCode == 37 && root.background_mc.x < 2878.25) {
				root.PizzaBoy_mc.scaleX = -0.2399;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.PizzaBoy_mc.gotoAndPlay("standing");
		}
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.PizzaBoy_mc.currentFrame == 9){
				root.PizzaBoy_mc.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -21.25) {
				root.PizzaBoy_mc.scaleX = 0.2399;
				root.background_mc.x = root.background_mc.x - speed;
				
			}
			if (event.keyCode == 37 && root.background_mc.x < 3078.25) {
				root.PizzaBoy_mc.scaleX = -0.2399;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.PizzaBoy_mc.gotoAndPlay("standing");
		}
		
		
		this.stop(); 
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.PizzaBoy_mc.currentFrame == 9){
				root.PizzaBoy_mc.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -21.25) {
				root.PizzaBoy_mc.scaleX = 0.2399;
				root.background_mc.x = root.background_mc.x - speed;
				
			}
			if (event.keyCode == 37 && root.background_mc.x < 2878.25) {
				root.PizzaBoy_mc.scaleX = -0.2399;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.PizzaBoy_mc.gotoAndPlay("standing");
		}
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.PizzaBoy_mc.currentFrame == 9){
				root.PizzaBoy_mc.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -21.25) {
				root.PizzaBoy_mc.scaleX = 0.2399;
				root.background_mc.x = root.background_mc.x - speed;
				
			}
			if (event.keyCode == 37 && root.background_mc.x < 3078.25) {
				root.PizzaBoy_mc.scaleX = -0.2399;
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event) {
			root.PizzaBoy_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.sun_mc.addEventListener("click",handleClicksun);
		
		function handleClicksun(event){
			var sun_snd = createjs.Sound.play("sun");
			root.background_mc.sun_mc.play();
		}
		
		this.background_mc.smoke_mc.addEventListener("click",handleClicksmoke);
		
		function handleClicksmoke(event){
			var whoosh_snd = createjs.Sound.play("whoosh");
			root.background_mc.smoke_mc.play();
		}
		
		this.background_mc.firehydrant_mc.addEventListener("click",handleClickfirehydrant);
		
		function handleClickfirehydrant(event){
			var water_snd = createjs.Sound.play("water");
			root.background_mc.firehydrant_mc.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape.setTransform(87.4298,243.7011,2.6344,2.6344);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_1.setTransform(87.4298,229.2011,2.6344,2.6344);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(87.4298,214.5511,2.6344,2.6344);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_3.setTransform(87.4298,198.3511,2.6344,2.6344);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_4.setTransform(87.4298,183.8511,2.6344,2.6344);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_5.setTransform(87.4298,169.1011,2.6344,2.6344);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_6.setTransform(87.4298,153.2511,2.6344,2.6344);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_7.setTransform(87.4298,138.8511,2.6344,2.6344);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_8.setTransform(87.4298,124.1011,2.6344,2.6344);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_9.setTransform(232.9298,106.5511,2.6344,2.6344);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_10.setTransform(215.1478,106.5511,2.6344,2.6344);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_11.setTransform(197.3798,106.5511,2.6344,2.6344);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_12.setTransform(179.5978,106.5511,2.6344,2.6344);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_13.setTransform(162.5298,106.5511,2.6344,2.6344);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_14.setTransform(144.7478,106.5511,2.6344,2.6344);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_15.setTransform(126.9798,106.5511,2.6344,2.6344);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_16.setTransform(108.7478,106.5511,2.6344,2.6344);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_17.setTransform(88.4298,106.5511,2.6344,2.6344);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_18.setTransform(558.9798,255.5511,2.6344,2.6344);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_19.setTransform(569.6298,244.1011,2.6344,2.6344);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_20.setTransform(580.5798,232.2511,2.6344,2.6344);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_21.setTransform(591.1298,218.8011,2.6344,2.6344);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_22.setTransform(601.6798,207.9511,2.6344,2.6344);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_23.setTransform(611.1298,195.1511,2.6344,2.6344);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_24.setTransform(615.7298,180.0511,2.6344,2.6344);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_25.setTransform(605.9298,167.4511,2.6344,2.6344);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_26.setTransform(594.0298,153.9511,2.6344,2.6344);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_27.setTransform(585.4798,141.6511,2.6344,2.6344);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_28.setTransform(573.8798,129.2511,2.6344,2.6344);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_29.setTransform(563.2798,116.1011,2.6344,2.6344);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_30.setTransform(545.4978,106.5511,2.6344,2.6344);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_31.setTransform(527.7298,106.5511,2.6344,2.6344);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_32.setTransform(542.9298,260.8511,2.6344,2.6344);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_33.setTransform(525.1478,260.8511,2.6344,2.6344);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_34.setTransform(509.9798,260.8511,2.6344,2.6344);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_35.setTransform(493.3798,260.8511,2.6344,2.6344);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_36.setTransform(475.5978,260.8511,2.6344,2.6344);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_37.setTransform(457.8298,260.8511,2.6344,2.6344);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_38.setTransform(440.0478,260.8511,2.6344,2.6344);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_39.setTransform(424.8798,260.8511,2.6344,2.6344);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_40.setTransform(407.0978,260.8511,2.6344,2.6344);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_41.setTransform(389.3298,260.8511,2.6344,2.6344);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_42.setTransform(371.5478,260.8511,2.6344,2.6344);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_43.setTransform(353.6298,260.8511,2.6344,2.6344);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_44.setTransform(335.8478,260.8511,2.6344,2.6344);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_45.setTransform(318.0798,260.8511,2.6344,2.6344);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_46.setTransform(300.2978,260.8511,2.6344,2.6344);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_47.setTransform(285.1798,260.8511,2.6344,2.6344);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_48.setTransform(267.3978,260.8511,2.6344,2.6344);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_49.setTransform(249.6298,260.8511,2.6344,2.6344);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_50.setTransform(231.8478,260.8511,2.6344,2.6344);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_51.setTransform(213.3298,260.8511,2.6344,2.6344);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_52.setTransform(195.5478,260.8511,2.6344,2.6344);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_53.setTransform(177.7798,260.8511,2.6344,2.6344);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_54.setTransform(159.9978,260.8511,2.6344,2.6344);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_55.setTransform(144.8298,260.8511,2.6344,2.6344);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_56.setTransform(125.9478,260.8511,2.6344,2.6344);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_57.setTransform(107.7298,260.8511,2.6344,2.6344);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_58.setTransform(88.7478,260.8511,2.6344,2.6344);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_59.setTransform(511.5298,106.5511,2.6344,2.6344);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_60.setTransform(493.7478,106.5511,2.6344,2.6344);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_61.setTransform(475.9798,106.5511,2.6344,2.6344);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_62.setTransform(458.1978,106.5511,2.6344,2.6344);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_63.setTransform(443.0298,106.5511,2.6344,2.6344);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_64.setTransform(425.2478,106.5511,2.6344,2.6344);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_65.setTransform(407.4798,106.5511,2.6344,2.6344);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_66.setTransform(389.6978,106.5511,2.6344,2.6344);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_67.setTransform(372.6298,106.5511,2.6344,2.6344);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_68.setTransform(354.8478,106.5511,2.6344,2.6344);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_69.setTransform(337.0798,106.5511,2.6344,2.6344);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_70.setTransform(319.2978,106.5511,2.6344,2.6344);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_71.setTransform(304.1298,106.5511,2.6344,2.6344);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_72.setTransform(286.3478,106.5511,2.6344,2.6344);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_73.setTransform(268.5798,106.5511,2.6344,2.6344);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFDFC").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_74.setTransform(250.7978,106.5511,2.6344,2.6344);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#B4311C").ss(1,2,0,3).p("AtYgEIaxAJ");
	this.shape_75.setTransform(321.5306,251.4414,2.6344,2.6344);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#B4311C").ss(1,2,0,3).p("AB0h7IjnD3");
	this.shape_76.setTransform(577.7888,220.1582,2.6344,2.6344);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#B4311C").ss(1,2,0,3).p("AhyiHIDlEP");
	this.shape_77.setTransform(578.1181,151.6646,2.6344,2.6344);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#B4311C").ss(1,2,0,3).p("AtZAAIazAA");
	this.shape_78.setTransform(321.8599,115.7714,2.6344,2.6344);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#B4311C").ss(1,2,0,3).p("AAAj+IAAH9");
	this.shape_79.setTransform(95.8969,182.9478,2.6344,2.6344);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#F9FA33").ss(1,2,0,3).p("AOTAAI8lAA");
	this.shape_80.setTransform(317.9083,97.4625,2.6344,2.6344);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F9FA33").ss(1,2,0,3).p("ACNCnIkZlN");
	this.shape_81.setTransform(596.2294,141.5223,2.6344,2.6344);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F9FA33").ss(1,2,0,3).p("AiMCeIEZk7");
	this.shape_82.setTransform(596.2294,227.1393,2.6344,2.6344);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F9FA33").ss(1,2,0,3).p("AuSAAIclAA");
	this.shape_83.setTransform(317.9083,268.6965,2.6344,2.6344);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#F9FA33").ss(1,2,0,3).p("AAAlEIAAKJ");
	this.shape_84.setTransform(76.7977,183.0795,2.6344,2.6344);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFF33").s().p("ABQDGIhSkAIhUEAIhPAAIhilWQgCgJgLgGQgLgHgPABIAAggICtAAIAAAgIgmAAQgOAAAAAKIBPEhIBQkMIABgEIAAgFQAAgWgnAAIAAggICkAAIAAAgIgmAAQgIAAgCACIgCAJIADATIBVENIBNkXIABgHQAAgNgVAAIgaAAIAAggICCAAIAAAgQgUAAgKAFQgKAGgDAJIhmFXg");
	this.shape_85.setTransform(535.675,186.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFF33").s().p("AhSDEQgkgKgagXQgbgYgPgmQgPgmAAg3QAAgwAMgoQALgoAZgcQAZgcAngOQAngPA1AAQArAAAkAKQAlALAaAYQAbAZAPAnQAPAnAAA5QAAAvgNAmQgNAmgZAbQgaAbgnAOQgnAPgyAAQgqAAglgKgAgyiYQgYAKgPATQgPATgHAaQgIAcAAAjQAAA0AJAjQAIAiAOAUQAPAUAWAIQAVAHAbABQAiAAAYgLQAYgKAOgVQAOgTAHgeQAGgeAAgmQAAgxgIggQgIgfgPgTQgPgSgVgIQgVgIgaABQggAAgYAJg");
	this.shape_86.setTransform(481.275,186.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF33").s().p("ABJDGIjHk+IAAEHQgBAYAwABIAAAeIiLAAIAAgeQAvgBAAgYIAAkcQAAgYgvAAIAAggICOAAIDMFHIAAkPQAAgYgwAAIAAggICLAAIAAAgQgwAAABAYIAAFTg");
	this.shape_87.setTransform(435.8,186.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF33").s().p("ABQC1QgSgUAAgdIAAgoQAAgsgNgVQgMgUgjAAIhQAAIAACGQABAYA7AAIAAAfIi8AAIAAgfQAvAAAAgYIAAkcQAAgYgvAAIAAggIDiAAQAbAAAZAEQAZAEATAKQAUALALATQAMAUAAAgQAAAUgGAQQgHAQgKALQgKALgOAHQgNAHgPADQAOAFALAHQALAHAIAMQAHANAEAQQAFASAAAXIAAAxQAAAMAEAFQAGAGAHAAQAIAAAFgGQAFgFAAgMIAAgaIAcAAIAAAWQAAAagQASQgPASglAAQgpAAgSgTgAhOgcIBXAAQAgAAARgPQARgOAAgjQAAg+hCAAIhXAAg");
	this.shape_88.setTransform(371.55,186.625);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFF33").s().p("Ai2DGIAAgeQAvgBAAgYIAAkcQAAgYgvAAIAAggIFgAAIAAB4IglACQgHhQg9AAIh3AAIAACBIA9AAQAfAAAFhAIAiAAIgICkIghAAQgFhBgdgBIg4AAIAACVIBjAAQBagBAJhxIAnADIgNCYg");
	this.shape_89.setTransform(328.1,186.45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFF33").s().p("AgqDGIiAlbQgDgIgMgEQgMgFgQABIAAggIDCAAIAAAgIgvAAQgPAAAAAJIABAHIBlEbIBnkXIABgIQAAgMgYAAIghAAIAAggICSAAIAAAgQgYgBgKAFQgKAEgDAHIiFFcg");
	this.shape_90.setTransform(284.475,186.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF33").s().p("AhYDGIAAgeQAxgBgBgYIAAkcQABgYgxAAIAAggICxAAIAAAgQgwAAAAAYIAAEcQAAAYAwABIAAAeg");
	this.shape_91.setTransform(249.7,186.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFF33").s().p("AizDGIAAgeQAvgBAAgYIAAkcQAAgYgvAAIAAggIC7AAIAAAgQg7AAAAAYIAAEqIBoAAQAUAAAQgGQAQgGAMgNQALgNAHgWQAIgWACggIAjADIgMCYg");
	this.shape_92.setTransform(218.375,186.45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFF33").s().p("Ai2DGIAAgeQAvgBAAgYIAAkcQAAgYgvAAIAAggIFhAAIAAB4IgmACQgGhQg+AAIh2AAIAACBIA8AAQAgAAAEhAIAhAAIgICkIggAAQgFhBgdgBIg3AAIAACVIBjAAQBZgBAKhxIAmADIgMCYg");
	this.shape_93.setTransform(177.6,186.45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF33").s().p("AjJDGIAAgeQAvgBAAgYIAAkcQAAgYgvAAIAAggIDPABQAwAAAlAHQAkAIAZATQAZAVAMAkQANAlAAA7QAAA7gNAoQgMAogZAYQgYAYglAKQglAKgwAAgAhICdIBWAAQAeAAAUgMQAUgKAMgVQAMgWAFgfQAFgeAAgnQAAgngFgcQgFgcgMgRQgMgSgUgIQgUgJgeABIhWAAg");
	this.shape_94.setTransform(134.925,186.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,51,255,0)").s().p("AiPlbYAKAQAKAQALAPYAKAQALAPALAPYALAPALAPAMAPYALAPALAOAMAPYAWAdAYAdAYAcYAZAcAaAbAaAZIABgVYgWAbgWAcgXAbYgXAbgYAagYAZYgyAyg2AvgzAxIAlAPYABgcABgbAAgbIADhRYABg2AAg2gCg1YAAgcgBgbgCgbIgCgoYgBgOAAgNgBgOYgCgbgCgbgDgbIgEgpYgBgNgCgOgCgNIgEABAiQlcYgCANgBAOgCANIgEApYgCAbgCAbgCAbYgBAOgBANgBAOIgCAoYgBAbgBAbgBAcYgBA1gBA2ACA2IACBRYABAbABAbABAcIACA1IAignYAug2Arg5Aug1YAXgaAYgaAagZYAZgZAagYAbgXIAJgIIgJgNYgWgegWgegYgdYgYgdgYgbgZgcYgNgOgMgNgNgOYgMgNgNgOgOgNYgNgNgNgNgOgNYgNgNgOgNgOgMIgEgDIgBAF");
	this.shape_95.setTransform(596.4981,189.5225,2.6343,2.6343);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FB311C").s().p("AiQlEIEhFTIkhE2g");
	this.shape_96.setTransform(597.2187,183.0694,2.6343,2.6343);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,51,255,0)").s().p("AuMlEYAlACAlACAlABIBzAEIByADIBzADYCYADCZABCXABYBNAABMABBMgBIBzgCIBygCIDlgGYBMgBBMgCBNgBIgJgIYABBsAABsgBBtYAAA1gBA2gBA2IgDCjIAOgOIjlgFYhNgBhMgChMAAInKgEYiXgBiZAAiYABYiZABiYACiZADIAUAUIgDijIgEihYgBg2gCg3gCg2IgChRIgDhPAuRlJIgEBUIgCBRYgCA2gCA3gBA2IgEChIgDCjIgBAUIAVAAYCZADCYACCZABYCYABCZAACXgBIHKgEYBMgBBMgBBNgCIDlgEIAOgBIgBgNIgDijYgBg2gBg2AAg1YgBhtAAhsABhsIAAgIIgIgBYhNAAhMgChMgCIjlgFIhygDIhzgBYhMgBhMAAhNABYiXAAiZACiYADIhzADIhyADIhzAEYgmABgmACgmABIgCAA");
	this.shape_97.setTransform(317.0345,183.6537,2.6344,2.6344);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FB311C").s().p("AuSFFIAAqJIclAAIAAKJg");
	this.shape_98.setTransform(317.9083,183.0795,2.6344,2.6344);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AA/BwIgVg+IhVAAIgUA+IgbAAIBLjgIAeAAIBMDggAAjAbIghhoIgDAAIgiBoIBGAAg");
	this.shape_99.setTransform(1337.325,369.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AhMBwIAAgXIBAAAIAAiwIhAAAIAAgZICZAAIAAAZIhAAAIAACwIBAAAIAAAXg");
	this.shape_100.setTransform(1318.1,369.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAsByIg0hjIgnAAIAABjIgbAAIAAjeIAcgDIAdgCQAPAAAMAEQANADAKAHQAKAIAGAMQAGALAAARQAAAOgEAKQgEAKgGAHQgHAHgGAEIgMAGIA7BrgAgihZIgIABIgFABIAABSIAZAAQAWAAANgKQAPgLAAgYQAAgRgMgLQgMgLgUAAIgJAAg");
	this.shape_101.setTransform(1299.925,369.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AhCBwIAAjgICDAAIAAAZIhoAAIAABJIBgAAIAAAXIhgAAIAABQIBqAAIAAAXg");
	this.shape_102.setTransform(1280.075,369.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AhOBwIAAgXIB+iwIh+AAIAAgZICdAAIAAAZIh/CwIB/AAIAAAXg");
	this.shape_103.setTransform(1260.275,369.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhOBwIAAgXIB+iwIh+AAIAAgZICdAAIAAAZIh/CwIB/AAIAAAXg");
	this.shape_104.setTransform(1241.025,369.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AhMBwIAAgXIA/AAIAAiwIg/AAIAAgZICZAAIAAAZIhAAAIAACwIBAAAIAAAXg");
	this.shape_105.setTransform(1221.8,369.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhFByIAAjeQAMgDAOgBIAcgBQAPAAAOADQAPADANAIQAMAIAIANQAIAOAAAUQAAAVgHAOQgIANgMAJQgMAJgQAEQgPAEgQAAIgFAAIgIgBIgIAAIgFgBIAABWgAgehZIgMACIAABcIAFAAIAHABIAHAAIAGAAQALAAAJgCQALgCAJgFQAJgFAFgKQAFgKAAgQQAAgNgFgIQgFgJgIgGQgIgFgLgCQgJgCgKAAg");
	this.shape_106.setTransform(1203.125,369.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(0.5,2,0,3).p("Ammg6INVAAQBQA+hQA3ItVAAQhhg2Bhg/g");
	this.shape_107.setTransform(1272.5088,370.3173,2.8016,2.8016);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CB5041").s().p("AmmA7Qhhg2Bhg/INVAAQBQA+hQA3g");
	this.shape_108.setTransform(1272.5088,370.3173,2.8016,2.8016);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(0.5,2,0,3).p("AAAggIAABB");
	this.shape_109.setTransform(1515.9854,297.8429,2.8016,2.8016);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(0.5,2,0,3).p("At+AAIb9AA");
	this.shape_110.setTransform(1265.2418,288.5276,2.8016,2.8016);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(0.5,2,0,3).p("AAAAhIAAhB");
	this.shape_111.setTransform(1014.4981,297.8429,2.8016,2.8016);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(0.5,2,0,3).p("AucAAIc5AA");
	this.shape_112.setTransform(1263.7009,307.1583,2.8016,2.8016);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#243F58").s().p("AgIAXIgPgvIAvAAIgQAvQgEACgEAAQgEAAgEgCg");
	this.shape_113.setTransform(945.0348,518.114,2.8016,2.8016);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D8D9DA").s().p("AgjCdIARk5IA2AkIgwEVg");
	this.shape_114.setTransform(972.3505,466.7797,2.8016,2.8016);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D8D9DA").s().p("AAOCcIg1kYIA4gfIAXE3g");
	this.shape_115.setTransform(921.0111,466.6397,2.8016,2.8016);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D8D9DA").s().p("AgjChIgZlBIB5AAIgTFBg");
	this.shape_116.setTransform(946.1555,465.9393,2.8016,2.8016);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#243F58").s().p("AgKAdQgEgEAAgGQABgGAEgWQAEgXAFAAQAGAAAFAXQADAWAAAGQABAGgFAEQgEAEgGAAQgFAAgFgEg");
	this.shape_117.setTransform(948.0466,405.0043,2.8016,2.8016);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#243F58").s().p("AhJALIAKgVIB6AAIAPAVg");
	this.shape_118.setTransform(946.2956,415.5104,2.8016,2.8016);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#243F58").s().p("AAuCqIAelTIBGAqIg3EpgAhVCqIg8ktIBIgmIAZFTg");
	this.shape_119.setTransform(946.2433,466.1725,2.8016,2.8016);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#243F58").s().p("AgxClIgZlTICVAAIgeFTQgZAKgWAAQgYAAgXgKg");
	this.shape_120.setTransform(946.5235,467.5733,2.8016,2.8016);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#243F58").s().p("AgIAXIgPgvIAvAAIgQAvQgEACgEAAQgEAAgEgCg");
	this.shape_121.setTransform(1566.9848,518.114,2.8016,2.8016);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8D9DA").s().p("AgjCdIARk5IA2AkIgwEVg");
	this.shape_122.setTransform(1594.3005,466.7797,2.8016,2.8016);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D8D9DA").s().p("AAOCcIg1kYIA4gfIAXE3g");
	this.shape_123.setTransform(1542.9611,466.6397,2.8016,2.8016);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D8D9DA").s().p("AgjChIgZlBIB5AAIgTFBg");
	this.shape_124.setTransform(1568.1055,465.9393,2.8016,2.8016);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#243F58").s().p("AgKAdQgEgEAAgGQABgGAEgWQAEgXAFAAQAGAAAFAXQADAWAAAGQABAGgFAEQgEAEgGAAQgFAAgFgEg");
	this.shape_125.setTransform(1569.9966,405.0043,2.8016,2.8016);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#243F58").s().p("AhJALIAKgVIB6AAIAPAVg");
	this.shape_126.setTransform(1568.2456,415.5104,2.8016,2.8016);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#243F58").s().p("AAuCqIAelTIBGAqIg3EpgAhVCqIg8ktIBIgmIAZFTg");
	this.shape_127.setTransform(1568.1433,466.1725,2.8016,2.8016);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#243F58").s().p("AgxClIgZlTICVAAIgeFTQgZAKgWAAQgYAAgXgKg");
	this.shape_128.setTransform(1568.4235,467.5733,2.8016,2.8016);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(0.5,2,0,3).p("A0IhaMAoLAAAIEeC1MgxBAAAg");
	this.shape_129.setTransform(1264.1963,1047.8327,2.8016,2.8016);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#243F58").s().p("A4gBbIEYi1MAoLAAAIEeC1g");
	this.shape_130.setTransform(1264.1912,1047.8327,2.8016,2.8016);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAYBEIgthQIgBAAIABAQIAABAIgZAAIAAiGIAXAAIAuBRIABAAIgCgPIAAhCIAZAAIAACGg");
	this.shape_131.setTransform(1233.25,604.25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgsBEIAAiGIBYAAIAAAXIg9AAIAAAfIA4AAIAAAXIg4AAIAAAhIA+AAIAAAYg");
	this.shape_132.setTransform(1221.725,604.25);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AguBFIAAiFIASgCIATgBQAKAAAJABQAKACAJAFQAIAEAFAJQAFAJAAAPQAAAMgFAIQgEAIgHAGQgHAGgKACQgJADgJAAIgEAAIgEAAIgFAAIgDgBIAAAvgAgUgsIAAAsIADAAIADAAIADAAIADAAIAJAAQAFgBAEgCQAFgDACgFQACgEAAgIQAAgGgCgFQgDgEgDgCQgEgDgEgBIgJgBIgIAAg");
	this.shape_133.setTransform(1210.4,604.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgWBBQgLgFgFgJQgHgKgCgMQgDgNAAgQQAAgPADgNQADgNAHgJQAGgJAKgFQAJgFAMAAQAOAAAKAFQAJAFAGAKQAGAJADANQADANAAAOQAAAhgNATQgNASgZAAQgNAAgJgFgAgSgiQgEAMAAAWIABATQAAAIADAGQADAHAEADQAFAEAGAAQAHAAAEgDQAEgDADgFQADgGABgJIABgVIAAgRIgEgPQgCgGgFgEQgFgDgHAAQgMAAgGALg");
	this.shape_134.setTransform(1198.5,604.225);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFA97B").s().p("ABNAiQgjgBgsAAIhOABQgqAAgBgiQAAgiArABQBJABBUgBQAxgBgCAjQgDAhgoAAIgEAAg");
	this.shape_135.setTransform(1216.4917,603.7922,2.8016,2.8016);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D1D2D4").s().p("AipAFIFTh8IAABLIlTCkg");
	this.shape_136.setTransform(1214.7247,573.4509,2.8016,2.8016);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D1D2D4").s().p("AiugFIFdiEIAABuIldClg");
	this.shape_137.setTransform(1326.7889,553.8748,2.8016,2.8016);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D1D2D4").s().p("AiuhDIFdAAIAAAuIldBZg");
	this.shape_138.setTransform(1326.7889,753.384,2.8016,2.8016);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D1D2D4").s().p("Aipg5IFTAAIlTBzg");
	this.shape_139.setTransform(1214.7247,750.5123,2.8016,2.8016);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(0.5,2,0,3).p("AmygSINrAAIAAAlItwAAg");
	this.shape_140.setTransform(1268.1967,913.4257,2.8016,2.8016);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A72C23").s().p("Am4ATIAGglINrAAIAAAlg");
	this.shape_141.setTransform(1268.3054,913.4257,2.8016,2.8016);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(0.5,2,0,3).p("Ao+AqIR9AAIAACPIx9AAgAnGi4INwAAIAABkItwAAg");
	this.shape_142.setTransform(1272.2977,970.5784,2.8016,2.8016);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A72C23").s().p("Ao+C5IAAiPIR9AAIAACPgAnGhUIAAhkINxAAIAABkg");
	this.shape_143.setTransform(1272.2977,970.5784,2.8016,2.8016);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(0.5,2,0,3).p("AnCg+INqAAICWB9Ix8AAg");
	this.shape_144.setTransform(1272.5509,964.8426,2.8016,2.8016);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#A72C23").s().p("Ao+A/IB8h9INqAAICXB9g");
	this.shape_145.setTransform(1272.2977,964.8426,2.8016,2.8016);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(0.5,2,0,3).p("Algg+ILCAAIBUB9ItrAAg");
	this.shape_146.setTransform(1269.0715,890.5926,2.8016,2.8016);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A72C23").s().p("Am1A/IBUh9ILDAAIBUB9g");
	this.shape_147.setTransform(1269.0758,890.5926,2.8016,2.8016);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B18977").s().p("AkeESIAIojII1AAIhOIjg");
	this.shape_148.setTransform(1565.0836,945.5741,2.8016,2.8016);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B18977").s().p("AjVESIhQojII1AAIAWIjg");
	this.shape_149.setTransform(963.0186,946.9749,2.8016,2.8016);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(0.5,2,0,3).p("AsOAqIYdAAIAACPI4dAAgApPi4ISoAAIAABkIyoAAg");
	this.shape_150.setTransform(1265.0135,970.5784,2.8016,2.8016);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#B18977").s().p("AsOC5IAAiPIYcAAIAACPgApPhUIAAhkISoAAIAABkg");
	this.shape_151.setTransform(1265.0135,970.5784,2.8016,2.8016);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(0.5,2,0,3).p("ApTgSISnAAIAAAlIynAAg");
	this.shape_152.setTransform(1266.2042,913.4257,2.8016,2.8016);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#B18977").s().p("ApTATIAAglISnAAIAAAlg");
	this.shape_153.setTransform(1266.2042,913.4257,2.8016,2.8016);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(0.5,2,0,3).p("AMPDDI4cAAIC+h9ISnAAgAmnjCINqAAICWB9IyoAAg");
	this.shape_154.setTransform(1265.003,927.7138,2.8016,2.8016);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B18977").s().p("AsODDIC+h9ISoAAIC2B9gApPhFICnh9INqAAICXB9g");
	this.shape_155.setTransform(1265.0135,927.7138,2.8016,2.8016);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#B11A21").s().p("Aq7gBIV3gIIAKAOI2LAFg");
	this.shape_156.setTransform(1269.4961,472.1418,2.8016,2.8016);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B11A21").s().p("AqdAEIARgMIUbACIAPAPg");
	this.shape_157.setTransform(1272.3677,459.4416,2.8016,2.8016);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#B11A21").s().p("AqAAMIAZgYITfALIAJANg");
	this.shape_158.setTransform(1271.5973,448.2191,2.8016,2.8016);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B11A21").s().p("ApAgLISGAAIASANIyvAKg");
	this.shape_159.setTransform(1272.1576,436.1022,2.8016,2.8016);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#B11A21").s().p("AotAaQgGgFgDgIQgFgQAYgMQAYgMIQACQIQACAVAHQAUAHgKASQgFAJgKAIg");
	this.shape_160.setTransform(1275.9718,416.1718,2.8016,2.8016);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("rgba(0,0,0,0)").ss(0.5,2,0,3).p("AgvAkIBWhBIAJgG");
	this.shape_161.setTransform(1106.161,501.7152,2.8016,2.8016);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#323232").ss(0.5,2,0,3).p("AOF0AIAZAAIgcBLIg6AAIgQIBQAIAjgJAAACrqUQgKAAgJAAIgmAAQgJAAgHAAQgXABgBAEQgCAvAeAdQACADADACQAAABABAAQAZAVAjACQAoACAbgYQAAgBABAAQAAgBABAAQAbgaAEgtQABAoAbAaQADADADADQABAAAAABQAZAUAjACQABAAACAAQAMAAAKgCQAHgBAGgCQAQgGANgMQABgBAAAAQAUgSAHgcQAFgQAAgTIAAAAQAAgBAAgBIhhgDQgIAAg2AAQgIAAgGAAgAENqPQAAgBAAgBIhigDAENqPQgBAAAAAAQAAAFAAAFAEiqUQgTABgCAEAlAqPQAAgBAAgBIhigCQgEgBgEAAIg5AAQgcABgEAEQAAgBAAgBIhhgCQgGgBgFAAIgzAAIgmAAIDIjNIRSAAICkDNQgIAAg2AAQgIAAgGAAQgTABgCAEQgBAAAAAAQAAAFAAAFQABAoAbAaQADADADADQABAAAAABQAZAUAjACQABAAACAAQADAAAEAAQgLgRAEhdAjcqUQgKAAgJAAIgmAAQgJAAgHAAQgXABgBAEQgCAvAeAdQACADADACQAAABABAAQAZAVAjACQAoACAcgZIBCAAQAZAVAkACQABAAACAAQAMAAAKgCQAWgFATgQQABgBAAAAQAfgdABg0IAAAAQAAgBAAgBIhggDQgIAAg2AAQgIAAgGAAQgTABgCAEQAAgBAAgBgAlAqPIADAAAh6qPQgBAAAAAAQAAAFAAAFQABAoAbAaQADADADADAhlqUIh3AAAAmo9IANAAIA5AAAibo9QAAgBABAAQAbgaAEgtADro8IBEAAABHqPIADAAABiqUIh7AAAIzqUQgKAAgJAAIgmAAQgJAAgHAAQgXABgBAEQgCAvAeAdQACADADACQAAABABAAQAZAVAjACQAoACAbgYQAAgBABAAQAAgBABAAQAbgaAEgtAKVqPQAAgBAAgBIhigDAM4q0IgBAiIAAABIAAAAIgBAyQgBAdgBARIAAgNAKqqUIh3AAAMwo+QABgIABgQIABAYIABANIggcpIlKjLIAAlKItsAAIAABLIlmHKMgBrgmtIgohLIAjAAAM2pfIgEAJQACgWADglAHqqUIh8AAAqiqUQgjABgBAFQgCAuAeAeQAbAbAoABQADAAADABQAkgBAagYQASgQAIgZQAEgOACgQQAAAMADAMQAGAYATATQAbAbAnABQACAAABAAQAnABAbgZQAegcACg1AoDqPQAAAAAAABQAAAFAAAEAnjqUIiMAAAlXCzIAAhGAgDKcIjSAAIiCgBIAAmnAGRBtIAABGAGRD0IAAGnIleABAklqUIiFAAAlXBFIAAqBIA8gBAmiLjIAA0JANIy1I67AAAGRorIAAJwAHKpsIAAVP");
	this.shape_162.setTransform(1263.5192,665.9929,2.8016,2.8016);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E6E6E8").s().p("AlzJsIAAmnIFUAAIAAGoIjTAAgAAXDFIFeAAIAAGnIleABgAAXCEIAAhGIFeAAIAABGgAlzCEIAAhGIFUAAIAABGgAAXAWIAAqCIA4AAQAZAVAkACQAnACAbgYIBFAAQAYAUAjACIADAAQAMAAAKgCIAOgDIAAJwgAlzAWIAAqBIA7gBQAZAVAjACQAoACAcgZIBCAAQAaAVAjACIADAAQAMAAALgCIAAJtg");
	this.shape_163.setTransform(1271.5283,679.1243,2.8016,2.8016);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#133652").s().p("Am2K5IAA0IQAnAAAbgZQAegcACg1IADAAQgCAvAeAeIAFAEIg6gBIAAADIAAKCIFUAAIAAptQAWgFASgRIAOAAIAAKDIFeAAIAApxQAPgGANgMIACgBQATgSAIgcIAAVPgAlqJxIAAACICBgBIDTAAIAAmoIlUAAgAAgJyIFegBIAAmnIleAAgAAgCJIFeAAIAAhGIleAAgAlqCJIFUAAIAAhGIlUAAgADXpmIABgBIABgBQAbgaAFgtQABAoAbAbIAGAFIABABgAAgpnIgOAAIABgBQAfgcACg1IACAAQgCAvAeAeIAFAEIABABgAAgpngAivpnIABgBQAbgaAEgtQABAoAbAbIAGAFg");
	this.shape_164.setTransform(1269.0068,677.6534,2.8016,2.8016);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C3423A").s().p("AKiBmIgOABIh3AAIgTgBIgmAAIgQABIh9AAIg9gBIgOABIh3AAIgTgBIgmAAIgRABIh6AAIg+gBIgOABIh3AAIgTgBIgmAAIgQABIiFAAIg5AAIiNAAIgzAAIgmAAIDIjMIRSAAIClDMIg+gBg");
	this.shape_165.setTransform(1269.7072,452.1242,2.8016,2.8016);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C1433A").s().p("AqfA3QgogCgbgbQgegcACguQABgFAjgBIAzAAIALAAIBhADIAAACQAEgEAcgBIA5AAIAIAAIBiADIAAACQgCAzgeAdQgbAZgngBIgDAAQgngCgbgbQgTgSgGgYQgDgLAAgMIAAgJIAAgBIAAABIAAAJQgCAQgEAOIhYBAIgGAAgApBgJQgIAXgSARQgaAYgkAAgAH4A2QgjgBgZgVIgBgBIgFgFQgegdACguQABgEAXgBIAQgBIAmAAIATABIBiACIAAADIgBAAIAAAKIAAgKIABAAQACgEATgBIAOgBIA+ABQgEBbALARIgHAAIgDAAQgjgBgZgUIgBgBIgGgGQgbgagBgnQgEArgbAbIgBABIgBABQgZAWgkAAIgGgBgABwA2QgjgBgZgVIgBgBIgFgFQgegdACguQABgEAXgBIAQgBIAmAAIATABIBiACIAAADIgBAAIAAAKQgEArgbAbIgBABIgBABQgZAWgkAAIgGgBgAkXA2QgjgBgZgVIgBgBIgFgFQgegdACguQABgEAXgBIAQgBIAmAAIATABIBiACIAAADQACgEATgBIAOgBIA+ABIBgACIAAADIAAAAQgBAzgeAdIgBABQgTAQgXAFQgKACgMgBIgDAAQgkgBgZgVIgGgGQgbgagBgnIAAgKIABAAIgBAAIAAAKQgEArgbAbIgBABQgaAXgkAAIgGgBgAE2A2IgDAAQgjgBgZgUIgBgBIgGgGQgbgagBgnIAAgKIABAAQACgEATgBIAOgBIA+ABIBhACIAAADIAAAAQAAATgFAQQgHAagUATIgBABQgNALgQAHIgNADQgIACgJAAIgFgBgApBgJIAAAAgADUgnIAAAAgALVg1IAJAAIAhABIAAABg");
	this.shape_166.setTransform(1279.1451,496.2495,2.8016,2.8016);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B16E59").s().p("AHERTIAAlKIAA1PQAEgQABgTIAAgBIAAgCIhigCIB9AAQgYABgBAEQgBAuAdAeIAGAEIABACQAZAVAjABQAoACAbgYIAAgBIABgBQAcgaAEgtQABAoAbAbIAGAFIABABQAZAVAiABIAEAAIAGAAQgKgRAEhcIiljNIxSAAIjIDNIAmAAQgiABgBAEQgCAvAeAdQAbAbAnACIAHAAQAkAAAagYQARgRAIgYQAFgOABgQQABAMACALQAHAZASASQAbAbAoACIADAAIAAUJIAABLIlmHKMgBsgmtIa8AAIgRIBIAAAiIghgBIgJAAIAqACIgFA6IgDAZIADgZIABAZIABAMIAAgMIgBAAIgBgZIAEgJQgBAdgBARIggcqgAoQpBIAJgHgAMsoxgAMsoxIAAAAgAMxprIgBAxIgEAJIAFg6gABBppIAAgBIAAgCIhggCIB6AAQgWABgBAEgAlGppIAAgCIhigDIgIAAICFAAQgYABgBAEgAoJprIhigDIgLAAICNAAQgcABgEAEIAAgCgAKPpsIhigCIB3AAQgTABgCADIAAgCgAEGpsIhhgCIB3AAQgTABgDADIAAgCgAiApsIhigCIB3AAQgTABgCADIAAgCgAMxprgAt+zaIAAhDIb9AAIAABDg");
	this.shape_167.setTransform(1265.2246,655.4507,2.8016,2.8016);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#B18977").s().p("ANHAlI67AAIgohJIAjAAIb9AAIAZAAIgbBJg");
	this.shape_168.setTransform(1263.6838,317.6472,2.8016,2.8016);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CB5041").s().p("Av5URQm9mmhMruQhMrtGUorQGUorNwAVQNxAVE6HcQE6HbgjMaQgjMbmSGvQmTGwqAAEIgNAAQp3AAm5mig");
	this.shape_169.setTransform(1265.082,583.9778,2.8016,2.8016);

	this.PizzaBoy_mc = new lib.walking();
	this.PizzaBoy_mc.name = "PizzaBoy_mc";
	this.PizzaBoy_mc.setTransform(461.3,682.35,0.5792,0.5792,0,0,0,-39.8,-345.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PizzaBoy_mc},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// buttons
	this.Frame02_btn = new lib.button();
	this.Frame02_btn.name = "Frame02_btn";
	this.Frame02_btn.setTransform(594,124.1,1,1,0,0,0,-148.1,-69);
	new cjs.ButtonHelper(this.Frame02_btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Frame02_btn).to({_off:true},1).wait(1));

	// walking
	this.PizzaBoy_mc_1 = new lib.walking();
	this.PizzaBoy_mc_1.name = "PizzaBoy_mc_1";
	this.PizzaBoy_mc_1.setTransform(704.15,708.2,0.2399,0.2399,0,0,0,-40,-345.7);
	this.PizzaBoy_mc_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.PizzaBoy_mc_1).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(2878.75,539.1);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(949.2,538.6,4812.8,543.4999999999999);
// library properties:
lib.properties = {
	id: '9575F8FBD9FD41BEA9196414CF72472A',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/sun.mp3", id:"sun"},
		{src:"sounds/water.mp3", id:"water"},
		{src:"sounds/whoosh.mp3", id:"whoosh"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9575F8FBD9FD41BEA9196414CF72472A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;