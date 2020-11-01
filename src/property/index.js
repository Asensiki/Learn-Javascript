/**
 * 原型继承
 */

// 父类
// function Vehicle() {
//   this.name = "Vehicle";
//   this.category = ["Benz", "BMW", "Audi"];
// }
// Vehicle.prototype.getCategory = function () {
//   console.log(this.category);
// };
// 子类
// function Benz() {}
// Benz.prototype = new Vehicle();

// 子类实例
// const A_Class = new Benz();
// A_Class.category.push("A-200");

// const B_Class = new Benz();
// B_Class.category.push("B-200");

// 共享引用类型
// A_Class.getCategory();
// B_Class.getCategory();

/**
 * 借用构造函数
 */

function Vehicle(category) {
  this.category = category;
}
Vehicle.prototype.getCategory = function () {
  console.log(this.category);
};

function Benz(category) {
  Vehicle.call(this, category);
}
const a_class = new Benz(["a-180", "a-200"]);
console.log(a_class.category);
a_class.getCategory();
