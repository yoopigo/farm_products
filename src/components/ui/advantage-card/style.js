import styled from 'styled-components';

const StyledAdvantageCard = styled.section`
  min-height: 197px;
  width: 540px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  background-color: ${(props) =>
    props.isNegative ? props.theme.colorCardNegative : props.theme.colorCard};
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

const AdvantageImg = styled.img`
  width: 52px;
  height: 52px;
`;

const AdvantageCardBadge = styled.span`
  margin: 0;
  font-size: 14px;
  min-width: 158px;
  padding: 2px 10px;
  color: #fff;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorBadgeCardNegative
      : props.theme.colorBadgeCard};
`;

const AdvantageCardText = styled.p`
  margin: 0;
`;

export {
  AdvantageCardText,
  AdvantageCardHeader,
  AdvantageTitle,
  StyledAdvantageCard,
  AdvantageCardBadge,
  AdvantageImg,
};
