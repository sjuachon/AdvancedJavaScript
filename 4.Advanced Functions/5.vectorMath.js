function main() {
	return {
		add: function (vec1, vec2) {
			let [x1, y1] = vec1;
			let [x2, y2] = vec2;
			console.log(`[ ${x1 + x2}, ${y1 + y2} ]`);
		},
		multiply: function (vec1, scalar) {
			let [x1, y1] = vec1;
			console.log(`[ ${x1 * scalar}, ${y1 * scalar} ]`);
		},
		length: function (vec1) {
			let [x1, y1] = vec1;
			console.log(Math.sqrt(x1 * x1 + y1 * y1));
		},
		dot: function (vec1, vec2) {
			let [x1, y1] = vec1;
			let [x2, y2] = vec2;
			console.log(x1 * y1 + x2 * y2);
		},
		cross: function (vec1, vec2) {
			let [x1, y1] = vec1;
			let [x2, y2] = vec2;
			console.log(x1 * y2 - x2 * y1);
		},
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
solution.length([3, -4]);
solution.dot([1, 0], [0, -1]);
solution.cross([3, 7], [1, 0]);