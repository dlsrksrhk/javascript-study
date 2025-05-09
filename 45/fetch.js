fetch("https://jsonplaceholder.typicode.com/postsd/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    return response.json();
  })
  .then(console.log)
  .catch(console.error);
