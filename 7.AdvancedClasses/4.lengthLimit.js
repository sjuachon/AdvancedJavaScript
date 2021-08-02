// class Stringer {
//     constructor(str, len) {
//         this.str = str;
//         this.len = len;
//     }

//     toString() {
//         if(this.str.length < this.len) {
//             return this.str.substr(0, this.len) + "...";
//         } else {
//             return this.str.length;
//         }
//         console.log(this.str, this.len);
//     }
    
//     increase(num) {
//         return this.str;
//     }
    
//     decrease(num) {
//         if(this.len - num < 0) {
//             return 0;
//         } else {
//             return this.str.substr(0, (this.str.length - num));
//         }
//     }
// }

// let ​test ​= ​new ​Stringer(​);
// console​.​log​(​test​.​toString​()); ​// Test
// test​.​decrease​(​3​);
// console​.​log​(​test​.​toString​()); ​// Te...

// test​.​decrease​(​5​);
// console​.​log​(​test​.​toString​()); ​// ...
// test​.​increase​(​4​);
// console​.​log​(​test​.​toString​()); ​// Test


    
class Stringer {
    constructor(innerString, innerLength) {
      this.innerString = innerString;
      this.innerLength = innerLength;
    }    
    increase(length) { this.innerLength += length; }
    
    decrease(length) { (this.innerLength - length < 0) ? this.innerLength = 0 : this.innerLength -= length; }
    
    toString() {
      if (this.innerLength === 0) {
        return '...';
      }      
      if (this.innerString.length > this.innerLength) {
        return this.innerString.slice(0, this.innerLength) + '...';
      }      
      return this.innerString;
    }
  }  // Don't copy the code below in HW Grader, you won't get any points, just the code above
  let test = new Stringer("Test", 5);
  console.log(test.toString()); // Test  test.decrease(3);
  console.log(test.toString()); // Te...  test.decrease(5);
  console.log(test.toString()); // ...  test.increase(4); 
  console.log(test.toString()); // Test