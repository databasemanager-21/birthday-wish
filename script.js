function celebrate() {
    document.getElementById("wish").style.display = "block";

    const song = document.getElementById("song");
    song?.play().catch(() => {});

    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("album").style.display = "block";
        startPhotoStack();
    }, 1200);
}

/* PHOTO STACK — FINAL WORKING VERSION */
function startPhotoStack() {
    const stack = document.getElementById("photoStack");
    if (!stack) return;

    function layout() {
        [...stack.children].forEach((img, i) => {
            img.style.zIndex = 100 - i;
            img.style.transform =
                `translate(${i * 12}px, ${i * 12}px) scale(${1 - i * 0.05})`;
        });
    }

    layout();

    setInterval(() => {
        stack.appendChild(stack.firstElementChild);
        layout();
    }, 2000);
}