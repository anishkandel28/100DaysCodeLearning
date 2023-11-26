//make a rectangle and when we move mouse on that rectangle on the left side 
//we want to gradually change the color of that rectangle to red and when we move mouse to the rg=ight side we want to change the color to blue.


// =>

//setps
        //1) find out that if mouse has come or move on rectangle

var rectangle=document.querySelector("#rectangle");// dom selected

rectangle.addEventListener("mousemove", function(details){ //here we use addEventlistener to locate by using "mousemove" listener
        // console.log(rectangle.getBoundingClientRect())// getBoundingClientRect => will get know about the location of the reactangle by this
       
       //2)   now calculate that mouse is at center or at right-center 
         let rectangleLocation=rectangle.getBoundingClientRect();
         let insiderectVal=details.clientX-rectangleLocation.left;

         if(insiderectVal<rectangleLocation.width/2){
            // console.log("left") 
            let redcolor=gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insiderectVal);
            gsap.to(rectangle, {
                backgroundColor:`rgb(${redcolor},0 ,0)`,
            })
         }
         else{

                 let bluecolor=gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insiderectVal);
            gsap.to(rectangle, {
                backgroundColor:`rgb(0, 0 ,${bluecolor})`,
            })
            
            // console.log("right")
         }
         
         
   
    })
rectangle.addEventListener("mouseleave", function(){
    // rectangle.style.backgroundColor="white";
    gsap.to (rectangle,{
        backgroundColor:"white"
    })
})    

    // console.log (gsap.utils.mapRange(0, 250, 255, 0, 0))  //gasap.utils.mapRange(inMin, inMax, outMin, outMax, valueToMap)

 
         //3 now calculate that how far we are near to left, more left, need more intensed red color and vice versa to right side with blue color.
 