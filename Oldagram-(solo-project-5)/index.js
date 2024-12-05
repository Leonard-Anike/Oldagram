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

let likeEl = document.getElementById ("like-el")
let incrementLikes1 = document.getElementById ("increment-likes1") 
let incrementLikes2 = document.getElementById ("increment-likes2")
likeEl.textContent = 0 + " " + "likes"
let likes = 0
incrementLikes1.addEventListener ("click", function() {
     likes += 1
     likeEl.textContent = likes + " " + "likes"
})

likeEl.style.fontWeight = 900 

incrementLikes2.addEventListener ("click", function() {
    likes += 1
    likeEl.textContent = likes + " " + "likes"
})