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
            let offerPrice = document.createElement("span")
            offerPrice.innerText = ele.offerPrice
            priceDiv.append(originalPrice, offerPrice)

            innerdiv.append(Image, NameDiv, reviewDiv, priceDiv)
            div.append(innerdiv)

            // document.getElementById("Aitems").append(div)
            parent.append(div)
        })
    }
    // displaydata(objectArray)
    export default displaydata