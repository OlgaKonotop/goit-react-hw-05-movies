const ReviewsItem = ({ reviews }) => {
  return (
    <>
      {reviews.map(item => (
        <li key={item.id}>
          <b> Author: {item.author}</b>
          {/* <h4>Author: {item.author}</h4> */}
          <p>{item.content}</p>
        </li>
      ))}
    </>
  );
};

export default ReviewsItem;
