

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Extracts date part in YYYY-MM-DD format
}

// Get today's date
const todayDate = getTodayDate();

// Retrieve the stored count and date from localStorage
let storedData = localStorage.getItem('viewCountData');

// Initialize view count and last visited date
let viewCount = 0;
let lastVisitedDate = todayDate;

if (storedData) {
    // Parse the stored data
    const parsedData = JSON.parse(storedData);
    viewCount = parsedData.count;
    lastVisitedDate = parsedData.date;

    // Check if the last visited date is today
    if (lastVisitedDate === todayDate) {
        // Increment the view count for today
        viewCount++;
    } else {
        // Reset the count for a new day
        viewCount = 1;
        lastVisitedDate = todayDate;
    }
} else {
    // If no data is stored, initialize with count 1 for today
    viewCount = 1;
    lastVisitedDate = todayDate;
}

// Store the updated count and date back to localStorage
localStorage.setItem('viewCountData', JSON.stringify({ count: viewCount, date: lastVisitedDate }));

// Display the count
document.getElementById('view-count').textContent = `Today's view count: ${viewCount}`;
