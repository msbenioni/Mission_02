// DECLARE VARIABLES
// All Buttons
const blueButton = document.getElementById("blueButton");
const orangeButton = document.getElementById("orangeButton");
const yellowButton = document.getElementById("yellowButton");
const pinkButton = document.getElementById("pinkButton");
const redButton = document.getElementById("redButton");
const pandaImage = document.getElementById("pandaImage");
const backToStartLink = document.getElementById("backToStartLink");
const startButton = document.getElementById("startButton");

// Sections
const introSection = document.getElementById("introSection");
const interactiveSection = document.getElementById("interactiveSection");
const conclusionSection = document.getElementById("conclusionSection");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const finalPandaImage = document.getElementById("pandaImageFinal");

// Images and colours
let finalImageSrc = ""; // Path for the final images
let userColor = ""; // Colours to be selected by the user

// Random colour selection
let pandaFavoriteColor = ["blue", "orange", "yellow", "pink", "red"][
  Math.floor(Math.random() * 5)
];

// FUNCTIONS
// Show 2 images - 1. Preview of panda & colour vespa 2. Panda on final selected colour vespa
function showBlueVespa() {
  pandaImage.src = "panda_blue.png";
  finalImageSrc = "final_panda_blue.png";
  userColor = "blue"; // Set the user color based on user's selection
}

function showOrangeVespa() {
  pandaImage.src = "panda_orange.png";
  finalImageSrc = "final_panda_orange.png";
  userColor = "orange"; // Set the user color based on user's selection
}

function showYellowVespa() {
  pandaImage.src = "panda_yellow.png";
  finalImageSrc = "final_panda_yellow.png";
  userColor = "yellow"; // Set the user color based on user's selection
}

function showPinkVespa() {
  pandaImage.src = "panda_pink.png";
  finalImageSrc = "final_panda_pink.png";
  userColor = "pink"; // Set the user color based on user's selection
}

function showRedVespa() {
  pandaImage.src = "panda_red.png";
  finalImageSrc = "final_panda_red.png";
  userColor = "red"; // Set the user color based on user's selection
}

function section1Transition() {
  introSection.style.display = "none"; // Intro section hidden
  interactiveSection.style.display = "block"; // Interactive section displayed
}

function section2Transition() {
  if (!userColor) {
    alert("Please select a colour");
    return;
  }
  interactiveSection.style.display = "none"; // Interactive section hidden
  conclusionSection.style.display = "block"; // Conclusion section displayed
  finalPandaImage.src = finalImageSrc; // The final image is displayed depending on user colour selected
  finalPandaImage.classList.add("move-right"); // The final image is added and will move from left to right
  if (userColor === pandaFavoriteColor) {
    alert(
      "Great choice! Panda's favorite colour is also " +
        pandaFavoriteColor +
        "!"
    );
  } else {
    alert(
      "Nice choice! But Panda's favorite colour is " + pandaFavoriteColor + "."
    );
  } 
}

function resetToHomePage(reset) {
  if (reset) reset.preventDefault(); // Prevent default behavior if event is provided

  conclusionSection.style.display = "none"; // Conclusion section hidden
  interactiveSection.style.display = "none"; // Interactive section hidden
  introSection.style.display = "block"; // Intro section displayed
  pandaImage.src = "pandaImageIntro.png"; // Intro image displayed
  finalImageSrc = ""; // Reset the final image
  userColor = ""; // Reset user colour
  finalPandaImage.classList.remove("move-right"); // The final image is removed
}

// Adding Event Listeners - show function above when clicked
// All Buttons
blueButton.addEventListener("click", showBlueVespa);
orangeButton.addEventListener("click", showOrangeVespa);
yellowButton.addEventListener("click", showYellowVespa);
pinkButton.addEventListener("click", showPinkVespa);
redButton.addEventListener("click", showRedVespa);
startButton.addEventListener("click", section1Transition);
restartButton.addEventListener("click", resetToHomePage);
backToStartLink.addEventListener("click", resetToHomePage);
nextButton.addEventListener("click", section2Transition);

// Christmas Countdown
document
  .getElementById("calculateChristmasDateButton")
  .addEventListener("click", function () {
    const todaysDate = document.getElementById("todaysDate").value;
    const christmasDate = document.getElementById("christmasDate").value;

    // If user does not add either todays date or christmas date
    if (!todaysDate || !christmasDate) {
      alert("Please enter both dates.");
      return;
    }

    // Calculate the difference in dates
    const daysDifference = calculateDaysDifference(todaysDate, christmasDate);
    document.getElementById(
      "calculateChristmasDateButton"
    ).innerText = `There are ${daysDifference} days left. Lesss Gooo!!`;
  });

function calculateDaysDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = end - start; // Difference in milliseconds
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return daysDifference;
}
