/// Step 01  ///

var empty_Erray1 = [] ;


///  Step  02  ///

var empty_Erray2 = [] ;


///  Step  03  ///

var string_Array = ["Vagitables"] ;
document.write(string_Array + "<br>") ;


///  Step  04  ///

var number_Array = [ 1 ] ;
document.write(number_Array + "<br>") ;



///  Step  05  ///

var boolean_Array = [true] ;
document.write(boolean_Array + "<br>") ;



///  Step  06  ///

var mixed_Array = [string_Array , number_Array , boolean_Array] ;
document.write(mixed_Array + "<br>") ;



///  Step  07  ///

var education_Array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualifications:</h2>");
        
for (var i = 0; i < education_Array.length; i++) {
    document.write( (i + 1) + ") " + education_Array[i] +"<br>");
 }

var string = "<br>" ;
document.write(string) ;
///  Step  08  ///
var students_Name = ["Micheal" , "John" , "Jony"] ;

var students_Score = [320 , 230 , 480] ;

var percentage1 = students_Score[0] * 100 / 500 ;
document.write("The score of " , students_Name[0] , " is " , students_Score[0] , " . " , "Percentage: " , percentage1 , "%" , "<br>") ;

var percentage2 = students_Score[1] * 100 / 500 ;
document.write("The score of " , students_Name[1] , " is " , students_Score[1] , " . " , "Percentage: " , percentage2 , "%" , "<br>") ;

var percentage3 = students_Score[2] * 100 / 500 ;
document.write("The score of " , students_Name[2] , " is " , students_Score[2] , " . " , "Percentage: " , percentage3 , "%" , "<br>") ;




///  Step  09  ///

var color_Names = ["  Red  " , "Yellow  " , "  Blue  "] ;
document.write(color_Names +"<br>") ;

var user_input1 = prompt("Which color you wants to add to the beginning of the Array?") ;

color_Names .unshift(user_input1) ;
document.write( color_Names +"<br>") ;

var user_input2 = prompt("Which color you wants to add to the end of the Array?") ;

color_Names .push(user_input2) ;
document.write(color_Names +"<br>") ;

color_Names .unshift(["Green" , "Pink"]);
document.write(color_Names +"<br>") ;

color_Names.pop([user_input1]) ;
document.write(color_Names + "<br>") ;

color_Names .shift([user_input2]) ;
document.write(color_Names + "<br>") ;



///  Step  11  ///

document.write("<h2>Selected Cities List:</h2>") ;

var cities = ["Karachi " , " Lahore " , " Islamabad " , " Quetta " , " Peshawar "] ;
document.write(cities + "<br>");
document.write(cities[2], cities[3] + "<br>") ;





///  Step  12  ///

var array = ["This " , " is " , " my " , " cat "] ;
document.write(array + "<br>") ;

var join_Method = array .join(" ") ;
document.write(join_Method + "<br>") ;   



/// Step  13  ///

var arr = ["Keyboard " , " Mouse " , " Printer " , " Moniter "] ;
document.write(arr + "<br>") ;


///  Step  14  ///

var opp_arr = [arr[3] , arr[2]  , arr[1] , arr[0]] ;
document.write(opp_arr) ;














  




