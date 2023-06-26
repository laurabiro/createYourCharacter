const container = document.querySelector(".container") as HTMLElement
const inputField = container.querySelector(".input-field") as HTMLElement
let input = document.getElementById("name")as HTMLInputElement

const genderCh = document.getElementById("gender")as HTMLSelectElement
const raceCh = document.getElementById("race")as HTMLSelectElement
const classCh = document.getElementById("class")as HTMLSelectElement

let nameOutput = document.getElementById("name2")as HTMLElement

const sign = document.getElementById("sign2")as HTMLImageElement
const character = document.getElementById("character2")as HTMLImageElement

const divCharacter = document.getElementById("character")!

raceCh.addEventListener("change", () => {
    const selectedRace = raceCh.value;
    const imageUrl = getImageUrlForRace(selectedRace)
    divCharacter.style.backgroundImage = `url(${imageUrl})`
  })
function getImageUrlForRace(race:string) {
    // Define the background color for each race
    switch (race) {
      case "human":
        return "https://t4.ftcdn.net/jpg/05/66/16/67/360_F_566166790_uEUERnlkB5ud4IjdCdJsxufb2Cf1PUiq.jpg"
      case "giant":
        return "https://wallpaperaccess.com/full/1403541.jpg"
      case "vampire":
        return "https://c4.wallpaperflare.com/wallpaper/30/586/460/artwork-fantasy-art-digital-art-forest-wallpaper-preview.jpg"
      case "elf":
        return "https://img.freepik.com/premium-photo/artistic-color-dynamic-background-with-lighting-effect_733139-3210.jpg"
      default:
        return ""
    }
}

input.addEventListener("keyup", function(event) {
    const target = event.target as HTMLInputElement
    if(event.key == "Enter"){
        nameOutput.innerHTML = target.value
    }
})

const renderClass = () => sign.src = `./imgs/${classCh.value}.png`
const renderRace = () => character.src = `./imgs/${genderCh.value}-${raceCh.value}.png`

genderCh.addEventListener("change", renderRace)
raceCh.addEventListener("change", renderRace)
classCh.addEventListener("change", renderClass)