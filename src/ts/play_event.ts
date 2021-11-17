
import { renderList } from "./create_user";
import {btnPlay, coinsSection, usersArray } from "./elements";

export function play() : void
{

    btnPlay.addEventListener('click',() => {
        if(usersArray.length > 1) {
            let num=Math.floor(Math.random()*usersArray.length);
           
            let looser=usersArray[num];
            //console.log(looser);
            console.log(num);
            usersArray.splice(num,1);
           
            //coinsSection.innerHTML=`<div>El jugador ${looser} ha sido eliminado</div>`;
            alert ("El jugador" + looser + "ha sido eliminado");
            //console.log(usersArray[num]);
            renderList();
            if (usersArray.length== 1){
                let mensaje=document.getElementById('coin');
                mensaje.innerHTML=`<div>El ganador es ${usersArray[0]}</div>`;
            }
        }

    })
}