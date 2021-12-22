import {
  Menu,
  ShoppingCartOutlined,
  PersonOutlined,
  Facebook,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../images/agrocunda.png";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router";
import { IconButton } from "@material-ui/core";
import { auth } from "../../utils/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const [displayOverlay, setDisplayOverlay] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
    } else {
      dispatch({
        type: "SET_LASTURL",
        lastUrl: window.location.pathname,
      });

      history.push("/login");
    }
  };

  useEffect(() => {
    if (menu) {
      return setDisplayOverlay(true);
    } else {
      return setTimeout(() => {
        setDisplayOverlay(false);
      }, 300);
    }
  }, [menu]);

  return (
    <>
      <header className="header">
        <section className="header__850">
          <IconButton onClick={() => setMenu(true)}>
            <Menu />
          </IconButton>
        </section>
        <section className="header__logo" onClick={() => history.push("/")}>
          <img src={Logo} alt="" />
          <span>agrochainer</span>
        </section>
        <section className="header__nav header__850V">
          <nav onClick={() => history.push("/")}>HOME</nav>
          <nav onClick={() => history.push("/checkout")}>CHECKOUT</nav>
          <nav onClick={() => history.push("/contact")}>CONTACT</nav>
        </section>
        <section
          className="header__basket"
          onClick={() => history.push("/checkout")}
        >
          <ShoppingCartOutlined fontSize="small" />
          <span>
            <span>{basket.length}</span>
          </span>
          <div>
            <span>Amount: </span>
            <span>
              <CurrencyFormat
                renderText={(value) => value}
                decimalScale={2}
                value={getBasketTotal(basket).toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
              />
            </span>
          </div>
        </section>
      </header>
      <aside
        className="header__aside"
        style={{ right: menu ? "0" : "", opacity: menu ? "1" : "" }}
      >
        <section className="header__logo" onClick={() => history.push("/")}>
          <img src={Logo} alt="" />
          <span>agrochainer</span>
        </section>
        <div>
          <section
            className="header__basket"
            onClick={() => history.push("/checkout")}
          >
            <ShoppingCartOutlined />
            <span>
              <span>{basket.length}</span>
            </span>
            <div>
              <span>
                <CurrencyFormat
                  renderText={(value) => value}
                  decimalScale={2}
                  value={getBasketTotal(basket).toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₦"}
                />
              </span>
            </div>
          </section>
          <div onClick={handleAuthentication}>
            <PersonOutlined
              fontSize="small"
              style={{ color: user ? "rgb(0, 172, 0)" : "" }}
            />
            <span>{user ? user.displayName : "Guest"}</span>
          </div>
        </div>
        <nav
          onClick={() => {
            history.push("/");
            setMenu(false);
          }}
        >
          HOME
        </nav>
        <nav
          onClick={() => {
            history.push("/checkout");
            setMenu(false);
          }}
        >
          CHECKOUT
        </nav>
        <nav
          onClick={() => {
            history.push("/contact");
            setMenu(false);
          }}
        >
          CONTACT
        </nav>
        <div>
          <Facebook />
          <LinkedIn />
          <Twitter />
        </div>
      </aside>
      {displayOverlay && (
        <div className="header__overlay" onClick={() => setMenu(false)}></div>
      )}
    </>
  );
}

export default Header;
