import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../assets/data";
import styled, { FastOmit, IStyledComponent } from "styled-components";
import { ArrowLeft } from "lucide-react";
import { ICountry } from "../interfaces/countries.interface";

export default function Details() {
  const { countryName } = useParams();
  const country = data.filter(
    (item: ICountry) =>
      item.name!.toLowerCase() === countryName?.toLocaleLowerCase()
  )[0];

  return (
    <Country>
      <Link to={"/"} className="back--to--home">
        <ArrowLeft size={18} /> Back
      </Link>
      <main className="wrapper">
        <section className="flag">
          {/* {JSON.stringify(country)} */}
          <img src={country.flags!.svg} alt="Country Flag" />
        </section>

        <section className="details">
          <p className="name">{country.name}</p>

          <div className="lists">
            <ul>
              <li>
                <span>Native Name:</span> {country.nativeName}
              </li>
              <li>
                <span>Population:</span> {country.population}
              </li>

              <li>
                <span>Region:</span> {country.region}
              </li>

              <li>
                <span>Sub Region:</span> {country.subregion}
              </li>

              <li>
                <span>Capital:</span> {country.capital}
              </li>
            </ul>

            <ul>
              <li>
                <span>Top Level Domain:</span> {country.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span>{" "}
                {country.currencies?.map(
                  (item: { code?: string; name?: string; symbol?: string }) => (
                    <span key={item.name}>{item.name}</span>
                  )
                )}
              </li>

              <li>
                <span>Currencies:</span>{" "}
                {country.languages?.map(
                  (language: {
                    iso639_1?: string;
                    iso639_2?: string;
                    name?: string;
                    nativeName?: string;
                  }) => (
                    <span key={language.name}>{language.name}</span>
                  )
                )}
              </li>
            </ul>
          </div>
          <section className="border--countries">
            <ul>
              {country.borders?.map((border: string) => (
                <li>
                  <Link
                    to={`/country/${data
                      .filter((i) => border === i.alpha3Code)
                      .map((i) => i.name)}`}
                  >
                    {border}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </Country>
  );
}

const Country: IStyledComponent<
  "web",
  FastOmit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    never
  >
> &
  string = styled.div`
  padding-inline: 2rem;
  padding-block: 2rem;
  .flag {
    img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
      border-radius: 4px;
    }
  }
  .back--to--home {
    border: none;
    background-color: ${(p) => p.theme.colors.elements};
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    padding-inline: 1.6rem;
    padding-block: 0.6rem;
    font-weight: bold;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    border-radius: 6px;
    margin-bottom: 2rem;
  }

  .details {
    margin-block: 1rem;
    .name {
      font-weight: bold;
      font-size: 1.4rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-top: 2rem;
      span:first-child {
        font-weight: bold;
      }
    }
  }

  .border--countries {
    /* border: 2px solid red; */
    /* width: 100%; */
    ul {
      display: flex;
      flex-direction: row;
      /* border: 2px solid red; */
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;

      li {
        display: inline-block;
        background-color: ${(p) => p.theme.colors.elements};
        padding-block: 0.6rem;
        padding-inline: 0.8rem;
        border-radius: 6px;
        a {
          text-decoration: none;
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    .wrapper {
      display: flex;
      justify-content: center;
      gap: 2rem;
      .flag {
        max-width: 40%;
        max-height: 350px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .details {
      /* width: 50%; */
      .lists {
        display: flex;
        justify-content: space-between;
        gap: 8rem;
      }

      .border--countries {
        ul {
          display: flex;
          align-items: start;
        }
      }
    }
  }
`;
