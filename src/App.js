import React, { Component } from "react";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <section class="weather">
          <h2>Sydney,Australia</h2>
          <div className="weather__detail">
            <div className="weather__info__data">
              <div className="weather__info">
                <p>Thursday,Apr 30</p>
                <p>Sunny</p>
                <div className="weather__info__data--icon">
                  <i class="fas fa-cloud" />
                </div>
                <p>
                  24 <sup>&#8451</sup>
                </p>
              </div>
              <div class="weather__info">
                <p>Percipitation: 10%</p>
                <p>Humidity: 5%</p>
                <p>Wind: 4 kpm NW</p>
              </div>
            </div>
            <div class="weather__date">
              <div class="weather__temp--monday">
                <p>Monday</p>
                <i class="fas fa-cloud-sun" />
                <p>
                  23 <sup>&#8451</sup>
                </p>
                <p>
                  18 <sup>&#8451</sup>
                </p>
              </div>
              <div class="weather__temp--monday">
                <p>Tuesday</p>
                <i class="fas fa-cloud-sun" />
                <p>
                  23 <sup>&#8451</sup>
                </p>
                <p>
                  18 <sup>&#8451</sup>
                </p>
              </div>
              <div class="weather__temp--monday">
                <p>Wednesday</p>
                <i class="fas fa-cloud-sun" />
                <p>
                  23 <sup>&#8451</sup>
                </p>
                <p>
                  18 <sup>&#8451</sup>
                </p>
              </div>
              <div class="weather__temp--monday">
                <p>Thursday</p>
                <i class="fas fa-cloud-sun" />
                <p>
                  23 <sup>&#8451</sup>
                </p>
                <p>
                  18 <sup>&#8451</sup>
                </p>
              </div>
              <div class="weather__temp--monday">
                <p>Friday</p>
                <i class="fas fa-cloud-sun" />
                <p>
                  23 <sup>&#8451</sup>
                </p>
                <p>
                  18 <sup>&#8451</sup>
                </p>
              </div>
              <div class="weather__temp--monday">
                <p>Saturday</p>
                <i class="fas fa-cloud-sun" />
                <p>
                  23 <sup>&#8451</sup>
                </p>
                <p>
                  18 <sup>&#8451</sup>
                </p>
              </div>
              <div class="weather__temp--monday">
                <p>Sunday</p>
                <i class="fas fa-cloud-sun" />
                <p>
                  23 <sup>&#8451</sup>
                </p>
                <p>
                  18 <sup>&#8451</sup>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
