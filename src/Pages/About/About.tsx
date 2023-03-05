import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/jamVisions_small.png";

const Wrapper = styled.div<{ isShowing: boolean }>`
  position: relative;
  transition: opacity 0.5s;
  opacity: ${({ isShowing }) => (isShowing ? "1" : "0")};
  line-height: 2.5rem;
  border-radius: 5px;
  p {
    font-size: 24px;
  }
`;

const Hero = styled.div`
  background-color: #647887;
  display: flex;
  align-items: center;
  padding: 8rem;
  margin-bottom: 4rem;
  border-radius: 30px;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const TagLine = styled.div`
  font-size: 2rem;
  line-height: 32px;
`;
export const About = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setIsShowing(true);
  }, []);
  return (
    <>
      <Hero>
        <Logo />
        <TagLine>
          <div>
            You en<strong>VISION</strong> it,
          </div>
          <div>We provide it</div>
        </TagLine>
      </Hero>
      <Wrapper isShowing={isShowing}>
        <p>
          <strong style={{ color: "#ec9929", fontSize: "32px" }}>
            Welcome to Jam Visions
          </strong>
          <br />a new startup software company founded by Monique Lewis and
          Justin Lewis! We specialize in providing custom websites for our
          customers to help them achieve their online goals.
        </p>
        <p>
          Our team is passionate about creating websites that are not only
          visually stunning but also functional and user-friendly. We believe
          that a website should not only look great but also provide a seamless
          user experience, making it easy for your visitors to find what they
          are looking for.
        </p>
        <p>
          At Jam Visions, we understand that every business has unique needs and
          requirements. That's why we work closely with our clients to create
          custom websites that are tailored to their specific needs. We take the
          time to understand your business, your target audience, and your goals
          to ensure that we deliver a website that perfectly represents your
          brand and helps you achieve your online objectives.
        </p>
        <p>
          We believe that communication is key to delivering exceptional
          results, which is why we keep our clients involved throughout the
          entire process. We provide regular updates and seek your feedback to
          ensure that your website is exactly how you envisioned it.
        </p>
        <p>
          Our team is comprised of experienced professionals who are passionate
          about what they do. We stay up-to-date with the latest industry trends
          and technologies to ensure that we deliver websites that are modern,
          functional, and secure.
        </p>
        <p>
          Thank you for considering Jam Visions for your custom website needs.
          We look forward to working with you to help you achieve your online
          goals!
        </p>
      </Wrapper>
    </>
  );
};
