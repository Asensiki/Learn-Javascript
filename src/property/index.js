
function parent() {
  this.name = "parent";
  this.numbers = [1, 2, 3];
}
parent.prototype.getnumber = function () {
  console.log(this.numbers);
};

function child() {}
child.prototype = new parent();

const child_a = new child();

child_a.getnumber()
console.log(child_a);
