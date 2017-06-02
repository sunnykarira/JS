var yearofBirth = new Array(2000, 1978, 1998, 1965, 1982);
var emptyArray = new Array();

for(var i=0; i<yearofBirth.length; i++)
	emptyArray.push(yearofBirth[i]);

function calculateAge(yearofBirth){
	return 2017 - yearofBirth;
}

for(var i=0; i<yearofBirth.length; i++){

	var age = calculateAge(yearofBirth[i]);

	if(age  >= 18)
		console.log(' Full Age ' + age);
	else
		console.log('Not Full Age ' + age);
}

function printFullAge(yearofBirth){
	var boolArray = new Array();
	for(var i=0; i<yearofBirth.length; i++){
		if(calculateAge(yearofBirth[i]) >= 18){
			boolArray.push(true);
		}else{
			boolArray.push(false);
		}
	}
	return boolArray;
}

var boolArray = printFullAge(yearofBirth);
console.log(boolArray);