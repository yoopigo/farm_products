import styled from 'styled-components';

const StyledAdvantages = styled.section`
  box-sizing: border-box;
  position: relative;
  min-height: 843px;
  background-color: ${(props) => props.theme.colorWhite};
  padding: 100px 90px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
  position: relative;
  width: 1280px;
  align-items: center;
`;

const AdvantagesListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  margin: 0;
`;

export { StyledAdvantages, AdvantagesListUl };
