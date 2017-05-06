interface GeoCodeGeometry {
    type:"Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection";
    coordinates: Array<number> | Array<Array<number>>
}

export default GeoCodeGeometry;