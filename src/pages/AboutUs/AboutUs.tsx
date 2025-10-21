import aboutUs from "../../assets/AboutUs.jpg";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <section id="aboutUs">
      <img src={aboutUs} alt="Qui sommes nous" className="about-us-picture" />
      <div className="about-us">
        <h2>Qui sommes nous?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          <br />
          blanditiis maxime hic omnis odit. Numquam unde explicabo nam rem eum
          <br />
          natus odit velit, libero excepturi aspernatur ea inventore, sunt
          <br />
          deleniti!
        </p>
      </div>
    </section>
  );
}
export default AboutUs;
