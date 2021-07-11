function sayHi() {
  console.log("外面的Hello,", this.name);
}
var person1 = {
  name: "YvetteLau",
  sayHi: function () {
    setTimeout(function () {
      console.log("this01", this);

      console.log("里面的Hello,", this.name);
    });
  },
};
var person2 = {
  name: "Christina",
  sayHi: sayHi,
};

var name = "Wiliam";

person1.sayHi();

setTimeout(person2.sayHi, 100);

setTimeout(function () {
  console.log("this02", this);
  
  person2.sayHi();

}, 200);
