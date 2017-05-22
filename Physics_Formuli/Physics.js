/*

   public static final double G = 6.673e-11, g = 9.8;
   
   public static double force (double mass, double acc) {
      
      double force = mass * acc; 
      return force;
   }
   
   public static double forceAttraction (double mass1, double mass2, double radius) {
      
      double forceAttr = G * mass1 * mass2;
      forceAttr = forceAttr / (radius * radius);
      
      return forceAttr;
      
   }
   
   public static double tempCel (double tempF) {
      
      double tempC = 5 * (tempF - 32);
      tempC = tempC/9;
      
      return tempC;
      
   }
   
   public static double tempFah (double tempC) {
      
      double tempFah = (9 * tempC) / 5;
      tempFah = tempFah + 32;
      
      return tempFah;      
   }
   
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


// How to parse scientific enteries 4 * 10^3
// Make an interface where users can add numbers in scientific notation