document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const nextBtn = document.getElementById("next-btn");
    const previousBtn = document.getElementById("previous-btn");

    let currentSongIndex = 0;
   // const songs = ["./music/tyla water.mp3", "./music/ed sheeran supermarket flowers.mp3", "song3.mp3"]; // List of songs


    const songs = [
        {
            title: "Water",
            artist: "Tyla",
            filePath: "./music/tyla water.mp3"
        },
        {
            title: "Supermarket Flowers",
            artist: "Ed Sheeran",
            filePath: "./music/ed sheeran supermarket flowers.mp3"
        },
        {
            title: "One",
            artist: "Ed Sheeran",
            filePath: "./music/ed_sheeran_one_official_video_mp3_78553.mp3"
        }
    ];

    // Function to display songs
    function displaySongs() {
        const songList = document.getElementById("song-list");
        songList.innerHTML = ""; // Clear existing list

        songs.forEach((song, currentSongIndex) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
            <span>${song.title} - ${song.artist}</span>
            <button onclick="playSong(${currentSongIndex})">Play</button>
            `;
        songList.appendChild(listItem);
        });
    }


    function playSong() {
        audioSource.src = songs[currentSongIndex].filePath;
        audioPlayer.load();
        audioPlayer.play();
    }



    playBtn.addEventListener("click", function() {
        playSong();
    });

    pauseBtn.addEventListener("click", function() {
        audioPlayer.pause();
    });

    nextBtn.addEventListener("click", function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong();
    });

    previousBtn.addEventListener("click", function() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong();
    });
});
