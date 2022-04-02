var counter = 1;
    let inp = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    b3.onclick = function func(){
        counter++; 
        inp.innerText = counter;
        // console.log(counter);
        let b1 = document.getElementById("b1");
        b1.onclick = function funcc(){
        counter--;
        inp.innerText=counter;
        if(inp.innerText<=0){
            inp.innerText=0;
        }  
    }
    }

    var bottom=document.getElementById("bottom");
    var bottomFirst=document.getElementById("bottomFirst");
    let count=0;
    //bottomFirst.style.width="0px";
    bottomFirst.style.display ="none"
    bottom.addEventListener("click",function(){
       
        if(count%2===0){
            bottomFirst.style.display ="block"
        }
        else{
            bottomFirst.style.display =  "none"
        }
        count++;
    })