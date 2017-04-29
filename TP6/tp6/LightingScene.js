var degToRad = Math.PI / 180.0;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);
	
	this.speed = 3;
	this.option1 = true;
	this.option2 = false;

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
	this.floor = new MyQuad(this,0,2,0,2);
	this.prism = new MyPrism(this, 6, 20);
	this.clock = new MyClock(this,12,1);

	// Materials
	this.materialDefault = new CGFappearance(this);

	this.materialOcean = new CGFappearance(this);
	this.materialOcean.loadTexture("../resources/images/water.png");
	this.materialOcean.setTextureWrap("REPEAT","REPEAT");
	this.materialOcean.setAmbient(0.3,0.3,0.3,1);
	this.materialOcean.setDiffuse(0.917,0.859,0.745,1);
	this.materialOcean.setSpecular(0.8,0.8,0.8,0);	
	this.materialOcean.setShininess(120);
	
	//TEMPO
	this.setUpdatePeriod(100);

};

LightingScene.prototype.doSomething = function() {
	console.log("Doing something ... ");
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0, 0 ,0, 1);
	
	// Positions for lights
	this.lights[0].setPosition(5, 5, 5, 1);
	this.lights[0].setVisible(true);
	
	this.lights[1].setPosition(-5, 5, 5, 1);
	this.lights[1].setVisible(true);

	this.lights[2].setPosition(7.5, 7, 7.5, 1);
	this.lights[2].setVisible(true);

	this.lights[0].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[0].enable();

	this.lights[1].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(0.20, 0.20, 0.20, 0.20);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].enable();

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

	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-(Math.PI/2), 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.materialOcean.apply();
		this.floor.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(8, 5, 0);
		this.rotate((Math.PI/2), 1, 0, 0);
		this.scale(1, 1, 5);
		this.prism.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(8, 4.1, 0.85);
		this.scale(0.75, 0.75, 0.25);
		this.clock.display();
	this.popMatrix();

	this.pushMatrix();
		this.translate(7.5, 1, 7.5);
		this.rotate(Math.PI, 1, 0, 0);
		this.submarine.display();
	this.popMatrix();

	// ---- END Primitive drawing section
};

LightingScene.prototype.update = function(currTime) {
	
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