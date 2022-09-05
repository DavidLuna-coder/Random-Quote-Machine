import logo from "./logo.svg";
import "./App.css";
import React from "react";

const quotes = [
  { quote: "Buenas tardes", author: "Miguel Bosé" },
  { quote: "Buenos días", author: "Barack Obama" },
  { quote: "Buenas noches", author: "Jose Antonio" },
  { quote: "Haced como que sois universitarios", author: "DLH" },
  { quote: "Se llama Jose Luis", author: "Don Javier" },
];

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  componentDidMount() {
    const randomQuote = quotes[(Math.floor(Math.random() * 4))];
    this.setState(state => ({quote:randomQuote.quote, author:randomQuote.author}))
  }

  handleNewQuote()
  {
    const randomQuote = quotes[(Math.floor(Math.random() * 4))];
    this.setState(state => ({quote:randomQuote.quote, author:randomQuote.author}))
  }

  render() {
    let texto = "Texto";
    let author = "Yo";
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div
              id="contenedor"
              className="d-flex bg-primary justify-content-center align-items-center"
            >
              <div id="quote-box">
                <div className="quote-text">
                  <span id="text">{this.state.quote}</span>
                  <br />
                  <span id="author">{this.state.author}</span>
                  <br />

                  <div
                    id="flex-container"
                    className="d-flex justify-content-around"
                  >
                    <a
                      id="tweet-quote"
                      target="_top"
                      href="https://twitter.com/intent/tweet?text={this.data.quote}"
                      className="btn btn-outline-dark btn-info box-buttons"
                    >
                      <i id="twitter-logo" class="fa-brands fa-twitter"></i>
                    </a>
                    <button
                      id="new-quote"
                      className="btn btn-outline-dark btn-info box-buttons"
                      onClick={this.handleNewQuote}
                    >
                      New Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
