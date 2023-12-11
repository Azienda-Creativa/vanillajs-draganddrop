let list = document.getElementById("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

for (i of list) {
  i.addEventListener("dragstart", function (e) {
    let selected = e.target

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault()
    })
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected)
      selected = null
    })
  })
}
