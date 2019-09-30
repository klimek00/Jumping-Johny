class Object {
    constructor() { 
        this.temp = random(0, 1000);
        this.x = windowX+20;
        this.y = windowY-20;
        this.vel = 0.00;
    }
    show() {
        fill('#595');
        rect(this.x, this.y-55, 20, 65);
    }
    move() {
        this.x -= 5;
        if(this.x < 5) {
            this.x = windowX+random(0, 1000);
            console.log(this.temp);
        }
    }
    
}