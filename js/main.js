document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const serviceSelect = document.getElementById("service");

    if (service && serviceSelect) {
        const match = Array.from(serviceSelect.options).find(
            (option) => option.value === service || option.textContent === service
        );
        if (match) {
            serviceSelect.value = match.value || match.textContent;
        }
    }

    if (params.get("sent") === "1") {
        const alertBox = document.getElementById("formSuccess");
        if (alertBox) {
            alertBox.classList.remove("d-none");
            alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxModal = document.getElementById("galleryLightbox");
    if (lightboxImage && lightboxModal && window.bootstrap) {
        document.querySelectorAll("[data-gallery-src]").forEach((img) => {
            img.addEventListener("click", () => {
                lightboxImage.src = img.getAttribute("data-gallery-src") || img.src;
                lightboxImage.alt = img.alt || "Project photo";
                bootstrap.Modal.getOrCreateInstance(lightboxModal).show();
            });
        });
    }
});
