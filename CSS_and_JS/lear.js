
/*
function updateInventory(arr1, arr2) {

  var inventory = { };

  for (var i in arr1)
  {
    var name = arr1[i][1];
    inventory[name] = arr1[i][0];
  }

  for (var i in arr2)
  {
     var name = arr2[i][1];
    if ( inventory[ name ] === undefined )
    {
      inventory[ name ] = arr2[i][0];
    }
    else
    {
      inventory[ name ] += arr2[i][0];
    }
  }

  var updates = Object.keys(inventory).sort();
  
  for (var i in updates)
  {
    var num = inventory[updates[i]];    
    var tmp = [ num, updates[i] ];

    updates[i] = tmp;
  }

  console.log(updates);
    
  return updates;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
*/
/*
function checkCashRegister(price, cash, cid) 
{  
  function roundTwo(x) { return Number(Math.round(x +'e2')+'e-2');  }

  var change = cash-price;
  change = roundTwo(change);
 
  var sum = 0;
  
  for (var i = 0; i < cid.length; i++) 
  {
    sum += cid[i][1];
  }
  
  sum = roundTwo(sum);

  if ( change > sum  )
  {
    return 'Insufficient Funds';
  }
  else if ( change === sum )
  {
    return 'Closed';    
  }

  var result = [];

  if (change >= 100)
  {
    var num = 100.00;
    var value = change / num + '';         // Change to string by adding '' to use regEx
    value = value.match(/\d+/);            // Using regEx to get digits before the decimal point.
    value = Number.parseInt(value) * num;  // Getting the value of quarters.

   if ( value > cid[8][1] )
    {
      value = cid[8][1];
    }

    var tmp = ["ONE HUNDRED", value];

    result.push(tmp);                     // Add to final array. 
    change = roundTwo(change - value);    // Update the value of change

  }

  if ( change > 0.0  )
  {
    return 'Insufficient Funds';
  }

  console.log("Sum: " + sum + "\nChange: " + change );

  return result;
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
                  ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

*/

/*
function checkCashRegister(price, cash, cid) 
{  
  function roundTwo(x) { return Number(Math.round(x +'e2')+'e-2');  }

  var change = cash-price;
  change = roundTwo(change);
 
  var sum = 0;
  
  for (var i = 0; i < cid.length; i++) 
  {
    sum += cid[i][1];
  }
  
  sum = roundTwo(sum);

  if ( change > sum  )
  {
    return 'Insufficient Funds';
  }
  else if ( change === sum )
  {
    return 'Closed';    
  }

  var result = [];

  if (change >= 100)
  {
    var num = 100.00;
    var value = change / num + '';         // Change to string by adding '' to use regEx
    value = value.match(/\d+/);            // Using regEx to get digits before the decimal point.
    value = Number.parseInt(value) * num;  // Getting the value of quarters.

   if ( value > cid[8][1] )
    {
      value = cid[8][1];
    }

    var tmp = ["ONE HUNDRED", value];

    result.push(tmp);                     // Add to final array. 
    change = roundTwo(change - value);    // Update the value of change

  }

  if (change >= 20.0)
  {
    var num = 20.00;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[7][1] )
    {
      value = cid[7][1];
    }

    var tmp = ["TWENTY", value];

    result.push(tmp);                   
    change = roundTwo(change - value);    

  }

  if (change >= 10.0)
  {
    var num = 10.00;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[6][1] )
    {
      value = cid[6][1];
    }

    var tmp = ["TEN", value];

    result.push(tmp);                   
    change = roundTwo(change - value);    

  }

  if (change >= 5.0)
  {
    var num = 5.00;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[5][1] )
    {
      value = cid[5][1];
    }

    var tmp = ["FIVE", value];

    result.push(tmp);                   
    change = roundTwo(change - value);    

  }

  if (change >= 1.0)
  {
    var num = 1.00;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[4][1] )
    {
      value = cid[4][1];
    }

    var tmp = ["ONE", value];

    result.push(tmp);                   
    change = roundTwo(change - value);    

  }

  if (change >= 0.25)
  {
    var num = 0.25;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[3][1] )
    {
      value = cid[3][1];
    }

    var tmp = ["QUARTER", value];

    result.push(tmp);         
    change =  roundTwo(change - value);   

  }

  if (change >= 0.10)
  {
    var num = 0.10;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[2][1] )
    {
      value = cid[2][1];
    }

    var tmp = ["DIME", value];

    result.push(tmp);         
    change =  roundTwo(change - value);
  }

  if (change >= 0.05)
  {
    var num = 0.05;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[1][1] )
    {
      value = cid[1][1];
    }

    var tmp = ["NICKEL", value];

    result.push(tmp);         
    change =  roundTwo(change - value);
  }

 if (change >= 0.01)
  {
    var num = 0.01;
    var value = change / num + '';         
    value = value.match(/\d+/);            
    value = Number.parseInt(value) * num; 

    if ( value > cid[0][1] )
    {
      value = cid[0][1];
    }

    var tmp = ["PENNY", value];

    result.push(tmp);         
    change =  roundTwo(change - value);
  }

  if ( change > 0.0  )
  {
    return 'Insufficient Funds';
  }

  console.log("Sum: " + sum + "\nChange: " + change );

  return result;
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
                  ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
*/

