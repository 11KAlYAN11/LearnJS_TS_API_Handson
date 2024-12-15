// Function to add a new paragraph
try {
    document.getElementsByClassName("demo")[0].innerHTML = "Hai This is a Tag from inner html Haiya!";
    console.log("Initial message set in demo class.");
} catch (error) {
    console.error("Error setting initial message:", error);
}

alert("Welcome to the learning page!");

document.getElementById('add-paragraph').addEventListener('click', function() {
    try {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph added by JavaScript.';
        document.getElementById('content').appendChild(newParagraph);
        console.log("New paragraph added.");
    } catch (error) {
        console.error("Error adding paragraph:", error);
    }
});

// Function to change the title
document.getElementById('change-title').addEventListener('click', function() {
    try {
        const title = document.getElementById('main-title');
        title.textContent = 'Title Changed!';
        title.style.color = 'red'; // Change the color of the title
        console.log("Title changed to 'Title Changed!'.");
    } catch (error) {
        console.error("Error changing title:", error);
    }
});

// Function to remove the last paragraph
document.getElementById('remove-paragraph').addEventListener('click', function() {
    try {
        const contentDiv = document.getElementById('content');
        const paragraphs = contentDiv.getElementsByTagName('p');
        if (paragraphs.length > 0) {
            contentDiv.removeChild(paragraphs[paragraphs.length - 1]);
            console.log("Last paragraph removed.");
        } else {
            alert('No paragraphs to remove!');
        }
    } catch (error) {
        console.error("Error removing paragraph:", error);
    }
});