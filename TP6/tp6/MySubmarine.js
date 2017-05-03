/**
 * MySubmarine
 * @constructor
 */

function MySubmarine(scene) {
	CGFobject.call(this,scene);

	this.triangle = new MyTriangle(scene);
	this.cylinder = new MyCylinder(scene,12,1);
	this.semiEsfera1 = new MyLamp(scene,12,3);
	this.semiEsfera2 = new MyLamp(scene,12,3);

	this.initBuffers();
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

MySubmarine.prototype.display = function(){

	//corpo
	this.scene.pushMatrix();
		this.scene.scale(0.73, 1, 4.08);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.scale(0.73, 1, 4.08);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-(Math.PI), 1, 0, 0);
		this.scene.scale(0.73, 1, 1);
		this.semiEsfera1.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0, 4.08);
		this.scene.scale(0.73, 1, 1);
		this.semiEsfera1.display();
	this.scene.popMatrix();

	//this.triangle.display();
}