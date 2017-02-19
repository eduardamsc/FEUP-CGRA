/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyObject(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyObject.prototype = Object.create(CGFobject.prototype);
MyObject.prototype.constructor=MyObject;

MyObject.prototype.initBuffers = function () {
	this.vertices = [
			/*quadrado*/
            -0.5, -0.5, 0, /* 0 */
            0.5, -0.5, 0,  /* 1 */
            -0.5, 0.5, 0,  /* 2 */
            0.5, 0.5, 0,   /* 3 */
            /*triangulo*/
            -1, 0.5, 0,    /* 4 */
           	1, 0.5, 0,     /* 5 */
            0, 1.5, 0      /* 6 */
			];

	this.indices = [
	//2, 1, 0, /* a ordem dos indices interessa */ 
	/* (2 triangulos, um para a frente e outro para trás) */
            0, 1, 2, /* quadrado */
			3, 2, 1, /* quadrado */
			4, 5, 6  /* triangulo */
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
