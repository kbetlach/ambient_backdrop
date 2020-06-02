function play() {
    let ophelia = new Audio("assets/audio/focus/ophelia.mp3");
    let bluebell = new Audio("assets/audio/focus/bluebell.mp3");
    let horses = new Audio("assets/audio/focus/horses.mp3");
    let heyComeTogether = new Audio("assets/audio/focus/hey_come_together.mp3");
    let england = new Audio("assets/audio/focus/england.mp3");
    let memories = new Audio("assets/audio/focus/living_in_my_memories.mp3")
    let brokenThings = new Audio("assets/audio/meditative/broken_things.mp3");
    let canada = new Audio("assets/audio/meditative/canada.mp3");
    let lazyMorning = new Audio("assets/audio/meditative/lazy_morning.mp3");
    let sleepwalker = new Audio("assets/audio/meditative/sleepwalker_III.mp3");
    let theHealing = new Audio("assets/audio/meditative/the_healing.mp3");
    let angelina = new Audio("assets/audio/studying/angelina.mp3");
    let memoriesRenewed = new Audio("assets/audio/studying/memories_renewed.mp3");
    let candyIsland = new Audio("assets/audio/studying/candy_island.mp3");
    let coffee = new Audio("assets/audio/studying/coffee.mp3");
    let warm = new Audio("assets/audio/studying/warm.mp3");

    let songs = [ophelia, bluebell, horses, heyComeTogether, england, memories, brokenThings, canada, lazyMorning, sleepwalker, theHealing, angelina, memoriesRenewed, candyIsland, coffee, warm];

    let randomSong = songs[Math.floor(Math.random() * songs.length)];

    randomSong.play();
    console.log(randomSong);
}