document.querySelectorAll(".accordionQuestion").forEach((questionButton) =>{
    let h2= questionButton.querySelector('h2');
    questionButton.addEventListener('mouseover', () => h2.classList.toggle('highlighted', true));
    questionButton.addEventListener('mouseout', () => h2.classList.toggle('highlighted', false));
    questionButton.setAttribute('active', 'false')
    questionButton.addEventListener('click', (e) => {
        const answerId = questionButton.id.slice(-1);
        const answer = document.querySelector(".accordionAnswer" + answerId);
        answer.classList.toggle("expanded");
        document.querySelector(".icon" + answerId).setAttribute("src",answer.classList.contains("expanded") ?"assets/images/icon-minus.svg": "assets/images/icon-plus.svg");
    });
    
});