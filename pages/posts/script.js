import { mockedPosts } from '../src/posts.js'

const renderPosts = () => {
    const postContainer = document.querySelector('.postList')

    mockedPosts.forEach(post => {
        const postElement = document.createElement('div')

        postElement.addEventListener('click', () => {
            window.location.href = `/pages/post/?id=${post.id}`
        })

        postElement.classList.add('post')

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content.slice(0, 350)}...</p>
        `

        postContainer.appendChild(postElement)
    })
}

renderPosts()