const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are currently Open until {closeHour % 12 || 12} PM! Come visit us
            Order Online!
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>Sorry We are Closed !</p>
      )}
    </footer>
  );
};

export default Footer;
