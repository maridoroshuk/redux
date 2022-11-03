const API_KEY = process.env.REACT_APP_NASA_API_KEY;
console.log(API_KEY);

export default async function fetchNasaData() {
  const data = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  );
  const res = await data.json();
  console.log(res);
  return res;
}
