// read remote JSON file in javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  });
