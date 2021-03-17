let randomImage = document.querySelector('.random-image'); 
console.log("randomImage:", randomImage);

fetch('https://source.unsplash.com/random') 
.then(function(response) {
    if (!response.ok){ 
        console.log(response);
        return new Error(response);
      } 
      console.log("Response:", response);
      return response.blob(); 
//A Blob object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.
})
.then(function(photoBlob) {
    console.log("My Blob:", photoBlob)
    var objectURL = URL.createObjectURL(photoBlob); 
    console.log("Object URL:", objectURL);
    randomImage.src = objectURL; 

    console.log("randomImage.src:", randomImage.src);
})
.catch(function(err) { 
    console.log(err); 
});
