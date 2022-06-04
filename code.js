let frontFile = document.querySelector('.front-folder');
let closeFile = document.querySelector('.close')
let body = document.querySelector('.body')

frontFile.addEventListener('click', function (e) {
    frontFile.classList.remove('flip-closed');
    e.target.classList.add('flip-front');
    body.classList.remove('send-back');
    body.classList.add('bring-forward');
});

closeFile.addEventListener('click', function (e) {
    frontFile.classList.add('flip-closed');
    frontFile.classList.remove('flip-front');
    body.classList.remove('bring-forward');
    body.classList.add('send-back');
})
