const colorAdd = (color) =>
  `<div class="color flex" style="background-color: ${color.toUpperCase()}">
    <div class="color__btns flex">
      <i class="pointer bx bx-sm bx-x"></i>
      <i class="pointer bx bx-sm bx-transfer"></i>
      <i class="pointer bx bx-sm bx-copy"></i>
    </div>
    <div class="pointer color__text">${color.substring(1).toUpperCase()}</div>
    <div class="button">
      <button type="button" class="button-add">
        <i class="bx bx-plus bx-md bx-tada-hover"></i>
      </button>
    </div>
  </div>`

const coolors = (firstColor, secondColor, position) => {
  const color1 = chroma(firstColor.style.backgroundColor).hex()
  const color2 = chroma(secondColor.style.backgroundColor).hex()

  let color = chroma.mix(color1, color2, 0.5, 'rgb')
  color = color.hex()

  console.log(color)

  position.insertAdjacentHTML('afterend', colorAdd(color))
  console.log(color1 + ' -> ' + color + ' <- ' + color2)
}
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-add')) {
    const firstColor = e.target.parentElement.parentElement
    const secondColor = e.target.parentElement.parentElement.nextElementSibling
    const position = e.target.parentElement.parentElement

    coolors(firstColor, secondColor, position)
  } else if (e.target.classList.contains('bx-copy')) {
    e.target.classList.toggle('bxs-copy-alt')
    setTimeout(() => e.target.classList.toggle('bxs-copy-alt'), 200)
  } else if (e.target.classList.contains('bx-x')) {
    const element = e.target.parentElement.parentElement
    element.remove()
  }
})
