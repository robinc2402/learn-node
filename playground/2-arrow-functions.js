// general/conventional function
const square = function (x) {
  console.log(x * x);
};

// arrow function
const square2 = (x) => {
  console.log(x * x);
};

// arrow function shorthand
const square3 = (x) => console.log(x * x);

square3(15);

// understanding where to use conventional function or arrow function
// 1 basic difference is that arrow function doesn't use the reference of "this" keyword of its parent object

// Example1 -- conventional function as a property of an object
const event = {
  name: "Service anniversary",
  guestList: ["AkshatT", "AnkitT", "DeepakR", "DineshK"],
  printGuestList: function () {
    console.log("We are going to this party tonight --> " + this.name);
  }
};
//event.printGuestList();

// Example2 -- arrow function as a property of an object
const event2 = {
  name: "Service anniversary",
  guestList: ["AkshatT", "AnkitT", "DeepakR", "DineshK"],
  printGuestList: () => {
    console.log("We are going to this party tonight --> " + this.name);
  }
};
// event2.printGuestList();
//
// Example3 -- real function as a property of an object
// ES6 method definition syntax
const event3 = {
  name: "Service anniversary",
  guestList: ["AkshatT", "AnkitT", "DeepakR", "DineshK"],
  printGuestList() {
    console.log("We are going to this party tonight --> " + this.name);
    this.guestList.forEach(function (v) {
      console.log(v + " is attending the party!");
    });
  }
};
event3.printGuestList();
