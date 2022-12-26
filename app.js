const cursor = document.querySelector('.cursor')
let timeOut


// cursor movement
document.addEventListener('mousemove', (e) => {
    let x = e.pageX
    let y = e.pageY

    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px'
    cursor.style.display = 'block'

    // stop animation
    function mouseStopped() {
        cursor.style.display = 'none'
    }

    // hide animation
    clearTimeout(timeout)
    timeOut = setTimeout(mouseStopped, 1000)
})




























































