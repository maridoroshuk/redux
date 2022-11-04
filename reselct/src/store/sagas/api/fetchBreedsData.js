export const fetchBreedData = async () => {
  try {
    const data = await fetch(
      'https://dog.ceo/api/breeds/list/all',
    );
    const res = await data.json();
    return res.message;
  } catch (e) {
    console.log(e);
  }
};
