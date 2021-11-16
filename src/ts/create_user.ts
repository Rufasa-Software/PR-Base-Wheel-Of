

import { btnAddUser, inputNewUser, listUsers, usersArray } from "./elements";

export function newUser() : void
{

    btnAddUser.addEventListener('click', () => {
        if(inputNewUser.value !='') {
            usersArray.push(inputNewUser.value);
            renderList();            
        }
        if(inputNewUser.value =='') {
            console.log('input vacio');
        }
        
    });

    
}

export function renderList() : void 
{
    listUsers.innerHTML = '<ul id="ul-user"></ul>';
    usersArray.forEach(user => {
        const ulUsers = document.getElementById('ul-user') as HTMLElement;
        ulUsers.innerHTML += `<li class="new-player"><p>${user}</p> <div class="iconos"></div><i class="fas fa-edit"><i class="fas fa-trash-alt"></i></i></div></li>`;
    });

}