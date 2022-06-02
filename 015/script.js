let droppedFiles = false;
let fileName = '';
let dropZone = document.querySelector('#dropzone');
let button = document.querySelector('.upload-btn');
let uploading = false;
let syncing = document.querySelector('.sync');
let done = document.querySelector('.done');
let bar = document.querySelector('.bar');
let timeOut;
let input = document.querySelector('.input');

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

button.onclick = function () {
    startUpload();
};


input.addEventListener('change', function () {
    uploadFiles = document.querySelector('.input').files[0];
    fileName = uploadFiles.name;
    document.querySelector('.filename').innerHTML = fileName;
    document.querySelector('.upload').style.opacity = 0;
})


function startUpload() {
    if (!uploading && fileName != '') {
        uploading = true;
        button.innerHTML = 'Завантаження...';
        dropZone.style.opacity = 0;
        syncing.classList.add('active');
        bar.classList.add('active');
        done.classList.add('active');
        timeOut = window.setTimeout(showDone, 3200);
    };
};
function showDone() {
    button.innerHTML = "Готово";
};
