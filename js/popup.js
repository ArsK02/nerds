var button = document.querySelector(".contact-button");
        var popup = document.querySelector(".modal-write-us");
        var close = popup.querySelector(".modal-close");
        var userName = popup.querySelector("[name=user-name]");

        button.addEventListener("click", function(evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
        });

        close.addEventListener("click", function(evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function(evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
            }
        });