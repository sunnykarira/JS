var johnObj = {
	age : 20,
	height : 100
}

var skiObj = {

	age : 19,
	height : 30
}

var thirdObj = {
	age: 19,
	height: 9090
}

var j1 = johnObj.height + 5* johnObj.age;
var s1 = skiObj.height + 5*skiObj.age;
var t1 = thirdObj.height + 5*thirdObj.age;

if(j1 > s1 && j1 > t1){
	console.log('John wins! His Score: ' + j1);
}else if(s1 > j1 && s1 > t1){
	console.log('Ski Wins! Her Score ' + s1);
}else if(t1 > j1 && t1 > s1){
	console.log('Third Wins! His Score ' + t1);
}else{
	console.log('It\'s is a draw');
}