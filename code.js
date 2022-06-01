let frontFile = document.querySelector('.front-folder');
let closeFile = document.querySelector('.close')

frontFile.addEventListener('click', function (e) {
    frontFile.classList.remove('flip-closed')
    e.target.classList.add('flip-front');
});

closeFile.addEventListener('click', function (e) {
    frontFile.classList.add('flip-closed')
    frontFile.classList.remove('flip-front')
})
