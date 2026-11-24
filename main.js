document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ================================================= */
        /* MOBILE MENU */
        /* ================================================= */

        const hamburger =
            document.getElementById(
                "hamburger"
            );


        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        let menuOpen = false;


        if (
            hamburger &&
            mobileMenu
        ) {

            hamburger.addEventListener(
                "click",
                function () {

                    menuOpen =
                        !menuOpen;


                    if (menuOpen) {

                        mobileMenu.style.maxHeight =
                            "500px";


                        mobileMenu.style.opacity =
                            "1";


                        hamburger.classList.add(
                            "open"
                        );

                    } else {

                        closeMobileMenu();

                    }

                }
            );


            const mobileLinks =
                document.querySelectorAll(
                    "#mobileMenu a"
                );


            mobileLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        closeMobileMenu
                    );

                }
            );

        }


        function closeMobileMenu() {

            if (
                !mobileMenu ||
                !hamburger
            ) {
                return;
            }


            mobileMenu.style.maxHeight =
                "0px";


            mobileMenu.style.opacity =
                "0";


            hamburger.classList.remove(
                "open"
            );


            menuOpen = false;

        }



        /* ================================================= */
        /* SCROLL PROGRESS */
        /* ================================================= */

        const scrollProgress =
            document.getElementById(
                "scrollProgress"
            );


        function updateScrollProgress() {

            if (!scrollProgress) {
                return;
            }


            const scrollTop =
                window.scrollY;


            const maxScroll =
                document.documentElement.scrollHeight -
                window.innerHeight;


            const percentage =
                maxScroll > 0
                    ? (
                        scrollTop /
                        maxScroll
                    ) * 100
                    : 0;


            scrollProgress.style.width =
                percentage + "%";

        }


        window.addEventListener(
            "scroll",
            updateScrollProgress
        );


        updateScrollProgress();



        /* ================================================= */
        /* PRACTICAL 8 DATA PACKET */
        /* ================================================= */

        const easterEggTrigger =
            document.getElementById(
                "easterEggTrigger"
            );


        const dataPacket =
            document.getElementById(
                "dataPacket"
            );


        function startPacketAnimation() {

            if (!dataPacket) {
                return;
            }


            dataPacket.classList.remove(
                "animate-packet"
            );


            void dataPacket.offsetWidth;


            dataPacket.classList.add(
                "animate-packet"
            );

        }


        if (
            easterEggTrigger &&
            dataPacket
        ) {

            easterEggTrigger.addEventListener(
                "click",
                startPacketAnimation
            );


            easterEggTrigger.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter" ||
                        event.key ===
                        " "
                    ) {

                        event.preventDefault();


                        startPacketAnimation();

                    }

                }
            );

        }



        /* ================================================= */
        /* TERMINAL TYPING */
        /* ================================================= */

        const terminalText =
            document.getElementById(
                "terminalText"
            );


        const terminalMessage =
