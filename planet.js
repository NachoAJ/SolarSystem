function Planet(radius, position, velocity) {
	this.a = 0
	this.x = position
	this.y = 0

	this.update = function() {
		this.x = position * cos(this.a)
		this.y = position * sin(this.a)
		this.a += velocity
	}

	this.show = function() {
		noStroke()
		ellipse(this.x, this.y, radius, radius)
	}
	this.showRadius = function() {
		strokeWeight(1)
		noFill()
		stroke(255)
		ellipse(0, 0, position * 2, position * 2)
	}
}
