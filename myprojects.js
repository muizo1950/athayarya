   //    untuk animasi loading
   window.addEventListener("load", () => {
            const loader = document.querySelector("#loader-wrapper");
        
        // sedikit jeda agar loading-nya terlihat sebentar (500ms)
        setTimeout(() => {
            loader.classList.add("loader-hidden");
        }, 500);
        });
