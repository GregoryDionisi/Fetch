const images = [
    "https://cdn.pixabay.com/photo/2018/03/29/21/51/cute-3273789_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/26/01/40/cats-6574788_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/04/30/18/33/kittens-2273598_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/09/27/09/34/cats-5606202_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/12/18/18/42/kittens-1916542_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/27/11/36/maine-coon-7954384_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/09/22/00/28/kitten-6645241_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/04/08/31/cots-8105667_1280.jpg"
];

function loadImages() {
    let mostraDatiDiv = document.getElementById('mostraDati');
    mostraDatiDiv.innerHTML = '';   
    
    images.forEach((url) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.blob();
            })
            .then((myBlob) => {
                let objectURL = URL.createObjectURL(myBlob);
                let imageContainer = document.createElement('div');
                let image = document.createElement('img');
                let sizeContent = document.createElement('p');
                const size = myBlob.size / 1024;

                imageContainer.className = "flex flex-col items-center";
                image.src = objectURL;
                image.style.width = "200px";
                image.style.height = "200px";
                image.style.border = "3px solid #0b8af4";
                image.onmouseover = function () { bigImg(image); };
                image.onmouseout = function () { normalImg(image); };
                sizeContent.innerHTML = `Size: ${size.toFixed(2)} kB`;

                imageContainer.appendChild(image);
                imageContainer.appendChild(sizeContent);
                mostraDatiDiv.appendChild(imageContainer);

                console.log("Immagine caricata con successo");
            })
            .catch((error) => {
                console.error(`Could not get image: ${error}`);
            });
    });
}



function loadImages1() {
    let mostraDatiDiv = document.getElementById('mostraDati');
    mostraDatiDiv.innerHTML = '';  
    images.forEach((url) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.blob();
            })
            .then((myBlob) => {
                let objectURL = URL.createObjectURL(myBlob);
                let imageContainer = document.createElement('div');
                let image = document.createElement('img');
                let sizeContent = document.createElement('p');
                const size = myBlob.size / 1024;

                imageContainer.className = "flex flex-col items-center";
                image.src = objectURL;
                image.style.height = "200px";
                image.style.border = "3px solid #0b8af4";
                image.onmouseover = function () { bigImg(image); };
                image.onmouseout = function () { normalImg(image); };

                sizeContent.innerHTML = `Size: ${size.toFixed(2)} kB`;
                imageContainer.appendChild(image);
                imageContainer.appendChild(sizeContent);
                mostraDatiDiv.appendChild(imageContainer);

                console.log("Immagine caricata con successo");
            })
            .catch((error) => {
                console.error(`Could not get image: ${error}`);
            });
    });
}



function loadImages2() {
    let mostraDatiDiv = document.getElementById('mostraDati');
    mostraDatiDiv.innerHTML = ''; 
    const url = images[Math.floor(Math.random() * images.length)] 
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.blob();
            })
            .then((myBlob) => {
                let objectURL = URL.createObjectURL(myBlob);
                let imageContainer = document.createElement('div');
                let image = document.createElement('img');
                let sizeContent = document.createElement('p');
                const size = myBlob.size / 1024;

                imageContainer.className = "flex flex-col items-center";
                image.src = objectURL;
                image.style.height = "400px";
                image.style.border = "3px solid #0b8af4";

                sizeContent.innerHTML = `Size: ${size.toFixed(2)} kB`;
                imageContainer.appendChild(image);
                imageContainer.appendChild(sizeContent);
                mostraDatiDiv.appendChild(imageContainer);

                console.log("Immagine caricata con successo");
            })
            .catch((error) => {
                console.error(`Could not get image: ${error}`);
            });
}



function bigImg(image) {
    image.style.height = "300px";
    image.style.width = "300px";
  }
  
function normalImg(image) {
    image.style.height = "200px";
    image.style.width = "200px";
  }
