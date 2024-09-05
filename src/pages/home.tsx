import styled from "styled-components";
import Country from "../components/country";
import Regions from "../components/regions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { filterCountriesWhenInputChange } from "../features/countries/countriesSlice";

import { ICountry } from "../interfaces/countries.interface";
import { Search } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const countries = useSelector((state: RootState) => state.countries.value);
  const dispatch = useDispatch();

  return (
    <Countries>
      <div className="search--filter">
        <section className="search--wrapper">
          <Search className="search--icon" stroke="gray" />
          <input
            type="text"
            placeholder="Search for a country"
            onChange={(e) => {
              console.log(e.target.value);
              dispatch(filterCountriesWhenInputChange(e.target.value));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/country/${countries[0].name}`);
              }
            }}
          />
        </section>
        <section>
          <Regions />
        </section>
      </div>
      <section className="countries">
        {countries.map((item: ICountry, index) => (
          <Country country={item} key={index} />
        ))}
      </section>
    </Countries>
  );
}

const Countries = styled.main`
  .search--wrapper {
    width: 100%;
    padding-inline: 2rem;
    padding-block: 2rem;
    position: relative;

    .search--icon {
      position: absolute;
      top: 50%;
      left: 40px;
      transform: translateY(-50%);
    }
    input {
      width: 100%;
      height: 40px;
      padding-inline: 4rem 2rem;
      padding-block: 2rem;
      border: none;
      border-radius: 8px;
      outline: none;
      background-color: ${(p) => p.theme.colors.elements};
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .countries {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 2rem;
    gap: 2rem;
  }

  @media screen and (min-width: 560px) {
    .countries {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }

    .search--filter {
      display: flex;
      align-items: center;
    }
  }

  @media screen and (min-width: 840px) {
    .countries {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
  }

  @media screen and (min-width: 1200px) {
    .countries {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
    }
  }
`;
