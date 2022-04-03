
var cartList= JSON.parse(localStorage.getItem("cart"))||[];
let perent = document.getElementById("showdata");

if(cartList.length!=0){
    let subtotal=0;

cartList.forEach((elem,index) => {
let div = document.createElement("div");
let div1 = document.createElement("div");

div1.setAttribute("id","pricename")

let div2 =document.createElement("div");
div2.setAttribute("id","btndiv");

let div3 =document.createElement("div");

let div4 =document.createElement("div");
div4.setAttribute("id","gappend")

let div5 = document.createElement("div");
div5.setAttribute("id","gprice")
//product img
let img = document.createElement("img");
img.src=elem.image;
//product name
let pname = document.createElement("p");
pname.innerHTML=elem.prods;
//product price
let pr = document.createElement("p");



pr.innerHTML=`₹ ${elem.offerPrice}`;


//increase decrease button 
let btn1= document.createElement("button");
btn1.addEventListener("click",()=>{
    
    decrease(elem,index);
})

let btn2=document.createElement("button");
btn2.addEventListener("click",()=>{
    increase(elem);
    
})

btn1.innerHTML='-';
btn2.innerHTML='+';

let quantity=document.createElement("p");
quantity.innerHTML=elem.qty;

total = elem.offerPrice*elem.qty;
//appending

div.append(img)
div1.append(pname,pr);
div5.append(div,div1)
div2.append(btn1,quantity,btn2);
div3.append(`₹ ${total}`);
div4.append(div5,div2,div3);
perent.append(div4)

subtotal=total+subtotal;
});

let gmain = document.getElementById("gsubmit");
let p = document.createElement("p");
let at = document.createElement("h4");
let submit = document.createElement("button");
submit.addEventListener("click",function(){
    
window.location.href="./checkout.html";
})

p.innerHTML="Taxes and shipping calculated at checkout";
submit.innerHTML="Check out";
at.innerHTML=`₹ ${subtotal}`;
gmain.append(at,p,submit);

}

else{
let heading = document.createElement("h4");
let a = document.createElement("h3");
a.style.margin="50px";
a.addEventListener("click",()=>{
    window.location.href="../shop/allproducts.html"
})
a.style.cursor="pointer"
a.innerHTML="Continue Shopping";
heading.innerHTML="Your cart is currently empty."
perent.append(heading,a);
}



 function decrease(elem,index){
elem.qty--;

if(elem.qty==0){
cartList.splice(index,1);
console.log(cartList)
localStorage.setItem("cart",JSON.stringify(cartList))
location.reload();
}
else{
    addToCart(elem);
    location.reload();
}












}
function increase(elem){
    elem.qty++;
addToCart(elem);
location.reload();
}


function addToCart(elem) {
  if(cartList.length==0){
    cartList.push(elem);
    localStorage.setItem("cart",JSON.stringify(cartList));
    
  }else{
    var check = check_already_existing(elem);
    if(check==0){
      cartList.push(elem);
      localStorage.setItem("cart",JSON.stringify(cartList));
      
    }
  } 
}


function check_already_existing(elem){
  for(var i=0;i<cartList.length;i++){
    if(cartList[i].name==elem.name){
        
        localStorage.setItem("cart",JSON.stringify(cartList));
      return 1;
    }
  
  }
  return 0;
}





// function removeItemFromCart(qty) {
//     for (var i in elem) {
//       if (elem[i].qty === qty) {
//           elem[i].count --;
          
//           if (elem[i].count === 0) {
//              elem.splice(i, 1); // removes item from the array
//           }
//           break;
//       }
//     }
//   }
  
//   console.log(elem[0].count);














