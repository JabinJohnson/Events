const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const element = document.getElementById("First");
element.addEventListener("click", function() {
  document.getElementById("One").innerHTML = "Foo";
});

const element2 = document.getElementById("Second");
element2.addEventListener("click", function() {
  document.getElementById("Two").innerHTML = "Bar";
});

const element3 = document.getElementById("Last");
element3.addEventListener("click", function() {
  document.getElementById("Final").innerHTML = "FooBar";
});