import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panel: 0 };

    this.Next = this.Next.bind(this);
    this.Previus = this.Previus.bind(this);
  }

  Next() {
    this.setState({ panel: this.state.panel + 1 });
  }

  Previus() {
    this.setState({ panel: this.state.panel - 1 });
  }

  render() {
    return (
      <div className="App">
        {" "}
        <div className="Botones">
          {" "}
          <button onClick={this.Next} className="Next">
            Next
          </button>{" "}
          <button onClick={this.Previus} className="Previus">
            Previus
          </button>
        </div>{" "}
        {this.state.panel === 1 ? (
          <div className="panel1">
            {" "}
            <h2>Chau</h2>{" "}
          </div>
        ) : (
          <div className="hola2">
            {" "}
            <h2>hola</h2>{" "}
          </div>
        )}
        {this.state.panel >= 2 ? (
          <div>
            {" "}
            <div className="panel2">
              <h2>Como estas</h2>
            </div>{" "}
          </div>
        ) : (
          <div>
            {" "}
            <div className="hola1">
              {" "}
              <h2>hola</h2>
            </div>{" "}
          </div>
        )}
      </div>
    );
  }
}
