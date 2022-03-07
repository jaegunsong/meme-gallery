var gallery = document.querySelector('main');

var imageUrls = [
  'https://imgix.bustle.com/inverse/1f/0d/48/b7/87f6/4a8b/aa10/bf9aff2bbee4/39374f12f15460818026667b6658b2e0jpg.jpeg?w=349&h=349&fit=max&auto=format%2Ccompress',
  'https://d2j1wkp1bavyfs.cloudfront.net/wp-content/legacy/posts/b8ebb593-e381-4cef-a4ab-3c89158c45ab.jpg?q=50',
  'https://blog.yellowoctopus.com.au/wp-content/uploads/2018/03/yellow-octopus-star-wars-memes-11.jpg'
];

var imageUrlInput = document.querySelector('input');

var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
