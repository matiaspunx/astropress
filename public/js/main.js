const lenis = new Lenis({
  lerp: 0.05,
  smooth: true,
  direction: "vertical"
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const burgerToggle = document.querySelector("#burger-toggle")
const navMenu = document.querySelector("#menu")

burgerToggle.addEventListener("click", () => {
  if (burgerToggle.classList.contains("open")) {
    burgerToggle.classList.remove("open")
    navMenu.classList.add("hide")
    return
  }
  burgerToggle.classList.add("open")
  navMenu.classList.remove("hide")
})

const formSubmit = document.querySelector("#form-submit")
const formMsgSucces = document.querySelector(".form-message__succes")

formSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  formSubmit.classList.add("disabled")
  setTimeout(() => {
    formSubmit.classList.remove("disabled")
    formMsgSucces.classList.add("show")
  }, 2000)
  setTimeout(() => {
    formMsgSucces.classList.remove("show")
  }, 5000)
  return
})
