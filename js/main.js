// Definir imagenes

const images = [
   'images/11.jpg ',
   'images/22.jpg',
   'images/33.jpg'

]

// APP state

let index = 0;
const max = images.length;

// Get the DOM elements
const containerElement = document.querySelector('.container')
const prevSlideButton = document.querySelector('.prevSlide')
const nextSlideButton = document.querySelector('.nextSlide')

// Listen for arrow click events


prevSlideButton.addEventListener('click', () =>{
    index--
    setImageIndex()
    changeBackgroundImage(images[index],containerElement)


    //Cambiar el fonde de imagen
})

    //Utility function

    function setImageIndex(){
        if (index<0){
            index = max -1
        }

        if(index === max){
            index = 0
        }
    }

    function changeBackgroundImage(backgroundImage, element){
        element.style.backgroundImage = `url(${backgroundImage})`
    }



    nextSlideButton.addEventListener('click', () =>{
    index++
    setImageIndex()
    changeBackgroundImage(images[index],containerElement)


    //Cambiar el fonde de imagen
})

    //Utility function

    function setImageIndex(){
        if (index<0){
            index = max -1
        }

        if(index === max){
            index = 0
        }
    }

    function changeBackgroundImage(backgroundImage, element){
        element.style.backgroundImage = `url(${backgroundImage})`
    }