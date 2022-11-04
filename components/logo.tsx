import Link from "next/link";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 22px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  const logoImg = `/assets/logo.png`;

  return (
    <Image src={logoImg} width={130} height={160} alt="logo" />
  );
};

export default Logo;
