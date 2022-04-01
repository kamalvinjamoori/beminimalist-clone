function header() {
    return `<div id="mmain">
            <div id="navbar">

                <div id="mnavigation">
                    <div id="mmenu" onclick="onClickMenu()">
                        <div id="bar1" class="bar"></div>
                        <div id="bar2" class="bar"></div>
                        <div id="bar3" class="bar"></div>
                    </div>
                    <ul class="mnav" id="mnav">
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Knowledge</a></li>
                        <li><a href="">Track Order</a></li>
                        <li><a href="">Register / Login</a></li>
                    </ul>

                </div>
                <div>
                    <h1>Minimalist</h1>
                </div>
                <div id="mflex">
                    <div id="msearch" onclick="displaySearch()"> <i class="fa-solid fa-magnifying-glass"></i></div>

                    <i class="fa-solid fa-user" id="msearch" onclick="diaplaySearch()"></i>
                    <i class="fa-solid fa-bag-shopping" id="mcart" onclick="displayCart()"></i>

                </div>
            </div>

            <div id="sidenav1">

                <div class="a">
                    <li><a href="#">Search</a></li>
                </div>
                <div style="padding-left:80px"><input type="text" placeholder="What are you looking for?"> </div>

            </div>


            <div id="sidenav2">
                <div class="a">
                    <li><a href="#">Cart</a></li>
                </div>
                <div>
                    <h3 style="color: white" id="crt">
                        <div>Your cart is currently empty.</div>
                    </h3>
                </div>

            </div>
        </div>`
}

export { header }