class Ground {
    constructor(a,b,c,d) {
        this.g = Bodies.rectangle(a,b,c,d,{isStatic:true});
        World.add(world, this.g);
        this.p = c;
        this.q = d;
    }

    Display() {
        rectMode(CENTER);
        fill("blue");
        rect(this.g.position.x, this.g.position.y, this.p, this.q);

    }
}