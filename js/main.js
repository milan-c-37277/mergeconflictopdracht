const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Toward those short trees","Olgun is better dan milan 0_0","On a day in spring."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen
function student1Haiku ()
{
    return ["No one travels Along this way but I, This autumn evening.", "In the twilight rain these brilliant-hued hibiscus - A lovely sunset","The wren Earns his living Noiselessly."]
}
haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()