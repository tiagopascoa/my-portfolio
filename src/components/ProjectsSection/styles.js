import styled from "styled-components/macro";

export const ProjectsContainer = styled.div`
  padding-bottom: 5rem;
  background: #010606;
`;

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
  height: 525px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    height: 475px;
  }

  &:hover {
    transform: scale(1.02);
    /* transition: all 0.2s ease-in-out; */
    cursor: grab;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  max-height: 250px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 5px;
  @media screen and (max-width: 480px) {
    max-height: 150px;
  }
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

export const SwiperContainer = styled.div`
  width: 100%;
  & .swiper-pagination {
    display: flex;
    justify-content: center;
  }
  & .swiper-slide {
    padding: 24px;
  }
  & .swiper-wrapper {
    margin-bottom: 50px;
  }
  & .swiper-pagination-bullet-active {
    background: ${({ blue_bg }) =>
      blue_bg ? "#6497b1 !important" : "#52AD80 !important"};
    height: 15px !important;
    width: 15px !important;
  }
  & .swiper-pagination-bullet {
    background: ${({ blue_bg }) =>
      blue_bg ? "#6497b1 !important" : "#52AD80 !important"};
    height: 15px !important;
    width: 15px !important;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  /* padding-top: 20px; */
`;
