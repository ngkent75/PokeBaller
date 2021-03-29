//  console.log('linked')
 const searchTerm = (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('#search-card').value.trim();
    document.location.replace(`/search/${searchInput}`)
    
    // return
console.log(searchInput);
}

document.querySelector('#add-form').addEventListener('submit',searchTerm)