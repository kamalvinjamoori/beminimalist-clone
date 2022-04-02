const get = async(url) => {
    try{
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch(error) {
        console.log('error:', error)
    }
}

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

    export  {get, displaydata}