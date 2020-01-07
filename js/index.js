var scrollToElement = new ScrollToElement();
scrollToElement.setListeners(
    {
        nav: ".main-nav-fixed-wrapp",
        config: [
            {
                link: "[data-to-section='to-section-1']",
                target: '.section-1'
            },
            {   link: "[data-to-section='to-section-2']",
                target: '.section-2'
            },
            {   link: "[data-to-section='to-section-3']",
                target: '.section-3'
            },
            {
                link: "[data-to-section='to-section-4']",
                target: '.section-4'
            },
            {
                link: '#main-nav-list .logo',
                target: 'body'
            },
            {
                link: "[data-to-section='to-section-5']",
                target: '.section-5'
            },
            {
                link: "[data-to-section='to-section-6']",
                target: '.section-6'
            },
            {
                link: "[data-to-section='to-section-7']",
                target: '.section-7'
            },
             
        ]
    }); 