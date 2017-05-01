/**
 * MySubmarine
 * @constructor
 */

function MySubmarine(scene) {
	CGFobject.call(this,scene);

	this.triangle = new MyTriangle(scene);

	this.initBuffers();
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

MySubmarine.prototype.display = function(){
	
	this.triangle.display();
	
}