import type { ReactNode } from "react";
import './app.css';
import { Link } from "@tanstack/react-router";
import { FaHome, FaTruck, FaCog } from "react-icons/fa";
import { ComponentHeader, ComponentLayoutContainer, ComponentNav, ComponentNavigation, ComponentNavigationHeader, ComponentNavigationSubContainer, ComponentNavigationList, ComponentNavItem, ComponentNavIcon, ComponentLayoutMain, ComponentLayoutMainContent, ComponentFooter } from "./styles";

type DashboardProps = {
  children: ReactNode;
};

export const Dashboard = ({ children }: DashboardProps) => {
  return (
    <ComponentLayoutContainer>  
      <ComponentHeader aria-label="header" className="bg-header" />
      <ComponentNavigation aria-label="navigation" >
        <ComponentNav>
          <ComponentNavigationSubContainer>
            <ComponentNavigationHeader>
              <span>Dash</span>
              {' '}
              Rural
            </ComponentNavigationHeader>

            <ComponentNavigationList>
              <ComponentNavItem>
                <Link to="/">
                  <ComponentNavIcon><FaHome /></ComponentNavIcon> Home
                </Link>
              </ComponentNavItem>
              <ComponentNavItem>
                <Link to="/suppliers">
                  <ComponentNavIcon><FaTruck /></ComponentNavIcon> Fornecedores
                </Link>
              </ComponentNavItem>
            </ComponentNavigationList>
          </ComponentNavigationSubContainer>

          <ComponentNavigationList>
            <ComponentNavItem>
              <Link to="/settings">
                <ComponentNavIcon><FaCog /></ComponentNavIcon> Configurações
              </Link>
            </ComponentNavItem>
          </ComponentNavigationList>
        </ComponentNav>
      </ComponentNavigation>

      <ComponentLayoutMain>
        <ComponentLayoutMainContent>
          {children}
        </ComponentLayoutMainContent>
      </ComponentLayoutMain>
      <ComponentFooter>
        © { (new Date()).getFullYear() } Erik Figueiredo
      </ComponentFooter>
    </ComponentLayoutContainer>
  );
}