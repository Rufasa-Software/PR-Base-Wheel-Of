
import { listUsers, usersArray } from "./elements";

export function deleteUser() : void
{
    const btnDeleteUser = document.querySelectorAll('.btn-delete');
   btnDeleteUser.forEach(btn => {
       btn.addEventListener ('click', (e)=> {
           const elementList = document.getElementById(`player-${e.target.id}`);
           const coinList = document.getElementById(`coin-${e.target.id}`);
           elementList.remove();
           coinList.remove();
           usersArray.forEach(user =>{
              if (user = elementList) {
                  usersArray.shift(user);
              }
           })
       })
   });
}