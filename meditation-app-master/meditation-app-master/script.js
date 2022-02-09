const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const replay = document.querySelector(".replay");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".video-container video");

  const sounds = document.querySelectorAll(".sounds-select");

  const sound1 = document.querySelector(".sound1");
  const sound2 = document.querySelector(".sound2");

  const timeDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll(".time-select button");

  let fakeDuration = 600;

  timeSelect.forEach((option) => {
    option.addEventListener("click", function () {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
  });

  //   sounds.forEach((sound) => {
  //     sound.addEventListener("click", function () {
  //       song.src = this.getAttribute("data-sound");
  //       video.src = this.getAttribute("data-video");
  //       chcekplaying(song);
  //     });
  //   });

  sound1.addEventListener("click", function () {
    video.src = this.getAttribute("data-video");
    song.src = this.getAttribute("data-sound");
  });
  sound2.addEventListener("click", function () {
    video.src = this.getAttribute("data-video");
    song.src = this.getAttribute("data-sound");
  });

  play.addEventListener("click", () => {
    chcekplaying(song);
  });

  const chcekplaying = (song) => {
    if (song.paused) {
      video.play();
      song.play();
      play.src = "./svg/pause.svg";
    } else {
      video.pause();
      song.pause();
      play.src = "./svg/play.svg";
    }
  };

  const outlinelength = outline.getTotalLength();
  outline.style.strokeDasharray = outlinelength;
  outline.style.strokeDashoffset = outlinelength;

  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elaspedTime = fakeDuration - currentTime;

    let seconds = Math.floor(elaspedTime % 60);
    let minutes = Math.floor(elaspedTime / 60);

    let progress = outlinelength - (currentTime / fakeDuration) * outlinelength;

    outline.style.strokeDashoffset = progress;

    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  };
};
app();
