const Pizza = (props) => {
  console.log(props);
  const { name, ingredients, price, photoName, soldOut } = props.data;
  return (
    <div className="pizza">
      <img src={photoName} alt="pizza" />
      <h3>{name}</h3>
      <p> {ingredients} </p>
      <h3>${price}</h3>
    </div>
  );
};

export default Pizza;
