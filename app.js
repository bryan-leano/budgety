// BUDGET CONTROLLER
var budgetController = (function() {

  // some code

})();


// UI CONTROLLER
var UIController = (function() {

  //some code

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddIteam = function() {
    // 1. Get the field input data

    // 2. Add the item to the budget controller

    // 3. Add the new item to the user interface

    // 4. Calculate budget

    // 5. Display budget on the UI

    console.log('It works!');
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddIteam);

  document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddIteam();

    };

  });

})(budgetController, UIController);