
import { renderList } from "./create_user";
import {animationCoin, btnPlay, messageContainer, usersArray } from "./elements";

export function play() : void
{

    btnPlay.addEventListener('click',() => {
        if(usersArray.length > 1) {
         Array.from(animationCoin).forEach(() => {
           let i=0;
            animationCoin[i].className += "animationCoin";
         }); 
       
            let num=Math.floor(Math.random()*usersArray.length);
            let looser=usersArray[num];
            //console.log(looser);
            console.log(num);
            usersArray.splice(num,1);
           
            //console.log(usersArray[num]);
            renderList();
            messageContainer.innerHTML=`<div>El jugador ${looser} ha sido eliminado</div>`;
        }
            if (usersArray.length== 1){
                messageContainer.innerHTML=`<div>El ganador es ${usersArray[0]}</div>`;
            }
        
});
    

}