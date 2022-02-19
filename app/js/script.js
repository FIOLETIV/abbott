let hiddenBox = document.getElementsByClassName("hidden")


const activeBox = () => {
    [...hiddenBox].map(item => {
        item.classList.remove("hidden")
    })
}

let swiper = new Swiper(".mySwiper", {
    slidesPerView: '3',
    spaceBetween: 20,
    // centeredSlides: true,
});

// const hideBox = () => {
//     [...hiddenBox].map(item => {
//         item.classList.add("hidden")
//     })
// }