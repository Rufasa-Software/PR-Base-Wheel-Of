 
let usersArray: string[] = [];
const app = document.getElementById('app') as HTMLElement;
const listUsers = document.getElementById('players') as HTMLElement;
const inputNewUser = document.getElementById('name') as HTMLInputElement;
const btnAddUser = document.getElementById('btn-add-user') as HTMLInputElement;

btnAddUser.addEventListener('click', newUser);

export function newUser() {
    if(inputNewUser.value !='') {
        usersArray.push(inputNewUser.value);
    }
}

export function renderList(){
    listUsers.innerHTML = '<ul id="ul-user"></ul>';
    usersArray.forEach(user => {
        const ulUsers = document.getElementById('ul-user') as HTMLElement;
        ulUsers.innerHTML += `<li class="new-player"><p>${user}</p> <div class="iconos"></div><i class="fas fa-edit"><i class="fas fa-trash-alt"></i></i></div></li>`;
    });

}