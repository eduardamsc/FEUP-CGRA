/**
* MyTriangularPrism
* @constructor
*/
 
function MyTriangularPrism(scene) {
  CGFobject.call(this, scene);

  this.triangleBack = new MyTriangle(scene);
  this.triangleFront = new MyTriangle(scene);
  this.link1 = new MyQuad(scene);
  this.link2 = new MyQuad(scene);
};

MyTriangularPrism.prototype = Object.create(CGFobject.prototype);
MyTriangularPrism.prototype.constructor = MyTriangularPrism;

MyTriangularPrism.prototype.display = function() {
  this.scene.pushMatrix();
    this.triangleBack.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    this.triangleFront.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
    this.scene.translate(-0.5, 0, 0.25);
    this.scene.scale(0.5, 1, 0.5);
    this.scene.rotate(-Math.PI/2, 0, 1, 0);
    this.link1.display();
  this.scene.popMatrix();

   this.scene.pushMatrix();
    this.scene.translate(-0.5, 0, 0.25);
    this.scene.scale(0.5, 1, 0.5);
    this.scene.rotate(-Math.PI/2, 0, 0, 0);
    this.link2.display();
  this.scene.popMatrix();

};
