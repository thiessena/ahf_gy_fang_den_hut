let r1 = 160;
let r2 = 200;
let mx = 300;
let my = 300;
let aussenring;
let form;

function setup(){
createCanvas(640,480);
aussenring = new Spielfeld(r1,r2,mx,my);
form =  new Form([{x:10, y:10},{x:40, y:50},{x:50, y:20}]);
}

function draw(){
clear();
form.show();

stroke(0,0,0);
line(0,0,mouseX,mouseY);
//point(mx,my);
//ellipse(mx,my,r2*2);
//ellipse(mx,my,r1*2);

//stroke(255,0,0);
//aussenring.show();


}




class Spielfeld{
constructor(pr1,pr2,pmx,pmy){
    this.form = [];
    for (let i = 0; i < 52; i++){
        let angle = PI*2/52*i;
        this.form.push(new Form(
            [this.eckpunkt(angle,pr1,pmx, pmy,-1),
            
            this.eckpunkt(angle,pr2,pmx, pmy,-1),
            this.eckpunkt(angle,pr2,pmx, pmy,1),
            this.eckpunkt(angle,pr1,pmx, pmy,1)
            ]
        ));  
    }
}

eckpunkt(angle, radius, mx, my, faktor){
    return {x:cos(angle+faktor*PI/52)*radius+mx, y:sin(angle+faktor*PI/52)*radius+my};
} 

show(){
    for (let i = 0; i < this.form.length; i++){
        this.form[i].show();	
    }
}
}