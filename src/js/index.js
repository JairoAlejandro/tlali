import { departaments } from "./config"

window.addEventListener('DOMContentLoaded', () => {
    const $departaments = document.querySelector('.departaments')
    const $toggleMenu = document.getElementById('toggle-menu')
    const $closeMenu = document.getElementById('close-menu')
    const $header = document.querySelector('.header')
    const departamentsFragment = document.createDocumentFragment()

    departaments.forEach(({ name, icon }) => {
        const departament = document.createElement('div')
        departament.classList.add('departament')
        departament.innerHTML = `
            <i class="departament__icon ${icon}"></i>
            <p class="departament__name" style="text-transform: capitalize;">${name}</p>
        `
        departamentsFragment.appendChild(departament)
    })

    $departaments.appendChild(departamentsFragment)

    window.addEventListener('click', (e) => {
        target = e.target
        target === $toggleMenu ? document.querySelector('.header__nav').classList.toggle('show') : false

        target === $closeMenu ? document.querySelector('.header__nav').classList.remove('show') : false
    })
})

