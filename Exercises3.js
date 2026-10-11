// Exercise 1

const checkAge = age =>
    age > 18 || confirm("Do you have your parents permission to access this page?");
console.log(checkAge(20));

// Exercise 2

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100)); 


// Exercise 3

const ask = (question, yes, no) => {
    console.log(question);
    let answer = true;
    if (answer) {
        yes();
    } else {
        no();
    }
};

ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
);

// Exercise 4

let calculator = {
    read() {
        this.a = 10;
        this.b = 5;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Exercise 5

const min = (a, b) => a < b ? a : b;
console.log(min(2, 5)); 
console.log(min(5, 2)); 

