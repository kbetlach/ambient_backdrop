//Function housing our focus playlist. Will play random song on button click.
function playFocus() {
    let ophelia = new Audio("assets/audio/focus/ophelia.mp3");
    let bluebell = new Audio("assets/audio/focus/bluebell.mp3");
    let horses = new Audio("assets/audio/focus/horses.mp3");
    let sierraTracks = new Audio("assets/audio/focus/sierra_tracks.mp3");
    let heyComeTogether = new Audio("assets/audio/focus/hey_come_together.mp3");
    let england = new Audio("assets/audio/focus/england.mp3");
    let memories = new Audio("assets/audio/focus/living_in_my_memories.mp3")

    let focusSongs = [ophelia, bluebell, horses, sierraTracks, heyComeTogether, england, memories];

    let randomFocusSong = focusSongs[Math.floor(Math.random() * focusSongs.length)];

    randomFocusSong.play();
    console.log(randomFocusSong);
}

//Function housing our meditative playlist. Will play random song on button click.
function playMeditative() {
    let brokenThings = new Audio("assets/audio/meditative/broken_things.mp3");
    let canada = new Audio("assets/audio/meditative/canada.mp3");
    let lazyMorning = new Audio("assets/audio/meditative/lazy_morning.mp3");
    let sleepwalker = new Audio("assets/audio/meditative/sleepwalker_III.mp3");
    let theHealing = new Audio("assets/audio/meditative/the_healing.mp3");

    let meditativeSongs = [brokenThings, canada, lazyMorning, sleepwalker, theHealing];

    let randomMeditativeSong = meditativeSongs[Math.floor(Math.random() * meditativeSongs.length)];

    randomMeditativeSong.play();
    console.log(randomMeditativeSong);
}

//Function housing our unplugged playlist. Will play random song on button click.
function playUnplugged() {

}

//Function housing our night drive playlist. Will play random song on button click.
function playNightDrive() {

}

//Function housing our studying playlist. Will play random song on button click.
function playStudying() {
    let angelina = new Audio("assets/audio/studying/angelina.mp3");
    let memories = new Audio("assets/audio/studying/memories_renewed.mp3");
    let candyIsland = new Audio("assets/audio/studying/candy_island.mp3");
    let coffee = new Audio("assets/audio/studying/coffee.mp3");
    let warm = new Audio("assets/audio/studying/warm.mp3");

    let studyingSongs = [angelina, memories, candyIsland, coffee, warm];

    let randomStudyingSongs = studyingSongs[Math.floor(Math.random() * studyingSongs.length)];

    randomStudyingSongs.play();
    console.log(randomStudyingSongs);
}