import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, Polyline, lineSymbol} from 'google-maps-react';
import ReactEcharts from 'echarts-for-react';

import { makeData } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {

  constructor() {
    super()

    this.state = {
      data: makeData()
    }
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
          console.log(cellInfo.index + cellInfo.column.id);
          localStorage.setItem(cellInfo.index + cellInfo.column.id,data[cellInfo.index][cellInfo.column.id]);
         
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }


  render() {
    const { data } = this.state;
    const style = {
      width: '60%',
      height: '60%'
    }
    const polyCoords = [
      {lng: 72.773, lat : 19.222},{lng: 72.772, lat : 19.226},{lng: 72.776, lat : 19.231},{lng: 72.775, lat : 19.238},{lng: 72.779, lat : 19.249},{lng: 72.778, lat : 19.262},{lng: 72.78, lat : 19.263},{lng: 72.781, lat : 19.268},{lng: 72.785, lat : 19.269},{lng: 72.791, lat : 19.266},{lng: 72.802, lat : 19.266},{lng: 72.815, lat : 19.253},{lng: 72.82, lat : 19.25},{lng: 72.826, lat : 19.249},{lng: 72.827, lat : 19.251},{lng: 72.833, lat : 19.253},{lng: 72.833, lat : 19.265},{lng: 72.838, lat : 19.271},{lng: 72.845, lat : 19.271},{lng: 72.849, lat : 19.274},{lng: 72.858, lat : 19.274},{lng: 72.86, lat : 19.272},{lng: 72.869, lat : 19.27},{lng: 72.87, lat : 19.266},{lng: 72.88, lat : 19.263},{lng: 72.882, lat : 19.259},{lng: 72.89, lat : 19.254},{lng: 72.902, lat : 19.251},{lng: 72.905, lat : 19.243},{lng: 72.913, lat : 19.23472},{lng: 72.914, lat : 19.219},{lng: 72.921, lat : 19.221},{lng: 72.925, lat : 19.22},{lng: 72.93, lat : 19.215},{lng: 72.933, lat : 19.215},{lng: 72.94, lat : 19.205},{lng: 72.939, lat : 19.195},{lng: 72.943, lat : 19.192},{lng: 72.948, lat : 19.192},{lng: 72.953, lat : 19.189},{lng: 72.957, lat : 19.189},{lng: 72.962, lat : 19.183},{lng: 72.975, lat : 19.182},{lng: 72.984, lat : 19.17},{lng: 72.979, lat : 19.15},{lng: 72.972, lat : 19.139},{lng: 72.964, lat : 19.132},{lng: 72.965, lat : 19.125},{lng: 72.959, lat : 19.117},{lng: 72.957, lat : 19.111},{lng: 72.954, lat : 19.107},{lng: 72.951, lat : 19.107},{lng: 72.953, lat : 19.085},{lng: 72.957, lat : 19.078},{lng: 72.958, lat : 19.07},{lng: 72.965, lat : 19.059},{lng: 72.963, lat : 19.044},{lng: 72.959, lat : 19.039},{lng: 72.959, lat : 19.036},{lng: 72.956, lat : 19.033},{lng: 72.955, lat : 19.029},{lng: 72.944, lat : 19.022},{lng: 72.936, lat : 19.021},{lng: 72.921, lat : 19},{lng: 72.912, lat : 18.992},{lng: 72.908, lat : 18.992},{lng: 72.905, lat : 18.99},{lng: 72.893, lat : 18.991},{lng: 72.89, lat : 18.988},{lng: 72.886, lat : 18.988},{lng: 72.883, lat : 18.991},{lng: 72.882, lat : 19.006},{lng: 72.879, lat : 19.008},{lng: 72.866, lat : 19.001},{lng: 72.865, lat : 18.999},{lng: 72.866, lat : 18.993},{lng: 72.862, lat : 18.99},{lng: 72.865, lat : 18.98},{lng: 72.86, lat : 18.975},{lng: 72.856, lat : 18.966},{lng: 72.853, lat : 18.963},{lng: 72.855, lat : 18.957},{lng: 72.85, lat : 18.951},{lng: 72.851, lat : 18.947},{lng: 72.847, lat : 18.934},{lng: 72.849, lat : 18.925},{lng: 72.843, lat : 18.917},{lng: 72.84, lat : 18.916},{lng: 72.837, lat : 18.917},{lng: 72.826, lat : 18.903},{lng: 72.822, lat : 18.904},{lng: 72.823, lat : 18.901},{lng: 72.821, lat : 18.898},{lng: 72.818, lat : 18.896},{lng: 72.816, lat : 18.892},{lng: 72.812, lat : 18.89},{lng: 72.806, lat : 18.891},{lng: 72.802, lat : 18.895},{lng: 72.8, lat : 18.899},{lng: 72.8, lat : 18.91},{lng: 72.804, lat : 18.917},{lng: 72.818, lat : 18.931},{lng: 72.82, lat : 18.935},{lng: 72.82, lat : 18.941},{lng: 72.817, lat : 18.946},{lng: 72.81, lat : 18.951},{lng: 72.799, lat : 18.942},{lng: 72.797, lat : 18.936},{lng: 72.792, lat : 18.935},{lng: 72.789, lat : 18.937},{lng: 72.788, lat : 18.94},{lng: 72.789, lat : 18.941},{lng: 72.788, lat : 18.951},{lng: 72.796, lat : 18.964},{lng: 72.798, lat : 18.975},{lng: 72.804, lat : 18.983},{lng: 72.808, lat : 18.992},{lng: 72.807, lat : 19.002},{lng: 72.811, lat : 19.009},{lng: 72.811, lat : 19.012},{lng: 72.81, lat : 19.026},{lng: 72.811, lat : 19.029},{lng: 72.813, lat : 19.031},{lng: 72.818, lat : 19.03},{lng: 72.823, lat : 19.025},{lng: 72.824, lat : 19.022},{lng: 72.831, lat : 19.028},{lng: 72.834, lat : 19.034},{lng: 72.834, lat : 19.04},{lng: 72.833, lat : 19.043},{lng: 72.822, lat : 19.036},{lng: 72.817, lat : 19.037},{lng: 72.813, lat : 19.042},{lng: 72.813, lat : 19.045},{lng: 72.818, lat : 19.053},{lng: 72.817, lat : 19.062},{lng: 72.819, lat : 19.065},{lng: 72.817, lat : 19.077},{lng: 72.819, lat : 19.08},{lng: 72.819, lat : 19.085},{lng: 72.823, lat : 19.091},{lng: 72.818, lat : 19.113},{lng: 72.815, lat : 19.12},{lng: 72.805, lat : 19.134},{lng: 72.799, lat : 19.131},{lng: 72.799, lat : 19.129},{lng: 72.79, lat : 19.126},{lng: 72.786, lat : 19.126},{lng: 72.783, lat : 19.129},{lng: 72.782, lat : 19.128},{lng: 72.777, lat : 19.131},{lng: 72.776, lat : 19.134},{lng: 72.777, lat : 19.137},{lng: 72.779, lat : 19.139},{lng: 72.784, lat : 19.139},{lng: 72.785, lat : 19.146},{lng: 72.785, lat : 19.149},{lng: 72.778, lat : 19.156},{lng: 72.779, lat : 19.161},{lng: 72.777, lat : 19.163},{lng: 72.777, lat : 19.166},{lng: 72.78, lat : 19.171},{lng: 72.785, lat : 19.171},{lng: 72.791, lat : 19.176},{lng: 72.792, lat : 19.189},{lng: 72.787, lat : 19.19},{lng: 72.783, lat : 19.189},{lng: 72.778, lat : 19.192},{lng: 72.779, lat : 19.203},{lng: 72.776, lat : 19.205},{lng: 72.776, lat : 19.211},{lng: 72.778, lat : 19.214},{lng: 72.773, lat : 19.22},{lng: 72.773, lat : 19.222},
    ];

    const lineCoords = [
      {lat:19.0759837,
        lng:72.8776559
      },
      {lng: 77.5946, lat: 12.9716}
    ];

    let EventDict = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged
  }
 const option = {
  title: {
     text: ' Temperature data (time series) chart ',
     subtext: ' using echarts-for-react'
 },
 tooltip: {
     trigger: 'axis',
     axisPointer: {
         type: 'cross'
     }
 },
 toolbox: {
     show: true,
     feature: {
         saveAsImage: {}
     }
 },
 xAxis: {
     type: 'category',
     data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
 yAxis: {
     type: 'value',
      axisLabel: {
         formatter: '{value} °C',
         
     },
      axisPointer: {
         snap: true
     }
 },
 series: [{
  data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
  type: 'line',
     smooth: true
 }]
};


    
    return (
      <div className="App">
        <header className="App-header">
         <h1> React App</h1>
        </header>

        <ReactEcharts className='chart'
  option={option}
  notMerge={true}
  lazyUpdate={true}
  theme={"theme_name"}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventDict} />

<ReactTable
          data={data}
          columns={[
            {
              Header: "Device ID",
              accessor: "deviceId",
              Cell: this.renderEditable
            },
            {
              Header: "Temperature",
              accessor: "temperature",
              Cell: this.renderEditable
            },
            {
              Header: "Battery",
              accessor: "battery",
              Cell: this.renderEditable
            },
            {
              Header: "Last Connected Time",
              accessor: "Last_Connected_Time",
              Cell: this.renderEditable
            },
            {
              Header: "Sim No.",
              accessor: "Sim_No",
              Cell: this.renderEditable
            },
            {
              Header: "IMEI",
              accessor: "IMEI",
              Cell: this.renderEditable
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
  <br/>
      <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat:19.0759837,
            lng:72.8776559
          }}
          zoom={10}
          onClick={this.onMapClicked}
        >
        <Polyline
                path={lineCoords}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "20px"
                        }
                    ]
                }}
            />
          
        <Polygon
          paths={polyCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>"Mumbai"</h1>
     </div>
 </InfoWindow>
</Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBS_63NWpdA_OXoPg5J_0bO8R3S4nuYj84")
})(App)
