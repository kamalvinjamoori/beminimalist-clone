document.querySelector("#mmenu").addEventListener("click", () => {
    onClickMenu()
})
function onClickMenu() {
    document.getElementById("mmenu").classList.toggle("icon")
    document.getElementById("mnav").classList.toggle("change")
}




let sidenav2 = document.getElementById("sidenav2")
sidenav2.style.display = "none"
var sidenav1 = document.getElementById("sidenav1");
sidenav1.style.display = "none"
let count1 = 0;
console.log('count1:', count1)
let count2 = 0;
console.log('count2:', count2)
let mshop = document.getElementById("mshop")
mshop.style.display = "none"
let count3 = 0
console.log('count3:', count3)




document.querySelector("#shopopt").addEventListener("click", () => {

    event.preventDefault()
    console.log("mjhsg")



    displayshop()
})


document.querySelector("#msearch").addEventListener("click", () => {
    var search = document.getElementById("search");
    var sidenav1 = document.getElementById("sidenav1");

    sidenav1.style.display = "none"

    displaySearch()
})


document.querySelector("#mcart").addEventListener("click", () => {

    displayCart()
})



function displayshop() {

    if (count3 % 2 === 0) {
        mshop.style.display = "block"
    }
    else {
        mshop.style.display = "none"

    }
    count3++;

}


function displayCart() {

    var sidenav2 = document.getElementById("sidenav2");
    sidenav1.style.display = "none"

    if (count2 % 2 === 0) {
        sidenav2.style.display = "block"
    }
    else {
        sidenav2.style.display = "none"
    }
    count2++;

}



function displaySearch() {

    if (count1 % 2 === 0) {
        sidenav1.style.display = "block"
    }
    else {
        sidenav1.style.display = "none"
    }
    count1++;

}
