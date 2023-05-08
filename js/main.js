let bars = document.querySelector("header .container .bars");
let show = document.querySelector("header .container .links");
let links = document.querySelectorAll("header .container ul li a");

let int = document.querySelector(".int");
let about = document.querySelector(".about");
let coffees = document.querySelector(".coffees");
let blogs = document.querySelector(".Our_blogs");
let contact = document.querySelector(".inTouch");


window.addEventListener("scroll", () => {
    if (this.scrollY >= int.offsetTop) {
        links.forEach((ele) => {
            if (ele.getAttribute("href") === "#") {
                links.forEach((e) => {
                    e.classList.remove("active")
                })
                ele.classList.add("active")
            }
        })
    }
    if (this.scrollY >= about.offsetTop - 81.31) {
        links.forEach((ele) => {
            if (ele.getAttribute("href") === "./about.html") {
                links.forEach((e) => {
                    e.classList.remove("active")
                })
                ele.classList.add("active")
            }
        })
    }
    if (this.scrollY >= coffees.offsetTop - 81.31) {
        links.forEach((ele) => {
            if (ele.getAttribute("href") === "./coffees.html") {
                links.forEach((e) => {
                    e.classList.remove("active")
                })
                ele.classList.add("active")
            }
        })
    }

    if (this.scrollY >= blogs.offsetTop - 81.31) {
        links.forEach((ele) => {
            if (ele.getAttribute("href") === "./blog.html") {
                links.forEach((e) => {
                    e.classList.remove("active")
                })
                ele.classList.add("active")
            }
        })
    }
    if (this.scrollY >= contact.offsetTop - 81.31) {
        links.forEach((ele) => {
            if (ele.getAttribute("href") === "./contact.html") {
                links.forEach((e) => {
                    e.classList.remove("active")
                })
                ele.classList.add("active")
            }
        })
    }
})



bars.addEventListener("click", () => {
    show.classList.toggle("show");
    bars.classList.toggle("barX")
})


let fixedHeader = document.querySelector("header");

window.addEventListener("scroll", () => {
    this.scrollY >= 400 ? fixedHeader.classList.add("fixedH") : fixedHeader.classList.remove("fixedH");
})



let scroll_up = document.querySelector(".to_top");


window.addEventListener("scroll", () => {
    this.scrollY >= 600 ? scroll_up.style.right = "30px" : scroll_up.style.right = "-40px";
})
scroll_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})