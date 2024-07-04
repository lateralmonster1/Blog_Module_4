document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (!username || !title || !content) {
        alert('Please complete the form');
        return;
    }
    
    const blogPost = { username, title, content };
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    
    window.location.href = '#posts-container';
    displayPosts();
});
