/**
 * MyInterface
 * @constructor
 */


function MyInterface() {
	//call CGFinterface constructor
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);

	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui

	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); };

	this.gui.add(this.scene, 'Pause_NotPause');

	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters

	this.gui.add(this.scene, 'speed', -5, 5);

	// add a group of controls (and open/expand by defult)
	//group 1 - Ligths

	var group=this.gui.addFolder("Ligths");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;

	group.add(this.scene, 'BackLeft');
	group.add(this.scene, 'BackRight');
	group.add(this.scene, 'FrontLeft');
	group.add(this.scene, 'FrontRight');
	group.add(this.scene, 'Center');

	//drop down menu to select the submarine texture
	/*
	var materials = this.gui.addFolder("Textures");
	materials.open();

    materials.add(this.scene, 'currSubmarineAppearance', Object.keys(this.scene.submarineAppearanceList));
    */

    this.gui.add(this.scene, 'subTexture', {Rusty: 0, SilverMetal: 1, ClassFEUP: 2});

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyDown = function(event) {

	CGFinterface.prototype.processKeyDown.call(this,event);

	switch (event.keyCode)
	{
	/////////////////////Moving submarine/////////////////////
		case (65):	//'A'
		case (97):	//'a'
			this.scene.submarine.turn("left");
			this.scene.submarine.moveVerticalFin("left");
			break;
		case (68):	//'D'
		case (100):	//'d'
			this.scene.submarine.turn("right");
			this.scene.submarine.moveVerticalFin("right");
			break;
		case (83):	//'S'
		case (115):	//'s'
			this.scene.submarine.movingInXandZ("back", true);
			break;
		case (87):	//'W'
		case (119):	//'w'
			this.scene.submarine.movingInXandZ("front", true);
			break;
		case (81):  //'Q'
		case (113): //'q'
			this.scene.submarine.moveInY("up");
			this.scene.submarine.moveHorizontalFins("up");
			break;
		case (69):  //'E'
		case (101): //'e'
			this.scene.submarine.moveInY("down");
			this.scene.submarine.moveHorizontalFins("down");
			break;
	/////////////////////Moving periscope/////////////////////
		case (80):  //'P'
		case (112): //'p'
			this.scene.submarine.movePeriscope("up");
			break;
		case (76):  //'L'
		case (108): //'l'
			this.scene.submarine.movePeriscope("down");
			break;
	
	};

};

MyInterface.prototype.processKeyUp = function(event) {

	CGFinterface.prototype.processKeyUp.call(this,event);

	switch (event.keyCode)
	{
		case (65):	//'A'
		case (97):	//'a'
		case (68):	//'D'
		case (100):	//'d'
			this.scene.submarine.moveVerticalFin("none");
			break;
		case (81):  //'Q'
		case (113): //'q'
		case (69):  //'E'
		case (101): //'e'
			this.scene.submarine.moveHorizontalFins("none");
			break;
	};

};