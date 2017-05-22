function MyPoint(x,y,z) {

    this.x = x;
    this.y = y;
    this.z = z;	

};

MyPoint.prototype = Object.create(CGFobject.prototype);
MyPoint.prototype.constructor = MyPoint;