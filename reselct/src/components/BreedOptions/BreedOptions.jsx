function SelectBreed({ breeds, onBreedSelect }) {
  const handleOnSelect = (e) => {
    onBreedSelect(e.target.value);
  };

  return (
    <>
      <label htmlFor="breed-select">Choose a breed:</label>
      <select id="breed-select" onChange={handleOnSelect}>
        {breeds.map((b) => (
          <option value={b} key={b}>
            {b}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectBreed;
