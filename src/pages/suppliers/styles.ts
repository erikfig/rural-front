import styled from 'styled-components';

export const ComponentOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 41, 55, 0.5);
`;

export const ComponentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-width: 60%;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 90%;
`;

export const ComponentSupplierActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const ComponentSuppliersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ComponentSuppliersHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ComponentSuppliersDescription = styled.p`
  color: #4b5563; /* text-gray-600 */
`;

export const ComponentTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`

export const ComponentBtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`

export const ComponentRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  & > * {
    flex: 1;
  }
  
  & > .helper-container {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`

export const ComponentIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.2);
  padding: 4px 0 0 5px;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;
