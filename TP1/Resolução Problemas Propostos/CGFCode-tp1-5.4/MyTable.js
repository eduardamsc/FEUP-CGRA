function MyTable(scene) {
	CGFobject.call(this,scene);

	//this.initBuffers();

	this.cube = new MyUnitCubeQuad(this.scene);

	this.cube.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function () {
	
	//this.cube.display();

	/*tampo*/
	this.scene.pushMatrix();
	this.scene.translate(0,3.5,0);
	this.scene.scale(5,0.3,3);
	this.cube.display();
	this.scene.popMatrix();

	/* perna direita frente */
	this.scene.pushMatrix();
	this.scene.translate(2.35,1.6,1.35);
	this.scene.scale(0.3,3.5,0.3);
	this.cube.display();
	this.scene.popMatrix();

	/* perna esquerda frente */
	this.scene.pushMatrix();
	this.scene.translate(-2.35,1.6,1.35);
	this.scene.scale(0.3,3.5,0.3);
	this.cube.display();
	this.scene.popMatrix();

	/* perna esquerda traseira */
	this.scene.pushMatrix();
	this.scene.translate(-2.35,1.6,-1.35);
	this.scene.scale(0.3,3.5,0.3);
	this.cube.display();
	this.scene.popMatrix();
	
	/* perna direita traseira */
	this.scene.pushMatrix();
	this.scene.translate(2.35,1.6,-1.35);
	this.scene.scale(0.3,3.5,0.3);
	this.cube.display();
	this.scene.popMatrix();
};
