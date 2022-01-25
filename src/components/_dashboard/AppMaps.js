import React, { useState ,useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  // Marker,
  CircleMarker,
  Tooltip,
  Popup,
} from "react-leaflet";
import "./styles.css";
import "./styles.scss";
import "leaflet/dist/leaflet.css";
// material
import { Box, Card, Grid } from "@material-ui/core";

import axiosConfig from '../../axiosConfig';

const AppMaps = () => {

  const [nameDevice1, setNameDevice1] = useState([])
  const [nameDevice2, setNameDevice2] = useState([])
  const [nameDevice3, setNameDevice3] = useState([])
  const [nameDevice4, setNameDevice4] = useState([])
  const [nameDevice5, setNameDevice5] = useState([])


  useEffect(() => {
    device()
  }, [])

  const device = async () => {
    await axiosConfig.get(
      '/device',
    ).then((response) => {
      // console.log(response.data.data);
      setNameDevice1(response.data.data[4])
      setNameDevice2(response.data.data[3])
      setNameDevice3(response.data.data[2])
      setNameDevice4(response.data.data[1])
      setNameDevice5(response.data.data[0])
    }).catch((err) => {
      console.log(err);
    });
  }

  // console.log(nameDevice1.location);


  const defaultProps = {
    center: {
      lat: 13.617439758376833,
      lng: 100.5600615602211,
    },
    zoom: 17,
  };

  const positionData = [
    {
      id: 1,
      lat: 13.620511368190593,
      lng: 100.56160869226932,
      // air: airM6,
      name: "LPR 1",
      backgroundColor: "background-red",
      cid: "C44F33612FBD",
    },
    {
      id: 2,
      lat: 13.619280788688794,
      lng: 100.56237819846419,
      // air: airM3,
      name: "LPR 2",
      backgroundColor: "background-red",
      cid: "246F28C7B580",
    },
    {
      id: 3,
      lat: 13.620511368190593,
      lng: 100.56160869226932,
      // air: airERDI,
      name:  nameDevice1.location || "",
      status: nameDevice1.status || "",
      backgroundColor: "background-red",
      cid: "C44F3360EEE5",
    },
    {
      id: 4,
      lat: 13.619280788688794,
      lng: 100.56237819846419,
      // air: airF1,
      name: nameDevice2.location || "",
      status: nameDevice2.status || "",
      backgroundColor: "background-green",
      cid: "C44F33610841",
    },
    {
      id: 5,
      lat: 13.620427712213445,
      lng: 100.56047703652828,
      // air: airF1,
      name: nameDevice3.location || "",
      status: nameDevice3.status || "",
      backgroundColor: "background-green",
      cid: "C44F33610841",
    },
    {
      id: 6,
      lat: 13.619212236676047,
      lng: 100.56054032824196,
      // air: airF1,
      name: nameDevice4.location || "",
      status: nameDevice4.status || "",
      backgroundColor: "background-green",
      cid: "C44F33610841",
    },
    {
      id: 7,
      lat: 13.617253294529627,
      lng: 100.55797636010277,
      // air: airF1,
      name: nameDevice5.location || "",
      status: nameDevice5.status || "",
      backgroundColor: "background-green",
      cid: "C44F33610841",
    },
  ];

  return (
    <div>
      <Card variant="outlined">
        <div style={{ width: "100%" }} className="sizeMap">
          <MapContainer
            center={defaultProps.center}
            zoom={defaultProps.zoom}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positionData.map((el) => {
              // let colorAir = "";
              // let backgroundColor = "";
              // if (el.air >= 26 && el.air <= 37) {
              //   colorAir = "green";
              //   backgroundColor = "background-green";
              // } else if (el.air >= 38 && el.air <= 50) {
              //   colorAir = "yellow";
              //   backgroundColor = "background-yellow";
              // } else if (el.air >= 51 && el.air <= 90) {
              //   colorAir = "orange";
              //   backgroundColor = "background-orange";
              // } else if (el.air >= 91) {
              //   colorAir = "red";
              //   backgroundColor = "background-red";
              // } else {
              //   colorAir = "blue";
              //   backgroundColor = "background-blue";
              // }

              return (
                <div key={el.id}>
                  {/* <CircleMarker
                    center={[el.lat, el.lng]}
                    pathOptions={{ color: colorAir }}
                    radius={5}

                    eventHandlers={{
                      click: async () => {
                        await handleClickOpen(el.cid, el.name);
                      },
                    }}
                  >
                    <Tooltip
                      direction={ el.id == 1 || el.id == 2 ? "bottom" : "top" }
                      offset={[0, 20]}
                      opacity={1}
                      className={el.backgroundColor}
                      permanent
                    >
                      {el.id}
                    </Tooltip>
                  </CircleMarker> */}
                  <CircleMarker
                    center={[el.lat, el.lng]}
                    // pathOptions={{ color: colorAir }}
                    radius={5}
                    // key={el.id}
                    // eventHandlers={{
                    //   click: async () => {
                    //     await handleClickOpen(el.cid, el.name);
                    //   },ๆ
                    // }}
                  >
                    <Tooltip
                      // direction="bottom"
                      direction={el.id == 1 || el.id == 2 ? "bottom" : "top"}
                      offset={[0, 20]}
                      opacity={1}
                      permanent
                    >
                      { el.id == 1 || el.id == 2 ? (
                        <div className={ el.id == 1 || el.id == 2 ? `gradient-border-info` : "" }>{el.name}</div>
                        
                      ) : (
                        <div className={el.status === 'online' ? "gradient-border" : "gradient-border-off"}>{el.name}</div>
                      )  }
                      
                      
                    </Tooltip>
                  </CircleMarker>
                </div>
              );
            })}
          </MapContainer>
        </div>
      </Card>
    </div>
  );
};

export default AppMaps;
