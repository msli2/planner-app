import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Grid, Button, ButtonGroup } from "@material-ui/core";
import TextInput from "./components/TextInput";
import Calendar from "./components/Calendar";
import {
  faIceCream,
  faSeedling,
  faRainbow,
  faCloud,
  faSun,
  faMoon,
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "#FCFFF9",
      lighter: "#DDD1C7",
      light: "#c2cfb2",
      medium: "#8db580",
      dark: "#7E8987",
      theme: "plant",
    };
  }

  plantTheme = (e) => {
    this.setState({
      background: "#FCFFF9",
      lighter: "#DDD1C7",
      light: "#c2cfb2",
      medium: "#8db580",
      dark: "#7E8987",
      theme: "plant",
    });
  };

  iceCreamTheme = (e) => {
    this.setState({
      background: "#FFFCFA",
      lighter: "#F0E7D8",
      light: "#AB9B96",
      medium: "#A1674A",
      dark: "#BA6E6E",
      theme: "icecream",
    });
  };

  rainbowTheme = (e) => {
    this.setState({
      background: "#FFFCFC",
      lighter: "#F1E3D3",
      light: "#F2D0A9",
      medium: "#D88C9A",
      dark: "#99C1B9",
      theme: "rainbow",
    });
  };

  cloudTheme = (e) => {
    this.setState({
      background: "#FBFDFF",
      lighter: "#C2DFE3",
      light: "#9DB4C0",
      medium: "#5C6B73",
      dark: '#253237',
      theme: "cloud",
    });
  };

  render() {
    var update = function () {
      document.getElementById("datetime").innerHTML = moment().format("llll");
    };
    setInterval(update, 1000);
    return (
      <div class="body" style={{ backgroundColor: this.state.background }}>
        <Grid container direction="row" justify="center" spacing={4}>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <p class="title">Plan My Day</p>
            <div id="datetime" class="date"></div>
            <ButtonGroup disableElevation variant="contained" class="themes">
              <Button class="theme_title">Themes: </Button>
              <Button
                class="theme"
                onClick={this.plantTheme}
                style={{ backgroundColor: this.state.dark }}
              >
                <FontAwesomeIcon icon={faSeedling} />
              </Button>
              <Button
                class="theme"
                onClick={this.iceCreamTheme}
                style={{ backgroundColor: this.state.dark }}
              >
                <FontAwesomeIcon icon={faIceCream} />
              </Button>
              <Button
                class="theme"
                onClick={this.rainbowTheme}
                style={{ backgroundColor: this.state.dark }}
              >
                <FontAwesomeIcon icon={faRainbow} />
              </Button>
              <Button
                class="theme"
                onClick={this.cloudTheme}
                style={{ backgroundColor: this.state.dark }}
              >
                <FontAwesomeIcon icon={faCloud} />
              </Button>
            </ButtonGroup>
            <Calendar id={this.state.theme}></Calendar>
            <p class="todo">Daily 1-3-5 To Do</p>
            <div
              class="lighter"
              style={{ backgroundColor: this.state.lighter }}
            >
              <TextInput input="value" value="1." id="id1" font="font"></TextInput>
              <TextInput input="value" value="2." id="id1" font="font"></TextInput>
              <TextInput input="value" value="3." id="id1" font="font"></TextInput>
              <TextInput input="value" value="4." id="id1" font="font"></TextInput>
              <TextInput input="value" value="5." id="id1" font="font"></TextInput>
              <TextInput input="value" value="6." id="id1" font="font"></TextInput>
              <TextInput input="value" value="7." id="id1" font="font"></TextInput>
              <TextInput input="value" value="8." id="id1" font="font"></TextInput>
              <TextInput input="value2" value="9." id="id1" font="font"></TextInput>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <p class="time">Morning <FontAwesomeIcon icon={faSun} /></p>
            <div class="light" style={{ backgroundColor: this.state.light }}>
              <TextInput input="value" value="5:00" id="id2"></TextInput>
              <TextInput input="value" value="5:30" id="id2"></TextInput>
              <TextInput input="value" value="6:00" id="id2"></TextInput>
              <TextInput input="value" value="6:30" id="id2"></TextInput>
              <TextInput input="value" value="7:00" id="id2"></TextInput>
              <TextInput input="value" value="7:30" id="id2"></TextInput>
              <TextInput input="value" value="8:00" id="id2"></TextInput>
              <TextInput input="value" value="8:30" id="id2"></TextInput>
              <TextInput input="value" value="9:00" id="id2"></TextInput>
              <TextInput input="value" value="9:30" id="id2"></TextInput>
              <TextInput input="value" value="10:00" id="id2"></TextInput>
              <TextInput input="value" value="10:30" id="id2"></TextInput>
              <TextInput input="value" value="11:00" id="id2"></TextInput>
              <TextInput input="value" value="11:30" id="id2"></TextInput>
              <TextInput input="value2" value="12:00" id="id2"></TextInput>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <p class="time">Afternoon <FontAwesomeIcon icon={faCloudSun} /></p>
            <div class="medium" style={{ backgroundColor: this.state.medium }}>
              <TextInput input="value" value="12:30" id="id2"></TextInput>
              <TextInput input="value" value="1:00" id="id2"></TextInput>
              <TextInput input="value" value="1:30" id="id2"></TextInput>
              <TextInput input="value" value="2:00" id="id2"></TextInput>
              <TextInput input="value" value="2:30" id="id2"></TextInput>
              <TextInput input="value" value="3:00" id="id2"></TextInput>
              <TextInput input="value" value="3:30" id="id2"></TextInput>
              <TextInput input="value" value="4:00" id="id2"></TextInput>
              <TextInput input="value" value="4:30" id="id2"></TextInput>
              <TextInput input="value" value="5:00" id="id2"></TextInput>
              <TextInput input="value" value="5:30" id="id2"></TextInput>
              <TextInput input="value" value="6:00" id="id2"></TextInput>
              <TextInput input="value" value="6:30" id="id2"></TextInput>
              <TextInput input="value" value="7:00" id="id2"></TextInput>
              <TextInput input="value2" value="7:30" id="id2"></TextInput>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <p class="time">Evening <FontAwesomeIcon icon={faMoon} /></p>
            <div class="dark" style={{ backgroundColor: this.state.dark }}>
              <TextInput input="value" value="8:00" id="id2"></TextInput>
              <TextInput input="value" value="8:30" id="id2"></TextInput>
              <TextInput input="value" value="9:00" id="id2"></TextInput>
              <TextInput input="value" value="9:30" id="id2"></TextInput>
              <TextInput input="value" value="10:00" id="id2"></TextInput>
              <TextInput input="value" value="10:30" id="id2"></TextInput>
              <TextInput input="value" value="11:00" id="id2"></TextInput>
              <TextInput input="value" value="11:30" id="id2"></TextInput>
              <TextInput input="value" value="12:00" id="id2"></TextInput>
              <TextInput input="value" value="12:30" id="id2"></TextInput>
              <TextInput input="value" value="1:00" id="id2"></TextInput>
              <TextInput input="value" value="1:30" id="id2"></TextInput>
              <TextInput input="value" value="2:00" id="id2"></TextInput>
              <TextInput input="value" value="2:30" id="id2"></TextInput>
              <TextInput input="value2" value="3:00" id="id2"></TextInput>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
