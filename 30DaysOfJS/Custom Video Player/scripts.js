const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progressBar = document.querySelector(".progress");
const progressBarFilled = document.querySelector(".progress__filled")
const playBtn = document.querySelector(".toggle");
const sliders = document.querySelectorAll(".player__slider");
const skipBtns = document.querySelectorAll(".player__button");

let isMouseDown = false;

function handlePlay(e) {
    if(video.paused)
        video.play();
    else
        video.pause();
}
function updateBtn() {
  playBtn.textContent = this.paused ? '►' : '❚ ❚';
}

function skipVideo(e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleSlide() {
    video[this.name] = this.value;
}

function updateProgress(e) {
    video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
}

function updateProgressBar() {
    progressBarFilled.style.flexBasis = (video.currentTime / video.duration) * 100 + "%";
}

video.addEventListener("click", handlePlay);
playBtn.addEventListener("click", handlePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
skipBtns.forEach(btn => btn.addEventListener("click", skipVideo))
sliders.forEach(slider => slider.addEventListener("change", handleSlide))
progressBar.addEventListener("click", updateProgress);
progressBar.addEventListener("mousedown", () => isMouseDown = true)
progressBar.addEventListener("mouseup", () => isMouseDown = false)
progressBar.addEventListener("mousemove", () => isMouseDown && updateProgress);
video.addEventListener('timeupdate', updateProgressBar);