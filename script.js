console.log("Welcome To Spotify")

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItem = document.getElementsByClassName('songItem');

let songs = [
    {songName: "new_192_Panjab - Sidhu Moose Wala.mp3", filePath: "song/1.mp3", coverPath: "coverPath/1.jpg"},
    {songName: "new_192_Jatti Jeone Morh Wargi", filePath: "song/2.mp3", coverPath: "coverPath/2.jpg"},
    {songName: "new_192_Poison - Sidhu Moose Wala.mp3", filePath: "song/3.mp3", coverPath: "coverPath/3.jpg"},
    {songName: "new_192_8 Cylinder - Sidhu Moose Wala.mp3", filePath: "song/4.mp3", coverPath: "coverPath/4.jpg"},
    {songName: "bollywood_SEI 2007 - Saiyaan Re.mp3", filePath: "song/5.mp3", coverPath: "coverPath/5.jpg"},
    {songName: "bollywood_SEI 2007 - Mera Dil.mp3", filePath: "song/6.mp3", coverPath: "coverPath/6.jpg"},
    {songName: "bollywood_SEI 2007 - Salaam E Ishq.mp3", filePath: "song/7.mp3", coverPath: "coverPath/7.jpg"},
    {songName: "bollywood_SEI 2007 - Dil Kya Kare.mp3", filePath: "song/8.mp3", coverPath: "coverPath/8.jpg"}
]

songItem.forEach((element)=> {
    element.getElementByTagName('img')[0].src = songs[i].coverPath;
    element.getElementByClassName('songName')[0].innerText = songs[i].coverName;
});

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
//update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-pause');
        element.classList.remove('fa-circle-play');
    })
}

Array.from(document.getElementByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = 'songs/$(songIndex+1).mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    masterSongName.innerText = songs[songIndex].songName;
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = 'songs/$(songIndex+1).mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})