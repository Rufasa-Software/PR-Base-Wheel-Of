function $ed9eb8f1e74ff692$export$7d0f10f273c0438a() {
    const btnDeleteUser = document.querySelectorAll('.btn-delete');
    btnDeleteUser.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            let idStrIc = e.target.id;
            const elementList = document.getElementById(`player-${idStrIc}`);
            const coinList = document.getElementById(`coin-${idStrIc}`);
            elementList.remove();
            coinList.remove();
        });
    });
}


let $8d6418a2f514b6b2$export$1133b9531d3f2eed = [];
const $8d6418a2f514b6b2$export$729c8b7179294ba = document.getElementById('app');
const $8d6418a2f514b6b2$export$1c4bb93498097c2d = document.getElementById('list_of_names');
const $8d6418a2f514b6b2$export$83a1beb6838c67d3 = document.getElementById('name');
const $8d6418a2f514b6b2$export$27b6c9c16d732fe3 = document.getElementById('btn-add-user');
const $8d6418a2f514b6b2$export$17b2c64b735adf3f = document.getElementById('coin');
const $8d6418a2f514b6b2$export$26585493b37ca6e4 = document.getElementById('play');
const $8d6418a2f514b6b2$export$fbd87b42ad52786a = document.getElementById('messageContainer');
const $8d6418a2f514b6b2$export$542774dbb3e5c204 = document.getElementsByClassName('circle');
const $8d6418a2f514b6b2$export$ca1f8303d53b74c0 = [
    "#FDFCB6",
    "#FFC6FF",
    "#CAFCBF",
    "#FFD6A5",
    "#A0A0A0",
    "#BCB2FF"
]; /*export const btnDeleteUser = document.querySelectorAll('.fas-trash-alt');*/ 


function $09367350d85fae16$export$eb3f7f9055d38f7c() {
    $8d6418a2f514b6b2$export$27b6c9c16d732fe3.addEventListener('click', ()=>{
        if ($8d6418a2f514b6b2$export$83a1beb6838c67d3.value != '') {
            $8d6418a2f514b6b2$export$1133b9531d3f2eed.push($8d6418a2f514b6b2$export$83a1beb6838c67d3.value);
            $8d6418a2f514b6b2$export$83a1beb6838c67d3.value = '';
            $09367350d85fae16$export$4bf387f59bfc6d67();
            $ed9eb8f1e74ff692$export$7d0f10f273c0438a();
        }
        if ($8d6418a2f514b6b2$export$83a1beb6838c67d3.value == '') console.log('input vacio');
    });
}
function $09367350d85fae16$export$4bf387f59bfc6d67() {
    $8d6418a2f514b6b2$export$17b2c64b735adf3f.innerHTML = '<section id= "coinSection"></section>';
    $8d6418a2f514b6b2$export$1c4bb93498097c2d.innerHTML = '<ul id="ul-user"></ul>';
    $8d6418a2f514b6b2$export$1133b9531d3f2eed.forEach((user)=>{
        const ulUsers = document.getElementById('ul-user');
        const allCoins = document.getElementById('coinSection');
        ulUsers.innerHTML += `<li class="new-player" id="player-${user}"><p>${user}</p> <div class="iconos"><i class="fas fa-trash-alt btn-delete" id=${user}></i><i class="fas fa-edit"></div></li>`;
        allCoins.innerHTML += `<section><div class="circle" id="coin-${user}"><p>${user}</p></div></section>`;
        ulUsers.style.cssText = "margin-bottom: 2em; list-style: none;";
    });
}




function $e2da9f9eabf27f3a$export$899fbdb5fa08b653() {
    $8d6418a2f514b6b2$export$26585493b37ca6e4.addEventListener('click', ()=>{
        if ($8d6418a2f514b6b2$export$1133b9531d3f2eed.length >= 2) {
            let num = Math.floor(Math.random() * $8d6418a2f514b6b2$export$1133b9531d3f2eed.length);
            let looser = $8d6418a2f514b6b2$export$1133b9531d3f2eed[num];
            console.log(num);
            for(let i = 0; i < $8d6418a2f514b6b2$export$542774dbb3e5c204.length; i++)$8d6418a2f514b6b2$export$542774dbb3e5c204[i].classList.add("rotate");
            setTimeout(()=>{
                $8d6418a2f514b6b2$export$1133b9531d3f2eed.splice(num, 1);
                if ($8d6418a2f514b6b2$export$1133b9531d3f2eed.length >= 2) $8d6418a2f514b6b2$export$fbd87b42ad52786a.innerHTML = `<div><p>El jugador ${looser} ha sido eliminado</p><p class="text-indicator">Pulsa PLAY para seguir jugando</p></div>`;
                if ($8d6418a2f514b6b2$export$1133b9531d3f2eed.length == 1) $8d6418a2f514b6b2$export$fbd87b42ad52786a.innerHTML = `<div><p>El ganador es ${$8d6418a2f514b6b2$export$1133b9531d3f2eed[0]}</p></div>`;
                $09367350d85fae16$export$4bf387f59bfc6d67();
            }, 5000);
            $8d6418a2f514b6b2$export$fbd87b42ad52786a.innerHTML = `<div></div>`;
        } else if ($8d6418a2f514b6b2$export$1133b9531d3f2eed.length < 2) $8d6418a2f514b6b2$export$fbd87b42ad52786a.innerHTML = `<div><p>Por favor, introduce al menos 2 jugadores para empezar el juego</p></div>`;
    });
/*let i:number=0;
            let rotate = animationCoin[i];
            = "animation: flipHeads 3s; animation-fill-mode: forwards; animation-duration: 5s; @keyframes flipHeads{ from { transform: rotateY(0deg);} to{ transform: rotateY(1800deg);}"*/ }


function $eb7d9858335fbbb9$var$app() {
    $09367350d85fae16$export$eb3f7f9055d38f7c();
    $e2da9f9eabf27f3a$export$899fbdb5fa08b653();
}
$eb7d9858335fbbb9$var$app();


