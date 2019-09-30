class Player {
    constructor() { 
        this.x = 50;
        this.y = windowY - 60;
        this.vel = 0.00;
        this.f = 1;
    }
    show() {
        image(playerIMG, this.x, this.y - 10, 50, 70);
    }
    move() {
        this.y += this.vel;
        this.vel += this.f;
        this.y = constrain(this.y, 0, windowY - 60); 
    }
    jump() {
        this.vel = -14.5;
    }
}