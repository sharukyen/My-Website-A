window.onload = () => {
    const btn = document.getElementById("btn")
    console.log(btn)
    btn.innerHTML = "Click me"
    btn.style = "color: red"
    let blue = false
    const handleClick = () => {
        if (blue) {
            console.log("Blue is true")
            btn.style = "color: red"
        }else{
            console.log("Blue is false")
            btn.style = "color: blue"
        }
        blue = !blue
    }
    btn.onclick = handleClick
}