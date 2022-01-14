let detailCookies = document.querySelector(".cookie-details");
let detailBox = detailCookies.querySelectorAll(".detail");

document.querySelectorAll(".cookie-wrap .cookie").forEach(product => {
    product.onclick = () => {
        detailCookies.style.display = "flex";
        let name = product.getAttribute("data-name");
        detailBox.forEach(detail => {
            let target = detail.getAttribute("data-target");
            if(name == target){
                detail.classList.add("active");
            }
        });
    };
});

//close button
detailBox.forEach(close => {
    close.querySelector(".fa-times").onclick = () => {
        close.classList.remove("active");
        detailCookies.style.display = "none";
    };
});