let droppedFiles = false;
let fileName = '';
let dropZone = document.getElementById('dropzone');
let button = document.getElementsByClassName('upload-btn');
let uploading = false;
let syncing = document.getElementsByClassName('sync');
let done = document.getElementsByClassName('done');
let bar = document.getElementsByClassName('bar');
let timeOut;
let input = document.getElementsByClassName('input');

dropZone.addEventListener("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
});

dropZone.addEventListener("dragover", function () {
    dropZone.classList.add("is-dragover");
});
dropZone.addEventListener('dragenter', function () {
    dropZone.classList.add('is-dragover');
});

dropZone.addEventListener('dragleave', function () {
    dropZone.classList.remove('is-dragover');
});

dropZone.addEventListener('dragend', function () {
    dropZone.classList.remove('is-dragover');
});

dropZone.addEventListener('drop', function () {
    dropZone.classList.remove('is-dragover');
});


dropZone.addEventListener('drop', function (e) {
    droppedFiles = e.dataTransfer.files;
    fileName = droppedFiles[0]['name'];
    document.querySelector('.filename').innerHTML = fileName;
    document.querySelector('.upload').style.opacity = 0;
});

// button.onclick = function () {
//     startUpload();
// };

// input.addEventListener('change', function () {
//     fileName = document.querySelector(this)[0].files[0].name;
//     document.querySelector('.filename').innerHTML = fileName;
//     document.querySelector('.dropzone .upload').style.opacity = 0;
// })

function startUpload() {
    if (!uploading && fileName != '') {
        uploading = true;
        button.innerHTML = 'Завантаження...'; // не вводиться
        dropZone.style.opacity = 0;
        syncing.classList.add('active');  //Uncaught TypeError: Cannot read properties of undefined (reading 'add')
        bar.classList.add('active');
        timeOut = window.setTimeout(showDone, 3200);
    };
};
function showDone() {
    button.innerHTML = "Готово";
};
