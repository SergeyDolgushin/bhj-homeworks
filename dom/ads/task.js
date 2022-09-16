const advertiseBlocks = document.querySelectorAll('.rotator__case');
const lengthBlocks = advertiseBlocks.length;

let countBlocks = 0;

const setNewBlock = (arrayElements) => {
    console.log(arrayElements);
    arrayElements[countBlocks].classList.toggle('rotator__case_active');
    countBlocks +=1;
    if (countBlocks === lengthBlocks) {
        countBlocks = 0;
    }
    arrayElements[countBlocks].classList.toggle('rotator__case_active');
    arrayElements[countBlocks].style.color = arrayElements[countBlocks].dataset.color;
    setTimeout(() => setNewBlock(arrayElements), arrayElements[countBlocks].dataset.speed);
}

setNewBlock(advertiseBlocks);