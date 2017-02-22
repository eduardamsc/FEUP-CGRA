function myTable(scene) {
	CGFobject.call(this,scene);

	//this.initBuffers();

	this.cube = new MyUnitCubeQuad(this.scene);

	this.cube.initBuffers();
};

myTable.prototype = Object.create(CGFobject.prototype);
myTable.prototype.constructor=myTable;

myTable.prototype.display = function () {
	
	this.cube.display();
};
