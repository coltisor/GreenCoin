export const getDistance = (meters: number) => {
  if (meters < 999) {
    return meters.toFixed(0).toString() + "m";
  } else {
    return (meters / 1000).toFixed(2).toString() + "km";
  }
}

export const calculateDistanceFromCoords = (
  coords?: [{ longitude: number, latitude: number  }]
) => {
  if (!coords) {
    return 0;
  }
  let totDist = 0;
  let prev = coords[0];
  for (let i = 1; i < coords.length; i++) {
    const current = coords[i];

    const dist = calcCrow(prev.latitude, prev.longitude, current.latitude, current.longitude);
    totDist += dist;
    prev = current;
  }
  
  return totDist;
}

function calcCrow(lat1:number, lon1:number, lat2:number, lon2:number) {
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return Math.ceil(d*1000);
}

// Converts numeric degrees to radians
function toRad(Value:number) {
    return Value * Math.PI / 180;
}