let texto = document.querySelector("div#texto")
let txtSecondary = document.querySelector("p#txt-secondary")
let modal = document.querySelector("dialog")
let modalContent = document.querySelector("p#acertos-modal")
let buttonCloseModal = document.querySelector("#fechar-modal")
let buttonNgModal = document.querySelector("button#new-game-modal")

let buttonKick = document.querySelector("button#kick")
let buttonNewGame = document.querySelector("button#new-game")
let images = document.querySelector("#image")
let selectNumbers = document.querySelector("select.select-numbers")

console.log(selectNumbers.value)

let rand = Number(selectNumbers.value)
let tentativas = 0
let randomKick = Math.floor((Math.random() * rand) + 1)
// Math.floor me retorna o menor numero inteiro que ele encontrar dentro do numero
// Math.random me retorna um numero aleatorio

selectNumbers.addEventListener("change", function (e) {
    console.log(e.currentTarget.value)
    rand = Number(e.currentTarget.value)
    randomKick = Math.floor((Math.random() * rand) + 1)
})


buttonKick.addEventListener("click", function () {
    buttonNewGame.disabled = true;
    buttonNewGame.classList.add("disable-button")

    let inputNumbers = document.querySelector("input.input-numbers")
    let inputNumbersValue = document.querySelector("input.input-numbers").value
    tentativas++

    //console.log(Math.floor(Math.random() * (selectNumbers)))
    console.log(randomKick)
    console.log(inputNumbersValue)
    console.log(tentativas)


    if (inputNumbersValue == randomKick) {
        images.classList.remove("image-naruto")
        images.classList.remove("image-naruto-errou")
        images.classList.add("image-naruto-acertou")
        inputNumbers.classList.remove("not-yet")

        modal.showModal()
        modalContent.innerHTML = `Você acertou com ${tentativas} tentativas.`

        buttonCloseModal.onclick = function () {
            buttonNewGame.disabled = false;
            buttonNewGame.classList.remove("disable-button")
            location.reload()
            buttonKick.disabled = true;
            buttonKick.classList.add("disable-button")
            modal.close()
        }

        buttonNgModal.onclick = function () {
            location.reload()
            modal.close()
        }

    } else if (inputNumbersValue != randomKick) {
        images.classList.remove("image-naruto")
        images.classList.add("image-naruto-errou")
        inputNumbers.classList.add("not-yet")

        if (inputNumbersValue < randomKick) {
            txtSecondary.innerHTML = "O número secreto é maior."
        } else {
            txtSecondary.innerHTML = "O número secreto é menor."
        }

    }

    inputNumbers.value = ""
})

