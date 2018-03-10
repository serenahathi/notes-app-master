describe("radius check");
it("default radius is 10");
function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  expect.isTrue(circle.radius === 10);
};
testCircleRadiusDefaultsTo10();

describe("diameter check");
it("default diameter is 20");
function testCircleDiameterEquals20() {
  var circle = new Circle();
  expect.toEqual(circle.diameter, 20);
};
testCircleDiameterEquals20();

describe("quantity check");
it("quantity includes 50");
function testCircleQuantityIncludes50() {
 var circle = new Circle();
 expect.toInclude(circle.quantity, 50);
};
testCircleQuantityIncludes50();


describe("colour check");
it("colour is empty");
 function testCircleColourIsEmpty() {
  var circle = new Circle();
  expect.toBeEmpty(circle.colour);
};
testCircleColourIsEmpty();