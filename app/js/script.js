let hiddenBox = document.getElementsByClassName("hidden")


const activeBox = () => {
    [...hiddenBox].map(item => {
        item.classList.remove("hidden")
    })
}

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: false,
    breakpoints: {
        1440: {
            slidesPerView: '3',
            spaceBetween: 21,
        },
        840: {
            slidesPerView: '2',
            spaceBetween: 21,
        },
    }

});

// const hideBox = () => {
//     [...hiddenBox].map(item => {
//         item.classList.add("hidden")
//     })
// }