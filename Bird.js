class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");
   this.array1=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200)
    {
      var array2=[ this.body.position.x ,this.body.position.y ];
      this.array1.push(array2);
    }
  for(var i=0;i<this.array1.length;i++)
  {
    image(this.smokeimage,this.array1[i][0],this.array1[i][1])
  }
  }
}
