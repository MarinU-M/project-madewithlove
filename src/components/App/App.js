import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RandomPattern from "../RandomPattern/RandomPattern";
import About from "../About/About";
import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";
import CardModal from "../CardModal/CardModal";
import { getPatterns } from "../../utils/api";
import crocheting from "../../images/crocheting.jpg";
import knitting from "../../images/knitting.jpg";
import yarnball from "../../images/yarnball.svg";

function App() {
  const [items, setItems] = useState([]);
  const [list, setList] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isError, setIsError] = useState();
  const [image, setImage] = useState();

  const createRandomList = (array, num) => {
    let newArray = [];
    while (newArray.length < num && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    return newArray;
  };

  // choose 3 patterns randomly
  const createPatternList = () => {
    setList(createRandomList(items, 3));
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  // close modal by pressing esc
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  // get pattern list
  useEffect(() => {
    getPatterns()
      .then((res) => {
        const { patterns } = res;
        setItems(patterns);
      })
      .catch((err) => {
        setIsError(true);
        console.error(err);
      });
  }, []);

  // choose random image
  useEffect(() => {
    const images = [crocheting, knitting, yarnball];
    const imageArray = createRandomList(images, 1);
    setImage(imageArray[0]);
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main randomImage={image} onClick={createPatternList} />
        </Route>
        <Route path="/randompattern">
          <RandomPattern
            onClick={handleSelectedCard}
            list={list}
            isError={isError}
          />
        </Route>
      </Switch>

      <About />
      <Footer />
      {/* <Preloader /> */}
      {activeModal === "preview" && (
        <CardModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
