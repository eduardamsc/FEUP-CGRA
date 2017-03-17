/**
 * MyCylinder
 * @constructor
 */

 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.display = function() {

     this.primitiveType = this.scene.gl.TRIANGLES;
     this.initGLBuffers();

 };
