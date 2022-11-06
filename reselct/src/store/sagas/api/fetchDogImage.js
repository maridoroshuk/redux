export const fetchDogImage = async (selectedBreed) => {
  try {
    const data = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images`,
    );
    const res = await data.json();
    return res.message;
  } catch (e) {
    console.log(e);
  }
};
