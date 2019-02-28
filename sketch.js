function setup() {
	createCanvas(1250,1250);
	this.velocity = 0.01;
	sol = new Planet(60,0,0);
	mercurio = new Planet(5,50,this.velocity/0.24);
	venus = new Planet(12,82,this.velocity/0.62);
	tierra = new Planet(13,120,this.velocity/1);
	luna = new Planet(5,16,this.velocity/0.07);
	marte = new Planet(9,170,this.velocity/1.88);
	jupiter = new Planet(40,220,this.velocity/11.9);
	saturno = new Planet(35,350,this.velocity/29.7);
	urano = new Planet(20,470,this.velocity/84.3);
	neptuno = new Planet(18,600,this.velocity/164.8); // Formula vel=0.01/añosOrbitaPlaneta
}

function draw() {
	background(0);
	translate(width/2,height/2);
	sol.showRadius();
	fill(255,150,0);
	sol.show();
	sol.update();
	mercurio.showRadius();
	fill(100);
	mercurio.show();
	mercurio.update();
	venus.showRadius();
	fill(220);
	venus.show();
	venus.update();
	tierra.showRadius();
	fill(0,220,0);
	tierra.show();
	tierra.update();
	marte.showRadius();
	fill(220,0,0);
	marte.show();
	marte.update();
	jupiter.showRadius();
	fill(139,69,19);
	jupiter.show();
	jupiter.update();
	saturno.showRadius();
	fill(224,164,96);
	saturno.show();
	saturno.update();
	urano.showRadius();
	fill(0,0,205);
	urano.show();
	urano.update();
	neptuno.showRadius();
	fill(0,206,209);
	neptuno.show();
	neptuno.update();
	translate(tierra.x,tierra.y);
	luna.showRadius();
	fill(255);
	luna.show();
	luna.update();
}