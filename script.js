document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var searchQuery = document.getElementById('search-input').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
});
