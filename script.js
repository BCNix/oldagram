const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const mainHtml = document.querySelector("main")

let postBlock = ""

for(let i = 0; i < posts.length; i++){
    postBlock += `
            <div class="post-section">
                <div class="post-section-user-info">
                    <img class="profile-img" src="${posts[i].avatar}" alt="${posts[i].name} portrait.">
                    <div class="user-info">
                        <p class="bold">${posts[i].name}</p>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img class="img-post" src="${posts[i].post}" alt="${posts[i].name} painting.">
                <div class="interaction-icons">
                    <img class="heart-icon" src="./images/icon-heart.png" alt="Heart icon.">
                    <img src="./images/icon-comment.png" alt="Comment icon.">
                    <img src="./images/icon-dm.png" alt="Direct message icon.">
                </div>
                <p class="padding-left padding-bottom bold likes">${posts[i].likes} likes</p>
                <p class="user-comment padding-left"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
            `
}

mainHtml.innerHTML += postBlock

const imgPosts = document.querySelectorAll(".img-post")

for(let i = 0; i < imgPosts.length; i++){
    imgPosts[i].addEventListener("dblclick", function(){
    posts[i].likes++
    updateLikes(i)
})
}


const heartIcons = document.querySelectorAll(".heart-icon")

for(let i = 0; i < heartIcons.length; i++){
    heartIcons[i].addEventListener("click", function(){
    posts[i].likes++
    updateLikes(i)
})
}


function updateLikes(index){
    const likesEl = document.querySelectorAll(".likes")
    likesEl[index].textContent = `${posts[index].likes} likes`
}