let c = 1;
let d = 'Hello world';
let e = true;
let f = ['Hack Your Future'];

console.log('The Value of my variable c is : ' + c);
console.log('The type  of my variable c is : ' + typeof c);

console.log('The Value of my variable d is : ' + d);
console.log('The type  of my variable d is : ' + typeof d);

console.log('The Value of my variable e is : ' + e);
console.log('The type  of my variable e is : ' + typeof e);

console.log('The Value of my variable f is : ' + f);
console.log('The type  of my variable f is : ' + typeof f);

if (c===d){
	console.log( 'The variables c and d have the same value: '  + typeof c + typeof d )
} else {
	console.log( 'The variables c and d have a different value: '  + typeof c + typeof d  )
}

if (d===e){
	console.log( 'The variables d and e have the same value: '  + typeof d + typeof e )
} else {
	console.log( 'The variables d and e have a different value: '  + typeof d + typeof e  )
}


if (e===f){
	console.log( 'The variables e and f have the same value: '  + typeof e + typeof f )
} else {
	console.log( 'The variables e and f have a different value: '  + typeof e + typeof f  )
}


if (e===e){
	console.log( 'The variables e and e have the same value: '  + typeof e + typeof e )
} else {
	console.log( 'The variables e and e have a different value: '  + typeof e + typeof e  )
}


if (f===f){
	console.log( 'The variables f and f have the same value: '  + typeof f + typeof f )
} else {
	console.log( 'The variables f and f have a different value: '  + typeof f + typeof f  )
}
