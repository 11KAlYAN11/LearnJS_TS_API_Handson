// Function to add a new paragraph
document.getElementsByClassName("demo").innerHTML = "Hai This is a Tag from inner html Haiya!";
document.alert("welcome to learning page!");


document.getElementById('add-paragraph').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added by JavaScript.';
    document.getElementById('content').appendChild(newParagraph);
});

// Function to change the title
document.getElementById('change-title').addEventListener('click', function() {
    const title = document.getElementById('main-title');
    title.textContent = 'Title Changed!';
    title.style.color = 'red'; // Change the color of the title
});

// Function to remove the last paragraph
document.getElementById('remove-paragraph').addEventListener('click', function() {
    const contentDiv = document.getElementById('content');
    const paragraphs = contentDiv.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        contentDiv.removeChild(paragraphs[paragraphs.length - 1]);
    } else {
        alert('No paragraphs to remove!');
    }
});