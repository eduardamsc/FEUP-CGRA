/**
 * MyTorpedo
 * @constructor
 */

var degToRad = Math.PI/180.0;

function MyTorpedo(scene) {
	CGFobject.call(this,scene);

	this.cylinder = new MyCylinder(this.scene, 24, 1);
	this.semiEsfera1 = new MyLamp(this.scene, 24, 3);
	this.semiEsfera2 = new MyLamp(this.scene, 24, 3);
	this.finVertical = new Fin(this.scene);
	this.finHorizontal = new Fin(this.scene);
};

MyTorpedo.prototype = Object.create(CGFobject.prototype);
MyTorpedo.prototype.constructor=MyTorpedo;

MyTorpedo.prototype.display = function(){

	this.scene.pushMatrix();

		//corpo
		this.scene.pushMatrix();
		    this.scene.scale(0.3,0.3,2);
			this.cylinder.display();
		this.scene.popMatrix();

		//semiEsfera1 =  frente
		this.scene.pushMatrix();
			this.scene.translate(0, 0, 2);
			this.scene.scale(0.3, 0.3, 0.3);
			this.semiEsfera1.display();
		this.scene.popMatrix();

		//semiEsfera2 =  trás
		this.scene.pushMatrix();
			this.scene.rotate(-(Math.PI), 0, 1, 0);
			this.scene.scale(0.3, 0.3, 0.3);
			this.semiEsfera1.display();
		this.scene.popMatrix();

		//Fin Vertical
		this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2, 1, 0, 0);
			this.scene.rotate(Math.PI/2, 0, 0, 1);
			this.scene.scale(0.5, 0.1, 0.4);
			this.finVertical.display();
		this.scene.popMatrix();

		//Fin Horizontal
		this.scene.pushMatrix();
			this.scene.rotate(-Math.PI/2, 0, 1, 0);
			this.scene.scale(0.5, 0.1, 0.4);
			this.finHorizontal.display();
		this.scene.popMatrix();

	this.scene.popMatrix();
}
