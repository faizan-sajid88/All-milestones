


// function for take image from add file and sent to divs   

function addImg(input, preview) {

    let inputImage = document.getElementById(input)
    let previewImage = document.getElementById(preview)
    
    
    let img1 = inputImage.addEventListener('change', (event) => {
        let selectImg = event.target.files[0]
        if (selectImg) {
            let file = new FileReader()

            file.onload = (e) => {
                previewImage.style.backgroundImage = `url(${e.target.result})`
                previewImage.style.display = "block"
                
 
            }
            file.readAsDataURL(selectImg)
        }
    })
    return img1
}

// game grid
addImg("input-img", "pzl-box1")
addImg("input-img", "pzl-box2")
addImg("input-img", "pzl-box3")
addImg("input-img", "pzl-box4")
addImg("input-img", "pzl-box5")
addImg("input-img", "pzl-box6")
addImg("input-img", "pzl-box7")
addImg("input-img", "pzl-box8")
addImg("input-img", "pzl-box9")
// demo image
addImg("input-img" , 'preview-img')




//  functions for randomize img in grid

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const shuffleContainer = document.querySelector('.game-grid');
const shuffleItems = Array.from(shuffleContainer.querySelectorAll('.img-block'));

function shuffleDivs() {
    shuffleArray(shuffleItems);
    shuffleItems.forEach(item => shuffleContainer.appendChild(item));
}

shuffleDivs();


// function for drag and drop



function allowDrop(element) {
    element.preventDefault();
 }

function Drag(element) {
    element.dataTransfer.setData("text", element.target.id);
    element.dataTransfer.setData("parent", element.path[1].id)
}

function Drop(element) {
    element.preventDefault();
  let data = element.dataTransfer.getData("text");
  let parent = element.dataTransfer.getData("parent");
  let parentDiv = document.getElementById(parent)
  let alredyImage = document.getElementById(element.path[0].id)
  let newImage = document.getElementById(data)
  let secondParentDiv = document.getElementById(element.path[1].id)
  parentDiv.removeChild(newImage)
  parentDiv.appendChild(alredyImage)
secondParentDiv.appendChild(newImage)

}

