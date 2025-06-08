import styled from 'styled-components';

export const ComponentLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f3f4f6; /* bg-gray-100 */
  font-size: 0.875rem; /* md:text-sm */
`;

export const ComponentHeader = styled.header`
  height: 12rem; /* h-48 */
  color: white;
  background-color: #1f2937; /* bg-gray-800 */
  padding-left: 20rem; /* md:pl-80 */
`;

export const ComponentNavigation = styled.section`
  position: relative;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem; /* p-4 */
    width: 19.5rem; /* md:w-78 */
  }
`;

export const ComponentNavigationSubContainer = styled.div`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`

export const ComponentNavigationHeader = styled.h2`
  display: flex;
  align-items: center;
  padding-right: 2rem; /* pr-8 */
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */

  span {
    color: ${({theme}) => theme.colors.primary};
  }

  @media (min-width: 768px) {
    margin-bottom: 1rem; /* md:mb-4 */
  }
`

export const ComponentNav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 1rem; /* p-4 */
  color: white;
  border-radius: 0.375rem; /* rounded-md */
  background-color: #292524; /* bg-stone-800 */

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ComponentNavigationList = styled.ul`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`

export const ComponentNavItem = styled.li`
  text-align: center;

  & a {
    display: block;
    padding: 0.5rem; /* py-2 px-2 */
    color: #d1d5db; /* text-gray-300 */
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
  }

  & a.active {
    color: #fbbf24; /* text-gray-300 */
  }

  & a:hover {
    background-color: #374151;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ComponentNavLink = styled.a`
  display: block;
  padding: 0.5rem; /* py-2 px-2 */
  border-radius: 0.125rem; /* rounded-sm */
  transition: background-color 0.2s;

  &:hover {
    background-color: #374151; /* hover:bg-gray-700 */
  }

  &.active {
    color: #fbbf24; /* text-secondary */
  }
`;

export const ComponentNavIcon = styled.span`
  display: inline-block;
  margin-right: 0.5rem; /* mr-2 */
`;

export const ComponentLayoutMain = styled.main`
  flex: 1;
  padding: 1rem; /* p-4 */

  @media (min-width: 768px) {
    padding-left: 20rem; /* md:pl-80 */
  }
`

export  const ComponentLayoutMainContent = styled.div`
  @media (min-width: 768px) {
    padding: 1rem; /* md:p-4 */
    margin-top: -4rem; /* md:-mt-16 */
    background-color: #f9fafb; /* md:bg-gray-100 */
    border-radius: 0.375rem; /* md:rounded-md */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* md:shadow-xl */
  }
`;

export const ComponentFooter = styled.footer`
  padding: 1rem; /* p-4 */
  text-align: right;
  color: #9ca3af; /* text-gray-400 */
  font-size: 0.875rem; /* text-xs */
`;
