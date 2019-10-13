// use arrow function 
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    // individual links
    const navLinks = document.querySelectorAll('.nav-link li');

    
    burger.addEventListener('click',()=>{
        // toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index)=>{
            // if there is value in link.style.animation
            if(link.style.animation){
                link.style.animation="";
            }
            else{
            // index / 7 is the time delay between element,
            // even if we add more link, it still work
            // using backtick for template literals
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //burger lines animation
        burger.classList.toggle('toggle');
    });

    
}

navSlide();