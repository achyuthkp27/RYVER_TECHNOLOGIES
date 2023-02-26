// read remote JSON file in javascript
fetch("./js/content.json")
  .then((res) => res.json())
  .then((data) => {
    // data.forEach((p) => console.log(p));
    console.log(data[0].id);
  });
