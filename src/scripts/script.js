var navLinks = document.getElementById('navLinks');

function showMenu(){
    console.log('entrou 01');
    navLinks.style.right = '0';
}

function hideMenu(){
    console.log('entrou 02');
    navLinks.style.right = '-200px';
}