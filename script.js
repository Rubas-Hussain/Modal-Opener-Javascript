const btnCont = document.querySelector('.btnCont');
const stackedCont = document.querySelector('.stackedCont');
const backImgCont=document.querySelector('.backImg');
// let stackedCont2;
// let isShowModal = false;

btnCont.addEventListener('click', () => {
        const stackedCont2 = document.createElement('div');
        stackedCont2.classList.add('stackedCont2');
        stackedCont2.innerHTML = `
            <i class="fa-solid fa-xmark cancelIcon"></i>
            <p>
                Modal Content
            </p>`;
        stackedCont.appendChild(stackedCont2);
        const bluebgCont=document.createElement('div');
        bluebgCont.classList.add('blueBg');
        backImgCont.append(bluebgCont);

        // Add event listener to the cancel icon after it has been added to the DOM
        const cancelIcon = stackedCont2.querySelector('.cancelIcon');
        cancelIcon.addEventListener('click', () => {
            stackedCont2.remove();
            bluebgCont.remove()
        });
});
