/**
 * MyClock
 * @constructor
 */

function MyClock(scene,slices,stacks) {
	CGFobject.call(this,scene);

	this.slices = slices;
	this.stacks = stacks;

	this.cylinder = new MyCylinder(this.scene,slices,stacks);
	this.circleFace = new MyCircle(this.scene,slices);
	this.handHour = new MyClockHand(this.scene,0.5);
	this.handMinute = new MyClockHand(this.scene,0.7);
	this.handSecond = new MyClockHand(this.scene,0.9);

	//inicialização ponteiros
	this.handHour.setAngle(-75);
	this.handMinute.setAngle(0);
	this.handSecond.setAngle(-180);

	this.clockFace = new CGFappearance(this.scene);
	this.clockFace.loadTexture("../resources/images/clock.png");
    this.clockFace.setDiffuse(0.9,0.9,0.9,1);
    this.clockFace.setSpecular(0.9,0.9,0.9,1);
    this.clockFace.setShininess(100);

	//ponteiro das horas appearance - preto
	this.horasAppearance = new CGFappearance(this.scene);
	this.horasAppearance.setDiffuse(0,0,0,1);
	this.horasAppearance.setSpecular(0.7,0.7,0.7,1);
	this.horasAppearance.setShininess(200);	

	//ponteiro das minutos appearance - preto
	this.minutosAppearance = new CGFappearance(this.scene);
	this.minutosAppearance.setDiffuse(0,0,0,1);
	this.minutosAppearance.setSpecular(0.7,0.7,0.7,1);
	this.minutosAppearance.setShininess(200);	

	//ponteiros dos segundos appearance - vermelho
	this.segundosAppearance = new CGFappearance(this.scene);
	this.segundosAppearance.setDiffuse(0.4,0,0,1);
	this.segundosAppearance.setSpecular(0.7,0.7,0.7,1);
	this.segundosAppearance.setShininess(200);

	this.initBuffers();
};

MyClock.prototype = Object.create(CGFobject.prototype);
MyClock.prototype.constructor=MyClock;

MyClock.prototype.display = function () {

	//cilindro
	this.cylinder.display();

	//circleFace trás
	this.scene.pushMatrix();
		this.scene.rotate((Math.PI),0,1,0);
		this.circleFace.display();
	this.scene.popMatrix();

	//circleFace frente
	this.scene.pushMatrix();
		this.scene.translate(0,0,1);
		this.clockFace.apply();
		this.circleFace.display();
	this.scene.popMatrix();
	
	//ponteiro horas
	this.scene.pushMatrix();
		this.scene.translate(0,0,this.stacks+0.05);
		this.horasAppearance.apply();
		this.handHour.display();
	this.scene.popMatrix();

	//ponteiro minutos
	this.scene.pushMatrix();
		this.scene.translate(0,0,this.stacks+0.05);
		this.minutosAppearance.apply();
		this.handMinute.display();
	this.scene.popMatrix();

	//ponteiro segundos
	this.scene.pushMatrix();
		this.scene.translate(0,0,this.stacks+0.05);
		this.segundosAppearance.apply();
		this.handSecond.display();
	this.scene.popMatrix();
};

MyClock.prototype.update = function(){

	var segundosInc = 360 / 60;
	var minutosInc = segundosInc / 60;
	var horasInc = minutosInc / 12;

	this.handSecond.setAngle(this.handSecond.ang + segundosInc);
	this.handMinute.setAngle(this.handMinute.ang + minutosInc);
	this.handHour.setAngle(this.handHour.ang + horasInc);

}