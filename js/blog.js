document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('posts-container').style.display = 'none';
});

document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function displayPosts() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('posts-container').style.display = 'block';
    
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postsMain = document.getElementById('posts-main');
    postsMain.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><p>Posted by: ${post.username}</p>`;
        postsMain.appendChild(postElement);
    });
}
