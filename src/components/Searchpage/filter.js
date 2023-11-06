var filter = (filter) => {
    const cards = document.getElementsByClassName("col-sm-12");
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card .card-body .card-title");
        if (title.innerText.indexOf(filter) > -1) {
            cards[i].classList.remove("d-none")
        } else {
            cards[i].classList.add("d-none")
        }
    }
}