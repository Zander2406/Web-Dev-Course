console.log("Let's write JavaScript");
let currentSong = new Audio();


async function getSongs() {

    let a = await fetch("http://192.168.0.147:3000/songs/");
    let response = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
    as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}

const playmusic = (track)=>{
    currentSong.src = "/songs/" + track
    currentSong.play();
    play.src = "pause.svg";
}

async function main() {
    // Get the list of all songs
    let songs = await getSongs();


    // List all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="" srcset="">
         <div class="info">
            <div>${song.replaceAll("%20", " ")} </div>
            <div>Harry</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="play.svg" alt="" srcset="">
        </div></li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click", element=>{
            console.log(e.querySelector("div").firstElementChild.innerHTML);
            playmusic(e.querySelector("div").firstElementChild.innerHTML.trim());
        })
    })

    // Attach an event listener to play, next and previous
    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src = "pause.svg";
        }
        else{
            currentSong.pause();
            play.src = "play.svg";
        }
    })

    
    

}

main();

