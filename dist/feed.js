"use strict";
let shareImageButton = document.querySelector('#share-image-button');
let createPostArea = document.querySelector('#create-post');
let closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
function openCreatePostModal() {
    createPostArea.style.display = 'block';
}
function closeCreatePostModal() {
    createPostArea.style.display = 'none';
}
shareImageButton.addEventListener('click', openCreatePostModal);
closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
