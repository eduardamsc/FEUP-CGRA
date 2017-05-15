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
	this.cylinderTop = new MyCylinder(scene,12,1);

	this.initBuffers();
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

MySubmarine.prototype.display = function(){

	//corpo
	this.scene.pushMatrix();
		this.scene.scale(4.08, 1, 0.73);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
		this.cylinder.display();
	this.scene.popMatrix();

	//semiEsfera1 =  frente
	this.scene.pushMatrix();
		this.scene.translate(4.08, 0, 0);
		this.scene.rotate((Math.PI)/2, 0, 1, 0);
		this.scene.scale(0.73, 1, 1);
		this.semiEsfera1.display();
	this.scene.popMatrix();

	//semiEsfera2 =  trás
	this.scene.pushMatrix();
		this.scene.rotate(-(Math.PI)/2, 0, 1, 0);
		this.scene.scale(0.73, 1, 1);
		this.semiEsfera1.display();
	this.scene.popMatrix();

	//this.triangle.display();
}