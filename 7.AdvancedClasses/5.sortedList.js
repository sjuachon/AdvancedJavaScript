let numbers = [];
let size = numbers.length;
class List {
    
    
    constructor(element, numbers){
        this.element = element;
        this.numbers = [];
        
    }
    add(element) {
        return this.numbers.push(element);
        console.log(this.numbers);
    }

    remove(index) {
        return this.numbers.splice(index, 1);
    }
    get(index) {
        return this.numbers[index]
    } 
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
// console.log(list.get(1));
console.log(list.get(1));
