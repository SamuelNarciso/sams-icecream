const menu_bars = document.getElementById('menu_bars');
const menu_bars_circle = document.querySelector('.menu_bars_circle');
// menu_bars_circle
// expandir_menu_bars
// oculto
menu_bars.addEventListener('click',()=>{
    menu_bars_circle.classList.toggle('oculto')
    menu_bars_circle.classList.toggle('expandir_menu_bars')
})