`> whoami
Aryan Kapoor

> field
Data Analytics

> background
Computer Science

> status
Building practical digital solutions...

> system
READY_`;


        let terminalIndex = 0;


        function typeTerminal() {

            if (!terminalText) {
                return;
            }


            if (
                terminalIndex <
                terminalMessage.length
            ) {

                terminalText.textContent +=
                    terminalMessage.charAt(
                        terminalIndex
                    );


                terminalIndex++;


                setTimeout(
                    typeTerminal,
                    28
                );

            }

        }


        setTimeout(
            typeTerminal,
            500
        );



        /* ================================================= */
        /* TERMINAL MODE */
        /* ================================================= */

        const terminalModeButton =
            document.getElementById(
                "terminalModeButton"
            );


        if (terminalModeButton) {

            terminalModeButton.addEventListener(
                "click",
                function () {

                    document.body.classList.toggle(
                        "terminal-mode"
                    );


                    if (
                        document.body.classList.contains(
                            "terminal-mode"
                        )
                    ) {

                        terminalModeButton.textContent =
                            ">_ Exit Terminal";

                    } else {

                        terminalModeButton.textContent =
                            ">_ Terminal Mode";

                    }

                }
            );

        }



        /* ================================================= */
        /* CURSOR GLOW */
        /* ================================================= */

        const cursorGlow =
            document.getElementById(
                "cursorGlow"
            );


        if (cursorGlow) {

            document.addEventListener(
                "mousemove",
                function (event) {

                    cursorGlow.style.left =
                        event.clientX +
                        "px";


                    cursorGlow.style.top =
                        event.clientY +
                        "px";


                    cursorGlow.style.opacity =
                        "1";

                }
            );


            document.addEventListener(
                "mouseleave",
                function () {

                    cursorGlow.style.opacity =
                        "0";

                }
            );

        }



        /* ================================================= */
        /* SCROLL REVEAL */
        /* ================================================= */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        const revealObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "reveal-visible"
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );



        /* ================================================= */
        /* ACTIVE NAVIGATION */
        /* ================================================= */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const desktopLinks =
            document.querySelectorAll(
                "#desktopMenu nav a"
            );


        const sectionObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                const id =
                                    entry.target.id;


                                desktopLinks.forEach(
                                    function (link) {

                                        link.classList.remove(
                                            "active"
                                        );


                                        if (
                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            "#" + id
                                        ) {

                                            link.classList.add(
                                                "active"
                                            );

                                        }

                                    }
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.45
                }

            );


        sections.forEach(
            function (section) {

                sectionObserver.observe(
                    section
                );

            }
        );



        /* ================================================= */
        /* CERTIFICATE POPUP */
        /* ================================================= */

        const certificateCards =
            document.querySelectorAll(
                ".certification-card"
            );


        const certificateModal =
            document.getElementById(
                "certificateModal"
            );


        const modalOverlay =
            document.querySelector(
                ".certificate-modal-overlay"
            );


        const closeModalButton =
            document.getElementById(
                "closeCertificateModal"
            );


        const modalImage =
            document.getElementById(
                "certificateModalImage"
            );


        const modalTitle =
            document.getElementById(
                "certificateModalTitle"
            );


        const certificateMissing =
            document.getElementById(
                "certificateMissing"
            );


        function openCertificateModal(
            imagePath,
            title
        ) {

            if (!certificateModal) {
                return;
            }


            modalTitle.textContent =
                title;


            modalImage.classList.remove(
                "certificate-image-ready"
            );


            modalImage.style.display =
                "none";


            certificateMissing.style.display =
                "none";


            modalImage.onload =
                function () {

                    modalImage.style.display =
                        "block";


                    void modalImage.offsetWidth;


                    modalImage.classList.add(
                        "certificate-image-ready"
                    );

                };


            modalImage.onerror =
                function () {

                    modalImage.style.display =
                        "none";


                    certificateMissing.style.display =
                        "block";


                    certificateMissing.textContent =
                        "Certificate image could not be loaded.";

                };


            modalImage.src =
                imagePath;


            certificateModal.classList.add(
                "open"
            );


            document.body.style.overflow =
                "hidden";

        }


        function closeCertificateModal() {

            if (!certificateModal) {
                return;
            }


            certificateModal.classList.remove(
                "open"
            );


            modalImage.classList.remove(
                "certificate-image-ready"
            );


            document.body.style.overflow =
                "";

        }


        certificateCards.forEach(
            function (card) {

                card.addEventListener(
                    "click",
                    function () {

                        openCertificateModal(
                            card.dataset.certificate,
                            card.dataset.title
                        );

                    }
                );

            }
        );


        if (closeModalButton) {

            closeModalButton.addEventListener(
                "click",
                closeCertificateModal
            );

        }


        if (modalOverlay) {

            modalOverlay.addEventListener(
                "click",
                closeCertificateModal
            );

        }


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Escape" &&
                    certificateModal &&
                    certificateModal.classList.contains(
                        "open"
                    )
                ) {

                    closeCertificateModal();

                }

            }
        );


    }
);