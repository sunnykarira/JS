// Lesson 51


// Closures
function interviewQuestion(job){

	if(job === 'Designer'){
		// Anonymous function bcs it does not have a name
		return function(name){
			console.log(name + ' , can you please ' +
				'explain what is UX design?');
		}
	}else if( job === 'Teacher'){

		return function(name){
			console.log(name + ' What subject do you teach?')
		}
	}else {
		return function(name){
			console.log('Hello ' + name + ' What do you do?');
		}
	}

}

var teacherQuestion = interviewQuestion('Teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('Designer');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mike');

interviewQuestion('Teacher')('Mark'); // Left to right associative