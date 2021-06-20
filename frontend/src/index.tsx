import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import { render } from "react-dom";
import { Character } from "./lib/models/KQStream";
import Killboard from "./killboard/Killboard";
import sprites from "./img/sprites";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

interface CharacterColumnProps {
  character: Character;
  address: string;
}

const CharacterColumn = (props: CharacterColumnProps) => (
  <div className="col mb-3">
    <a href={`/killboard/player/${props.character}?address=${props.address}`}>
      <img src={sprites.character[props.character]} alt="character" />
    </a>
  </div>
);

interface KillboardLinkProps {
  text: string;
  route: string;
  address: string;
}

const KillboardLink = (props: KillboardLinkProps) => (
  <a href={`/killboard/${props.route}?address=${props.address}`}>
    {props.text}
  </a>
);

interface HomeState {
  address: string;
}

class Home extends Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = { address: "kq.local" };
  }

  render() {
    return (
      <div className="container">
        <h1>Killer Queen Stats</h1>
        <div className="address">
          <label htmlFor="address">Cab network address</label>
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
          ></input>
        </div>
        <div className="roster">
          <div className="row">
            <CharacterColumn
              character={Character.GoldStripes}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.GoldAbs}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.GoldQueen}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.GoldSkulls}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.GoldChecks}
              address={this.state.address}
            />
          </div>
          <div className="row">
            <CharacterColumn
              character={Character.BlueStripes}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.BlueAbs}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.BlueQueen}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.BlueSkulls}
              address={this.state.address}
            />
            <CharacterColumn
              character={Character.BlueChecks}
              address={this.state.address}
            />
          </div>
        </div>
        <ul>
          <li>
            <KillboardLink
              route="full"
              text="Full"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="horizontal/blue"
              text="Blue team"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="horizontal/blue/mirror"
              text="Blue team (mirrored)"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="vertical/blue"
              text="Vert Blue team"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="vertical/blue/mirror"
              text="Vert Blue team (mirrored)"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="horizontal/gold"
              text="Gold team"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="horizontal/gold/mirror"
              text="Gold team (mirrored)"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="vertical/gold"
              text="Vert Gold team"
              address={this.state.address}
            />
          </li>
          <li>
            <KillboardLink
              route="vertical/gold/mirror"
              text="Vert Gold team (mirrored)"
              address={this.state.address}
            />
          </li>
        </ul>
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/killboard" component={Killboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
