/*
// MAKING SCORE DYNAMIC
document.addEventListener("DOMContentLoaded", function() {
const scoreContainers = document.querySelectorAll(".comment-card");

scoreContainers.forEach((container)=>{

    const scorePlusBtn = container.querySelector(".js-score-plus");
    const scoreMinusBtn = container.querySelector(".js-score-minus");
    const scoreNum = container.querySelector(".score-num");
    
    let score = Number(scoreNum.innerHTML);
    
    // scorePlusBtn.forEach((btn)=>{
    
        scorePlusBtn.addEventListener('click', ()=>{
            score= score + 1;
            scoreNum.innerHTML = `${score}`;
        });
    // });
    
    // scoreMinusBtn.forEach((btn)=>{
        scoreMinusBtn.addEventListener('click', ()=>{
            score = score-1;
            scoreNum.innerHTML = `${score}`;
        });
        
    // });

});


});

//MAKING THE REPLY BUTTON DYNAMIC

function loadPage(){
    fetch('data.json')
    .then(response => response.json())
    .then(commentsData =>{

    })
}


document.addEventListener("DOMContentLoaded", function() {
    const commentContainers = document.querySelectorAll(".comment-try");

    commentContainers.forEach((container) => {
        const replyBtn = container.querySelector(".reply");
        let replyCard = container.querySelector(".reply-card");
        

        replyBtn.addEventListener('click', () => {
            replyCard.style.display = "flex";

       
        });

        //making the send button dynamic
        
        const sendReply = container.querySelector(".send-button");
        const replyInput = container.querySelector(".reply-input");
        sendReply.addEventListener('click', ()=>{
            const userInput = replyInput.value;
            replyCard.innerHTML = `
            <div class="left-section">
                <div class="score">
                    <div class="js-score-plus"><img src="images/icon-plus.svg" alt=""></div>
                    <div class="score-num">12</div>
                    <div class="js-score-minus"><img src="images/icon-minus.svg" alt=""></div>
                </div>
            </div>
            <div class="right-section">
                <div class="user">
                    <img src="images/avatars/image-maxblagun.webp" alt="" class="user-pfp">
                    <div class="username">julio sumo</div>
                    <div class="period">now</div>

                    <div class="delete">
                        <img src="images/icon-delete.svg" alt="">
                        <div class="delete-text">delete</div>
                    </div>
                    <div class="reply">
                        <img src="images/icon-reply.svg" alt="">
                        <div class="reply-word">Reply</div>
                    </div>
                </div>
                <div class="comment">
                   ${userInput}
                </div>
            </div>

            `;
            const deleteBtn = container.querySelector(".delete");

            deleteBtn.addEventListener('click', () => {
                replyCard.style.display = "none";
    
           
            });

        });

       
    
    });

    
});
*/

document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayComments(data.comments, data.currentUser);
        });

    function displayComments(comments, currentUser) {
        const commentsContainer = document.querySelector(".comments-container");
        commentsContainer.innerHTML = '';

        comments.forEach(comment => {
            const commentCard = createCommentCard(comment, currentUser);
            commentsContainer.appendChild(commentCard);
        });

        addEventListeners(currentUser);
    }

    function createCommentCard(comment, currentUser) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
        <div class="comment-try">
            <div class="comment-card">
                <div class="left-section">
                    <div class="score">
                        <div class="js-score-plus"><img src="images/icon-plus.svg" alt=""></div>
                        <div class="score-num">${comment.score}</div>
                        <div class="js-score-minus"><img src="images/icon-minus.svg" alt=""></div>
                    </div>
                </div>
                <div class="right-section">
                    <div class="user">
                        <img src="${comment.user.image.webp}" alt="">
                        <div class="username">${comment.user.username}</div>
                        <div class="period">${comment.createdAt}</div>
                        <div class="reply">
                            <img src="images/icon-reply.svg" alt="">
                            <div class="reply-word">Reply</div>
                        </div>
                    </div>
                    <div class="comment">
                        ${comment.content}
                    </div>
                </div>
            </div>
            <div class="reply-card" style="display: none;">
                <img src="${currentUser.image.webp}" alt="">
                <textarea class="reply-input" placeholder="Start typing..."></textarea>
                <button class="send-button">REPLY</button>
            </div>
        </div>
        `;
        return wrapper.firstElementChild;
    }

    function addEventListeners(currentUser) {
        const commentContainers = document.querySelectorAll(".comment-try");

        commentContainers.forEach((container) => {
            const replyBtn = container.querySelector(".reply");
            let replyCard = container.querySelector(".reply-card");
            const sendReply = container.querySelector(".send-button");
            const replyInput = container.querySelector(".reply-input");

            replyBtn.addEventListener('click', () => {
                replyCard.style.display = "flex";
            });

            sendReply.addEventListener('click', () => {
                const userInput = replyInput.value;
                replyCard.innerHTML = `
                <div class="left-section">
                    <div class="score">
                        <div class="js-score-plus"><img src="images/icon-plus.svg" alt=""></div>
                        <div class="score-num">0</div>
                        <div class="js-score-minus"><img src="images/icon-minus.svg" alt=""></div>
                    </div>
                </div>
                <div class="right-section">
                    <div class="user">
                        <img src="${currentUser.image.webp}" alt="" class="user-pfp">
                        <div class="username">${currentUser.username}</div>
                        <div class="period">now</div>

                        <div class="delete">
                            <img src="images/icon-delete.svg" alt="">
                            <div class="delete-text">delete</div>
                        </div>
                        <div class="reply">
                            <img src="images/icon-reply.svg" alt="">
                            <div class="reply-word">Reply</div>
                        </div>
                    </div>
                    <div class="comment">
                        ${userInput}
                    </div>
                </div>
                `;

                const deleteBtn = replyCard.querySelector(".delete");
                deleteBtn.addEventListener('click', () => {
                    replyCard.style.display = "none";
                });
            });

            const scorePlusBtn = container.querySelector(".js-score-plus");
            const scoreMinusBtn = container.querySelector(".js-score-minus");
            const scoreNum = container.querySelector(".score-num");

            let score = Number(scoreNum.innerHTML);

            scorePlusBtn.addEventListener('click', () => {
                score = score + 1;
                scoreNum.innerHTML = `${score}`;
            });

            scoreMinusBtn.addEventListener('click', () => {
                score = score - 1;
                scoreNum.innerHTML = `${score}`;
            });
        });
    }
});



