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
	this.circleTop = new MyCircle(scene,12);
	this.telescopeBoby = new MyCylinder(scene,12,1);
	this.telescopePart1 = new MyCylinder(scene,12,1);
	this.circlefront = new MyCircle(scene,12);
	this.circleBack = new MyCircle(scene,12);
	this.flipper = new MyTriangularPrism(scene);

	this.initBuffers();
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

MySubmarine.prototype.display = function(){

	//corpo
	this.scene.pushMatrix();
		this.scene.scale(4.08, 1, 0.73);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
//		this.cylinder.display();
	this.scene.popMatrix();

	//semiEsfera1 =  frente
	this.scene.pushMatrix();
		this.scene.translate(4.08, 0, 0);
		this.scene.rotate((Math.PI)/2, 0, 1, 0);
		this.scene.scale(0.73, 1, 1);
//		this.semiEsfera1.display();
	this.scene.popMatrix();

	//semiEsfera2 =  trás
	this.scene.pushMatrix();
		this.scene.rotate(-(Math.PI)/2, 0, 1, 0);
		this.scene.scale(0.73, 1, 1);
//		this.semiEsfera1.display();
	this.scene.popMatrix();

	//cylinder on top
	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.07, 0);
		this.scene.scale(1, 1.5, 0.6);
		this.scene.rotate(-(Math.PI)/2, 1, 0, 0);
//		this.cylinderTop.display();
	this.scene.popMatrix();

	//circle on top
	this.scene.pushMatrix();
		this.scene.translate(2.5, 1.57, 0);
		this.scene.scale(1, 1, 0.6);
		this.scene.rotate(-(Math.PI)/2, 1, 0, 0);
//		this.circleTop.display();
	this.scene.popMatrix();

	//telescope body
	this.scene.pushMatrix();
		this.scene.translate(2.9, 3.3, 0);
		this.scene.scale(0.12, 1.75, 0.12);
		this.scene.rotate(Math.PI/2, 1, 0, 0);
//		this.telescopeBoby.display();
	this.scene.popMatrix();

	//telescope part
	this.scene.pushMatrix();
		this.scene.translate(2.74, 3.3, 0);
		this.scene.scale(0.54, 0.12, 0.12);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
//		this.telescopePart1.display();
	this.scene.popMatrix();

	//telescope circle Top
	this.scene.pushMatrix();
		this.scene.translate(3.28, 3.3, 0);
		this.scene.scale(0.6, 0.12, 0.12);
		this.scene.rotate(Math.PI/2, 0, 1, 0);
//		this.circlefront.display();
	this.scene.popMatrix();

	//telescope circle back
	this.scene.pushMatrix();
		this.scene.translate(2.74, 3.3, 0);
		this.scene.scale(0.6, 0.12, 0.12);
		this.scene.rotate(-Math.PI/2, 0, 1, 0);
//		this.circleBack.display();
	this.scene.popMatrix();

	this.flipper.display();

	//this.triangle.display();
}