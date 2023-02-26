import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from "../../assets/logo.svg";
import LeftEffect from "../../assets/leftEffect.svg";
import RightEffect from "../../assets/rightEffect.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LeftEffect} alt="" />
        <img src={logoImg} alt="" />
        <img src={RightEffect} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
