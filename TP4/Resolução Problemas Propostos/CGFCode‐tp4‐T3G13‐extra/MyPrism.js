/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var angulo = (2*Math.PI)/this.slices;
	var variacao = 1/this.stacks;
	var beta = angulo/2;
	var patchLengthX = 1 / this.slices;
 	var patchLengthY = 1 / this.stacks;
	var xCoord = 0;
 	var yCoord = 0;

	for (j = 0; j < this.stacks; j++) {
		for (i = 0; i < this.slices; i++) {

			this.vertices.push(Math.cos(angulo*i),Math.sin(angulo*i),(j*variacao));
			this.vertices.push(Math.cos(angulo*(i+1)),Math.sin(angulo*(i+1)),(j*variacao));
			this.vertices.push(Math.cos(angulo*(i+1)),Math.sin(angulo*(i+1)),(j*variacao)+variacao);
			this.vertices.push(Math.cos(angulo*i),Math.sin(angulo*i),(j*variacao)+variacao);

			this.normals.push(Math.cos((angulo*i)+beta),Math.sin((angulo*i)+beta),0);
			this.normals.push(Math.cos((angulo*i)+beta),Math.sin((angulo*i)+beta),0);
			this.normals.push(Math.cos((angulo*i)+beta),Math.sin((angulo*i)+beta),0);
			this.normals.push(Math.cos((angulo*i)+beta),Math.sin((angulo*i)+beta),0);

			this.indices.push(i*4+this.slices*j*4,i*4+this.slices*j*4+1,i*4+this.slices*j*4+3);
			this.indices.push(i*4+this.slices*j*4+1,i*4+this.slices*j*4+2,i*4+this.slices*j*4+3);

			this.texCoords.push(xCoord + patchLengthX, yCoord);
			this.texCoords.push(xCoord, yCoord);
			this.texCoords.push(xCoord, yCoord + patchLengthY);
			this.texCoords.push(xCoord + patchLengthX, yCoord+patchLengthY);

			xCoord += patchLengthX;

		}
			
		xCoord = 0;

		yCoord += patchLengthY; 
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
