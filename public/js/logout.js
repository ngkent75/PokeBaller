const logoutHandler = async () => {
    const response = await fetch('/api/pokeUserRoutes/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.logout').addEventListener('click', logoutHandler);