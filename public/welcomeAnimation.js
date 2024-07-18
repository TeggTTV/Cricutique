function welcomeAnimation() {
    setTimeout(() => {
        const welcome = document.querySelector(".welcomeText");
        for (let i = 0; i < welcome.children.length; i++) {
            setTimeout(() => {
                welcome.children[i].style.opacity = 1;
                welcome.children[i].style.filter = "blur(0)";
            }, i * 200);
        }
    }, 100);

    setTimeout(() => {
        const welcome = document.querySelector(".welcomeText");
        welcome.classList.toggle("moveOutOfTheWay");
    }, 1000);

    setTimeout(() => {
        const welcome = document.querySelector(".welcomeText");
        const choose = document.querySelector(".choose");

        choose.style.display = "flex";
        welcome.classList.toggle("moveOutOfTheWay");

        setTimeout(() => {
          choose.style.opacity = 1;
            for (let i = 0; i < choose.children.length; i++) {
                setTimeout(() => {
                    choose.children[i].style.opacity = 1;
                    choose.children[i].style.filter = "blur(0)";
                }, i * 200);
            }
        }, 300);
    }, 2000);
}
