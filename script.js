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



// Double clicking the posted image increment the like to 1
// Clicking the heart image increment the like counter to 1


// Render each user post from the post const variable
// Each post must have the correct details (name, username, location avatar, post, comments and likes)

const mainHtml = document.querySelector("main")

let postBlock = ""

for(let post of posts){
    postBlock += `

            <div class="post-section">
                <div class="post-section-user-info">
                    <img class="profile-img" src="${post.avatar}" alt="${post.name} portrait.">
                    <div class="user-info">
                        <p class="bold">${post.name}</p>
                        <p>${post.location}</p>
                    </div>
                </div>
                <img class="img-post" src="${post.post}" alt="${post.name} painting.">
                <div class="interaction-icons">
                    <img class="heart-icon" src="./images/icon-heart.png" alt="Heart icon.">
                    <img src="./images/icon-comment.png" alt="Comment icon.">
                    <img src="./images/icon-dm.png" alt="Direct message icon.">
                </div>
                <p class="padding-left padding-bottom bold">${post.likes} likes</p>
                <p class="user-comment padding-left"><span class="bold">${post.username}</span> ${post.comment}</p>
            </div>
            
            `
}

mainHtml.innerHTML += postBlock

