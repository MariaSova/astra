let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '438',
        width: '778',
        videoId: 'YgAyr2fgAfc',
        events: {
            
            //'onReady': onPlayerReady,
            //'onStateChange': onPlayerStateChange
        }
    });
}