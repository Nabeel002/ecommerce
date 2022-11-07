const sleep = ms => new Promise(res => setTimeout(res, ms));


document.getElementById('cart').addEventListener('click',() => {
    document.getElementById("cart-area").style.transform='translate(0)'
    document.getElementById('cart-overlay').style.display='block'


  })



document.getElementById('cart-overlay').addEventListener('click',async ()=>{
    document.getElementById("cart-area").style.transform='translate(100%)'
    await sleep(500);  
    document.getElementById('cart-overlay').style.display='none'

    

    
})


document.getElementById('cross').addEventListener('click',async ()=>{
    document.getElementById("cart-area").style.transform='translate(100%)'
    await sleep(500);  
    document.getElementById('cart-overlay').style.display='none'

    

    
})