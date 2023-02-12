const CastItem = ({ cast }) => {
  return (
    <>
      {cast.map(item => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            alt={item.name}
            width="100"
          />
          <h4>{item.name}</h4>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </>
  );
};

export default CastItem;
