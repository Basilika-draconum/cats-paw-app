import React from "react";
import { ReactComponent as Logo } from "../../assets/img/icons/paw.svg";
import { NavLink } from "react-router-dom";
import vote from "../../assets/img/vote-table.png";
import breed from "../../assets/img/pet-breeds.png";
import gallery from "../../assets/img/images-search.png";

const LeftAside = () => {
  return (
    <div className="bg-blue-300 col-span-1">
      <div className="flex gap-x-3 mb-80">
        <Logo />
        <p className="text-bold">CatsPaw</p>
      </div>
      <div>
        <h1 className="text-44">Hi!&#x1F44B;</h1>
        <p>Welcome to MacPaw Bootcamp 2023</p>
      </div>
      <div>
        <h2>Lets start using Cats Paw App</h2>
        <ul className="flex gap-16">
          <li>
            <img
              src={vote}
              alt="Voting"
              width={138}
              height={198}
              className="bg-voteBgLink mb-10 rounded-lg"
            />
            <NavLink
              to="/voting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accentText bg-white px-10 rounded-lg"
            >
              Voting
            </NavLink>
          </li>
          <li>
            <img
              src={breed}
              alt="Breeds"
              width={138}
              height={198}
              className="bg-breedBgLink mb-10 rounded-lg"
            />
            <NavLink
              to="/breeds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accentText bg-white px-10 rounded-lg"
            >
              Breeds
            </NavLink>
          </li>
          <li>
            <img
              src={gallery}
              alt="Gallery"
              width={138}
              height={198}
              className="bg-galleryBgLink mb-10 rounded-lg"
            />
            <NavLink
              to="/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accentText bg-white px-10 rounded-lg"
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftAside;
