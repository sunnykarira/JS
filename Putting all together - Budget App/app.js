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
            },
            budget: 0,
            percentage: -1
        };

        var calculateTotal = function(type){

            var sum = 0;
            data.allItems[type].forEach(function(curr, index, array){
                sum += curr.value;
            });

            //Update Totals
            data.totals[type] = sum;
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
            calculateBudget: function(){

                // Calculate total income and expenses
                calculateTotal('exp');
                calculateTotal('inc');

                // Calculate the budget i.e. Income - expenses
                data.budget = data.totals.inc - data.totals.exp;

                // Calculate the percentage of income that we have spent
                if(data.totals.inc > 0)
                    data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                else
                    data.percentage = -1;

            },
            getBudget: function(){

                return {
                    budget: data.budget,
                    percentage: data.percentage,
                    totalInc: data.totals.inc,
                    totalExp: data.totals.exp
                };

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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'

    }
    
    //Get input data
    return {
        getInput: function(){
            //Select Element
            
            return {
                //Will be wither inc or exp and convert to float
                 type : document.querySelector(DOMstrings.inputType).value, 
                 description : document.querySelector(DOMstrings.inputDescription).value,
                 value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
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
        displayBudget: function(obj){

            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            
            //Check on percentage
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';  
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }


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


    var updateBudget = function(){

        // Calculate the budget
        budgetCtrl.calculateBudget();

        // Return the budget
        var budget = budgetCtrl.getBudget();
        
        // Display the budget on UI
        //console.log(budget);
        UICtrl.displayBudget(budget);

    };
        
    
                                      
    
    var ctrlAddItem = function(){
       
        var input, newItem;
        
        // Get field input data
        input = UICtrl.getInput();
        //console.log(input.type + ' ' + input.description + ' ' + input.value);

        //Sanity Check
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){

            // Add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            
            // Add the new item to UI
            UICtrl.addListItem(newItem, input.type);
            
            //Clear the fields
            UICtrl.clearFields();


            // Calculate and Update updateBudget
            updateBudget();

        }
        


    };
    
        
    return {
        init: function(){
            console.log('Application has started!');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }
    
    
    
    
})(budgetController, UIController);


//Starting of the app
//Controller.init();

