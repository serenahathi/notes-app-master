var expect = {

  isTrue: function(assertion) {
    if (!assertion) {
      throw new Error("     Assertion failed: " + assertion + " is not truthy");
    } else {
      console.log("     %c Assertion is truthy", "color: green");
    }
  },

  toEqual: function(assertion, check) {
    if (assertion !== check) {
      throw new Error("     Assertion is not equal");
    } else {
      console.log("     %c Assertion is equal to " + check, "color: green");
    }
  },

  toInclude: function(assertion, check) {
    if (!assertion.includes(check)) {
      throw new Error(      "Assertion does not include " + check);
    } else {
      console.log("      %c Assertion does include " + check, "color: green");
    }
  },

  toBeEmpty: function(assertion) {
    if (assertion.length > 0) {
      throw new Error(      "Object is not empty");
    } else {
      console.log("      %c Assertion is empty", "color: green");
    }
  },
};


  var describe = function(string) {
    console.log(string);
  };

  var it = function(string) {
    console.log("   " + string)
  };

