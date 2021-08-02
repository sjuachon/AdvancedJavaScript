class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        let {x: x1, y:y1} = a;
        let {x: x2, y:y2} = b;

        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        return Math.sqrt(xDiff**2 + yDiff ** 2);
    }
}

