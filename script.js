
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(let i=0; i<numberOfDrumButton ;i++){
   document.querySelectorAll(".drum") [i].addEventListener('click',
   function(){//anonymouus function{
      console.log(this);
      var buttonInnerHTML=this.innerHTML;
      console.log(buttonInnerHTML);
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
   }
   );
   


}





 

function makeSound(key){
    switch(key){
        case 's' :
            var musicObject = new Audio('asset/music/tom-1.mp3');
            musicObject.play();
         break;
          case 'r' :
                var musicObject = new Audio('asset/music/tom-2.mp3');
                musicObject.play();
         break;

             case 'g' :
            var musicObject = new Audio('asses/music/tom-3.mp3');
            musicObject.play();
         break;
         case 'm' :
            var musicObject = new Audio('asset/music/tom-4.mp3');
            musicObject.play();
         break;
         case 'p' :
            var musicObject = new Audio('asset/music/snare.mp3');
            musicObject.play();
         break;
         case 'd' :
            var musicObject = new Audio('asset/music/crash.mp3');
            musicObject.play();
         break;
         case 'n' :
            var musicObject = new Audio('asset/music/kick-bass.mp3');
            musicObject.play();
         break; 


    }

}

function buttonAnimation(currentkey){
   var activeButton = document.querySelector("."+currentkey);
   activeButton.classList.add("pressed");

   setTimeOut( 
      function(){
         activeButton.classList.remove("pressed");

      }
       ,100);
   }

