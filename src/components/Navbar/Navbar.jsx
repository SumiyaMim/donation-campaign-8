/* eslint-disable no-unused-vars */
import React from "react";
import logo from "/images/logo.png";
import { NavLink } from "react-router-dom";
import { GrMenu } from 'react-icons/gr';

const Navbar = () => {
  return (
    <div className="relative flex gap-5 justify-between items-center py-6 px-8 md:px-10 lg:px-14 max-w-md md:max-w-3xl lg:max-w-7xl mx-auto">
     
      <div className="flex w-full justify-between items-center">
        <div>
          <img src={logo} className="w-36" />
        </div>

        <div className="dropdown dropdown-end md:hidden mt-1.5">
          <label tabIndex={0} className="flex justify-center items-center">
            <button className="bg-transparent p-2 text-xl"><GrMenu></GrMenu></button>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-5 text-sm font-medium shadow bg-base-100 rounded-box w-52"
          >
            <li className="mb-1.5">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mb-1.5">
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-bold"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-7 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
