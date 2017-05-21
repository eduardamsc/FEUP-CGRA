/**
 * MyTarget
 * @constructor
 */

var degToRad = Math.PI/180.0;

function MyTarget(scene) {
	CGFobject.call(this,scene);

	this.semiEsfera1 = new MyLamp(this.scene, 24, 3);
	this.semiEsfera2 = new MyLamp(this.scene, 24, 3);
};

MyTarget.prototype = Object.create(CGFobject.prototype);
MyTarget.prototype.constructor=MyTarget;

MyTarget.prototype.display = function(){

	this.scene.pushMatrix();
	
		//semiEsfera1 =  frente
		this.scene.pushMatrix();
			this.scene.scale(0.4, 0.4, 0.4);
			this.semiEsfera1.display();
		this.scene.popMatrix();

		//semiEsfera2 =  trás
		this.scene.pushMatrix();
			this.scene.rotate(-(Math.PI), 0, 1, 0);
			this.scene.scale(0.4, 0.4, 0.4);
			this.semiEsfera2.display();
		this.scene.popMatrix();

	this.scene.popMatrix();
}
