import { useState } from "react";

const MenuItem = ({ img, title, price, desc }) => {
  const [isHide, setIsHide] = useState(false);
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">
          {isHide ? desc : `${desc.slice(0, 80)}`}{" "}
          <button
            onClick={() => setIsHide(!isHide)}
            className="btn"
            style={{ backgroundColor: "red" }}
          >
            {isHide ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>
    </article>
  );
};
export default MenuItem;
