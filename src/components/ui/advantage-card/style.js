import styled, { css } from 'styled-components';

const StyledAdvantageCard = styled.section`
  min-height: 197px;
  width: 540px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  background-color: ${(props) => props.theme.colorCard}
    ${(props) =>
      props.isNegative &&
      css`
        background-color: ${(props) => props.theme.colorCardNegative};
      `};
`;

const AdvantageCardHeader = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
`;

const AdvantageTitle = styled.p`
  margin: 0;
  font-weight: 700;
  position: relative;
`;

const AdvantageCardText = styled.p`
  margin: 0;
`;

export {
  AdvantageCardText,
  AdvantageCardHeader,
  AdvantageTitle,
  StyledAdvantageCard,
};
