
let nums: number[] = [ 1, 2, 3, 4, 5 ];

console.log( nums );

// inserts new element at the end ---- stack.push(e) | queue.offer(e)
nums.push( 60 );
console.log( nums );

// removed element from the end ---- stack.pop()
nums.pop();
console.log( nums );

console.log( nums.length );

// removes and returns first element of array // ---- queue.poll()
nums.shift();

console.log( nums );

/**
 * inserts an element at particular index in given array
 */
let insert: <T> ( arr: T[], element: T, index: number ) => T[];

insert = ( arr, e, index ) => {
	let leftHalf = arr.slice( 0, index );
	let rightHalf = arr.slice( index, arr.length );

	return leftHalf.concat( e, rightHalf );
};

nums = insert( nums, 7, 2 );
console.log( nums );