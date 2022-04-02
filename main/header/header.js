
function scriptimp() {


    // let res = fetch(`http://demo3901492.mockable.io/data`)

    // console.log('res:', res)
    // let data1 = res.json()
    // console.log('data1:', data1)


    let mmenu1 = document.getElementById("mnavigation")
    // console.log('mmenu1:', mmenu1)

    // console.log(document.getElementById("mmenu"))
    document.getElementById("mmenu").addEventListener("click", () => {
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
    // console.log('count1:', count1)
    let count2 = 0;
    // console.log('count2:', count2)
    let mshop = document.getElementById("mshop")
    mshop.style.display = "none"
    let count3 = 0
    // console.log('count3:', count3)




    document.querySelector("#shopopt").addEventListener("click", () => {

        event.preventDefault()
        // console.log("mjhsg")



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


    let cartitems = document.querySelector("#cartItems")

    let rajarr = JSON.parse(localStorage.getItem("cart")) || []
    cartitems.innerHTML = ""
    document.getElementById("numofItems").innerHTML = rajarr.length

    rajarr.map((elem) => {
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = elem.image
        image.style.width = "120px"
        image.style.height = "150px"

        let name = document.createElement("h3")
        name.innerHTML = elem.title

        let price = document.createElement("h4")
        price.innerHTML = elem.offerPrice

        let div1 = document.createElement("div")
        let div2 = document.createElement("div")

        div1.append(image)
        div2.append(name, price)

        div.append(div1, div2)
        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.padding = "20px"
        div.style.borderBottom = "1px solid grey"

        cartitems.append(div)



    })


    document.getElementById("goTocart").addEventListener("click", () => {
        window.location.href = "../cart/cart.html"
    })






}

export { scriptimp }
