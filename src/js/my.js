
const player = document.querySelector('.tv__screen')
const myVideo = document.getElementById('myVideo')

sw.onclick = function () {
    if (sw.style.backgroundColor == 'red') {
        sw.style.backgroundColor = 'green';
        myVideo.style.display = 'block'
        playVideo()
    } else {
        sw.style.backgroundColor = 'red';
        myVideo.style.display = 'none'
        stopVideo()
    }
}
function playVideo() {
    myVideo.src = 'https://www.youtube.com/embed/_EA0FpNVT5s?autoplay=1&mute=0'
}

function stopVideo() {
    myVideo.src = ''
}



