//Convert all the images in a folder to a JSON file and insert into DOM

// Convert image URLs in a specified folder to JSON data
async function convertImagesToJSON(folderPath) {
    const response = await fetch(folderPath);
    const html = await response.text();
  
    // Use regular expression to extract image URLs from the HTML content
    const imageURLs = html.match(/<img[^>]+src="?([^"\s]+)"?\s*\/>/g).map(imgTag => {
      const srcMatch = imgTag.match(/src=["']?([^"']+)["']?/);
      return srcMatch ? srcMatch[1] : null;
    });
  
    // Return the array of image URLs as JSON
    return JSON.stringify(imageURLs);
  }
  
  // Insert images into the DOM using JSON data
  async function insertImagesFromJSON(jsonData) {
    const imageGallery = document.getElementById('imageGallery');
    const imageURLs = JSON.parse(jsonData);
  
    imageURLs.forEach(imageURL => {
      const img = document.createElement('img');
      img.src = imageURL;
      imageGallery.appendChild(img);
    });
  }
  
  // Usage example
  const folderPath = 'path/to/your/image/folder/';
  convertImagesToJSON(folderPath)
    .then(jsonData => insertImagesFromJSON(jsonData))
    .catch(error => console.error(error));
  