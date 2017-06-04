// Implementing Module Pattern

//IIFE allows us to have data privacy as it creates a new scope which is not visible of global scope.
// Secret of moduole pattern is that it returns an object of the functions which needed to be public.
var budgetController = (
    function(){
        // These are private
        var x = 23;
        var add = function(a){
            return x+a;
        }
        
        // This function object will make internal function public.
        return {
            publicTest: function(b){
               return add(b);
            }
        }
    }
)(); 

// This works because of the help of closure.
// IIFE invokes immediately but then returns immediately but we have access to x and add because of clousre. remember execution stack
// and Scope Chain.


//budgetController.x;  // Not available
//budgetController.add(99); // Not available
//budgetController.publicTest(99) // Available


// Seperation of Concerns: Each part of application should only be interested in doing one thing independently
var UIController = ( function() {
    
    // Some Code
})();

// This module connects other two modules hence we pass arguments as Modules.
// if we do not pass as an argument we would need to change public methods as well and will make modules less independent.
var Controller = ( function(budgetCtrl, UICtrl){
    
    var z = budgetCtrl.publicTest(5);
    
    return {
        anotherPublic : function(){
            console.log(z);
        }
    }
    
})(budgetController, UIController);


