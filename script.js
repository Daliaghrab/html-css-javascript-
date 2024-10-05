document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is working!");

    let quotes = [
        "be yourself",
        "I believe that if you'll just stand up and go, life will open up for you",
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "I have very strong feelings about how you lead your life. You always look ahead, you never look back."
    ];

    let sections = document.querySelectorAll('.section');

   
    sections.forEach(function(section) {
        section.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'pink';  
        });

        section.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';  
        });

        section.addEventListener('click', function() {
            this.style.color = '#ff4081';  
        });
    });

   
    let button = document.createElement('button');
    button.innerHTML = 'quote';
    button.style.padding = '10px';
    button.style.margin = '20px';
    button.style.cursor = 'pointer';
    button.style.background='pink';


    button.addEventListener('click', function() {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        alert(randomQuote);
    });

    document.body.insertBefore(button, document.body.firstChild);
   

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to validate first
    
        let firstName = document.getElementById('first_name').value.trim();
        let lastName = document.getElementById('last_name').value.trim();
        let email = document.getElementById('email').value.trim();
        let phone = document.getElementById('phone').value.trim();
        let country = document.getElementById('country').value;
        let hoursTo = document.getElementById('hours_to').value.trim();
        let description = document.getElementById('description').value.trim();
    
        if (firstName === "") {
            alert("Please enter your first name.");
            return;
        }
    
        if (lastName === "") {
            alert("Please enter your last name.");
            return;
        }
    
        if (email === "" || !validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }
    
        if (phone === "" || !validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
    
        if (country === "") {
            alert("Please select your country.");
            return;
        }
    
        if (hoursTo === "") {
            alert("Please enter your available hours.");
            return;
        }
    
        if (description === "") {
            alert("Please enter a description of what you need.");
            return;
        }
    
        alert("Form submitted successfully!");
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePhone(phone) {
        const re = /^\d+$/;
        return re.test(phone);
    }
    
    
    
});
