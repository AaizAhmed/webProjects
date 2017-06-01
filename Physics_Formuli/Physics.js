/*
   public static double kineticEnergy (double mass, double velocity) {
      
      double kinetic = mass * velocity * velocity;
      kinetic = kinetic/2;
      
      return kinetic;      
   }
   
   public static double potentialEnergy (double mass, double height) {
      
      double potential = mass * g * height;
            
      return potential;    
   }
*/

var currentFormula;

const G = 6.674e-11;
const g = 9.8;

function display()
{
   $('#'+currentFormula).addClass('hide');
   currentFormula = $('input:radio:checked').attr('value');
   $('#'+currentFormula).removeClass('hide');
}

function format_num(num, pow)    
{   
   var format = '' + num.toExponential();
   format = format.split('e');  
   num = format[0]

  // Number() can also be used in place of parseFloat()
  num = parseFloat( Math.round(num +'e'+pow) + 'e'+'-'+pow );

  return num + ' E ' + format[1];    
}

function force() 
{
   var mass = Number( $('input[name=mass_force]').val() );
   var acc = Number( $('input[name=acc_force]').val() );
   
   $('#force_result').text(mass * acc);
}

function force_attraction() 
{
   var mass_one = Number( $('input[name=mass_one]').val() );
   var mass_two = Number( $('input[name=mass_two]').val() );
   var radius   = Number( $('input[name=radius]').val() );
   
   var force_attr = G * mass_one * mass_two;
   force_attr = force_attr / (radius * radius);

   force_attr = format_num(force_attr, 4);
   $('#force_attr_result').text( force_attr );
}

function temp_celsius() 
{
   var temp_fah = Number( $('input[name=temp_fah]').val() );

   var temp_cel = 5 * (temp_fah - 32);
   temp_cel = temp_cel/9;
      
   $('#temp_cel_result').text( temp_cel );
}

function temp_fahrenheit() 
{
   var temp_cel = Number( $('input[name=temp_cel]').val() );

   var temp_fah = (9 * temp_cel) / 5;
   temp_fah = temp_fah + 32;
      
   $('#temp_fah_result').text( temp_fah );
}


// How to parse scientific enteries 4 * 10^3
// Make an interface where users can add numbers in scientific notation