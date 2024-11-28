let songList = document.querySelector('#song-list');
let progress = document.querySelector('#progress');
let playBtn = document.querySelector('#play-btn');
let forwardBtn = document.querySelector('#forward');
let backwardBtn = document.querySelector('#backward');


let songs =[
    {
        name : 'song1',
        id: 1
    },
    {
        name : 'song2',
        id : 2,

    },
    {
        name : 'song3',
        id : 3,
    },
    {
        name : 'song4',
        id : 4
    },
]

let audio = new Audio('./Songs/song1.mp3');

for(let song of songs){
    const li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id' , song.id);
    songList.append(li)
}

//play button se gaana chalao

playBtn.addEventListener('click' , function(){
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains("fa-play")){
        playBtn.children[0].classList.remove("fa-play");
        playBtn.children[0].classList.add("fa-pause");
    }else{
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
    }
});


//current Time dikhao

audio.addEventListener('timeupdate' , function(){
    // console.log(audio.duration);
    
    const currentProgress =  audio.currentTime*100/audio.duration;
    // console.log(currentProgress);
    
    // progress.value = currentProgress
});

//input k hissab se gaana chalao

progress.addEventListener('change' , function(){
    const updatedTime  = (progress.value * audio.duration) /100;
    audio.currentTime = updatedTime; 
})


//gaana khud se select chale 
songList.addEventListener('click' , function(e){
    let songId = e.target.getAttribute('id');
    audio.src = `./Songs/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-play');
    playBtn.children[0].classList.add('fa-pause');


}) 

//forward 
forwardBtn.addEventListener('click' , function(){
    let songName = audio.src.split('/')[6];
    // console.log(songName);
    
    let songidd = Number(songName.slice(4,5));
    // console.log(typeof songidd);

    songidd === 4? songidd = 1 : songidd++ ;

    audio.src = `./Songs/song${songidd}.mp3`;
    audio.play();
    
})
