function openDrawer() {
    document.getElementById("myDrawer").classList.add("open");
    document.getElementById("myOverlay").style.width = "100%";
}

function closeDrawer() {
    document.getElementById("myDrawer").classList.remove("open");
    document.getElementById("myOverlay").style.width = "0";
}

// Get all elements with the class you want to animate
const titleContainer = document.querySelectorAll('.banner-title-container');

// Set up the Intersection Observer
const titleContainerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your animation class when the element is in the viewport
            entry.target.classList.add('animate-from-top');
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe each animated element
titleContainer.forEach(element => {
    titleContainerObserver.observe(element);
});


// Get all elements with the class you want to animate
const cardParagraphs = document.querySelectorAll('.card-text-container p');

// Set up the Intersection Observer
const cardParagraphsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your animation class when the element is in the viewport
            entry.target.classList.add('card-text-container-p-animation');
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe each animated element
cardParagraphs.forEach(element => {
    cardParagraphsObserver.observe(element);
});


// Get all elements with the class you want to animate
const cardButtons = document.querySelectorAll('.card-text-container button');

// Set up the Intersection Observer
const cardButtonsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your animation class when the element is in the viewport
            entry.target.classList.add('card-text-container-btn-animation');
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe each animated element
cardButtons.forEach(element => {
    cardButtonsObserver.observe(element);
});


// Get all elements with the class you want to animate
const cardImage = document.querySelectorAll('.card-image-container img');

// Set up the Intersection Observer
const cardImageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your animation class when the element is in the viewport
            entry.target.classList.add('card-image-container-animation');
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe each animated element
cardImage.forEach(element => {
    cardImageObserver.observe(element);
});


// Get all elements with the class you want to animate
const sectionTitleContainer = document.querySelectorAll('.reference-title h2');

// Set up the Intersection Observer
const sectionTitleContainerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your animation class when the element is in the viewport
            entry.target.classList.add('animate-from-top');
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe each animated element
sectionTitleContainer.forEach(element => {
    sectionTitleContainerObserver.observe(element);
});


// Get all elements with the class you want to animate
const newsCardContainer = document.querySelectorAll('.news-card-container');

// Set up the Intersection Observer
const newsCardContainerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your animation class when the element is in the viewport
            entry.target.classList.add('animate-from-top');
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe each animated element
newsCardContainer.forEach(element => {
    newsCardContainerObserver.observe(element);
});


// Get all elements with the class you want to animate
const cardElements = document.querySelectorAll('.card-text-container h2');

// Set up the Intersection Observer
const cardElementsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add your animation class when the element is in the viewport
            entry.target.classList.add('card-text-container-h2-animation');
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Observe each animated element
cardElements.forEach(element => {
    cardElementsObserver.observe(element);
});
