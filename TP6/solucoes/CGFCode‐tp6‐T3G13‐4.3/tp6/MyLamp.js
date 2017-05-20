/**
 * MyLamp
 * @constructor
 */

 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var angulo = (2*Math.PI)/this.slices;

	var anguloEsfera = (Math.PI*0.5)/this.stacks;

	for (j = 0; j < this.stacks + 1; j++) {
		for (i = 0; i < this.slices; i++) {

			this.vertices.push(Math.cos(angulo*i)*Math.cos(anguloEsfera*j),Math.sin(angulo*i)*Math.cos(anguloEsfera*j),Math.sin(anguloEsfera*j));
			
			this.normals.push(Math.cos(angulo*i)*Math.cos(anguloEsfera*j),Math.sin(angulo*i)*Math.cos(anguloEsfera*j),Math.sin(anguloEsfera*j));

			this.texCoords.push((Math.cos(i * angulo) * Math.cos(anguloEsfera * j) + 1)/2, (Math.sin(i * angulo) * Math.cos(anguloEsfera * j) + 1)/2 );

		}
 	}

 	for (j = 0; j < this.stacks; j++) {
		for (i = 0; i < this.slices; i++) {

		    if (i == this.slices - 1) {
		    	//0
                this.indices.push(this.slices * j, this.slices * (j + 1), i + this.slices * (j + 1));
                this.indices.push(this.slices * j, i + this.slices * (j + 1), i + this.slices * j);
            } else {
            	//1
                this.indices.push(i + this.slices * j, 1 + i + this.slices * j, i + this.slices * (j + 1));
                this.indices.push(1 + i + this.slices * j, 1 + i + this.slices * (j + 1), i + this.slices * (j + 1));
            }

		}
 	}

 	/*console.log("vertice: ");
 	console.log(this.vertices);
 	console.log("normais: ");
 	console.log(this.normals);
 	console.log("indices: ");
 	console.log(this.indices);
*/

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };