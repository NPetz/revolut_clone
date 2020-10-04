// dropdown menu animation

let menu = document.getElementById('menu')

let dropdown = document.getElementById('dropdown')

menu.addEventListener('click', toggleMenu)

function toggleMenu() {


    dropdown.style.display = (dropdown.style.display == '' || dropdown.style.display == 'none') ? 'flex' : 'none'

}

// submenus animation

let submenus = document.querySelectorAll('.level0')

submenus.forEach((x) => x.addEventListener(('click'), toggleSubMenu))

function toggleSubMenu(e) {

    let target = e.currentTarget

    let nextLevel = target.querySelector('.level2')
    let arrowIcon = target.querySelector('svg')

    nextLevel.style.display == 'flex' ? nextLevel.style.display = 'none' : nextLevel.style.display = 'flex'

    arrowIcon.style.transform = (arrowIcon.style.transform == 'rotate(180deg)') ? 'rotate(0)' : 'rotate(180deg)'


}


// media query events

const mediaQuery = window.matchMedia("(min-width: 1080px)")

fireMediaQuery(mediaQuery)
mediaQuery.addListener(fireMediaQuery)


function fireMediaQuery(query) {

    if (query.matches) {

        dropdown.style.display = 'none'



    }
}

// large screen menus animation

let linkMenus = document.querySelectorAll('.link_menu')

linkMenus.forEach((x) => x.addEventListener(('mouseover'), focusElement))

function focusElement(e) {

    e.currentTarget.focus()
}


// on scroll events

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos == '0' && mediaQuery.matches) {
        document.querySelector('nav').classList.remove('sticky')

    } else if (currentScrollPos > prevScrollpos && mediaQuery.matches) {


        document.querySelector('nav').classList.add('sticky')


    }
    prevScrollpos = currentScrollPos;
}





















