/**
 * MyCylinder
 * @constructor
 */

 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this, scene);

	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var angulo = (2 * Math.PI) / this.slices;
	var patchLengthX = 1 / this.slices;
 	var patchLengthY = 1 / this.stacks;
	var xCoord = 0;
 	var yCoord = 0;

	for (j = 0 ; j < this.stacks ; j++) {
		for (i = 0 ; i < this.slices ; i++) {

			this.vertices.push(Math.cos(angulo * i), Math.sin(angulo * i), j);
			this.vertices.push(Math.cos(angulo * (i + 1)), Math.sin(angulo * (i + 1)), j);
			this.vertices.push(Math.cos(angulo * (i + 1)), Math.sin(angulo * (i + 1)), j + 1);
			this.vertices.push(Math.cos(angulo * i), Math.sin(angulo * i), j + 1);
			
			//pintar por fora
			this.indices.push(i * 4 + this.slices * j * 4, i * 4 + this.slices * j * 4 + 1, i * 4 + this.slices * j * 4 + 3);
			this.indices.push(i * 4 + this.slices * j * 4 + 1, i * 4 + this.slices * j * 4 + 2, i * 4 + this.slices * j * 4 + 3);

			//pintar por dentro
			this.indices.push(i * 4 + this.slices * j * 4, i * 4 + this.slices * j * 4 + 3,i * 4 + this.slices * j * 4 + 1);
			//this.indices.push(i * 4 + this.slices * j * 4 + 1, i * 4 + this.slices * j * 4 + 2, i * 4 + this.slices * j * 4 + 3);
			this.indices.push(i * 4 + this.slices * j * 4 + 1,i * 4 + this.slices * j * 4 + 3,i * 4 + this.slices * j * 4 + 2);

			
			this.texCoords.push(xCoord + patchLengthX, yCoord);
			this.texCoords.push(xCoord, yCoord);
			this.texCoords.push(xCoord, yCoord + patchLengthY);
			this.texCoords.push(xCoord + patchLengthX, yCoord+patchLengthY);

			xCoord += patchLengthX;

		}
		
		xCoord = 0;

		yCoord += patchLengthY; 
 	}

 	for (j = 0; j < this.stacks; j++) {
		for (i = 0; i < this.slices; i++) {

			this.normals.push(Math.cos((angulo*i)),Math.sin((angulo*i)),0);
			this.normals.push(Math.cos((angulo*(i+1))),Math.sin((angulo*(i+1))),0);
			this.normals.push(Math.cos((angulo*(i+1))),Math.sin((angulo*(i+1))),0);
			this.normals.push(Math.cos((angulo*i)),Math.sin((angulo*i)),0);

		}
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };