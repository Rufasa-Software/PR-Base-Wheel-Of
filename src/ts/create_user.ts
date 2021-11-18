

import { animationCoin, btnAddUser, coinsSection, colorsBackground, inputNewUser, listUsers, usersArray } from "./elements";

export function newUser() : void
{

    btnAddUser.addEventListener('click', () => {
        if(inputNewUser.value !='') {
            usersArray.push(inputNewUser.value);
            inputNewUser.value = '';
            renderList();            
            
        }
        if(inputNewUser.value =='') {
            console.log('input vacio');
        }
        
    });

    
}

export function renderList() : void 
{
    coinsSection.innerHTML = '<section id= "coinSection"></section>';
    listUsers.innerHTML = '<ul id="ul-user"></ul>';
    usersArray.forEach(user => {
        const ulUsers = document.getElementById('ul-user') as HTMLElement;
        const allCoins = document.getElementById('coinSection') as HTMLDivElement;
        ulUsers.innerHTML += `<li class="new-player"><p>${user}</p> <div class="iconos"></div><i class="fas fa-edit"><i class="fas fa-trash-alt"></i></i></div></li>`;
        allCoins.innerHTML += `<section><div class="circle">
        <p>${user}</p></div></section>`;

        ulUsers.style.cssText = "margin-bottom: 2em; list-style: none;"
        
            
    });

}