/*
function sym(args) 
{
  var finalResult = [];
  var num = 1;

  while( num < arguments.length)
  {
    for (var j = 0; j < arguments[0].length; j++) 
    {
      if ( arguments[num].includes(arguments[0][j]) )  // 2nd array has it.
      {
        var index = 0;
        var char =  arguments[0][j];

        while ( arguments[0].indexOf(char) >= 0)  // Use it to get rid of repeats. 
        {
          index = arguments[0].indexOf(char);
          delete arguments[0][index];
        }

        while ( arguments[num].indexOf(char) >= 0)
        {
          index = arguments[num].indexOf(char);
          delete arguments[num][index];
        }         
      }
    }

    arguments[0] = arguments[0].concat(arguments[num]);
    delete arguments[num];
    num++;
  }

  for (var i in arguments[0])
  {
    if ( !finalResult.includes(arguments[0][i]) )
    {   finalResult.push(arguments[0][i]);     }
  }

  return finalResult;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //1, 4, 5 
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
*/

/*
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if ( prop !== 'tracks' && value !== "" )
  {
      collection[id][prop] = value;
  } 

  if ( prop === 'tracks' && value !== "")
  {
    if ( collection[id][prop] === undefined)
    {
      collection[id][prop] = [];
    }
    
    collection[id][prop].push(value);
  }

  if (value === "" && collection[id][prop] !== undefined)
  {
    delete collection[id][prop];
  }

  //console.log(collection[id]);   
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me"); 
updateRecords(2548, "tracks", "");
*/

/*
function telephoneCheck(str) {

  var regEx;
  
  if (str.length < 10)
    {
      regEx = /^(\+?1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    }
  else
    {
      regEx = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    }

    return regEx.test(str);
}

console.log( telephoneCheck("555 555-5555") );
*/

/*
function addTogether() 
{  
  if (typeof arguments[0] !== "number")
    { return undefined; }

  if(arguments.length === 2 && typeof arguments[1] !== "number")
    { return undefined; }

  var x = arguments[0];

  if (arguments.length === 1)
  {
    return function(y) 
    {
      if (typeof arguments[0] !== "number")
      { return undefined; }

      return x + y;
    };
  }

  else return arguments[0] + arguments[1];
}

console.log( addTogether(2, 3) );
*/

/*
function truthCheck(collection, pre) {
  
 for (var i = 0; i < collection.length; i++)
  {
    if ( collection[i].hasOwnProperty(pre) === false ) 
    {
          return false;      
    }

    var tmp = collection[i][pre];      
    if ( checkFalsey(tmp) ) 
    {   return false;     }

  }
  
  return true; 
}

function checkFalsey (item)
{
  if (item === false || item === "" || item === 0 || item === null || item === undefined ) 
  {
     return true;
  }

  if( Number.isNaN(item) === true ) { return true; }

  else return false;
}

console.log( truthCheck([{"single": "yes"}], "single") );
console.log ( truthCheck([{"single": "double"}, {"single": NaN}], "single") );
*/

/*
function binaryAgent(str) {
  
  var tmp = str.split(" ");
  var letters = [];
  for (var i = 0; i < tmp.length; i++) 
  {
    tmp[i] = String.fromCharCode( parseInt(tmp[i], 2) );
  }
  
  return tmp.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 
             01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 
             01100110 01110101 01101110 00100001 00111111");
*/
/*
function flattenArrayOfArrays(a, r) 
{   
  for(var i = 0; i < a.length; i++)
  {
    if(a[i] instanceof Array)
    {
      flattenArrayOfArrays(a[i], r);
    }
    else
    {
      r.push( a[i] );
    }
  }
  
  return r;
}

function steamrollArray(arr) 
{
  r = [];  
  flattenArrayOfArrays(arr, r);  
  return r;
}

console.log( steamrollArray( [1, {}, [3, [[4]]]] ) );
*/

