var degToRad = Math.PI / 180.0;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);
	
	this.initCameras();

	this.initLights();

	this.enableTextures(true);

	//this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearColor(0.0, 0.584, 0.898,1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.submarine = new MySubmarine(this);
	this.floor = new MyQuad(this, 0, 5, 0, 5);
	this.prism = new MyPrism(this, 6, 20);
	this.clock = new MyClock(this, 12, 1);

	// Materials
	this.materialDefault = new CGFappearance(this);

	this.materialOcean = new CGFappearance(this);
	this.materialOcean.loadTexture("../resources/images/water.png");
	this.materialOcean.setTextureWrap("REPEAT", "REPEAT");
	this.materialOcean.setAmbient(0.3, 0.3, 0.3, 1);
	this.materialOcean.setDiffuse(0.917, 0.859, 0.745, 1);
	this.materialOcean.setSpecular(0.8, 0.8, 0.8, 0);	
	this.materialOcean.setShininess(120);

	//Inox Appearance
	this.inoxAppearance = new CGFappearance(this);
	this.inoxAppearance.loadTexture("../resources/images/inoxClock.png");
	this.inoxAppearance.setSpecular(0.9, 0.9, 0.9, 1);
	this.inoxAppearance.setShininess(120);
	this.inoxAppearance.setDiffuse(0.6, 0.6, 0.6, 1);

	//Coral Appearance
	this.coralAppearance = new CGFappearance(this);
	this.coralAppearance.loadTexture("../resources/images/coral.png");
	this.coralAppearance.setSpecular(0.9, 0.9, 0.9, 1);
	this.coralAppearance.setShininess(120);
	this.coralAppearance.setDiffuse(0.6, 0.6, 0.6, 1);

	//Submarine Appearance
	this.submarineAppearances = [];

		//declaration many appearance of submarine
		this.rusty = "../resources/images/rustyMetal.png";
		this.silverMetal = "../resources/images/silverMetal.png";
		this.blackMetal = "../resources/images/blackMetal.png";

			//rusty
			this.rustyAppearance = new CGFappearance(this);
			this.rustyAppearance.loadTexture(this.rusty);
			this.submarineAppearances.push(this.Rusty);

			//Silver metal
			this.silverMetalAAppearance = new CGFappearance(this);
			this.silverMetalAAppearance.loadTexture(this.silverMetal);
			this.submarineAppearances.push(this.SilverMetal);

			//Black metal
			this.blackMetalAAppearance = new CGFappearance(this);
			this.blackMetalAAppearance.loadTexture(this.silverMetal);
			this.submarineAppearances.push(this.BlackMetal);
	
	//Time
	this.setUpdatePeriod(100);

	//Commands
	this.speed = 3;
	this.BackLeft = true;	//light 0
	this.BackRight = true;	//light 1
	this.FrontLeft = true;	//light 2
	this.FrontRight = true;	//light 3
	this.Center = true;		//light 4
	this.Pause = true;

	this.currSubmarineAppearance = 0;

	this.activeAppearance = this.submarineAppearances[this.currSubmarineAppearance];

};

LightingScene.prototype.Pause_NotPause = function() {
	//console.log("Doing something ... ");
	if(this.Pause){
		this.Pause = false;
	}else{
		this.Pause = true;
	}
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0, 0 ,0, 1);
	
	// Positions for lights
	this.lights[0].setPosition(0, 10, 0, 1);
	this.lights[0].setVisible(true);
	
	this.lights[1].setPosition(25, 10, 0, 1);
	this.lights[1].setVisible(true);

	this.lights[2].setPosition(0, 10, 25, 1);
	this.lights[2].setVisible(true);

	this.lights[3].setPosition(25, 10, 25, 1);
	this.lights[3].setVisible(true);

	this.lights[4].setPosition(12.5, 10, 12.5, 1);
	this.lights[4].setVisible(true);

	this.lights[0].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[0].enable();

	this.lights[1].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();

	this.lights[2].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].enable();

	this.lights[3].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[3].enable();

	this.lights[4].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[4].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[4].enable();
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}

LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup


	// ---- BEGIN Primitive drawing section
	
	//Submarine
	this.pushMatrix();
		this.translate(12.5, 3, 12.5);
		this.rotate(- Math.PI/2, 0, 1, 0);
		this.submarine.display();
	this.popMatrix();
	
	//Floor
	this.pushMatrix();
		this.translate(12.5, 0, 12.5);
		this.rotate(-(Math.PI/2), 1, 0, 0);
		this.scale(25, 25, 0.2);
		this.materialOcean.apply();
		this.floor.display();
	this.popMatrix();
	
	//column
	this.pushMatrix();
		this.translate(8, 9, 0);
		this.rotate((Math.PI/2), 1, 0, 0);
		this.scale(1, 1, 9);
		this.coralAppearance.apply();
		this.prism.display();
	this.popMatrix();
	
	//clcok
	this.pushMatrix();
		this.translate(8, 8.25, 0.85);
		this.scale(0.75, 0.75, 0.25);
		this.inoxAppearance.apply();
		this.clock.display();
	this.popMatrix();

	// ---- END Primitive drawing section
};

LightingScene.prototype.update = function(currTime) {
	
	if(!this.Pause){
		var time = Math.floor(currTime/1000);

		if (this.time == -1) {
			this.time = time;
		} else {
			if (this.time != time) {
				this.time = time;
				this.clock.update();
			}
		}
	}

	//Lights
	if (this.BackLeft){
		this.lights[0].enable();
	}else if (!this.BackLeft){
		this.lights[0].disable();
	}

	if (this.BackRight){
		this.lights[1].enable();
	}else if (!this.BackRight){
		this.lights[1].disable();
	}

	if (this.FrontLeft){
		this.lights[2].enable();
	}else if (!this.FrontLeft){
		this.lights[2].disable();
	}

	if (this.FrontRight){
		this.lights[3].enable();
	}else if (!this.FrontRight){
		this.lights[3].disable();
	}

	if (this.Center){
		this.lights[4].enable();
	}else if (!this.Center){
		this.lights[4].disable();
	}

	this.activeAppearance = this.submarineAppearances[this.currSubmarineAppearance];
}