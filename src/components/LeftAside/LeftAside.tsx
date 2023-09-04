import React from "react";
import { ReactComponent as Logo } from "../../assets/img/icons/paw.svg";
import { NavLink } from "react-router-dom";
import vote from "../../assets/img/vote-table.png";
import breed from "../../assets/img/pet-breeds.png";
import gallery from "../../assets/img/images-search.png";

const LeftAside = () => {
  return (
    <div className="py-30px h-screen w-1/2">
      <div className="flex gap-x-3 mb-20 ">
        <Logo />
        <p className="text-bold font-medium text-xl">CatsPaw</p>
      </div>
      <div>
        <h1 className="text-44 font-medium leading-10 mb-2">Hi!&#x1F44B;</h1>
        <p className="font-normal text-20 text-descriptionText mb-16">
          Welcome to CatsPaw 2023
        </p>
      </div>
      <div>
        <h2 className="text-20 text-mainText font-medium mb-5">
          Lets start using Cats Paw App
        </h2>
        <ul className="flex gap-16">
          <li>
            <img
              src={vote}
              alt="Voting"
              width={138}
              height={198}
              className="bg-voteBgLink mb-10 rounded-lg border-8 border-indigo-100/50"
            />
            <NavLink
              to="/voting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accentText bg-white py-10px rounded-lg px-12"
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
              className="bg-breedBgLink mb-10 rounded-lg border-8 border-indigo-100/50"
            />
            <NavLink
              to="/breeds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accentText bg-white py-10px rounded-lg px-12"
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
              className="bg-galleryBgLink mb-10 rounded-lg border-8 border-indigo-100/50"
            />
            <NavLink
              to="/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accentText bg-white py-10px rounded-lg px-12"
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
