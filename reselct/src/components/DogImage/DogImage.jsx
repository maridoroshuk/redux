function DogImage({ source, breed }) {

    return (
      <div>
        <img src={source} alt={`dog (${breed} breed)`}/>
      </div>
    );
  }

  export default DogImage;
