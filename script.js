console.log("Welcome To Spotify");
let songTndex =0;
let audioElement = new Audio('Maiyya-Mainu-Lyrical.mp3');
let masterPlay =document.getElementById('masterPlay');
let myprogressBar =document.getElementById('myprogressBar');


let songs =[
    {songName: "Maiya-Mainu", filePath: "F:\spotify\Maiyya-Mainu-Lyrical.mp3"},
    {songName: "Maiya-Mainu", filePath: "F:\spotify\Maiyya-Mainu-Lyrical.mp3"},
    {songName: "Maiya-Mainu", filePath: "F:\spotify\Maiyya-Mainu-Lyrical.mp3"},
    {songName: "Maiya-Mainu", filePath: "F:\spotify\Maiyya-Mainu-Lyrical.mp3"},
    {songName: "Maiya-Mainu", filePath: "F:\spotify\Maiyya-Mainu-Lyrical.mp3"},
    {songName: "Maiya-Mainu", filePath: "F:\spotify\Maiyya-Mainu-Lyrical.mp3"},
    {songName: "Maiya-Mainu", filePath: "F:\spotify\Maiyya-Mainu-Lyrical.mp3"},
]
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
myprogressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})
