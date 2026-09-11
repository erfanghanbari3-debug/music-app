const music = document.querySelector("audio")
const plyBtn = document.querySelector(".play-btn")
const nextMusic = document.querySelector(".next")
const previouskMusic = document.querySelector(".previous")
const tenSecForward = document.querySelector(".ten-sec-forward")
const tenSecBackWard = document.querySelector(".ten-sec-back")
const playIcon = document.querySelector(".play-icon");
const musicTitle = document.querySelector(".music-title")
const musicArtist = document.querySelector(".music-artist")
const musicCover = document.querySelector(".music-cover img")

let mainMusicIndex = 0;

let musics = [
    { id: 1, title: "WILDFLOWER", cover: "/image/wildflower.jpg", src: "/musics/Billie Eilish - WILDFLOWER (128).mp3", image: "/image/wildflower.jpg", artist: "Billie Eillish" },
    { id: 2, title: "Summertime Sadness", cover: "/image/sumetime.jpg", src: "/musics/Lana Del Rey - Summertime Sadness.mp3", image: "/image/sumetime.jpg", artist: "Lana Del Ray" },
    { id: 3, title: "Somewhere Only We Know", cover: "/image/somewhere.jpg", src: "/musics/Rhianne - Somewhere Only We Know - 320.mp3", image: "/image/somewhere.jpg", artist: "Rihana" },
];


function playMusic() {

    music.play()

    playIcon.classList.remove("fa-play")
    playIcon.classList.add("fa-pause")

}

function pauseMusic() {

    music.pause()

    playIcon.classList.remove("fa-pause")
    playIcon.classList.add("fa-play")

}

function tenSecForWard() {
    music.currentTime = music.currentTime + 10
}

function tenSecBackward() {
    music.currentTime = music.currentTime - 10
}


function NextMusic() {
    mainMusicIndex++;

    if (mainMusicIndex >= musics.length) {
        mainMusicIndex = 0;
    }

    const mainmusic = musics[mainMusicIndex];

    musicCover.src = mainmusic.cover;
    musicTitle.textContent = mainmusic.title;
    musicArtist.textContent = mainmusic.artist;

    music.src = mainmusic.src;

    music.play();

    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
}

function PreviouskMusic() {
    mainMusicIndex--;

    if (mainMusicIndex >= musics.length) {
        mainMusicIndex = 0;
    }

    const mainmusic = musics[mainMusicIndex];

    musicCover.src = mainmusic.cover;
    musicTitle.textContent = mainmusic.title;
    musicArtist.textContent = mainmusic.artist;

    music.src = mainmusic.src;

    music.play();

    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
}
previouskMusic.addEventListener("click", PreviouskMusic)
nextMusic.addEventListener("click", NextMusic)
tenSecForward.addEventListener("click", tenSecForWard)
tenSecBackWard.addEventListener("click", tenSecBackward)
plyBtn.addEventListener("click", function () {
    if (music.paused) {
        playMusic()
    } else {
        pauseMusic()
    }
})