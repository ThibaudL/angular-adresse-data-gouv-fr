import GeoCodeFeature from "./GeoCodeFeature";
interface GeoCodeJSON extends GeoCodeFeature{
    attribution?: string;
    licence?: string;
    query?: string;
    type?:" FeatureCollection" | "Feature";
    version?: string;
    features?: Array<GeoCodeFeature>
}

export default GeoCodeJSON;