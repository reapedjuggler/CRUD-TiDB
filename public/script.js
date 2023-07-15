// Function to load a random image
async function loadRandomImage() {
  try {
    // Send a fetch request to get a random image from the server
    const response = await fetch("/random");
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const imageUrl = await response.text();
    const imgElement = document.getElementById("randomImage");
    imgElement.src = imageUrl;
    console.log(imageUrl);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
