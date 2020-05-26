let shareImageButton = document.querySelector('#share-image-button');
let createPostArea = document.querySelector('#create-post') as HTMLDivElement;
let closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea!.style.display = 'block';
}

function closeCreatePostModal() {
  createPostArea!.style.display = 'none';
}

shareImageButton!.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton!.addEventListener('click', closeCreatePostModal);
