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
            this.percentage = -1;
        };

        Expense.prototype.calcPercentage = function(totalIncome){

            if(totalIncome > 0)
                this.percentage = Math.round((this.value / totalIncome)*100);
            else 
                this.percentage = -1;
        };

        Expense.prototype.getPercentage = function(){
            return this.percentage;
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
            deleteItem: function(type, ID){

                //[1,2,3,4,5], nextID = arr.length+1 . But if we delete elements than there will be a problem
                //[1,2,6,4,8] nextID = 9 //noprob here
                //ID = lastID + 1
                // We will find the ID which is actually in the array.

                var IDS = data.allItems[type].map(function(curr, index, array){
                    // Map returns a brand new array
                    return curr.id;

                });
                //console.log(IDS);

                index = IDS.indexOf(ID);

                if(index !== -1){
                    // Remove elements to splice
                    //Index you want to delete and how many elements you want to delete
                    data.allItems[type].splice(index, 1);
                }


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
            calculatePercentages: function(){

                /*
                a = 20
                b = 10
                c = 40
                income = 100
                percentages 
                a = 20/100 = 20%
                b = 10/100 = 10%
                c = 40/100 = 40%
                */
                data.allItems['exp'].forEach(function(curr, index, arr){
                    curr.calcPercentage(data.totals.inc);
                });


            },
            getPercentages: function(){

                var allPerc = data.allItems['exp'].map(function(curr){
                    return curr.getPercentage();
                });

                return allPerc;
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
        percentageLabel: '.budget__expenses--percentage',
        container:  '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'

    };
    

    var formatNumber = function(num, type){
            var numSplit, int, dec, sign;
            /*
            + or - befor number
            exactly 2 decimal points
            comma seperating the thousands


            2310.4567 ---> + 2,310.46
            */

            // Absolute Value
            num = Math.abs(num);

            // 2 decimal places
            num = num.toFixed(2);

            //Comma Seperating the thousand
            //Split using '.'
            numSplit = num.split('.');
            int = numSplit[0];
            dec = numSplit[1];

            if(int.length > 3){
                int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3 , int.length);
            }

            ;

            return (type === 'exp' ?  '-' : '+') + ' ' + int + '.' + dec;

        };

        var nodeListForEach = function(list, callback){

             for(var i=0; i < list.length; i++){
                 callback(list[i], i);
                }
        };

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
                 html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                
            }else if(type === 'exp'){
                    element = DOMstrings.expensesContainer;
                    html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace placeholder with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            //Insert HTML into the DOM
                // InsertAdjacent -- //beforbegin, afterbegin, beforebegin, afterend
                //Inserted as a child and as a last child
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
            
        },
        deleteListItem: function(selectorID){

            var el = document.getElementById(selectorID);
            //Go to parent and remove the child.
            el.parentNode.removeChild(el);

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
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            //Check on percentage
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';  
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }


        },
        displayPercentages: function(percentages){

            // Returns a dom list
            if(percentages.length > 0){
                var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

                

                // Creating forEach function for node Lists
                nodeListForEach(fields, function(curr, index){
                    if(percentages[index] > 0)
                        curr.textContent = percentages[index] + '%';
                    else
                        curr.textContent = '---';
                });

            }


        },
        //Date function.
        displayMonth: function(){
            var now, year, month, months;
            //Getting the Date from Date object constructor
            now = new Date();

            year = now.getFullYear();
            month = now.getMonth();
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'];

            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

        },
        //Changing focus on inputs
        changedType: function(){

            var fields = document.querySelectorAll(
                DOMstrings.inputType + ', ' +
                DOMstrings.inputDescription + ', ' +
                DOMstrings.inputValue);

            //Calling nodeList callback
            nodeListForEach(fields, function(curr){
                curr.classList.toggle('red-focus');
            });

            document.querySelector(DOMstrings.inputButton).classList.toggle('red');
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

            document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

            //Change Event color change of inc and exp
            document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

    var updatePercentages = function(){

        // Calculate these percentages
        budgetCtrl.calculatePercentages();

        // Read percentages from budget controller
        var percentages = budgetCtrl.getPercentages();

        // Update the UI with new percentages
        //console.log(percentages);
        UICtrl.displayPercentages(percentages);

    };


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

            // calculate and update percentages
            updatePercentages();

        }


    };
    
    //Access to event object
    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
        
        //target Property 
        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
        //DOM Traversal
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){

            //inc-1
            // String have methos. JS puts a wrapper on it converts it from primitive to use other functions
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]); // Convert to Integer

            // Delete the item from Data Structure
            budgetCtrl.deleteItem(type, ID);

            // Delete the item from UI.
            UICtrl.deleteListItem(itemID);

            // Update and show new Budget.
            updateBudget();

            // calculate and update percentages
            updatePercentages();
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

            UICtrl.displayMonth();
            setupEventListeners();
        }
    }
    
    
    
    
})(budgetController, UIController);


//Starting of the app
//Controller.init();

