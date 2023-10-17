const events = document.querySelectorAll('.event');
const textbas = document.querySelectorAll('.textbas');
const textleft = document.querySelectorAll('.textleft');
const rightimg = document.querySelectorAll('.rightimg');
const leftimg = document.querySelectorAll('.leftimg');


function checkScroll() {
  
    events.forEach((event) => {
  
        const position = event.getBoundingClientRect();

        // Si le haut de l'élément est visible dans la fenêtre et le bas de l'élément n'a pas encore quitté la fenêtre
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            // ajoute classe "active" à l'élément
            event.classList.add('active');
        } else {
           
        }
    });

    textbas.forEach((textbas) => {
  
        const positiontxt = textbas.getBoundingClientRect();

        // Si le haut de l'élément est visible dans la fenêtre et le bas de l'élément n'a pas encore quitté la fenêtre
        if (positiontxt.top <= window.innerHeight && positiontxt.bottom >= 0) {
            // ajoute classe "active" à l'élément
            textbas.classList.add('active');
        } else {

        }
    });

    textleft.forEach((textleft) => {
  
        const positiontxtleft = textleft.getBoundingClientRect();

        // Si le haut de l'élément est visible dans la fenêtre et le bas de l'élément n'a pas encore quitté la fenêtre
        if (positiontxtleft.top <= window.innerHeight && positiontxtleft.bottom >= 0) {
            // ajoute classe "active" à l'élément
            textleft.classList.add('active');
        } else {
          
        }
    });

    rightimg.forEach((rightimg) => {
  
        const positionimgright = rightimg.getBoundingClientRect();

        // Si le haut de l'élément est visible dans la fenêtre et le bas de l'élément n'a pas encore quitté la fenêtre
        if (positionimgright.top <= window.innerHeight && positionimgright.bottom >= 0) {
            // ajoute classe "active" à l'élément
            rightimg.classList.add('active');
        } else {

        }
    });
    leftimg.forEach((leftimg) => {
  
        const positionimgleft = leftimg.getBoundingClientRect();

        // Si le haut de l'élément est visible dans la fenêtre et le bas de l'élément n'a pas encore quitté la fenêtre
        if (positionimgleft.top <= window.innerHeight && positionimgleft.bottom >= 0) {
            // ajoute classe "active" à l'élément
            leftimg.classList.add('active');
        } else {

        }
    });
}

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', checkScroll);
// Écoutez l'événement de redimensionnement de la fenêtre
window.addEventListener('resize', checkScroll);

// Vérifiez également l'état initial lors du chargement de la page
window.addEventListener('load', checkScroll);
