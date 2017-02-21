/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);

	this.quad = new MyQuad(this.scene);

	//this.initBuffers();
	this.quad.initBuffers();
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

//MyUnitCubeQuad.prototype.initBuffers = function () {
MyUnitCubeQuad.prototype.display = function(){
    //this.quad.display();

    /* Face xy "frente" */
    this.scene.pushMatrix();
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();

    /* Face xy "trás" */
    this.scene.pushMatrix();
    this.scene.rotate((Math.PI),0,1,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();

    /* Face yz "direita" */
    this.scene.pushMatrix();
    this.scene.rotate((Math.PI)/2,0,1,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();

    /* Face yz "esquerda" */
    this.scene.pushMatrix();
    this.scene.rotate(-(Math.PI)/2,0,1,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();

    /* Face yz "baixo" */
    this.scene.pushMatrix();
    this.scene.rotate((Math.PI)/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();

    /* Face yz "cima" */
    this.scene.pushMatrix();
    this.scene.rotate(-(Math.PI)/2,1,0,0);
    this.scene.translate(0,0,0.5);
    this.quad.display();
    this.scene.popMatrix();
};
