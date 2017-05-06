import GeoCodeProperties from "./GeoCodeProperties";
import GeoCodeGeometry from "./GeoCodeGeometry";

interface GeoCodeFeature {
    properties?:GeoCodeProperties;
    geometry?:GeoCodeGeometry;
    type?:" FeatureCollection" | "Feature";
}

export default GeoCodeFeature;