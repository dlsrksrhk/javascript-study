async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const posts = await response.json();
  return posts;
}

// fetchPosts().then(console.log);

function printApple() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("apple");
    }, 1000);
  }).then((value) => console.log(value));
}

async function printApple() {
  const value = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("apple");
    }, 1000);
  });

  console.log(value);
}

printApple();
