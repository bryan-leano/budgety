// BUDGET CONTROLLER
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

})();

// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  }

  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,//will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddIteam);
    
      document.addEventListener('keypress', function(event) {
    
        if (event.keyCode === 13 || event.which === 13) {
          ctrlAddIteam();
        };
      });
  };


  var ctrlAddIteam = function() {

    // 1. Get the field input data
    var input = UICtrl.getinput();

    // 2. Add the item to the budget controller

    // 3. Add the new item to the user interface

    // 4. Calculate budget

    // 5. Display budget on the UI
  };

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();