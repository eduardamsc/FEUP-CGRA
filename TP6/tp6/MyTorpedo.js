/**
 * MyTorpedo
 * @constructor
 */

var degToRad = Math.PI/180.0;

function MyTorpedo(scene, target) {
	CGFobject.call(this,scene);

//controlar posicao
	this.xPosition = scene.submarine.xPosition;
	this.yPosition = scene.submarine.yPosition;
	this.zPosition = scene.submarine.zPosition;
	this.y = -1.3;
	this.z = 1.3;
	this.dx = this.xPosition;
	this.dy = this.yPosition;
	this.dz = this.zPosition;

//controlar rotação
	this.rotAngle = scene.submarine.rotAngle;
	this.rotYAngle = scene.submarine.rotYAngle;

//alvo
	this.target = target;

	this.cylinder = new MyCylinder(this.scene, 24, 1);
	this.semiEsfera1 = new MyLamp(this.scene, 24, 3);
	this.semiEsfera2 = new MyLamp(this.scene, 24, 3);
	this.finVertical = new Fin(this.scene);
	this.finHorizontal = new Fin(this.scene);
};

MyTorpedo.prototype = Object.create(CGFobject.prototype);
MyTorpedo.prototype.constructor=MyTorpedo;

MyTorpedo.prototype.display = function(){

	this.scene.pushMatrix();
		if (this.rotYAngle<0) {
			this.z = -1.3;
			this.y = -2
		} 
		this.scene.translate(this.xPosition, this.yPosition + this.y, this.zPosition + this.z);
 		this.scene.rotate(this.rotAngle*degToRad, 0, 1, 0);
 		this.scene.rotate(-this.rotYAngle*degToRad, 1, 0, 0);

		//corpo
		this.scene.pushMatrix();
		    this.scene.scale(0.3,0.3,2);
			this.cylinder.display();
		this.scene.popMatrix();

		//semiEsfera1 =  frente
		this.scene.pushMatrix();
			this.scene.translate(0, 0, 2);
			this.scene.scale(0.3, 0.3, 0.3);
			this.semiEsfera1.display();
		this.scene.popMatrix();

		//semiEsfera2 =  trás
		this.scene.pushMatrix();
			this.scene.rotate(-(Math.PI), 0, 1, 0);
			this.scene.scale(0.3, 0.3, 0.3);
			this.semiEsfera2.display();
		this.scene.popMatrix();

		//Fin Vertical
		this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2, 1, 0, 0);
			this.scene.rotate(Math.PI/2, 0, 0, 1);
			this.scene.scale(0.5, 0.1, 0.4);
			this.finVertical.display();
		this.scene.popMatrix();

		//Fin Horizontal
		this.scene.pushMatrix();
			this.scene.rotate(-Math.PI/2, 0, 1, 0);
			this.scene.scale(0.5, 0.1, 0.4);
			this.finHorizontal.display();
		this.scene.popMatrix();

	this.scene.popMatrix();
}

MyTorpedo.prototype.bezier = function(){

	if ((this.dx-this.xPosition) < 6 && (this.dy-this.yPosition) < 6 && (this.dz-this.zPosition) < 6) {

		if (this.rotYAngle != 90 && this.rotYAngle != -90) {
			this.zPosition += Math.cos(this.rotAngle*degToRad);
			this.xPosition += Math.sin(this.rotAngle*degToRad);
		}
	
		if (this.rotYAngle>0 && this.rotYAngle<90) {
			this.yPosition += Math.cos(this.rotYAngle*degToRad);
		} else if (this.rotYAngle>-90 && this.rotYAngle<0) {
			this.yPosition -= Math.cos(this.rotYAngle*degToRad);
		} else if (this.rotYAngle==90) {
			this.yPosition += 0.1;
		} else if (this.rotYAngle==-90) {
			this.yPosition -= 0.1;
		}
	}

	console.log(this.dx-this.xPosition);
	console.log(this.dy-this.yPosition);
	console.log(this.dz-this.zPosition);
}