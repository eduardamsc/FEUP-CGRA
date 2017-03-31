function MyChair(scene) {
	CGFobject.call(this,scene);

	this.materialWood = new CGFappearance(this.scene);
	this.materialWood.loadTexture("../resources/images/table.png");
	this.materialWood.setAmbient(0.1,0.1,0.1,1);
	this.materialWood.setDiffuse(0.49,0.305,0.161,1);
	this.materialWood.setSpecular(0.05,0.05,0.05,1);	
	this.materialWood.setShininess(20);

	this.materialMetal = new CGFappearance(this.scene);
	this.materialMetal.setAmbient(0.3,0.3,0.3,1);
	this.materialMetal.setDiffuse(0.25,0.25,0.25,1);
	this.materialMetal.setSpecular(0.85,0.85,0.85,1);	
	this.materialMetal.setShininess(580);

	this.cube = new MyUnitCubeQuad(this.scene);

	this.cube.initBuffers();
};

MyChair.prototype = Object.create(CGFobject.prototype);
MyChair.prototype.constructor=MyChair;

MyChair.prototype.display = function () {

	/* Costas */
	this.scene.pushMatrix();
		this.scene.translate(0,3.7,-0.675);
		this.scene.rotate((Math.PI)/2,0,1,0);
		this.scene.scale(0.15,2.25,1.8);
		this.materialWood.apply();
		this.cube.display();
	this.scene.popMatrix();

	/*tampo*/
	this.scene.pushMatrix();
		this.scene.translate(0,2.5,0);
		this.scene.scale(1.8,0.15,1.5);
		this.materialWood.apply();
		this.cube.display();
	this.scene.popMatrix();

	/* perna direita frente */
	this.scene.pushMatrix();
		this.scene.translate(0.825,1.2,0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();
	

	/* perna esquerda frente */
	this.scene.pushMatrix();
		this.scene.translate(-0.825,1.2,0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();

	/* perna esquerda traseira */
	this.scene.pushMatrix();
		this.scene.translate(-0.825,1.2,-0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();
	
	/* perna direita traseira */
	this.scene.pushMatrix();
		this.scene.translate(0.825,1.2,-0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.materialMetal.apply();
		this.cube.display();
	this.scene.popMatrix();
};