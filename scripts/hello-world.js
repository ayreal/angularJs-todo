// no 2nd paramater here because you don't want angular to create a new model, but to look
//for the existing to-to list app.

angular
  .module("todoListApp")

  // attaching a directive to module:
  // first paramater is the name of your directive
  // 2nd paramater is a callback function that returns an object
  .directive("helloWorld", function() {
    return {
      template: "This is the helloWorld directive",
      // if you want this only to be used as an element or an element attribute
      restrict: "E"
    };
  });
