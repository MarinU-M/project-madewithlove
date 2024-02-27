import "./About.css";
import author from "../../images/1560331657736.jpg";

function About() {
  return (
    <section className="about" id="About">
      <div className="about__info">
        <h2 className="about__title">About the creator</h2>
        <div className="about__text">
          <span>
            I'm Marin Umegane-McGuinness who is a passionate software developer.
            React.js and Ravelry API are in use for this app. For other
            technology like Express and MongoDB, please visit my&nbsp;
          </span>

          <a
            className="about__link"
            href="https://www.linkedin.com/in/marin-umegane/"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>

          <span>
            . In addition to the virtual crafting, I'm also into knitting and
            crocheting. As mostly same as other fellow knitters/crocheters,
            always seeking new patterns and inspo. You can also check my
            craffting journey here.
          </span>
        </div>
      </div>
      <img className="about__img" alt="author icon" src={author} />
    </section>
  );
}

export default About;
