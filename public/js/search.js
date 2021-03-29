//  console.log('linked')
 const searchTerm = (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('#search-card').value.trim();
    document.location.replace(`/search/${searchInput}`)
    
    // return
console.log(searchInput);
} 
const add = id => {
    console.log(id);
}
document.querySelector('.card-table').addEventListener('click', function(e){
    if(e.target.classList.contains('card')){
        add(e)
    }
})
document.querySelector('#add-form').addEventListener('submit',searchTerm)