/*
function dropElements(arr, func) 
{ 
   for (var i = 0; i < arr.length; i++)
  {
      if ( func(arr[i]) === true)  return arr.slice(i);
  }
  
  return [];
}

console.log( dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) );
*/

/*
function findElement(arr, func) 
{  
  for (var i = 0; i < arr.length; i++)
  {
      if ( func(arr[i]) == true ) return arr[i];
  }
  
  return undefined;
}

console.log( findElement( [1, 5, 8, 9], function(num) { return num % 2 === 0; }) );
*/
/*
function getLCM(min, max)
{
  for(var i = 1; i <= min; i++) 
  {
    if( (i*max) % min === 0)  return (i*max);
  }
}

function smallestCommons(arr) 
{
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  
  var lcm = getLCM(min, max);

  for (var i = min+1; i < max; i++) 
  {
     if (lcm % i !== 0)   lcm = getLCM(i, lcm);
  }

  return lcm;
}

console.log( smallestCommons([1,13]) );
*/
/*
function isPrime(num)
{
  if (num < 2) return false;

   for (var i = 2; i <= Math.sqrt(num); i++) 
   {
      if (num % i === 0) 
      {  return false;   }
   }

   return true;
}

function sumPrimes(num) {
  
  var sum = 0;

  for (var i = 0; i <= num; i++) {

    if ( isPrime(i) ) 
    {   sum += i;    }

  }

  return sum;
}

console.log( sumPrimes(977) );
*/
/*
function sumFibs(num) {
  
  var sum = 0;
  var first = 1;
  var second = 1;
  var oddSum = 2;

  for (var i = 0; i < num; i++)
  {
    sum = first + second;
    first = second;
    second = sum;

    if (second % 2 == 1 && second <= num) 
    {
      oddSum += second;
    }   
  }
  
  return oddSum;
}

console.log( sumFibs(75024) );
*/
/*
function spinalCase(str) {
 
  var regEx = /[ _]/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

  return str.replace(regEx, '-');
}

console.log( spinalCase('thisIsSpinalTap') );
*/
/*
function convertHTML(str) {

  var regEx = /[&<>"']/g;

  var result = str.replace(regEx, function(char) {

    switch(char)
    {
      case '&': return '&amp;'; 
      case '<': return '&lt;'; 
      case '>': return '&gt;'; 
      case '"': return '&quot;'; 
      case "'": return '&apos;'; 
    }

  });

  return result;
}

console.log( convertHTML("Dolce & > Gabbana") );
*/
/*
function uniteUnique() {

  var result = [];

  for (var k = 0; k < arguments.length; k++) {

    for (var j = 0; j < arguments[k].length; j++) {      
    
        if ( result.includes( arguments[k][j] ) === false)
        {
          result.push(arguments[k][j]);
        }
    }
  }

  return result;
}
 
console.log( uniteUnique( [1, 3, 2], [5, 2, 1, 4], [2, 1])  );
*/
/*
function booWho(bool) {

  if (bool === true || bool === false) return true;
  else return false;
}

booWho(null);
*/

/*
function fearNotLetter(str) {

  var lower = str.toLowerCase();
  var start = lower.charCodeAt(0);
  var end = lower.charCodeAt(lower.length - 1);

  for (var i = 0; i < end-start; i++) {
    
      if (lower.charCodeAt(i) != start+i )
      { 
        //console.log( lower.charCodeAt(i) + ' ' + (start+i) );
        return String.fromCharCode( start+i );  
      }
  }

  return undefined;
}

console.log (fearNotLetter("ABCd") ); 
*/
/*
function pairElement(str) {
  
  var pairs = [];
  var AT = ['A', 'T'];
  var TA = ['T', 'A'];
  var CG = ['C', 'G'];
  var GC = ['G', 'C'];

  for (var i = 0; i < str.length; i++) {

    switch (str.charAt(i) )
    {
      case 'A': pairs.push(AT);
                break;
      case 'T': pairs.push(TA);
                break;
      case 'C': pairs.push(CG);
                break;
      case 'G': pairs.push(GC);
                break;
    }
    
  }
  
  return pairs;
}

console.log( pairElement("GCG") );
*/

/*
function translatePigLatin(str) {

  var index = hasVowel(str);

  if ( index === 0)
  {
      return str + 'way';
  }
  else if (index > 0)
  {
    return str.substr(index, str.length) + str.substr(0, index) + 'ay';
  }
  else
  {
    return str;
  }
}

function hasVowel (str)
{
  for (var i = 0; i < str.length; i++) 
  {
    switch ( str.charAt(i) )
    {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        return i;
      default:
        break;
    } 
  }

  return -1;
}

console.log( translatePigLatin("sky") );
*/
/*
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
*/
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