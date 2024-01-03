import "./About.css";

function About() {
  return (
    <section className="About" id="About">
      <div className="About__info">
        <h2 className="About__title">About the creator</h2>
        <div className="About__text">
          <span>
            I'm Marin Umegane-McGuinness who is a passionate software developer.
            React.js and Ravelry API are in use for this app. For other
            technology like Express and MongoDB, please visit my&nbsp;
          </span>

          <a
            className="About__link"
            href="https://www.linkedin.com/in/marin-umegane/"
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
        className="About__img"
        alt="author icon"
        src="https://media.licdn.com/dms/image/C5103AQGoJeq7zC6jIg/profile-displayphoto-shrink_400_400/0/1560331656757?e=1708560000&v=beta&t=UYu-H9EabDt1lDiKlGkfxgfbmPMmmpdu5u2tsIfrVVM"
      />
    </section>
  );
}

export default About;