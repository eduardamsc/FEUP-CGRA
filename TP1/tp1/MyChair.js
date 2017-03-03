function MyChair(scene) {
	CGFobject.call(this,scene);

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
		this.cube.display();
	this.scene.popMatrix();

	/*tampo*/
	this.scene.pushMatrix();
		this.scene.translate(0,2.5,0);
		this.scene.scale(1.8,0.15,1.5);
		this.cube.display();
	this.scene.popMatrix();

	/* perna direita frente */
	this.scene.pushMatrix();
		this.scene.translate(0.825,1.2,0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.cube.display();
	this.scene.popMatrix();
	

	/* perna esquerda frente */
	this.scene.pushMatrix();
		this.scene.translate(-0.825,1.2,0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.cube.display();
	this.scene.popMatrix();

	/* perna esquerda traseira */
	this.scene.pushMatrix();
		this.scene.translate(-0.825,1.2,-0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.cube.display();
	this.scene.popMatrix();
	
	/* perna direita traseira */
	this.scene.pushMatrix();
		this.scene.translate(0.825,1.2,-0.675);
		this.scene.scale(0.15,2.45,0.15);
		this.cube.display();
	this.scene.popMatrix();
};