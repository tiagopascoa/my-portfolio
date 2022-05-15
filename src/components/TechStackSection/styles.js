import styled from "styled-components/macro";

export const TechStackContainer = styled.div`
  background: #f9f9f9;
  padding-bottom: 100px;

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding-top: 100px;
  }
`;
export const TechStackWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const TechStackRow = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 1.4px;
  color: #010606;
  text-align: center;
  margin-bottom: 25px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Tech = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const TechWrapper = styled.div`
  font-size: 18px;
  line-height: 24px;
  background: ${({ blue_bg }) => (blue_bg ? "#6497b1" : "#52AD80")};
  color: #010606;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  width: 130px;
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 100px;
  }
`;
