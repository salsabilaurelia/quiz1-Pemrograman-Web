// Function to change background color of frame
function changeBackgroundColor(frameNumber) {
  var frame = document.getElementById('frame' + frameNumber);
  var color = generateRandomColor();
  frame.style.backgroundColor = color;
}

// Function to generate random color
function generateRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Function to add image to frame
function addImageToFrame(frameNumber, imageUrl) {
  var frame = document.getElementById('frame' + frameNumber);
  var imageContainer = frame.querySelector('.image-container');
  var image = document.createElement('img');
  image.src = imageUrl;
  image.alt = 'Gambar ' + frameNumber;
  imageContainer.appendChild(image);
}

// Call addImageToFrame function to add images to frames
addImageToFrame(1, 'gambar1.jpg');
addImageToFrame(2, 'gambar2.jpg');
addImageToFrame(3, 'gambar3.jpg');
