import pokemon from 'pokemontcgsdk'

pokemon.configure({apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12'})

// pokemon.card.all({})
//     .then((cards) => {
//         console.log(cards.name)
//     })

pokemon.card.all()
.then((cards) => {
  for (let i = 0; i < 2; i++)
    console.log(cards[i]) // "Blastoise"
})

