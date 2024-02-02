const loaderOverlay = document.querySelector(".loader-overlay");

function handleLoading() {
    setTimeout(() => {
        loaderOverlay.style.display = "none";
    }, 2000)
}
handleLoading();

const skills = document.querySelectorAll(".skill")
const services = document.querySelectorAll(".services-details .service-inner")
const projects = document.querySelectorAll(".project");


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.5 });


skills.forEach(skill => {
    observer.observe(skill);
})

services.forEach(service => {
    observer.observe(service);
})
projects.forEach(project => {
    observer.observe(project);
});
