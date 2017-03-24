var degToRad = Math.PI / 180.0;

//TP2 Var Quadros
var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

//Divisões do Quadro A (Esquerda)
var BOARD_A_DIVISIONS = 30; //2.5
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();

	//1.2
	this.enableTextures(true);

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	//this.prism = new MyPrism(this, 8, 1);
	this.prism = new MyPrism(this, 8, 20); //1.3
	this.cylinder = new MyCylinder(this,8,20);//2.3
	this.lamp = new MyLamp(this,8,20); //extra
	
	//Scene elements TP2
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.leftWall = new MyQuad(this,-1.5,2.5,-0.5,1.5);
	this.floor = new MyQuad(this,0,10,0,12);
	this.chair = new MyChair(this);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS);

	// Materials
	this.materialDefault = new CGFappearance(this);

	//Materiais Quadro A (Esquerda)
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0.8,0.2,0.8,1); //2.9
	this.materialA.setShininess(120); //2.7

	//Materiais Quadro B (Direita)
	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,0);	
	this.materialB.setShininess(120);

	//Materiais Parede
	this.materialParede = new CGFappearance(this);
	this.materialParede.setAmbient(0.3,0.3,0.3,1);
	this.materialParede.setDiffuse(0.917,0.859,0.745,1);
	this.materialParede.setSpecular(0.8,0.8,0.8,0);	
	this.materialParede.setShininess(120);

	//Materiais Parede esquerda
	this.materialParedeEsquerda = new CGFappearance(this);
	this.materialParedeEsquerda.loadTexture("../resources/images/window.png");
	this.materialParedeEsquerda.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.materialParedeEsquerda.setAmbient(0.3,0.3,0.3,1);
	this.materialParedeEsquerda.setDiffuse(0.917,0.859,0.745,1);
	this.materialParedeEsquerda.setSpecular(0.8,0.8,0.8,0);	
	this.materialParedeEsquerda.setShininess(120);

	//Materiais chão
	this.materialChao = new CGFappearance(this);
	this.materialChao.loadTexture("../resources/images/floor.png");
	this.materialChao.setTextureWrap("REPEAT","REPEAT");
	this.materialChao.setAmbient(0.3,0.3,0.3,1);
	this.materialChao.setDiffuse(0.674,0.596,0.521,1);
	this.materialChao.setSpecular(0.85,0.85,0.85,0);	
	this.materialChao.setShininess(300);




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

	this.lights[0].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[0].enable();

	this.lights[1].setAmbient(0.5, 0.5, 0.5, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();

	/**/
	this.lights[2].setPosition(7.5, 7, 7.5, 1);
	//this.lights[2].setVisible(true);

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(0.20, 0.20, 0.20, 0.20);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	//this.lights[2].enable();
	/**/

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

	//elements TP2
	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.materialChao.apply();
		this.floor.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.materialParedeEsquerda.apply();
		this.leftWall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.materialParede.apply();
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// First Chair
	this.pushMatrix();
		this.translate(5, 0, 9.5);
		this.rotate((Math.PI),0,1,0);
		this.chair.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Chair
	this.pushMatrix();
		this.translate(12, 0, 9.5);
		this.rotate((Math.PI),0,1,0);
		this.chair.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.materialA.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.materialB.apply();
		this.boardB.display();
	this.popMatrix(); 

	//TP3
	// Prism
	this.pushMatrix();
		this.translate(1,0,14);
		this.scale(1,8,1);
		this.rotate(-(Math.PI)/2,1,0,0);
		this.prism.display();
	this.popMatrix();

	// Cylinder
	this.pushMatrix();
		this.translate(14,0,14);
		this.scale(1,0.4,1);
		this.rotate(-(Math.PI)/2,1,0,0);
		this.cylinder.display();
	this.popMatrix();

	//Lamp
	this.pushMatrix();
		this.translate(7.5,7,7.5);
		this.rotate(-(Math.PI)/2,1,0,0);
		this.lamp.display();
	this.popMatrix();

	// ---- END Primitive drawing section
};