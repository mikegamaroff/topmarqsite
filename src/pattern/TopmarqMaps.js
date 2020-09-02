import React, { Component } from "react";
/* import Geocoder from "react-mapbox-gl-geocoder";
 */
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZ2FtYXJvZmYiLCJhIjoiY2tlamZqbG16MDR0aDMwbzgzMWc1dmptbSJ9.kFQO-B64jrzZTeKAoE6N1w";

const mapStyle = {
  width: "100%",
  height: "100%",
  boxShadow: "1px 0px 4px 0 rgba(0, 0, 0, 0.1)",
};

const onSelected = (e) => {
  console.log(e);
};
let LatLong = [];
class TopmarqMaps extends Component {
  state = {
    viewport: {
      zoom: 12,
    },
  };

  componentDidMount() {
    axios
      .get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/{" +
          this.props.address +
          "}.json?access_token=" +
          MAPBOX_TOKEN
      )
      .then((res) => {
        console.log(res.data.features);
        LatLong = res.data.features[0].center;

        if (LatLong) {
          this.setState({
            viewport: {
              ...this.state.viewport,
              latitude: LatLong[1],
              longitude: LatLong[0],
            },
          });
        } else {
          this.setState({
            viewport: {
              ...this.state.viewport,
              latitude: 40.6892494,
              longitude: -74.0466891,
            },
          });
        }
      });
  }

  render() {
    const { viewport } = this.state;

    return (
      <div>
        <div></div>
        <div
          style={{
            height: "250px",
            width: "100%",
            borderRadius: "13px",
            boxShadow: "1px 0px 4px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <ReactMapGL
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            {...viewport}
            {...mapStyle}

            // onViewportChange={(viewport) => this.setState({viewport})}
          >
            {this.state.viewport.latitude ? (
              <Marker
                latitude={this.state.viewport.latitude}
                longitude={this.state.viewport.longitude}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <img src={"images/topLogo.svg"} />
              </Marker>
            ) : null}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default TopmarqMaps;
