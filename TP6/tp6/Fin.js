/**
 * Fin
 * @constructor
 */
 
 function Fin(scene) {
 	CGFobject.call(this, scene);

 	this.initBuffers();
 	
 };

 Fin.prototype = Object.create(CGFobject.prototype);
 Fin.prototype.constructor = Fin;

 Fin.prototype.initBuffers = function() {
   	this.vertices = 
 	    [ -0.25, -0.075, -1.45,    //0
 	       0.25, -0.075, -1.45,    //1
 	       0.25, -0.075,  1.45,    //2
 	      -0.25, -0.075,  1.45,    //3
 	       
 	      -0.25, 0.075, -1.45,     //4
 	       0.25, 0.075, -1.45,     //5
 	       0.25, 0.075,  1.45,     //6
 	      -0.25, 0.075,  1.45,     //7
 	      
 	      -0.25, -0.075, -2.15,    //8
 	      -0.25,  0.075, -2.15,    //9
 	      
 	      -0.25, -0.075,  2.15,    //10
 	      -0.25,  0.075,  2.15     //11
 	      ];  

 	this.indices = 
 	    [ 0, 1, 2, 
 	      2, 3, 0,

 	      4, 7, 6,
 	      6, 5, 4,

 	      5, 6, 2,
 	      2, 1, 5,

 	      4, 0, 3,
 	      3, 7, 4,

 	      1, 0, 8,
 	      9, 4, 5,

 	      8, 9, 5,
 	      5, 1, 8,

 	      8, 0, 4,
 	      4, 9, 8,
 	      
 	      10, 3, 2,
 	      6, 7, 11,

 	      2, 6, 11,
 	      11, 10, 2,

 	      3, 10, 11,
 	      11, 7, 3];

 	this.normals=
 	    [ 1, 1, 1,   //0
 	      1, 1, 1,   //1
 	      1, 1, 1,   //2 
 	      1, 1, 1,   //3

 	      1, 1, 1,   //4
 	      1, 1, 1,   //5
 	      1, 1, 1,   //6
 	      1, 1, 1,   //7

 	      1, 1, 1,   //8
 	      1, 1, 1,   //9

 	      1, 1, 1,   //10
 	      1, 1, 1];  //11


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
