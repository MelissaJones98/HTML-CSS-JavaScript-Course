async function fetchData() {
  try {
    let response = await fetch("https://api.sampleapis.com/coffee/hot");
    if (!response.ok) {
      throw new Error("There was an error. Status code: " + response.status);
    }
    let data = await response.json(); // turns the response into a JS object we can use
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
