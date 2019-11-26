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

// Send data to server part
document.getElementById("addPostForm").addEventListener('submit', addPost);

function addPost(event) {

    event.preventDefault();
    console.log('addPost...')
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    const myPost = {
        title: title,
        body: body
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application-/json'
        },
        body: JSON.stringify(myPost)
    };

    fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                });
            }
        })
        .then((data) => console.log(data))
        .catch(error => {
            console.log('Error message:' + error.statusText);
        })
}