var droppedFiles = false;
var fileName = '';
var $dropzone = document.querySelector('.dropzone');
var $button = document.querySelector('.upload-btn');
var uploading = false;
var $syncing = document.querySelector('.syncing');
var $done = document.querySelector('.done');
var $bar = document.querySelector('.bar');
var timeOut;

$dropzone.addEventListener('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
})
    .addEventListener('dragover dragenter', function () {
        $dropzone.classList.add('is-dragover');
    })
    .addEventListener('dragleave dragend drop', function () {
        $dropzone.removeClass('is-dragover');
    })
    .addEventListener('drop', function (e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
        fileName = droppedFiles[0]['name'];
        document.querySelector('.filename').html(fileName);
        document.querySelector('.dropzone .upload').hide();
    });

$button.bind('click', function () {
    startUpload();
});

document.querySelector("input:file").change(function () {
    fileName = document.querySelector(this)[0].files[0].name;
    document.querySelector('.filename').html(fileName);
    document.querySelector('.dropzone .upload').hide();
});

function startUpload() {
    if (!uploading && fileName != '') {
        uploading = true;
        $button.html('Uploading...');
        $dropzone.fadeOut();
        $syncing.classList.add('active');
        $done.classList.add('active');
        $bar.classList.add('active');
        timeoutID = window.setTimeout(showDone, 3200);
    }
}

function showDone() {
    $button.html('Done');
}