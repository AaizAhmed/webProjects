
function myReplace(str, before, after) {
  
  var character = before[0];
  var newAfter = '';
  if (character == character.toUpperCase()) {
      
    newAfter = after[0].toUpperCase() + after.substring(1, after.length);
  }
  if (character == character.toLowerCase()){
    
    newAfter = after[0].toLowerCase() + after.substring(1, after.length);
  }

  console.log( newAfter);

    return str.replace(before, newAfter);
}

console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") );

/*
function whatIsInAName(collection, source) {

 
  var num = 0;
  var result = [];
  var arr = Object.keys(source);

  /*
    It is a complicated problem. To solve it first we
    store the keys of the 2nd object called source in arr.
    Then we use 2 for loops to go over all the item of both
    objects. If the collections and source has the same property
    and the value of the property is also same, then we add it 
    in the result array. 
  *

  for (var i = 0; i < collection.length; i++) 
  {
    for (var j = 0; j < arr.length; j++) 
    {
      //Checking property
      if( collection[i].hasOwnProperty(arr[j]) )
      {
        //Checking the value of property.
        if ( collection[i][ arr[j] ] ==  source[arr[j]] )
          {   num++;  }
      }
    }

    // If num is equal to arr.length that means all the 
    // properties and their values matched. So we add this
    // collection object to the result array.
    if (num == arr.length) 
      { 
        result.push( collection[i] ); 
      }

       num = 0;
  }
  
  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
               { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) ;
*/
/*
function convertToRoman(num) {

 if ( num <= 0) { return 'Wrong Input'; }

 var str = 'I'.repeat(num);

 var result = str.replace(/IIIII/ig, 'V')
                 .replace(/IIII/ig, 'IV')
                 .replace(/VV/ig, "X")
                 .replace(/VIV/ig, "IX")
                 .replace(/XXXXX/ig, "L")
                 .replace(/XXXX/ig, "XL")
                 .replace(/LL/ig, "C")
                 .replace(/LXL/ig, "XC")
                 .replace(/CCCCC/ig, "D")
                 .replace(/CCCC/ig, "CD")
                 .replace(/DD/ig, "M")
                 .replace(/DCD/ig, "CM");

  return result;
}

function convertToDecimal(str) {

  var result = str.replace(/CM/ig, "DCD")
                   .replace(/M/ig, "DD")
                   .replace(/CD/ig, "CCCC")
                   .replace(/D/ig, "CCCCC")
                   .replace(/XC/ig, "LXL")
                   .replace(/C/ig, "LL")
                   .replace(/XL/ig, "XXXX")
                   .replace(/L/ig, "XXXXX")
                   .replace(/IX/ig, "VIV")
                   .replace(/X/ig, "VV")
                   .replace(/IV/ig, 'IIII')
                   .replace(/V/ig, 'IIIII');

  var total = 0;
  for (var i = 0; i < result.length; i++) {   total++;  }

  return total;
}

console.log ( convertToRoman(3999) );
console.log ( convertToDecimal('lxxiv') );
*/

/*
function diffArray(arr1, arr2) {
  var newArr = [];

  for(var i = 0; i < arr2.length; i++)
  {
    if ( !arr1.includes(arr2[i]) )
    {
        newArr.push(arr2[i]);
    }
  }

  for(var i = 0; i < arr1.length; i++)
  {
    if ( !arr2.includes(arr1[i]) )
    {
        newArr.push(arr1[i]);
    }
  }  

  return newArr;
}

console.log (diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) );
*/
/*
function sumAll(arr) {
  
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  
 var sum = 0;
 for (var i = max; i > min-1; i--)
 {
 	sum += i;
 }
  return sum;
}

console.log( sumAll( [1, 4] ) );
*/

/*
function rot13(str) { // LBH QVQ VG!
  
  var decode = '';
  
	var i = 0;

while (i < str.length)
{

if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 )
    { 
       decode += String.fromCharCode(shift(str.charCodeAt(i)) );
    }
    else
    {
       decode += str[i];
    }

	i++;
}
  return decode;
}
  
  function shift(num)
  {
    if (num < 78)
    {
    	return num + 13;
    }
    else 
    {
    	return num - 13; 
    }
  }

 // Change the inputs below to test
 console.log (rot13("SERR PBQR PNZC") );
*/
/*
function seeker (value) {
  
  return value != this; 
}

function destroyer(arr) {
  
  var tmp = arguments[0];
  
  for (var i = 1; i < arr.length; i++){
    
    tmp = tmp.filter(seeker, arguments[i]);
    }
  
  return tmp;
  }
console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3) );

/*
function bouncer(arr) {
  
 var tmp = [] = arr.filter(Boolean);  
  return tmp;
}

console.log( bouncer([false, null, 0, NaN, undefined, "ate", ""]) );
*/
/*
function mutation(arr) {

	var first = arr[0].toLowerCase();
	var second = arr[1].toLowerCase();



  return first.includes(second);
}
mutation(["hello", "hey"]);
*/
/*
function slasher(arr, howMany) {
  
  var remove = arr.splice(howMany, arr.length-howMany);
  console.log(remove);

  return remove;
}

slasher([1, 2, 3], 1);
*/

/*
function chunkArrayInGroups(arr, size) {
  
  var result = [];

  var diff = arr.length % size;
  var div = parseInt( arr.length/size );

  for (var i = 0; i < div; i++)
  {
  	 result.push( arr.slice(i*size, (i*size)+size) );
  }

  if (diff != 0) {
  result.push (arr.slice(size*result.length, arr.length));
}
 
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
*/

/*
function truncateString(str, num) {
  
  var tmp = '';
  if (num >= str.length) {  return str;  }
  if (num <= 3) 
  {
  	tmp = str.substring(0, num);
  	tmp += '...';
  }
  else
  {
  	tmp = str.substring(0, num-3);
  	tmp += '...';
  }
  
  return tmp;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
*/
/*
function repeatStringNumTimes(str, num) {
  
  if (num <= 0) { return '';  }
  
  var tmp = '';
  
  for (var i = 0; i < num; i++)
    {
      tmp += str;
    }
  
  console.log(tmp);

  return tmp;
}

repeatStringNumTimes("abc", 3);
*/
/*
function largestOfFour(arr) {
  
  	var lar = 0; var largest = [];
	for (var i = 0; i < arr.length; i++)
	{
		for (var j = 0; j < arr[i].length; j++)
		{
			if (lar < arr[i][j]) 
			{
				lar = arr[i][j];
			}

			largest[i] = lar;
		}
		lar = 0;
	}
	console.log(largest);

  return largest;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/