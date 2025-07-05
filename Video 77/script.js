function createCard(title, channel_name, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }


    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="" srcset="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channel_name} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}


createCard("This is a long title to test if the image will shift because of the length of the title", "Code with Harry", 1230, 7, "11:38", "thumbnail.jpg");

createCard("This is a long title to test if the image will shift because of the length of the title", "Code with Harry", 123, 7, "11:38", "thumbnail.jpg");
