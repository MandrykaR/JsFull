export const manageClasses = () => {
    const elementOne = document.querySelector('.one');
    elementOne.classList.add('selected');

    const elementTwo = document.querySelector('.two');
    elementTwo.classList.remove('selected');

    const elementThree = document.querySelector('.three');
    elementThree.classList.toggle('three_done');

    const elementLast = document.querySelector('.four');

    if (elementLast.classList.contains('some-class')) {
        elementLast.classList.add('another-class');
    }
}

manageClasses();