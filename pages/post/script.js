import { mockedPosts } from "../src/posts.js";

let getRouteId = () => {
    const path = window.location.href;
    return +path.split("=")[1];
}

let renderPost = () => {
    let postId = getRouteId();

    const container = document.querySelector(".container")

    container.innerHTML = `
        <h2>${mockedPosts[postId - 1].title}</h2> 
        <p>${mockedPosts[postId - 1].content}</p>
    `
}

renderPost();