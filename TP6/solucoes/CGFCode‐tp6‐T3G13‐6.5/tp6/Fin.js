/**
 * Fin
 * @constructor
 */
 
function Fin(scene) {
 	CGFobject.call(this, scene);

 	this.unitQuad = new MyUnitCubeQuad(this.scene);

 	this.triangleTopLeft = new MyTriangle(this.scene);
 	this.triangleDownLeft = new MyTriangle(this.scene);

 	this.triangleTopRight = new MyTriangle(this.scene);
 	this.triangleDownRight = new MyTriangle(this.scene);

 	this.quadBackRight = new MyQuad(this.scene);
 	this.quadBackLeft = new MyQuad(this.scene);

 	this.quadLateralRight = new MyQuad(this.scene);
 	this.quadLateralLeft = new MyQuad(this.scene);

 	this.initBuffers();
 	
};

Fin.prototype = Object.create(CGFobject.prototype);
Fin.prototype.constructor = Fin;

Fin.prototype.display = function() {

  this.scene.pushMatrix();
    this.unitQuad.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.translate(0, 0.5, 1);
    this.scene.rotate(-Math.PI/2, 1, 0, 0);
    this.scene.rotate(-Math.PI/2, 0, 0, 1);
    this.triangleTopLeft.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
     this.scene.translate(0, -0.5, 1);
     this.scene.rotate(-(3*Math.PI)/2, 1, 0, 0);
     this.triangleDownLeft.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.translate(0, 0.5, -1);
    this.scene.rotate(-Math.PI/2, 1, 0, 0);
    this.triangleTopRight.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
      this.scene.translate(0, -0.5, -1);
      this.scene.rotate(-(3*Math.PI)/2, 1, 0, 0);
      this.scene.rotate(Math.PI, 0, 0, 1);
      this.scene.rotate(Math.PI/2, 0, 0, 1);
      this.triangleDownRight.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
      this.scene.translate(-0.5, 0, 1);
      this.scene.rotate(-Math.PI/2, 0, 1, 0);
      this.scene.rotate(Math.PI/2, 0, 0, 1);
      this.quadBackRight.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
      this.scene.translate(-0.5, 0, -1);
      this.scene.rotate(-Math.PI/2, 0, 1, 0);
      this.quadBackLeft.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
      this.scene.translate(0, 0, 1);
      this.scene.rotate(Math.PI/4, 0, 1, 0);
      this.scene.scale(Math.sqrt(Math.pow(1,2)+Math.pow(1,2)),1,1);
      this.quadLateralRight.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
      this.scene.translate(0, 0, -1);
      this.scene.rotate((3*Math.PI)/4, 0, 1, 0);
      this.scene.scale(Math.sqrt(Math.pow(1,2)+Math.pow(1,2)),1,1);
      this.quadLateralLeft.display();
  this.scene.popMatrix();
};
