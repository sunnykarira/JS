/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element{
	constructor(name, buildYear){
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Element{
	constructor(name, buildYear, area, numTrees){
		super(name, buildYear);
		this.area = area; // km2
		this.numTrees = numTrees;
	}

	treeDensity(){
		const density = this.numTrees / this.area;
		console.log(`${this.name} has a tree density of ${density} trees per square km.`);
	}
}

class Street extends Element{
	constructor(name, buildYear, length, size = 3){
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}

	classifyStreet(){
		const classification = new Map();
		classification.set(1, 'Tiny');
		classification.set(2, 'Small');
		classification.set(3, 'Normal');
		classification.set(4, 'Big');
		classification.set(5, 'Huge');
		console.log(`${this.name}, build in ${this.buildYear} is a ${classification.get(this.size)} street`);
	}
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), 
new Park('National Park', 1894, 2.9, 3540), 
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.4, 4),
new Street('EverGreen Street', 1008, 2.7, 2), 
new Street('4th Street', 2015, 0.8),
new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr){

	//Reduce Method
	// Accumulate value into a single value
	const sum  = arr.reduce((previous, current, index) => previous + current, 0 /*Initial Value*/);

	return [sum, sum / arr.length];
}

function reportParks(p){

	console.log('-------------------PARKS REPORT--------------------');

	// Density
	p.forEach( el => el.treeDensity());

	// Average Age
	const ages = p.map(curr => new Date().getFullYear() - curr.buildYear);
	const [totalAge, avgAge] = calc(ages);
	console.log(`Our ${p.length} parks have an ovg of ${avgAge} years.`);

	// Which park has more than 1000 trees
	const i = p.map(el => el.numTrees).findIndex(el => el>=1000);
	console.log(`${p[i].name} has more than 1000 trees`);

}

function reportStreets(s){

	console.log('-------------------STREETS REPORT--------------------');
	// Total and avg length of town's street
	const [totalLength, avgLength] = calc(s.map(el => el.length));
	console.log(`Out ${s.length} streets have a total with an average of ${avgLength} Km.`);

	// Classify Streets
	s.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);

