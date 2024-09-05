import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ICountry } from "../interfaces/countries.interface";

export default function Country({ country }: { country: ICountry }) {
  return (
    <Wrapper
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5 }}
      whileInView={{}}
      variants={{}}
    >
      <Link to={`/country/${country.name?.toLowerCase()}`} className="link">
        <img src={country.flags?.svg} alt={`Flag of ${country.name}`} />
        <div className="details">
          <p className="name">{country.name}</p>
          <ul>
            <li>
              <span>Population:</span> {country.population}
            </li>
            <li>
              <span>Region:</span> {country.region}
            </li>
            <li>
              <span>Capital:</span> {country.capital}
            </li>
          </ul>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  width: 300px;
  height: 360px;
  background-color: ${(p) => p.theme.colors.elements};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
  .link {
    text-decoration: none;
  }
  img {
    width: 100%;
    object-fit: cover;
    min-height: 50%;
    max-height: 50%;
  }
  .details {
    padding-inline: 2rem;
    padding-block: 1rem;
    .name {
      font-weight: bold;
      font-size: 1.2rem;
    }
    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      li {
        span {
          font-weight: bold;
        }
      }
    }
  }
`;
