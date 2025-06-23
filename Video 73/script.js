function createCard(title, channel_name, views, monthsOld, duration, thumbnail) {

    // Creating the div that will be our card
    let card_div = document.createElement("div");
    // Adding the card class to our card
    card_div.classList.add("card");

    // Creating the div with the index content in it
    let index_div = document.createElement("div");
    // Adding the index class to the index div
    index_div.classList.add("index");
    // Adding the inner content to the index div
    index_div.innerHTML = document.querySelectorAll(".card").length + 1;
    // Inserting the index div inside the card
    card_div.appendChild(index_div);

    // Creating the thumbnail container and assigning the class
    let thumbnail_div = document.createElement("div");
    thumbnail_div.classList.add("thumbnail");
    // Creating the thumbnail image and assigning the source
    let thumbnail_img = document.createElement("img");
    thumbnail_img.src = thumbnail;
    // Creating the duration container and assigning the content inside
    let duration_div = document.createElement("div");
    duration_div.classList.add("duration");
    duration_div.innerHTML = duration;
    // Adding the elements inside the thumbnail container
    thumbnail_div.appendChild(thumbnail_img);
    thumbnail_div.appendChild(duration_div);
    // Adding the thumbnail container to the card
    card_div.appendChild(thumbnail_div);

    // Creating the details container
    let details_div = document.createElement("div");
    details_div.classList.add("details");

    // Creating the title container and adding the title
    let title_div = document.createElement("div");
    title_div.classList.add("title");
    title_div.innerHTML = `<strong>${title}</strong>`;

    // Creating the specifics conatiner and assigning class
    let specifics_div = document.createElement("div");
    specifics_div.classList.add("specifics");

    if (views >= 1000000)
    {
        views = `${Math.trunc(views / 1000000)}M views`;
    }
    else if (views >= 1000)
    {
        views = `${Math.trunc(views / 1000)}K views`;
    }
    else
    {
        views = `${views} views`;
    }

    if (monthsOld > 12)
    {
        monthsOld = `${Math.floor(monthsOld / 12)} year ago`;
    }
    else
    {
        monthsOld = `${monthsOld} months ago`;
    }
    // Creating the list and list items that contains channel name and other small details
    let specific_list = document.createElement("ul");
    let litem1 = document.createElement("li");
    litem1.innerHTML = channel_name;
    let litem2 = document.createElement("li");
    litem2.innerHTML = views;
    let litem3 = document.createElement("li");
    litem3.innerHTML = monthsOld;
    // Adding all the list items inside the list
    specific_list.appendChild(litem1);
    specific_list.appendChild(litem2);
    specific_list.appendChild(litem3);

    // Adding the list to the list container
    specifics_div.appendChild(specific_list);

    // Adding the title and list to the details container
    details_div.appendChild(title_div);
    details_div.appendChild(specifics_div);

    // Adding the details div to the card itself
    card_div.appendChild(details_div);

    // Finally adding all the elements to the container with the cards
    document.querySelector(".container").appendChild(card_div);

}


createCard("Test Title", "Code with Harry", 1230, 7, "11:38", "thumbnail.jpg");
