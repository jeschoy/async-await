let baseURL = "http://numbersapi.com";
let favNum = 20;

// Part 1:
async function numFacts() {
  let data = await $.getJSON(`${baseURL}/${favNum}?json`);
  console.log(data);
}

numFacts();

const favNums = [3, 5, 20];
async function multipleNums() {
  let data = await $.getJSON(`${baseURL}/${favNums}?json`);
  console.log(data);
}

multipleNums();

async function fourFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNum}?json`))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}

fourFacts();
