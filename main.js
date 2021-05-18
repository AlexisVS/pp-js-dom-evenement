let ul = document.querySelector("ul")
ul.addEventListener('mouseover', e => {
    e.target.classList.remove('red')
})
ul.addEventListener('mouseout', e => {
    e.target.classList.add('red')
})