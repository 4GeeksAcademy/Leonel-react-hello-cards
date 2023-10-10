import React from 'react'
import '../../styles/index.css'
import CardNumber1 from '../cards/CardNumber1'
import CardNumber2 from '../cards/CardNumber2'
import CardNumber3 from '../cards/CardNumber3'
import CardNumber4 from '../cards/CardNumber4'

const Card = () => {
    const cardObj1 = {
        src: "https://pbs.twimg.com/media/FkSO-8PXEAYtyW8?format=jpg&name=4096x4096",
        title: 'Messi Won the World of Cup!',
        description: 'The defining image of this World Cup was just about its last one. There was a kiss for the trophy. Lionel Messi finally became acquainted with the World Cup. On a night high on drama and higher on emotion, it had the perfect ending for the greatest of them all.',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const cardObj2 = {
        src: "https://www.ginx.tv/respawn-cdn/hg-F2vYxFp5ligxahaipiW7ji5_HIdbcWQ3lIlFWNr0/fill/1200/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzMi9zcGlkZXJtYW4vTWFydmVsX3NfU3BpZGVyLU1hbl8yXy1fUmVsZWFzZV9EYXRlLF9UcmFpbGVyLF9MZWFrc19hbmRfTW9yZS9NYXJ2ZWxfc19TcGlkZXItTWFuXzJfLV9SZWxlYXNlX0RhdGUsX1RyYWlsZXIsX0xlYWtzX2FuZF9Nb3JlX2ZlYXR1cmVkX2ltYWdlLmpwZw.webp",
        title: 'Spider-Man 2 game release date, news & gameplay',
        description: "Our spidey senses are tingling. Spider-Man is back! Or should we say Spider-Men. Peter Parker (the original web slinger) teams up with Miles Morales (his protégé) in Marvel’s adrenaline fuelled sequel. Swapping between the two, you’ll protect the streets of New York from a rogues’ gallery of villains old and new.",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const cardObj3 = {
        src: "https://louderthanwar.com/wp-content/uploads/2023/01/The1975-1-Jordan-Curtis-Hughes.jpg",
        title: 'The 1975: The O2 Arena, London',
        description: "The 1975 support their most focused album yet with their most ambitious stage show to date. Even a surprise appearance by Taylor Swift can’t eclipse the sensory-overload spectacle they’ve created. To the strains of Mahler’s Adagietto, Matty Healy has just felt himself up on a couch.                            ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const cardObj4 = {
        src: "https://static01.nyt.com/images/2023/08/20/multimedia/20AHSOKA-whzt/20AHSOKA-whzt-superJumbo.jpg?quality=75&auto=webp",
        title: 'In ‘Ahsoka,’ a ‘Star Wars’ Fan Favorite Returns',
        description: "For many casual viewers, “Star Wars” is the domain of familiar faces: the heroic Jedi Luke Skywalker, the nefarious Sith Lord Darth Vader, the roguish smuggler Han Solo and the tenacious Princess Leia. But over the years, the universe of “Star Wars” has expanded far beyond the realm originally imagined by George Lucas.",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
        <div className='container-md container-cards'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <CardNumber1 {...cardObj1} />
                <CardNumber2 {...cardObj2} />
                <CardNumber3 {...cardObj3} />
                <CardNumber4 {...cardObj4} />
            </div>
        </div>

    )
}

export default Card
