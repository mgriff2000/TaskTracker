// Replace 'YOUR_ACCESS_KEY' with your actual Access Key from Unsplash
const accessKey = '3C8M9Gj364NyayLeTv-2WMhXAvAHwjR6sa063toz5_I';


// Get the HTML elements we need
const imageElement = document.getElementById('funImage');
//const buttonElement = document.getElementById('changeImageButton');

// 1. Select all button elements on the page
const allButtons = document.querySelectorAll('button');

// 2. Loop through the list of buttons
allButtons.forEach(button => {
  // 3. Attach the click event listener to each button
  button.addEventListener('click', changeImage);
});



// Function to fetch and display a new image
async function changeImage() {
	
	// Find the button element that was clicked
	const clickedButton = event.target;
	// Change the apperance of the button. 
	clickedButton.classList.add('clicked-state');
	
    try {
		// Create a unique URL with a timestamp to bust the cache
        const cacheBuster = Date.now();
        const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=**cute animals**&orientation=landscape&timestamp=${cacheBuster}`;

        // Show a loading state
        imageElement.alt = 'Loading...';
        imageElement.src = '';

        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const photo = await response.json();

        // Update the image src and alt text
        imageElement.src = photo.urls.regular;
        imageElement.alt = photo.alt_description || 'A random photo';

        console.log('Image fetched successfully:', photo.urls.regular);
    } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
        imageElement.alt = 'Failed to load image. Check the console for errors.';
    }
}

// Add an event listener to the button
//buttonElement.addEventListener('click', changeImage);

// Load an initial image when the page loads
//window.addEventListener('load', changeImage);

