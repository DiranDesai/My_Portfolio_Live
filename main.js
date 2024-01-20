const loaderOverlay = document.querySelector(".loader-overlay");

function handleLoading() {
    // setTimeout(() => {
    //     loaderOverlay.style.display = "none";
    // }, 3000)

    document.addEventListener("DOMContentLoaded", () => {
        window.scrollTo(0, 0)
        loaderOverlay.style.display = "none";
    });
}

window.addEventListener("load", () => {
    
})

handleLoading();