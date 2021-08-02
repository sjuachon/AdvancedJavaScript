function main(a){
    return (b) => {
        return (c) => {
            return a + b + c;
        }
        console.log(b)
    }
    console.log(a)
}
console.log(main(5)(6)(8))
console.log(main(5)(6));
console.log(main(1)(6)(-3));