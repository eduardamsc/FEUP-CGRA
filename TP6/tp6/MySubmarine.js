/**
 * MySubmarine
 * @constructor
 */

function MySubmarine(scene) {
	CGFobject.call(this,scene);

	this.xPosition = 12.5;
    this.yPosition = 3;
    this.zPosition = 12.5;

	this.triangle = new MyTriangle(this.scene);
	this.cylinder = new MyCylinder(this.scene, 24, 1);
	this.semiEsfera1 = new MyLamp(this.scene, 24, 3);
	this.semiEsfera2 = new MyLamp(this.scene, 24, 3);
	this.cylinderTop = new MyCylinder(this.scene, 24, 1);
	this.circleTop = new MyCircle(this.scene, 24);
	this.telescopeBoby = new MyCylinder(this.scene, 24, 1);
	this.telescopePart1 = new MyCylinder(this.scene, 24, 1);
	this.circlefront = new MyCircle(this.scene, 24);
	this.circleBack = new MyCircle(this.scene, 24);
	this.turbo1 = new MyCylinder(this.scene, 24, 1);
	this.turbo2 = new MyCylinder(this.scene, 24, 1);
	this.fan1 = new MyUnitCubeQuad(this.scene);
	this.fan2 = new MyUnitCubeQuad(this.scene);
	this.lampFan1 = new MyLamp(this.scene, 24, 3);
	this.lampFan2 = new MyLamp(this.scene, 24, 3);
	this.finVertical = new Fin(this.scene);
	this.finHorizontal = new Fin(this.scene);
	this.finHorizontalTower = new Fin(this.scene);

	this.x = 0;
	this.y = 0;
	this.z = 0;

	this.incStep = 0.05;

	this.angle = 0;

	this.initBuffers();
};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

MySubmarine.prototype.display = function(){

	this.scene.pushMatrix();
		//this.scene.activeAppearance.apply();

		//corpo
		this.scene.pushMatrix();
			this.scene.scale(4.08, 1, 0.85);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.cylinder.display();
		this.scene.popMatrix();

		//semiEsfera1 =  frente
		this.scene.pushMatrix();
			this.scene.translate(4.08, 0, 0);
			this.scene.rotate((Math.PI)/2, 0, 1, 0);
			this.scene.scale(0.85, 1, 1);
			this.semiEsfera1.display();
		this.scene.popMatrix();

		//semiEsfera2 =  trás
		this.scene.pushMatrix();
			this.scene.rotate(-(Math.PI)/2, 0, 1, 0);
			this.scene.scale(0.85, 1, 1);
			this.semiEsfera1.display();
		this.scene.popMatrix();

		/* Tower */
		//cylinder on top
		this.scene.pushMatrix();
			this.scene.translate(2.5, 0.07, 0);
			this.scene.scale(1, 1.5, 0.6);
			this.scene.rotate(-(Math.PI)/2, 1, 0, 0);
			this.cylinderTop.display();
		this.scene.popMatrix();

		//circle on top
		this.scene.pushMatrix();
			this.scene.translate(2.5, 1.57, 0);
			this.scene.scale(1, 1, 0.6);
			this.scene.rotate(-(Math.PI)/2, 1, 0, 0);
			this.circleTop.display();
		this.scene.popMatrix();
		/**/

		//telescope body
		this.scene.pushMatrix();
			this.scene.translate(2.9, 3.3, 0);
			this.scene.scale(0.12, 1.75, 0.12);
			this.scene.rotate(Math.PI/2, 1, 0, 0);
			this.telescopeBoby.display();
		this.scene.popMatrix();

		//telescope part
		this.scene.pushMatrix();
			this.scene.translate(2.74, 3.3, 0);
			this.scene.scale(0.54, 0.12, 0.12);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.telescopePart1.display();
		this.scene.popMatrix();

		//telescope circle Top
		this.scene.pushMatrix();
			this.scene.translate(3.28, 3.3, 0);
			this.scene.scale(0.6, 0.12, 0.12);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.circlefront.display();
		this.scene.popMatrix();

		//telescope circle back
		this.scene.pushMatrix();
			this.scene.translate(2.74, 3.3, 0);
			this.scene.scale(0.6, 0.12, 0.12);
			this.scene.rotate(-Math.PI/2, 0, 1, 0);
			this.circleBack.display();
		this.scene.popMatrix();

		//turbo 1
		this.scene.pushMatrix();
			this.scene.translate(-0.15, -0.43, -1.17);
			this.scene.scale(0.35, 0.35, 0.35);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.turbo1.display();
		this.scene.popMatrix();

		//turbo 2
		this.scene.pushMatrix();
			this.scene.translate(-0.15, -0.43, 1.17);
			this.scene.scale(0.35, 0.35, 0.35);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.turbo2.display();
		this.scene.popMatrix();

		//fan1
		this.scene.pushMatrix();
			this.scene.translate(0, -0.43, -1.17);
			this.scene.scale(0.05, 0.6, 0.2);
			this.fan1.display();
		this.scene.popMatrix();

		//fan2
		this.scene.pushMatrix();
			this.scene.translate(0, -0.43, 1.17);
			this.scene.scale(0.05, 0.6, 0.2);
			this.fan2.display();
		this.scene.popMatrix();

		//lamp Fan1
		this.scene.pushMatrix();
			this.scene.translate(0.05, -0.43, -1.17);
			this.scene.scale(0.04, 0.08, 0.08);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.lampFan1.display();
		this.scene.popMatrix(); 

		//lamp Fan2
		this.scene.pushMatrix();
			this.scene.translate(0.05, -0.43, 1.17);
			this.scene.scale(0.04, 0.08, 0.08);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.lampFan2.display();
		this.scene.popMatrix(); 

		//Fin Vertical
		this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2, 1, 0, 0);
			this.finVertical.display();
		this.scene.popMatrix(); 

		//Fin Horizontal
		this.scene.pushMatrix();
			this.finHorizontal.display();
		this.scene.popMatrix(); 

		//Fin Horizontal Tower
		this.scene.pushMatrix();
			this.scene.translate(2.5, 1.2, 0);
			this.scene.scale(0.65, 0.65, 0.65);
			this.finHorizontalTower.display();
		this.scene.popMatrix(); 

	this.scene.popMatrix();
}

MySubmarine.prototype.movingFront = function(isMoving){
	if (isMoving) {
		this.scene.translate(0, 0, 1);
    	this.zPosition += 1;
	}	
}

MySubmarine.prototype.movingBack = function(isMoving){
	if (isMoving) {
		this.scene.translate(0, 0, -1);
    	this.zPosition += -1;
	}
}

MySubmarine.prototype.movingRight = function(isMoving){
	if (isMoving) {
		this.scene.translate(-1, 0, 0);
    	this.xPosition += -1;	
	}
}

MySubmarine.prototype.movingLeft = function(isMoving){
	if (isMoving) {
		this.scene.translate(1, 0, 0);
		this.xPosition += 1;
	}
}
