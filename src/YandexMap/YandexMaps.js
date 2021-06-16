import React from 'react';
import {YMaps,Map, Placemark,GeoObject} from 'react-yandex-maps'

const YandexMaps = () => {
    return (
        <YMaps>
             <div>
                 {/* <Map 
                 defaultState={{
                     center:[40.103086, 65.373961],
                     zoom:4,
                 }}>
<Placemark geometry={[40.103086, 65.373961]}/>
                 </Map> */}
                <Map
    defaultState={{
      center: [40.103086, 65.373961],
      zoom: 6,
    }}
  >
    <GeoObject
      geometry={{
        type: 'LineString',
        coordinates: [
          [40.103086, 65.373961],
          [41.311158, 69.279737],
        ],
       
      }}
      options={{
        geodesic: true,
        strokeWidth: 5,
        strokeColor: '#F008',
      }}
    />
  </Map>
             </div>
        </YMaps>
    );
};


export default YandexMaps;