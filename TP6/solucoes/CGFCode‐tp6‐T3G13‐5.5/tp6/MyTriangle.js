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
 	/*
 	this.vertices = 
 	    [  0.5, 0.5, 0,     //0
 	      -0.5, 0.5, 0,     //1
 	         0, 0.5, 2  ];  //2
 	 */

 	this.vertices = 
 	    [ -0.5, -0.5, 0,        //0
 	       0.5, -0.5, 0,        //1
 	      -0.5,  0.5, 0  ];     //2


 	this.indices = 
 	    [ 0, 1, 2  ];  

    /* plano xz
 	this.normals=
 	    [ 0, 1, 0,
 	      0, 1, 0,
 	      0, 1, 0 ];
    */

    // Plano xy
 	this.normals=
 	    [ 0, 0, 1,
 	      0, 0, 1,
 	      0, 0, 1  ];

 	this.texCoords = 
 	    [ 0, 0,
          0, 1,
          1, 0  ];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
};