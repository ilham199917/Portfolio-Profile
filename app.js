const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn= document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];


function PageTransition(){
    // button cliick active class
    for(let i=0; i<secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let = currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn'
        })
    }

    // section active class
    allSections.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if(id){
                // remove selected
                sections.forEach((btn) =>{
                    btn.classList.remove('active');

                })
                e.target.classList.add('active')

                // hide other section
                sections.forEach((section) =>{
                    section.classList.remove('active')
                })

                const element = document.getElementById(id);
                element.classList.add('active')
            }
        })
        // toggle theme
        const themeBtn = document.querySelector('.theme-btn');
        themeBtn.addEventListener('click',() =>{
            let element = document.body;
            element.classList.toggle('light-mode')
        })
}

PageTransition();