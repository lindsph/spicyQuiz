

const mild = [
    "You have incredible posture!",
    "You never forget to fill the ice-cube tray.",
    "You're the hero Gotham needs.",
    "Your pet loves you too much to ever run away.",
    "I don't understand 99% of the references you make, but the 1% I do get are absolutely hilarious.",
    "You are gold, baby. Solid gold.",
    "You have good taste in websites.",
    "You're more fun than bubble wrap!"
    
]

const medium = [
    "Your cologne reminds me of my dentist",
    "You're the bee's knees!",
    "You're better than the first three Star Wars films.",
    "You're awkward, but in a cute way!",
    "Your handshake conveys intelligence, confidence and minor claminess.",
    "If I freeze, it's not a computer virus. I was just stunned by your beauty."
]

const spicy = [
    "I want you more than Carly Rae Jepsen wants you to call her. Maybe.",
    "The FBI tapped your phone just to hear the sound of your voice.",
    "You’re small, I like it! What do you do, besides being able to comfortably fit in most overhead compartments?",
    "You're so fierce, it's like I'm looking at Beyonce strut.",
    "Are you a beaver, because damn.",
    "Your voice is more soothing than Morgan Freeman's."
]

const button = [
    "This feels nice. Again!",
    "One more, please.",
    "Keep it coming!"
]

const color = [
    "#E24E42",
    "#E9B000",
    "#EB6E89",
    "#008F95"
]

// provides a random match out of the chosen array, re-useable!
const getRandomItemFromArray = function (array) {
    const randomQuote = Math.floor(Math.random() * array.length);
    return array[randomQuote];
};


// document ready
$(function() {
    let spiceLevel = "";
    let randomResult = "";

    $('form').on('submit', function(e) {
        e.preventDefault();
        spiceLevel = $('input[name="spice"]:checked').val();
        $('main').css('background-color', '#EB6E89');

        // if statements
        if (spiceLevel === 'mild') {
            spiceLevel = mild
            randomResult = getRandomItemFromArray(mild);  
            // console.log(randomMildResult);  
        } else if (spiceLevel === 'medium') {
            spiceLevel = medium
            randomResult = getRandomItemFromArray(medium);
            // console.log(randomMediumResult);
        } else if (spiceLevel === 'spicy') {
            spiceLevel = spicy
            randomResult = getRandomItemFromArray(spicy);
            // console.log(randomSpicyResult);
        };

        // remove the submitted question, fade in the section showing the compliment and button

        $(".openingQuestion").replaceWith($('.randomResult').html(`<h1>${randomResult}</h1>\<a class="generate-button">${getRandomItemFromArray(button)}</a>`))
        
    });
    // end of form submit

    $('body').on('click', "a.generate-button", function(e) {
        e.preventDefault();
        let randomButtonText = getRandomItemFromArray(button);
        let randomBackgroundColor = getRandomItemFromArray(color); 
        let spice = getRandomItemFromArray(spiceLevel);
        // console.log(randomButtonText, randomBackgroundColor, spice);

        // show each variable on page, delete current compliment, and current button text
        $('.randomResult').replaceWith(`<h1>${spice}</h1>`);
       

        // show the result in "results" section in html
        // $('.results').html(`<h2 class="choice">${finalResult.title}</h2>`);

        // show or hide jquery options?

    });



        // log change of compliment and button change to page

        // create a share "button" underneath that, that on click:
        // 1. accordion effect
        // 2. has options too like on facebook, share on facebook, follow me on twitter

        // once complete all
        // 1. complete styling/test for responsive (why isnt first page working?)
        // 2. add question that asks the persons name
        //    - add template literals


 










new TypeIt('.type-it', {
        speed: 100,
        autoStart: false
    })
        .type("Can't think of a compliment on the fly?")
        .pause(1000)
        .delete()
        .type("Need a quick pick-me-up?")
        .pause(1000)
        .delete()
        .type("And hey, if the compliment doesn't apply to you, you can always click to get another one!")
        .pause(1000)
        .delete()
        .type("...")
        .pause(700)
        .type("<strong>Did we mention how good your hair looks today?!</strong>");
    // end of type-it function
});
// end of document ready

