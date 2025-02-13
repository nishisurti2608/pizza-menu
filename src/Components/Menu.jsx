import Pizza from "./Pizza";
import { pizzaData } from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            placeat! Illum sapiente id perferendis dignissimos blanditiis a
            necessitatibus, nostrum voluptas!
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} data={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are preparing fresh Pizzas for you!</p>
      )}
    </main>
  );
};

export default Menu;
