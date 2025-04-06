function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', loadDetails);
}
attachEvents();

async function loadPosts() {
    let menu = document.getElementById('posts');
    menu.replaceChildren();
    let posts = await getAllPosts();

    for(let post of posts) {
        let option = document.createElement('option');
        option.value = post.id;
        option.textContent = post.title;

        menu.appendChild(option)
    }
}

async function loadDetails() {
    let menu = document.getElementById('posts');
    let postId = menu.value;

    let postData = await getPostById(postId);
    let comments = await getCommentByPostId(postId);

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    let list = document.getElementById('post-comments');
    list.replaceChildren();

    for (let comment of comments) {
        let row = document.createElement('li');
        row.id = comment.id;
        row.textContent = comment.text;

        list.appendChild(row);
    }
}

async function getAllPosts() {
    let response = await fetch("http://localhost:3030/jsonstore/blog/posts");

    if(!response.ok) {
        throw new Error('Request error');
    }

    if(response.status == 204) {
        return [];
    }
    let data = await response.json();

    return Object.values(data);
} 

async function getPostById(postId) {
    //let response = await fetch("http://localhost:3030/jsonstore/blog/posts/" + postId);
    let response = await fetch("http://localhost:3030/jsonstore/blog/posts");

    let posts = await response.json();

    //let data = await response.json();

    //return data;
    return posts[postId];
}

async function getCommentByPostId(postId) {
    let response = await fetch("http://localhost:3030/jsonstore/blog/comments");

    let data = await response.json();

    return Object.values(data).filter(c => c.postId == postId);
}
