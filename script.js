// Haydarov Husan || 2026-04-04 //

// DOM Elements
const Name = document.querySelector(".name");
const Color = document.querySelector(".color");
const Age = document.querySelector(".age");
const Q2Add = document.querySelector(".q2-add");
const Q2Sub = document.querySelector(".q2-sub");
const Q2Mul = document.querySelector(".q2-mul");
const Q2Div = document.querySelector(".q2-div");
const Q3Info = document.querySelector(".q3-info");
const Q4Pass = document.querySelector(".q4-pass");
const Q5List = document.querySelector(".q5-list");
const Q6List = document.querySelector(".q6-list");

const setText = (el, text) => {
    if (el) el.textContent = text;
};

const addLine = (el, text) => {
    if (!el) return;
    const p = document.createElement("p");
    p.className = "result-line";
    p.textContent = text;
    el.appendChild(p);
};

// 1- question
class Fruit {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    Shop(){
        Name.textContent = `Name: ${this.name}`;
        Color.textContent = `Color: ${this.color}`;
        Age.textContent = `Age: ${this.age} days`;
    }
}

let apple = new Fruit("Apple", "Red", 20);

apple.Shop();

// 2- question
class Colculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    Add(){
        const result = this.num1 + this.num2;
        console.log(result);
        setText(Q2Add, `Add: ${this.num1} + ${this.num2} = ${result}`);
    }

    Sub(){
        const result = this.num1 - this.num2;
        console.log(result);
        setText(Q2Sub, `Sub: ${this.num1} - ${this.num2} = ${result}`);
    }

    Mul(){
        const result = this.num1 * this.num2;
        console.log(result);
        setText(Q2Mul, `Mul: ${this.num1} × ${this.num2} = ${result}`);
    }

    Div(){
        const result = this.num1 / this.num2;
        console.log(result);
        setText(Q2Div, `Div: ${this.num1} ÷ ${this.num2} = ${result}`);
    }

}

let colculator = new Colculator(12, 4);
colculator.Add();
colculator.Sub();
colculator.Mul();
colculator.Div();

// 3- question
class Student {
    constructor(name, age, score, science ) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.science = science
    }

    Info(){
        const result = `Name: ${this.name}, Age: ${this.age}, Score: ${this.score}, Science: ${this.science} And ${this.score >= 60 ? "Passed" : "Failed"}.`;
        console.log(result);
        setText(Q3Info, result);
    }
}

let student = new Student("Ali", 18, 75, "Math");
student.Info();

// 4- question
class Password_Generator {
    constructor(length) {
        this.length = length;
    }

    Generate() {
        const result = Math.random().toString(36).slice(-this.length);
        console.log(result);
        setText(Q4Pass, `Password: ${result}`);
    }
}

let password_generator = new Password_Generator(8);
password_generator.Generate();

// 5- question
class Transport {
    constructor(Spark, BMW, Mercedes, Audi) {
        this.Spark = {
            model: "Spark",
            year: 2020,
            color: "White",
            price: 10000,
            speed: 120,
            fuelconsumption: 5
        };
        this.BMW = {
            model: "BMW",
            year: 2021,
            color: "Black",
            price: 30000,
            speed: 200,
            fuelconsumption: 8
        };
        this.Mercedes = {
            model: "Mercedes",
            year: 2022,
            color: "Silver",
            price: 50000,
            speed: 250,
            fuelconsumption: 10
        };
        this.Audi = {
            model: "Audi",
            year: 2023,
            color: "Red",
            price: 40000,
            speed: 220,
            fuelconsumption: 7
        };
    }

    ShowInfo(car) {
        const result = `Model: ${car.model}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}, Speed: ${car.speed} km/h, Fuel Consumption: ${car.fuelconsumption} L/100km.`;
        console.log(result);
        addLine(Q5List, result);
    }
}

let transport = new Transport();
transport.ShowInfo(transport.Spark);
transport.ShowInfo(transport.BMW);
transport.ShowInfo(transport.Mercedes);
transport.ShowInfo(transport.Audi);

// 6- question
class Liberary {
    constructor(HarryPotter, LordoftheRings, TheAlchemist, TheHungerGames, TheDaVinciCode, TheLordoftheRings, TheHobbit) {
        this.HarryPotter = {
            title: "Harry Potter",
            author: "J.K. Rowling",
            year: 1997,
            genre: "Fantasy",
            pages: 500
        };
        this.LordoftheRings = {
            title: "Lord of the Rings",
            author: "J.R.R. Tolkien",
            year: 1954,
            genre: "Fantasy",
            pages: 1200
        };
        this.TheAlchemist = {
            title: "The Alchemist",
            author: "Paulo Coelho",
            year: 1988,
            genre: "Adventure",
            pages: 200
        };
        this.TheHungerGames = {
            title: "The Hunger Games",
            author: "Suzanne Collins",
            year: 2008,
            genre: "Dystopian",
            pages: 300
        };
        this.TheDaVinciCode = {
            title: "The Da Vinci Code",
            author: "Dan Brown",
            year: 2003,
            genre: "Mystery",
            pages: 450
        };
        this.TheLordoftheRings = {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            year: 1954,
            genre: "Fantasy",
            pages: 1200
        };
        this.TheHobbit = {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            year: 1937,
            genre: "Fantasy",
            pages: 300
        };
    }

    ShowInfo(book) {
        const result = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}, Pages: ${book.pages}.`;
        console.log(result);
        addLine(Q6List, result);
    }
}

let liberary = new Liberary();
liberary.ShowInfo(liberary.HarryPotter);
liberary.ShowInfo(liberary.LordoftheRings);
liberary.ShowInfo(liberary.TheAlchemist);
liberary.ShowInfo(liberary.TheHungerGames);
liberary.ShowInfo(liberary.TheDaVinciCode);
liberary.ShowInfo(liberary.TheLordoftheRings);
liberary.ShowInfo(liberary.TheHobbit);
