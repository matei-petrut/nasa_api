fetch("https://api.nasa.gov/planetary/apod?api_key=Gjno2xjoh7QbYrPeNGiLE6pp33VvI0NhvZQQdL3q")
    .then(res => res.json())
    .then(res => {
        const nasaImage = {
            url: res.hdurl,
            name: res.title,
            description: res.explanation
        };

        const image = document.getElementById("image");
        image.src = nasaImage.url;

        const imageName = document.getElementById("image-name");
        imageName.innerHTML = nasaImage.name;

        const imageDesc = document.getElementById("description");
        imageDesc.innerHTML = nasaImage.description;
    });

