import { NextResponse } from "next/server";


const GeoLocationFetcher = async (address: string): Promise<{ lat: number; lng: number } | null> => {
    let coordinates = null;
    const apiKey = process.env.MAP_API_KEY

    if (!address.trim()) {
        console.log("Empty address");
        return null;
    }
    try {
        const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {

            const { lat, lng } = data.results[0].geometry;
            return {
                lat,
                lng
            };
        }else{
            console.warn("No results found for address:", address);
            return null;
        }
            
        
    }
    catch (err: any) {
        console.error(err)
        return null;
    }
}


export default GeoLocationFetcher;
