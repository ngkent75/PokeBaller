const remove = async (id, name, rarity, images) => {
    const data = {pokemon_id:id};
    const userResponse = await fetch(`/api/pokeUserRoutes/${id}`, {
        method: 'DELETE',
    })
    location.reload();
};
document.querySelector('.card-table').addEventListener('click', function(e){
    if(e.target.classList.contains('card')){
        remove(e)
    }
})