
function nextPrime(num)
{
   for (var index = num; true; index++)
   {
      if ( isPrime(index) )
      {
         return index;
      }
   }
}

function isPrime(num)
{
  if (num < 2) 
   {
      return false;
   }

   for (var index = 2; index <= Math.sqrt(num); index++) 
   {
      if (num % index === 0) 
      {  
         return false;
      }
   }

   return true;
}

function primeFactors (num)
{
   var factors = [];

   for (var index = 2; index < num; index++)
   {
      if ( isPrime(index) )
      {
         if (num % index === 0)
         {
            factors.push(index);
         }
      }
   }

   return factors
}

function nthFib(num)
{
   var first = 0;
   var second = 1;
   var next = 0;

   if (num === 1)
   {
      return first;
   }

   if (num === 2)
   {
      return second;
   }

   for (var count = 3; count <= num; count++)
   {
      next = first + second;
      first = second;
      second = next;
   }

   return next;
}

console.log( nthFib(2) );
console.log( nthFib(8) );
console.log( nthFib(9) );

