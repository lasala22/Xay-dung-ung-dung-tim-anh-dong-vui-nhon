function sendApiRequest() {
    let userInput = document.getElementById("input").value;
    console.log(userInput);

    let giphyApiKey = "ZtYxt8uRoGHu5uNHRZ5zxuZnkr2jCddj";
    let giphyApiURL = "http://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key="+giphyApiKey;

    fetch(giphyApiURL).then(function(data) {
        return data.json()
    })
    .then(function(json) {
        console.log(json.data[0].images.fixed_height.url);
        let imgPath = json.data[0].images.fixed_height.url;
        let img = document.createElement("img");
        img.setAttribute("src", imgPath);
        document.body.appendChild(img);
    })
}