import React from "react";
import { MainHeader } from "./HeaderStyles";
import { faCoins, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <MainHeader>
      <FontAwesomeIcon icon={faCoins} size="2x" />
      <p>Finanças Da Casa - A²</p>
      <FontAwesomeIcon icon={faCreditCard} size="2x" />
    </MainHeader>
  );
};

export default Header;
