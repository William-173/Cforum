document.getElementById('copyButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const personality = document.getElementById('personality').value;
    const greeting = document.getElementById('greeting').value;

    const textToCopy = `Name: ${name}\nAge: ${age}\nGender: ${gender}\nPersonality: ${personality}\nGreeting: ${greeting}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Forum copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
