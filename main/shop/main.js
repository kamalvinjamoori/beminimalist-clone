// let objectArray = [
//     {
//     image:"https://cdn.shopify.com/s/files/1/0410/9608/5665/products/Hairgrowthserum1200-2-min_540x.png?v=1646492070",
//     title:"Hair Growth Actives 18%",
//     stars:"★ ★ ★ ☆ ☆",
//     review:"180 reviews",
//     originalPrice: 799,
//     offerPrice: 795
//     }
//     ]

    const displaydata = (objectArray,parent) => {
        objectArray.map( (ele) => {
            let div = document.createElement("div")
            let Image = document.createElement("img")
            Image.src = ele.image

            let innerdiv =  document.createElement("div")
            let NameDiv =  document.createElement("div")
            let Name = document.createElement("h5")
            Name.innerText = ele.title
            Name.addEventListener("click", () =>{
               
                toProductPage(ele)
            })
            NameDiv.append(Name)

            let reviewDiv = document.createElement("div")
            reviewDiv.id = "Areview"
            let star = document.createElement("span")
            star.innerText = ele.stars
            let review = document.createElement("span")
            review.innerText = ele.review
            reviewDiv.append(star, review)

            let priceDiv = document.createElement("div")
            priceDiv.id = "Aprice"
            let originalPrice = document.createElement("span")
            originalPrice.innerText = ele.originalPrice
            originalPrice.id = "ORIG"
            let offerPrice = document.createElement("span")
            offerPrice.innerText = ele.offerPrice
            offerPrice.id = "OFFER"
            priceDiv.append(originalPrice, offerPrice)

            innerdiv.append(Image, NameDiv, reviewDiv, priceDiv)
            div.append(innerdiv)

            // document.getElementById("Aitems").append(div)
            parent.append(div)
        })
    }

    
    const toProductPage = (ele)=>{
        let selectedProducts=[]
        selectedProducts.push(ele)
        localStorage.setItem("product",JSON.stringify(selectedProducts))
        window.location.href = "product.html"
    }

    // let selectedFilter = localStorage.getItem("filter")
    // let selectedSort = localStorage.getItem("sort")
    // document.getElementById("FILTER").innerText = selectedFilter
    // document.getElementById("SORT").innerText = selectedSort
    //    let clear = document.createElement("div");
    //    clear.innerText = "CLEAR"

    

    // displaydata(objectArray)
    export default displaydata