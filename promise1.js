const fetchApi = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

fetchApi("https://jsonplaceholder.typicode.com/posts/1")
  .then((postInfo) => {
    console.log(postInfo);
    return fetchApi(
      `https://jsonplaceholder.typicode.com/users/${postInfo.userId}`
    );
  })
  .then((userInfo) => {
    console.log(userInfo);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
