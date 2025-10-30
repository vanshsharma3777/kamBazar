export function filterWork({ allWork, workerLat, workerLng }: any) {
  const filteredWork = allWork.filter((w: any) => {
    const distance = getdistancesFromLatLonInKm(
      workerLat,
      workerLng,
      w.lat,
      w.lng
    );
    if (distance < 10) {
      return w;
    }
  });
  return filteredWork;
}

function getdistancesFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distances = R * c;
  console.log("distances bt work and worker : ", distances);
  return distances;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}
