// searches based on value in form
const searchTerm = (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('#search-card').value.trim();
    document.location.replace(`/search/${searchInput}`)
}

//seeds data and adds to collection
const add = async (id, name, rarity, images) => {
    console.log(id);
    console.log(name);
    console.log(rarity);
    console.log(images);
    // posts to local database
    const response = await fetch(`/api/pokeRoutes`, {
        method: 'POST',
        body: JSON.stringify({ id, name, rarity, images }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(id);
    //posts collection 
    const data = { pokemon_id: id };
    const userResponse = await fetch(`/api/pokeUserRoutes`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
};
// listens for onclick for each card
document.querySelector('.card-table').addEventListener('click', function (e) {
    if (e.target.classList.contains('card')) {
        add(e)
    }
})
// listen for form submit to search
document.querySelector('#add-form').addEventListener('submit', searchTerm)