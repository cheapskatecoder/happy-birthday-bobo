hasPlayed = false;

const playAudio = () => {
    if (hasPlayed === false){
        const audio = document.getElementById('happy-birthday');
        audio.play();
    }
    hasPlayed = true;
}

const redirectToBlog = () => {
    window.location.href = "/my-feelings.html"
}