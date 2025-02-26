let state = {
    count: 0,
}
let prevState = state;

// state.count = state.count+1;
state = {count: state.count+1};
console.log(state); 
console.log(prevState);
/**
 * In JavaScript, objects are stored in memory and assigned by reference, not by value. 
 * When you do let prevState = state;, both state and prevState point to the same object in memory.
 * When you mutate (state.count = state.count + 1), you're changing the existing object, so both state and prevState reflect the change.
 * When you reassign (state = { count: state.count + 1 }), you're creating a new object and making state point to it, but prevState still points to the old object.
 *let state = {
    count: 0,
    }

    let prevState = state;
    console.log(state===prevState); //true

    function incr(){
        // state.count = state.count+1;
        state ={count: state.count+1};
    }
    incr();
    incr();
    incr();
    console.log(state===prevState); //false
    console.log(state);
    console.log(prevState);
 */

/* shallow copy
const obj1 = {name: "Arjun", detail: {age: 25, city: "Delhi"}};
// const obj2 = {...obj1};
const obj2 = Object.assign({}, obj1);

console.log(obj1===obj2); // false
console.log(obj1.name === obj2.name); // true
console.log(obj1.detail===obj2.detail); // tru

console.log(5===5);
console.log("hello"==="hello");
console.log(5==="5");
console.log(true===1);

const obj1 = {a: 1};
const obj2 = {a: 1};
console.log(obj1===obj2);// false (different objects, even with same values)

const obj3 = obj1;
console.log(obj1===obj3);// true (same reference)

console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(true == 1); // true (true is converted to 1)
console.log(null == undefined); // true (they are considered equal in loose comparison)

const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2); // false (different objects, even with same values)

const obj3 = obj1;
console.log(obj1 == obj3); // true (same reference)

✅ Primitives (strings, numbers, booleans) are copied by value.
✅ Objects are copied by reference unless explicitly deep-cloned.
✅ Even in deep copies, primitive values remain equal if unchanged.

*/

/*Deep Copy
const obj2 = { name: "Bob", details: { age: 30, city: "London" } };

const deepCopy = JSON.parse(JSON.stringify(obj2));

console.log(obj2 === deepCopy); // false
console.log(obj2.details === deepCopy.details); // false

// Recursion
function deepCopy(obj){
    if(obj===null || typeof obj!=="object"){
        return obj;
    }

    if(Array.isArray(obj)){
        obj.map(deepCopy);
    }

    const clonedObj = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            clonedObj[key] = deepCopy(obj[key]);
        }
    }
    return clonedObj;
}

*/
