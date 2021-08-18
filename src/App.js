import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";
import WeatherList from "./components/WeatherList";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  text: {
    fontSize: 24,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const handleGetWeather = () => {
    if (city) {
      axios
        .get(
          `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
          {
            headers: {
              Authorization:
                "apikey 2Lhl2CEZkaSWKQewACxg2d:7if8QvMVzhdf46tnNwdhJI",
            },
          }
        )
        .then((response) => {
          setData(response.data.result);
        });
    }
  };
  return (
    <>
      <div className={classes.container}>
        <p className={classes.text}>Şehir Seçiniz</p>
        <TextField
          id="city"
          label="Şehir"
          variant="outlined"
          className={classes.textField}
          value={city}
          onInput={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleGetWeather}>
          Gönder
        </Button>
      </div>
      <div className={classes.list}>
        <h2>{city.toUpperCase()}</h2>

        {data.map((item) => {
          return <WeatherList data={item} />;
        })}
      </div>
    </>
  );
};

export default App;
