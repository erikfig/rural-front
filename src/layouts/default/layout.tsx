import type { ReactNode } from "react";
import './app.css';
import { Link } from "@tanstack/react-router";
import { FaHome, FaTruck, FaCog } from "react-icons/fa";

type DashboardProps = {
  children: ReactNode;
};

export const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:text-sm">  
      <header aria-label="header" className="h-48 text-white bg-gray-800 bg-header md:pl-80" />
      <section aria-label="navigation" className="top-0 left-0 h-full p-4 md:fixed md:w-78">
        <nav className="flex flex-row h-full p-4 text-white rounded-md md:flex-col md:justify-between bg-stone-800">
          <div className="flex md:flex-col md:align-center">
            <h2 className="flex items-center pr-8 text-lg md:mb-4 font-semiboldc">
              <span className="text-primary">Dash</span> Rural
            </h2>

            <ul className="flex md:flex-col">
              <li className="text-center md:text-left">
                <Link to="/" className="[&.active]:text-secondary py-2 px-2 block hover:bg-gray-700 transition-colors rounded-sm">
                  <FaHome className="inline-block mr-2" /> Home
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link to="/suppliers" className="[&.active]:text-secondary py-2 px-2 block hover:bg-gray-700 transition-colors rounded-sm">
                  <FaTruck className="inline-block mr-2" /> Fornecedores
                </Link>
              </li>
            </ul>
          </div>

          <ul>
            <li className="text-center md:text-left">
              <Link to="/settings" className="[&.active]:text-secondary py-2 px-2 block hover:bg-gray-700 transition-colors rounded-sm">
                <FaCog className="inline-block mr-2" /> Configurações
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <main className="flex-1 p-4 md:pl-80">
        <div className="md:p-4 md:-mt-16 md:bg-gray-100 md:rounded-md md:shadow-xl">
          {children}
        </div>
      </main>
      <footer className="p-4 text-xs text-right text-gray-400">
        © { (new Date()).getFullYear() } Erik Figueiredo
      </footer>
    </div>
  );
}