const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b10 = document.getElementById("b10");
const b11 = document.getElementById("b11");
const b12 = document.getElementById("b12");
const b13 = document.getElementById("b13");
const b14 = document.getElementById("b14");
const b15 = document.getElementById("b15");
const b16 = document.getElementById("b16");
const b17 = document.getElementById("b17");
const b18 = document.getElementById("b18");
const b19 = document.getElementById("b19");
const b20 = document.getElementById("b20");
const b21 = document.getElementById("b21");
const b22 = document.getElementById("b22");
const b23 = document.getElementById("b23");
const b24 = document.getElementById("b24");
const b25 = document.getElementById("b25");
const b26 = document.getElementById("b26");
const b27 = document.getElementById("b27");
const b28 = document.getElementById("b28");
const b29 = document.getElementById("b29");
const b30 = document.getElementById("b30");
const songs = [
  {
    title: "juz 1 ",
    name: "آلم",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2001.mp3",
  },
  {
    title: "juz 2 ",
    name: "سيقول",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2002.mp3",
  },
  {
    title: "juz 3 ",
    name: "تلك الرسل",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2003.mp3",
  },
  {
    title: "juz 4 ",
    name: "لن تنالوا",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2004.mp3",
  },
  {
    title: "juz 5 ",
    name: "والمحصنات",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2005.mp3",
  },
  {
    title: "juz 6 ",
    name: "لا يحب الله",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2006.mp3",
  },
  {
    title: "juz 7 ",
    name: "وإذا سمعوا",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2007.mp3",
  },
  {
    title: "juz 8 ",
    name: "ولو أننا",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2008.mp3",
  },
  {
    title: "juz 9 ",
    name: "قال الملأ",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2009.mp3",
  },
  {
    title: "juz 10 ",
    name: "واعلموا",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2010.mp3",
  },
  {
    title: "juz 11 ",
    name: "يعتذرون",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2011.mp3",
  },
  {
    title: "juz 12 ",
    name: "ومامن دابة",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2012.mp3",
  },
  {
    title: "juz 13 ",
    name: "وما أبرئ",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2013.mp3",
  },
  {
    title: "juz 14 ",
    name: "ربما",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2014.mp3",
  },
  {
    title: "juz 15 ",
    name: "سبحٰن الذیٓ",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2015.mp3",
  },
  {
    title: "juz 16 ",
    name: "قال ألم",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2016.mp3",
  },
  {
    title: "juz 17 ",
    name: "اقترب للناس",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2017.mp3",
  },
  {
    title: "juz 18 ",
    name: "قد أفلح",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2018.mp3",
  },
  {
    title: "juz 19 ",
    name: "وقال الذين",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2019.mp3",
  },
  {
    title: "juz 20 ",
    name: "امن خلق",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2020.mp3",
  },
  {
    title: "juz 21 ",
    name: "اتل مآ اوحی",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2021.mp3",
  },
  {
    title: "juz 22 ",
    name: "ومن يقنت",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2022.mp3",
  },
  {
    title: "juz 23 ",
    name: "ومالی",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2023.mp3",
  },
  {
    title: "juz 24 ",
    name: "فمن أظلم",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2024.mp3",
  },
  {
    title: "juz 25 ",
    name: "إليه يرد",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2025.mp3",
  },
  {
    title: "juz 26 ",
    name: "حـم",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2026.mp3",
  },
  {
    title: "juz 27 ",
    name: "قال فما خطبكم",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2027.mp3",
  },
  {
    title: "juz 28 ",
    name: "قد سمع اللہ",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2028.mp3",
  },
  {
    title: "juz 29 ",
    name: "تبٰرک الذی",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2029.mp3",
  },
  {
    title: "juz 30 ",
    name: "عمّ",
    source:
      "https://archive.org/download/quran-juz-audio-mp3/Para%2030.mp3",
  },

];

let currentSongIndex = 0;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  
});
b1.addEventListener("click", function () {
  currentSongIndex = (0 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b2.addEventListener("click", function () {
  currentSongIndex = (1 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b3.addEventListener("click", function () {
  currentSongIndex = (2 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b4.addEventListener("click", function () {
  currentSongIndex = (3 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b5.addEventListener("click", function () {
  currentSongIndex = (4 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b6.addEventListener("click", function () {
  currentSongIndex = (5 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b7.addEventListener("click", function () {
  currentSongIndex = (6 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b8.addEventListener("click", function () {
  currentSongIndex = (7 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b9.addEventListener("click", function () {
  currentSongIndex = (8 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b10.addEventListener("click", function () {
  currentSongIndex = (9 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b11.addEventListener("click", function () {
  currentSongIndex = (10 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b12.addEventListener("click", function () {
  currentSongIndex = (11 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b13.addEventListener("click", function () {
  currentSongIndex = (12 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b14.addEventListener("click", function () {
  currentSongIndex = (13 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b15.addEventListener("click", function () {
  currentSongIndex = (14 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b16.addEventListener("click", function () {
  currentSongIndex = (15 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b17.addEventListener("click", function () {
  currentSongIndex = (16 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b18.addEventListener("click", function () {
  currentSongIndex = (17 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b19.addEventListener("click", function () {
  currentSongIndex = (18 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b20.addEventListener("click", function () {
  currentSongIndex = (19 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b21.addEventListener("click", function () {
  currentSongIndex = (20 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b22.addEventListener("click", function () {
  currentSongIndex = (21 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b23.addEventListener("click", function () {
  currentSongIndex = (22 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b24.addEventListener("click", function () {
  currentSongIndex = (23 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b25.addEventListener("click", function () {
  currentSongIndex = (24 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b26.addEventListener("click", function () {
  currentSongIndex = (25 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b27.addEventListener("click", function () {
  currentSongIndex = (26 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b28.addEventListener("click", function () {
  currentSongIndex = (27 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});
b29.addEventListener("click", function () {
  currentSongIndex = (28 + songs.length) % songs.length;0
  updateSongInfo();
  playSong();
  
});

b30.addEventListener("click", function () {
  currentSongIndex = (29 + songs.length) % songs.length;
  updateSongInfo();
  playSong();
  
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 0,
  slidesPerView: "auto",
  allowTouchMove: true,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
