$fn=100;


//筷子

translate([130,10,50])
rotate([0,78,0])
cylinder(d1=2.5,d2=8,h=130);

translate([130,-18,45])
rotate([0,80,0])
cylinder(d1=2.5,d2=8,h=130);

//汤圆
union(){


  difference(){
   translate([140,-4,50])
   sphere(14);
   translate([120,-2,65])
  sphere(19);
   }
   
   translate([145,-4,65])
   scale([0.45,0.25,1.1])
   sphere(8);
 
}




//勺子
module scoop(){

  rotate([-90,90,0])
  cylinder(h=40,r=2.15);
  
  translate([-1,-16,2])
  
  difference(){
  sphere(17);
  translate([0,0,4])
  sphere(17.1);
  
  }

}
scoop();







//汤圆
union(){


  difference(){
   translate([-0.5,-17,0.5])
   sphere(14);
   translate([-11,-30,18])
  sphere(15);
   }
   
   translate([4.25,-17,14])
   scale([0.45,0.25,1.1])
   sphere(8);
 
}
//盒子
minkowski(){
$fn=52; 
  difference(){
  
    translate([30,-60,-30])
    cube([100,100,30]);
    
  
    translate([80,-55,-25])
    cube([44,44,44]);
    
    translate([80,-10,-25])
    cube([44,44,44]);
    
    translate([35,-10,-25])
    cube([44,44,44]);
    
    translate([35,-55,-25])
    cube([44,44,44]);
       
  }
  sphere(2);
  
}


union(){

 translate([57,-34,-5])
 sphere(20);
 translate([53,-34,16])
 scale([0.45,0.25,1.1])
 sphere(9);
 translate([61,-34,16])
 scale([0.45,0.25,1.1])
 sphere(9);
}

union(){

 translate([102,-34,-5])
 sphere(20);
 translate([96,-34,16])
 scale([0.45,0.25,1.1])
 sphere(8);
 translate([108,-34,16])
 scale([0.45,0.25,1.1])
 sphere(8);
}

union(){

 translate([57,12,-5])
 sphere(20);
 translate([51,12,16])
 scale([0.45,0.25,1.1])
 sphere(8);
 translate([63,12,16])
 scale([0.45,0.25,1.1])
 sphere(8);
}

union(){

 translate([102,12,-5])
 sphere(20);
 translate([108,12,16])
 sphere(6);
 translate([96,12,16])
 sphere(6);
}



//文字
color([0.5,0.5,0.5])
translate([34,-62,-10])
rotate([90,0,0])
linear_extrude(2.5)
text("Sweet dumplings",size=7,font="Elephant",$fn=52);

color([1,0.5,0.5])
translate([65,-62,-27])
rotate([90,0,0])
linear_extrude(2.5)
text("Marry&Yosa&Yunhan",size=5,$fn=52);
























