const gallerySwipper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
})
const headerIp = document.getElementById('headerIp');
const infoCard1 = document.getElementById('infoCard1');
const infoCard2 = document.getElementById('infoCard2');
const infoCard3 = document.getElementById('infoCard3');
const footerIp = document.getElementById('footerIp');
const modal = document.getElementById('modal')

let ip = 'yourServer.ip'
let version = '1.21.11'
let seed = '030102600191005'
let howManyModals = 0

async function copyModal() {
    if(howManyModals != 0){
        modal.style.top = '0'
        await new Promise(resolve => setTimeout(resolve, 100))
    }
    howManyModals += 1
    modal.style.top = '100px'
    await new Promise(resolve => setTimeout(resolve, 1500))
    if(howManyModals == 1){
        modal.style.top = '0'
    }
    howManyModals -= 1
}

headerIp.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
infoCard1.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
infoCard2.addEventListener('click', () => {
    navigator.clipboard.writeText(version)
    copyModal()
})
infoCard3.addEventListener('click', () => {
    navigator.clipboard.writeText(seed)
    copyModal()
})
footerIp.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
modal.addEventListener('click', () => {
    modal.style.top = '0'
})