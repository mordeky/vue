const data = {
    name: 'John Doe',
    age: 30
};

function postData() {
    fetch('http://localhost:3000/user', {
        method: 'POST',
        // mode: 'no-cors', // 绕过CORS检查
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            // alert(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

postData()
