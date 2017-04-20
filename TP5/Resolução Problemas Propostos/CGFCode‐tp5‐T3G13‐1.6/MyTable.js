/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 
function MyTable(scene) {
	CGFobject.call(this,scene);
	
	//1.3
	//Texturas para mesas
	this.materialWood = new CGFappearance(this.scene);
	//this.materialWood.loadTexture("../resources/images/table.png");
	this.materialWood.loadTexture("../resources/images/table1.png");
	this.materialWood.setAmbient(0.3,0.3,0.3,1);
	this.materialWood.setDiffuse(0.49,0.305,0.161,1);
	this.materialWood.setSpecular(0.1,0.1,0.1,1);	
	this.materialWood.setShininess(50);

	this.materialMetal = new CGFappearance(this.scene);
	this.materialMetal.setAmbient(0.3,0.3,0.3,1);
	this.materialMetal.setDiffuse(0.25,0.25,0.25,1);
	this.materialMetal.setSpecular(0.85,0.85,0.85,1);	
	this.materialMetal.setShininess(580);

	this.cube = new MyUnitCubeQuad(this.scene);

	this.cube.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function () {

	/*tampo*/
	this.scene.pushMatrix();
		this.scene.translate(0,3.65,0);
		this.scene.scale(5,0.3,3);
		this.materialWood.apply();
		this.cube.display();
	this.scene.popMatrix();

	/* perna direita frente */
	this.scene.pushMatrix();
		this.scene.translate(2.35,1.75,1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();

	/* perna esquerda frente */
	this.scene.pushMatrix();
		this.scene.translate(-2.35,1.75,1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();

	/* perna esquerda traseira */
	this.scene.pushMatrix();
		this.scene.translate(-2.35,1.75,-1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();
	
	/* perna direita traseira */
	this.scene.pushMatrix();
		this.scene.translate(2.35,1.75,-1.35);
		this.scene.scale(0.3,3.5,0.3);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();
};
