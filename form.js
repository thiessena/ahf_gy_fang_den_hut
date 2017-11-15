class Form{
	constructor(eckpunkte){
		this.punkte = eckpunkte; 
	}

	show(){
		if(this.liegtInnerhalb(mouseX,mouseY)){
			console.log("In der Form");
			stroke(0,0,0);
			beginShape();
			for (let i = 0; i< this.punkte.length; i++){
				vertex(this.punkte[i].x, this.punkte[i].y);
			}
			endShape(CLOSE);	
		}

		stroke(255,0,0);
		for (let i = 0; i< this.punkte.length;i++){
			ellipse(this.punkte[i].x, this.punkte[i].y, 10);
		}
		
	}

	/**
	* Zunächst wird der Schnittpunkt der Geraden vom Ursprung zum Punkt und zwei Eckpunkten bestimmt. 
	* Liegt der Schnittpunkt im x-Bereich zwischen den beiden x-Stellen der Punkte, so ergibt das Produkt der Differenzen immer einen negativen Wert. Äquivalent kann so berechnet werden ob der Punkt zwischen den y-Werten liegt. Ist dies der Fall, so schneidet die Ursprungsgerade die Strecke.
	*/
	schnittMitDerStrecke(g1X1,g1Y1,g1X2,g1Y2, g2X1,g2Y1,g2X2,g2Y2){
		let m1 = (g1Y2-g1Y1)/(g1X2-g1X1); 
		let m2 =(g2Y2-g2Y1)/(g2X2-g2X1);
		let b1 = g1Y1-m1*g1X1;
		let b2 = g2Y1-m2*g2X1;
		let xKoordinate =(b2-b1)/(m1-m2);
		let yKoordinate = m1*xKoordinate+g1Y1-m1*g1X1; 
		fill(0,255,0);
		ellipse(xKoordinate,yKoordinate,10);
		//console.log("["+xKoordinate+"|"+yKoordinate+"]");
		return (xKoordinate-g1X1)*(xKoordinate-g1X2)<0 && (yKoordinate-g1Y1)*(yKoordinate-g1Y2) < 0;
	}

	liegtInnerhalb(pX, pY){
   		let schnittpunkte = 0;
   		for (let i = 0; i < this.punkte.length; i++){
      		if( this.schnittMitDerStrecke(
				this.punkte[i].x, 
				this.punkte[i].y,
				this.punkte[(i+1) % this.punkte.length].x, 
				this.punkte[(i+1) % this.punkte.length].y, 
				0,0,pX,pY)){
         		schnittpunkte++; 
      		}
   		}
		   console.log("schnittpunkte"+schnittpunkte);
  		return schnittpunkte % 2 == 1;
	}
}