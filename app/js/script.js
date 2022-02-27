let hiddenBox = document.getElementsByClassName("hidden")


const activeBox = () => {
    [...hiddenBox].map(item => {
        item.classList.remove("hidden")
    })
}

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 21,
    direction: 'vertical',
    slidesPerView: '2',
    centeredSlides: false,
    breakpoints: {
        1440: {
            direction: "horizontal",
            slidesPerView: '3',
            spaceBetween: 21,
        },
        601: {
            slidesPerView: '2',
            direction: "horizontal",
            spaceBetween: 21,
        },
    }

});

// const hideBox = () => {
//     [...hiddenBox].map(item => {
//         item.classList.add("hidden")
//     })
// }