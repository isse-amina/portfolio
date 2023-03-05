const contactMe = document.querySelectorAll(".contact-me");
contactMe.forEach((item, index) => {
    item.addEventListener("click", arrow => {
        location.href = "https://www.linkedin.com/in/amina-isse/"; 
    })
})
const seeMyWork = document.querySelectorAll(".see-my-work");
seeMyWork.forEach((item, index) => {
    item.addEventListener("click", arrow => {
        location.href = "https://github.com/isse-amina"; 
    })
})
const seeProject1 = document.querySelector(".see-project-1");
seeProject1.onclick = function() {
    location.href = "https://github.com/isse-amina/brain-tumor-detection"; 
}
const seeProject2 = document.querySelector(".see-project-2");
seeProject2.onclick = function() {
    location.href = "https://github.com/isse-amina/bank-app/"; 
}