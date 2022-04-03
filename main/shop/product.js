let SelectedProduct = JSON.parse(localStorage.getItem("product"))
console.log('SelectedProduct:', SelectedProduct)

const displaydata = (SelectedProduct)=> {
    document.getElementById("nameDiv").innerHTML = ""
    SelectedProduct.map( (ele) => {
        let title = document.createElement("h2")
        title.innerText = ele.title
        title.id = "Title"
        let formula = document.createElement("div")
        formula.innerText = "New Formula"
        formula.id = "Formula"
        let spec = document.createElement("p")
        spec.innerText = ele.specs
        spec.id = "Specs"
        let star = document.createElement("span")
        star.innerText = ele.stars
        star.id = "Star"
        let review = document.createElement("span")
        review.innerText = ele.review
        document.getElementById("nameDiv").append(title, formula, spec, star, review)


        let image1 = document.createElement("img")
        image1.src = ele.img1
        let image2 = document.createElement("img")
        image2.src = ele.image
        let image3 = document.createElement("img")
        image3.src  = ele.img3
        document.getElementById("imgDiv").append(image1, image2, image3)

        let used1 = document.createElement("h3")
        used1.innerText = ele.used1
        used1.id = "used1"
        let used2 = document.createElement("p")
        used2.innerText = ele.used2
        document.getElementById("aboutDiv").append(used1,used2)

        document.getElementById("origPrice").innerText = ele.originalPrice
        document.getElementById("offerPrice").innerText = ele.offerPrice
        document.getElementById("STAR").innerText = ele.stars
        document.getElementById("Review").innerText = ele.review









        let special = document.createElement("h3")
        special.innerText = ele.what_special
        special.id = "Special"
        let para1 = document.createElement("p")
        para1.innerText = ele.para1
        let para2 = document.createElement("p")
        para2.innerText = ele.para2
        let para3 = document.createElement("p")
        para3.innerText = ele.para3
        let para4 = document.createElement("p")
        para4.innerText = ele.para4
        let para5 = document.createElement("p")
        para5.innerText = ele.para5
        document.getElementById("detailsDiv").append(special, para1, para2, para3, para4, para5)

        document.getElementById("first").innerText = ele.Skinconcernsittargets
        document.getElementById("second").innerText = ele.Suitablefor
        document.getElementById("third").innerText = ele.highlights
        document.getElementById("fourth").innerText = ele.pha
        

        let result1  = document.createElement("p")
        result1.innerText = ele.Consumerstudyresults
        let result2  = document.createElement("p")
        result2.innerText = ele.cp1
        let result3  = document.createElement("p")
        result3.innerText = ele.cp2
        document.getElementById("consumerDiv").append(result1, result2, result3)


        let addtocartbut = document.createElement("button")
        addtocartbut.innerText = "Add To Cart"
        addtocartbut.id = "toCart"
        document.getElementById("addtocartdiv").append(addtocartbut)
        let cartProduct = JSON.parse(localStorage.getItem("cart"))||[]
        addtocartbut.addEventListener("click", () =>{
            ele.qty = 1
           cartProduct.push(ele)
           localStorage.setItem("cart",JSON.stringify(cartProduct))
           location.reload()
        },{once:true})



        document.getElementById("video").src ="https://cdn.shopify.com/s/files/1/0410/9608/5665/files/Minimalist-Vitamin-C-10-Usage.mp4"
    })
}
displaydata(SelectedProduct)