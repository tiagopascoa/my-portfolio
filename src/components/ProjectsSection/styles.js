import styled from "styled-components/macro";

export const ProjectsContainer = styled.div`
    padding-bottom: 5rem ;
    background: #010606;

`

export const PortfolioContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PortfolioCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  height: 475px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
`;
export const CardImg = styled.img`
  width: 100%;
  height: auto;
  user-select: none;
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 1.4px;
  color: #fff;
  text-align: center;
  padding: 5rem 0 3rem 0;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const CardT = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
  user-select: none;
`;
export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;
export const CardP = styled.p`
  font-size: 15px;
  user-select: none;
`;
export const CardTech = styled.p`
font-size: 15px;
  user-select: none;
`;
export const CardLink = styled.a`
font-size: 15px;
  user-select: none;
`;

export const CarouselDotsInactive = styled.span`
height: 12px;
width: 12px;
background-color: white;
border-radius: 50%;
display: inline-block;
margin: 0.5rem;
cursor: pointer;
&:hover {
    background-color: ${({ blue_bg }) => (blue_bg ? "#6497b1" : "#52AD80")};
}
`;
export const CarouselDotsActive = styled.span`
height: 12px;
width: 12px;
background-color: ${({ blue_bg }) => (blue_bg ? "#6497b1" : "#52AD80")};
border-radius: 50%;
display: inline-block;
margin: 0.5rem;
cursor: pointer;
`;