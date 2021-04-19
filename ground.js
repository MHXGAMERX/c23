class Ground{

constructor(x,y,w,h)
{
var groundoptions={

    isStatic : true
}

this.body=Bodies.rectangle(x,y,w,h,groundoptions)
World.add(world,this.body)

this.w = w
this.h = h

}
display(){
rectMode(CENTER)

var pos = this.body.position
fill("green")
rect(pos.x,pos.y,this.w,this.h)


}







}