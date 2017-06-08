// Implementing Module Pattern

//IIFE allows us to have data privacy as it creates a new scope which is not visible of global scope.
// Secret of moduole pattern is that it returns an object of the functions which needed to be public.
// BUDGET CONTROLLER
var budgetController = (
    function(){
        
        //Function contructors for income and expense objects
        var Expense = function(id, description, value){
            this.id = id;
            this.description = description;
            this.value = value;
        };
        
        var Income = function(id, description, value){
            this.id = id;
            this.description = description;
            this.value = value;
        };
        
        
        //Array of expense objects
        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals:{
                exp: 0,
                inc: 0
            }
        };
        
        return {
            addItem: function(type, des, val){
                
                var newItem, ID;
                
                //[1,2,3,4,5], nextID = arr.length+1 . But if we delete elements than there will be a problem
                //[1,2,6,4,8] nextID = 9 //noprob here
                //ID = lastID + 1
                if(data.allItems[type].length > 0){
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                }else{
                    ID =0;
                }
                
                                
                //Create income or expense newitem
                if(type === 'exp'){
                    newItem = new Expense(ID, des, val);
                }else if(type === 'inc'){
                    newItem = new Income(ID, des, val);
                }
                
                //Adding it to DS
                data.allItems[type].push(newItem);
                
                //Return the new element
                return newItem;
                
            },
            testing: function(){
                console.log(data);
            }
        };
        
        
    
})(); 


// This works because of the help of closure.
// IIFE invokes immediately but then returns immediately but we have access to x and add because of clousre. remember execution stack
// and Scope Chain.


//budgetController.x;  // Not available
//budgetController.add(99); // Not available
//budgetController.publicTest(99) // Available


// Seperation of Concerns: Each part of application should only be interested in doing one thing independently
// UI CONTROLLER
var UIController = ( function() {
    
    //Not hard coded strings
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }
    
    //Get input data
    return {
        getInput: function(){
            //Select Element
            
            return {
                //Will be wither inc or exp
                 type : document.querySelector(DOMstrings.inputType).value, 
                 description : document.querySelector(DOMstrings.inputDescription).value,
                 value : document.querySelector(DOMstrings.inputValue).value
            }
        },
        
        addListItem: function(obj, type){
            var html, newHtml,element;
            
            // Create an HTML string with placeholder text
            if(type === 'inc'){
                 element = DOMstrings.incomeContainer;
                 html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                
            }else if(type === 'exp'){
                    element = DOMstrings.expensesContainer;
                    html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description% rent</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace placeholder with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            //Insert HTML into the DOM
                // InsertAdjacent -- //beforbegin, afterbegin, beforebegin, afterend
                //Inserted as a child and as a last child
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
            
        },
        clearFields: function(){
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            //QuerySelectorAll returns a list. Therefore we convert it to array
            // Slice. Returns a copy of list to array.
            fieldsArr = Array.prototype.slice.call(fields);
            
            //Clear all fields in loop forEach
            fieldsArr.forEach(function(/*Can recieve upto 3 arguments*/ current, index, array){
                current.value = "";
                
            });
            
            //Sets the focus on 1st element of the array
            fieldsArr[0].focus();
            
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
})();

// This module connects other two modules hence we pass arguments as Modules.
// if we do not pass as an argument we would need to change public methods as well and will make modules less independent.
// GLOBAL APP CONTROLLER
var Controller = ( function(budgetCtrl, UICtrl){
    
    var setupEventListeners = function(){
            //GET from UI Controller
            var DOM = UICtrl.getDOMstrings();
            // Click Event
            document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);


            //Keypress Event. Happens anywhere in the document --- Global Scope. Therefore we do not select any class or ID using querySelector
            document.addEventListener('keypress', /* It can recieve event parameters*/ function(event){

                // If enter was pressed
                if(event.keyCode ===  13 || /* Older Browser */ event.which === 13){
                    ctrlAddItem();
                }
            });
    }
        
    
                                      
    
    var ctrlAddItem = function(){
       
        var input, newItem;
        
        // Get field input data
        input = UICtrl.getInput();
        //console.log(input.type + ' ' + input.description + ' ' + input.value);
        
        // Add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        // Add the new item to UI
        UICtrl.addListItem(newItem, input.type);
        
        //Clear the fields
        UICtrl.clearFields();
        
        // Calculate the budget
        
        // Display the budget

    };
    
        
    return {
        init: function(){
            console.log('Application has started!');
            setupEventListeners();
        }
    }
    
    
    
    
})(budgetController, UIController);


//Starting of the app
Controller.init();

