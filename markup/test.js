$(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });
  });

let subMenu = document.getElementById("subMenu");
function toggleMenu(){
  subMenu.lassList.toggle("open-menu")
}