import GeoLocationFetcher from "@/lib/coordinates"
import { distance } from "framer-motion";
import { NextResponse } from "next/server"


export async function POST(req: Request) {

    try {
        const address = await req.json()
        const { userAddress, workerAddress } = address;
        if (!address) {
            console.warn("⚠️ Could not find valid coordinates for one or both addresses");
            return NextResponse.json({
                error: "Address not found for finding distances",
                valid: false,
                distance : null 
            }, { status: 400 })
        }
        console.log(userAddress)
        console.log(workerAddress)
        const userCoordinates = await GeoLocationFetcher(userAddress)
        const workerCoordinates = await GeoLocationFetcher(workerAddress)
        if (userCoordinates && workerCoordinates) {
            const { lat: lat1, lng: lng1 } = userCoordinates;
            const { lat: lat2, lng: lng2 } = workerCoordinates;
            console.log("User :", userCoordinates);
            console.log("worker :", workerCoordinates);

            function getdistancesFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
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
                console.log("distances bt usr and worker : ", distances)
                return distances
            }

            // helper function
            function deg2rad(deg: number): number {
                return deg * (Math.PI / 180);
            }
            const distance = getdistancesFromLatLonInKm(lat1, lng1, lat2, lng2)

            return NextResponse.json({
                msg: "Successfully found distances bt worker and user",
                valid: true,
                distances:distance
            })
        }
        else {
            console.log("Coordinates of user or worker did not fetched properly")
            return NextResponse.json({
                msg: "distances bt worker and user not found",
                valid: false,
                userCoordinates,
                workerCoordinates ,
                distance:null
            },{status:404})
        }
    }catch(err){
        return NextResponse.json({
            error:"Internal error in fetching the distances bt user and worker",
            valid:false,
            distance:null
        },{status:500})
    }

}