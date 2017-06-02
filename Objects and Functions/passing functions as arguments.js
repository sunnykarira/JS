// Lesson 50


// Similar to callback function task
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){

	// Empty Array
	var arrRes = new Array();

	for(var i=0; i < arr.length; i++){

		arrRes.push(fn(arr[i]));
	}

	return arrRes;
}

function calculateAge(el){
	return (2017 - el);
}

 function isFullAge(el){
 	if(el >= 18) return true;
 	else return false;
 }

function maxHeartRate(el){

	if(el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el));
	}else{
		return -1;
	}
	
}

ages = arrayCalc(years, calculateAge /* Callback because it
 is called later*/);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);


