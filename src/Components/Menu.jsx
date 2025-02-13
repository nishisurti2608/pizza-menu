import Pizza from "./Pizza";
import { pizzaData } from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} data={pizza} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
