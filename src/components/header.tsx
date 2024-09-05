import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setTheme } from "../features/theme/themeSlice";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HeaderWrapper
      $isSticky={isSticky}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, position: !isSticky ? "static" : "fixed" }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/">Where in the world?</Link>
      <button className="theme" onClick={() => dispatch(setTheme())}>
        <Moon size={20} fill="white" /> Dark Mode
      </button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled(motion.header)<{ $isSticky?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.elements};
  padding-inline: 1.2rem;
  padding-block: 1.6rem;
  font-weight: 800;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 20;
  font-weight: bold;
  button {
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  a {
    text-decoration: none;
    font-size: 1.2rem;
  }
`;
