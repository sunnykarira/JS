var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes'){
	console.log(name + ' is married!' );
}else{

	console.log(name + ' will marry soon.')
}

isMarried = false;

if(isMarried){
	console.log('YES');
}else{
	console.log('NO')
}


// === and  ==
// == does type coersion
// === does not type coersion

if(23  === "23"){

	console.log("Something to print....");
}