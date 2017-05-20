/**
 * MyTriangle
 * @constructor
 */

function MyTriangle(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
};

MyTriangle.prototype = Object.create(CGFobject.prototype);
MyTriangle.prototype.constructor = MyTriangle;

MyTriangle.prototype.initBuffers = function() {

   	this.vertices = 
 	    [ -0.5, -0.5, -0.5,    //0
 	       0.5, -0.5, -0.5,    //1
 	      -0.5,  0.5, -0.5,    //2

 	      -0.5, -0.5, 0.5,     //3
 	       0.5, -0.5, 0.5,     //4
 	      -0.5,  0.5, 0.5  ];  //5

 	this.indices = 
 	    [ 0, 1, 2,  //back triangle
 	      2, 1, 0,

 	      3, 4, 5,  //back triangle
 	      5, 4, 3,

 	      5, 2, 0,  //back rectangle
 	      0, 3, 5,

 	      3, 0, 1,  //from below rectangle
 	      1, 4, 3,

 	      4, 1, 2,  //front rectangle
 	      2, 5, 4];

 	this.normals=
 	    [ -1, -1, -1,
 	       1, -1, -1,
 	      -1, 1, -1,

 	      -1, -1, 1,
 	       1, -1, 1,
 	      -1, 1, 1  ];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
};
