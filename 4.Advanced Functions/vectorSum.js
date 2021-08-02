function main() {
    return {
        add: ([a, b], [c, d]) => console.log(`[ ${a + c}, ${b + d} ]`),
        multiply: ([a, b], c) => console.log(`[ ${a * c}, ${b * c} ]`),
        length: (([a, b]) => console.log(Math.sqrt((a * a) + (b * b)))),
        dot: ([a, b], [c, d]) => console.log(`${(a * c) + (b * d)}`),
        cross: ([a, b], [c, d]) => console.log(`${(a * d) - (b * c)}`)
    };

    let solution = {
        add,
        multiply,
        length,
        dot,
        cross
    };
    return solution;
}

let solution = main();
solution.add([1, 1], [1, 0]);
solution.multiply([3.5, -2], 2);

