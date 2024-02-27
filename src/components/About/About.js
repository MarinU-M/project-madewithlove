import "./About.css";

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
      <img
        className="about__img"
        alt="author icon"
        src="https://media.licdn.com/dms/image/C5103AQGoJeq7zC6jIg/profile-displayphoto-shrink_800_800/0/1560331657736?e=1710979200&v=beta&t=b7tyhC_B0BWkqeaNd7vyb3NV4hNcAmPbYZPdZVWKCpY"
      />
    </section>
  );
}

export default About;
