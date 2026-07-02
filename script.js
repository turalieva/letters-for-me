const openBtn = document.getElementById("openBtn");

const letter = document.getElementById("letter");

const sendBtn = document.getElementById("sendBtn");

const success = document.getElementById("success");

openBtn.addEventListener("click", () => {

    letter.classList.remove("hidden");

    openBtn.style.display = "none";

});

sendBtn.addEventListener("click", () => {

    const message = document.getElementById("message").value.trim();

    if (message === "") {

        alert("Напиши пожелание ❤️");

        return;

    }

    letter.classList.add("hidden");

    success.classList.remove("hidden");

});
