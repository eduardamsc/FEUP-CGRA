function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	
	this.vertices = [
			/*quadrado*/
            -0.5, -0.5, -0.5,   /* 0 */
             0.5, -0.5, -0.5,   /* 1 */
            -0.5,  0.5, -0.5,   /* 2 */
             0.5,  0.5, -0.5,   /* 3 */
            
            -0.5, -0.5, 0.5,    /* 4 */
             0.5, -0.5, 0.5,    /* 5 */
            -0.5,  0.5, 0.5,    /* 6 */
             0.5,  0.5, 0.5,    /* 7 */
			];

	this.indices = [
			/* tras */
			2,3,1,
			1,0,2,

			/* frente */
			4,5,7,
			7,6,4,

			/* direita */
			5,1,3,
			3,7,5,

			/* esquerda */
			6,2,0,
			0,4,6,
			
			/* cima */
			6,7,3,
			3,2,6,
			
			/* baixo */
			4,0,1,
			1,5,4
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};

/*
0, 1, 2, /* quadrado */
/*3, 2, 1, /* quadrado */
/*4, 5, 6  /* triangulo */
