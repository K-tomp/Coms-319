let qtyButtons = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
let qtyBoxes = document.getElementsByClassName("number");

for (let i = 0; i < qtyBoxes.length; i++) {
    //plus button
    qtyButtons[i * 2].addEventListener(onclick, function() {
        qtyBoxes[i].value++;
    })
}
