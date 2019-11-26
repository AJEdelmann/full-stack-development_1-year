document.getElementById("btnGetUserData").addEventListener('click', getUserData);


// We are sending request to server and bring user data using Fetch API
// @author dogFather
// Since version 1.0

function getUserData() {
    console.log('getUserData...')

    // Response provides multiple promise-based methods to access the body in various formats:
    // response.text() - read the response and return as text,
    // response.json() - parse the response as JSON,
    // response.formData() - return the response as FormData object (explained in the)?
    // response.blob() - return the response ?
    // response arrayBuffer() - return the ?

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        // .then(users => console.log(users)) // show all the users
        .then(users => {
            let html = '<h2>List of users</h2>';
            html += '<ul>'
            users.forEach(user => {
                html += `<li>${user.name}</li>`
            });
            html += '</ul>';
            document.getElementById('response').innerHTML = html;
        })
}