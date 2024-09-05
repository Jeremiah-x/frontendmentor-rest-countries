import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { changeRegion } from "../features/regions/regionsSlice";
import { filterCountries } from "../features/countries/countriesSlice";
import { motion } from "framer-motion";

export default function Regions() {
  const [showRegions, setShowRegions] = useState<boolean>(false);
  const { regions } = useSelector((state: RootState) => state.regions.value);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div onClick={() => setShowRegions((prev) => !prev)}>
        {regions.filter((item) => item.active)[0].region}{" "}
        <motion.span
          animate={{ rotateZ: showRegions ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "inline-flex" }}
        >
          <ChevronDown />
        </motion.span>
      </div>
      {showRegions && (
        <motion.ul
          className="select"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
        >
          {regions
            .filter((item) => !item.active)
            .map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  dispatch(changeRegion(item.region));
                  dispatch(filterCountries(item.region));
                  setShowRegions(false);
                }}
              >
                {item.region}
              </li>
            ))}
        </motion.ul>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  margin-inline: 2rem;
  div {
    padding-inline: 1rem;
    padding-block: 1rem;
    min-width: 160px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(p) => p.theme.colors.elements};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
  ul {
    background-color: ${(p) => p.theme.colors.elements};
    flex-direction: column;
    width: 160px;
    margin-top: 1rem;
    padding-inline: 1rem;
    padding-block: 1rem;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    display: flex;
    gap: 0.4rem;
    position: absolute;
  }
`;
