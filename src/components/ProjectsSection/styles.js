import styled from "styled-components/macro";

export const ProjectsContainer = styled.section`
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
  height: 45%;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 35%;
    padding: 0.5rem;
  }
`;
export const CardImg = styled.img`
  width: ${({ onlyDesktopImg }) => (onlyDesktopImg ? "70%" : "100%")};
  height: 100%;
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
  color: #000000;
  text-decoration: none;
  background: ${({ blue_bg }) =>
    blue_bg
      ? "linear-gradient(to right, rgba(100, 151, 177, 1), rgba(100, 151, 177, 1)), linear-gradient(to right, rgba(186, 209, 220, 1), rgba(186, 209, 220, 1))"
      : "linear-gradient(to right, rgba(82, 173, 128, 1), rgba(82, 173, 128, 1)), linear-gradient(to right, rgba(190, 224, 207, 1), rgba(190, 224, 207, 1))"};
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  &:hover {
    background-size: 0 3px, 100% 3px;
  }
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
  gap: 15px;
`;
