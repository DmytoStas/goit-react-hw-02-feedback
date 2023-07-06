import styled from '@emotion/styled';

const ButtonsList = styled.ul`
  display: flex;
  gap: 10px;
  width: 400px;
  padding: 0;
  margin-top: 20px;

  list-style-type: none;
`;

const Button = styled.button`
  width: 80px;
  height: 20px;
  font-weight: 600;
  text-transform: capitalize;
  background-color: transparent;
  border: 0.5px solid black;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    color: white;
    background-color: blue;
  }
`;

export { ButtonsList, Button };
