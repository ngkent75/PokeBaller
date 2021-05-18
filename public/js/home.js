// functions for modal operation

function openModalAdd() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("AddModal").style.display = "block"
    document.getElementById("AddModal").classList.add("show")
};

function closeModalAdd() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("AddModal").style.display = "none"
    document.getElementById("AddModal").classList.remove("show")
};

function openModalError() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("ErrorModal").style.display = "block"
    document.getElementById("ErrorModal").classList.add("show")
};

function closeModalError() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("ErrorModal").style.display = "none"
    document.getElementById("ErrorModal").classList.remove("show")
};

//seeds data and adds to collection
const add = async (id, name, rarity, images) => {
    // posts to local database
    const response = await fetch(`/api/pokeRoutes`, {
        method: 'POST',
        body: JSON.stringify({ id, name, rarity, images }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //posts collection 
    const data = { pokemon_id: id };
    const userResponse = await fetch(`/api/pokeUserRoutes`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (userResponse.ok) {
        openModalAdd();
    } else {
        openModalError();
    }
};
// listens for onclick for each card
document.querySelector('.card-table').addEventListener('click', function (e) {
    if (e.target.classList.contains('card')) {
        add(e)
    }
})