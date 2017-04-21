/**
 * MyPaperPlane
 * @constructor
 */

 function MyPaperPlane(scene) {
	CGFobject.call(this,scene);

	this.x = 13;
	this.y = 4.75;
	this.z = 9;

	this.isFloor = false;
	this.isFlyingDown = false;

	this.initBuffers();
};

MyPaperPlane.prototype = Object.create(CGFobject.prototype);
MyPaperPlane.prototype.constructor=MyPaperPlane;

MyPaperPlane.prototype.initBuffers = function () {

	this.vertices = 
		[    0, 1, 0,		//0
           0.5, 0, 0,		//1
         - 0.5, 0, 0,		//2
             0, 0, 0.25,   	//3
             0, 0, 0,       //4

             0, 1, 0,		//5
           0.5, 0, 0,		//6
         - 0.5, 0, 0,		//7
             0, 0, 0.25,    //8
             0, 0, 0     ]; //9

	this.indices = 
		[  2, 1, 0,
		   5, 6, 7,
		   3, 4, 0,
		   5, 9, 8  ];

	this.normals =
		[  0, 0, 1,
           0, 0, 1,
           0, 0, 1,
           1, 0, 0,
           0, 0, -1,
           0, 0, -1,
           0, 0, -1,
           0, 0, -1,
         - 1, 0, 0,
           0, 0, 0  ];

	/*this.texCoords =
		[];*/

   	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
};

MyPaperPlane.prototype.update = function(){

	if (!this.isOnFloor) {
        if (!this.isFlyingDown) {

        	this.x -= 0.2;
            
            this.y += 0.05;   
        
        } else { 
        
            this.y -= 0.5;
        
        }

        if (this.x <= 1.25){

            this.isFlyingDown = true;

         }

    }

     if (this.y <= 0.45) {

     	this.isOnFloor = true;
           
        this.isFlyingDown = false;

     }
};