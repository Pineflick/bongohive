import React, { Component } from 'react';


class Weather extends Component {
  constructor(props){
    super(props);

    this.state = {

        forecast: [],

    };
  }

  getWeather(){



  var latitude = 0;
  var longitude = 0;
    // Get the current position of the user
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        console.log("get position",position.coords);

          latitude = position.coords.latitude
          longitude = position.coords.longitude


          // Construct the API url to call
          // let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=92cb63a4b442f706dd7847ecee88c53f';
          let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&appid=92cb63a4b442f706dd7847ecee88c53f&lon=${longitude}&units=metric`
          // Call the API, and set the state of the weather forecast
          fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data);
              this.setState({
                  forecast: data });
          })


    })

  // console.log(latitude);

    }


     }

componentDidMount(){
  this.getWeather()

}

  render() {
        const{forecast} = this.state;

        console.log("Forecast:",forecast);
          if (forecast.main == undefined) {
            return <h1>Loading...</h1>
          } else {
            return(<div>



                <div id="details" class='row'>

                <div id='city' class='col-md-4'>
                  <h1>{forecast.name}</h1>
                </div>


                  <div class='col-md-4'>
                  <img width="95" height="95" src={"http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png"} />
                    <h3>{forecast.weather[0].description}</h3>
                  </div>
                  <div class='col-md-4'>
                    <h1>{forecast.main.temp}c</h1>
                    <br/>
                    <h3> pressure {forecast.main.pressure}</h3>
                      <h3>humidity {forecast.main.humidity}</h3>
                  </div>

                </div>

              </div>);
          }


  }

}

export default Weather;
