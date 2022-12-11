// Selectors
let musicContainer = document.querySelector('.music-container')
let playBtn = document.querySelector('#play')
let prevBtn = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')
let audio = document.querySelector('#audio')
let progress = document.querySelector('.progress')
let progressContainer = document.querySelector('.progress-container')
let title = document.querySelector('#title')
let cover = document.querySelector('#cover')


// Song Titles and Images
const songs = [
    'isThisLove',
    'oneLove',
]


// Keep track of the current song
let songIndex = 0

// Initially load song into the DOM
// The function loadSong() takes in the songs array with the corresponding index
loadSong(songs[songIndex])


// Update the song details
function loadSong(song) {
    console.log(`Song index: ${songIndex}`)
    console.log(`Songs Array Length: ${songs.length}`)

    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.png`
}

function playSong() {
    // Play Song Function
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

function pauseSong() {
    // Pause Song Function
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause()    
}

function previousSong() {
    songIndex--
   console.log(`Song index: ${songIndex}`)
   if (songIndex < 0) {
       songIndex = songs.length -1  
   }
   loadSong(songs[songIndex])
   playSong()   
}

function nextSong() {
    songIndex++
    console.log(`Song index: ${songIndex}`)
    if (songIndex >= songs.length) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e) {
    console.log(e.srcElement.currentTime)
    console.log(e.srcElement.duration)
    const { currentTime, duration } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}


// Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else{
        playSong()
    }
})

// Change Song
prevBtn.addEventListener('click', previousSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)
audio.addEventListener('ended', nextSong)


progressContainer.addEventListener('click', setProgress)






 
 