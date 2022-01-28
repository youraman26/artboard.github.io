const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

//ctx is te context of our canvas , we use ctx ton draw on cancvas.

const ctx = canvas.getContext("2d")

let prevX = null
let prevY = null
// how thich the line should be

ctx.lineWidth = 10

let draw = false

let clrs = document.querySelectorAll(".clr")
//converting nodelist to array
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", ()=>{
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
})




window.addEventListener("mousedown", (e) => draw = true)

window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e)=>{
    //initially previous mouse position are null
    //so we can't draw a line
    if(prevX == null || prevY == null ||!draw){
        //set previous mouse position to the current positions of mouse
        prevX = e.clientX
        prevY = e.clientY
        return
    }


    //current mouse position
    let currentX = e.clientX
    let currentY = e.clientY

    //drawing a line from the previous mouse position
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()    
    
    //update previous mouse position

    prevX = currentX
    prevY = currentY
})