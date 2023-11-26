const makeChange = (c) => {
  // your name here
	let obj ={}
	let q=0, p=0,d=0,n=0;
	obj['q'] = parseInt(c/25);
	c = c%25;
	obj['d'] =parseInt(c/10);
	c=c%10;
	obj['n']= parseInt(c/5);
	c=c%5;
	obj['p']= c;
	return obj
	
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c))); 
