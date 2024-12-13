let items = document.querySelectorAll('.slider .item');
let active = 3;

function loadShow() {
    items.forEach((item) => {
        item.style.transition = "transform 0.5s ease, opacity 0.5s ease"; 
    });

    // Reset the active item
    items[active].style.transform = "none";  // Use a valid transform value
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    // Iterate over the next items
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    stt = 0;
    // Iterate over the previous items
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

function shiftItems(direction) {
    if (direction === "next") {
        let first = items[0];
        first.parentNode.appendChild(first);
        active = (active + 1) % items.length; // Update the active index
    } else if (direction === "prev") {
        let last = items[items.length - 1];
        last.parentNode.insertBefore(last, items[0]);
        active = (active - 1 + items.length) % items.length; // Update the active index
    }
   
    items = document.querySelectorAll('.slider .item'); // Re-query items after shifting
}

loadShow();

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    shiftItems("next");
    loadShow();
};

prev.onclick = function () {
    shiftItems("prev");
    loadShow();
};
