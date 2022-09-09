const showMe = document.querySelector(".nav__menu")
const Toggle = document.querySelector(".nav__toggle")
const links = document.querySelector(".nav__list")
const nav = document.getElementById("header")
// const scrollUp = document.getElementById("scroll-top")


// Toggle.addEventListener("click", function(){
//     if(showMe.classList.contains('show-me')){
//         showMe.classList.remove('show-me')
//     }
//     else{
//         showMe.classList.add('show-me')
//     }
// })
Toggle.addEventListener("click", function(){
    if(showMe && Toggle){
        showMe.classList.toggle('show-me')
    }
})

links.addEventListener("click", function(){
    if(showMe){
        showMe.classList.remove('show-me')
    }
})

window.addEventListener("scroll", function scrollHeader(){
   
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    }
    else{
        nav.classList.remove('scroll-header')
    }
})
scrollHeader()


// window.addEventListener("scroll", function scrollTop(){
   
//     if(this.scrollY >= 300){
//         scrollUp.classList.add('scroll-top')
//     }
//     else{
//         scrollUp.classList.remove('scroll-top')
//     }
// })
// scrollTop()
// const scrollTp = document.getElementById('scroll-top')

// function scrollTop(){
    
//     if(this.scrollY >= 200){

//     scrollTp.classList.add('scroll-top')
// }
//     else{
//         scrollTp.classList.remove('scroll-top')
//         }
    
// }
// window.addEventListener("scroll", scrollTop)


// window.addEventListener("scroll", function scrollTop(){
//     if(this.scrollY >= 200 ){
//         scrollUp.classList.add('scroll-top')
//     }
//     else{
//         scrollUp.classList.remove('scroll-top')
//     }
// })
// scrollTop()