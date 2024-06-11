const data = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((info) => console.log(info));
    




    const data1 = fetch('https://jsonplaceholder.typicode.com/users')
    
    data1
        .then((res) => {return res.json();
        })
        .then((info) => {
            info.forEach(user => {
                console.log(`Name: ${user.name}`);
            });
        });