import {IHttpPromise, IHttpService} from "angular";
import GeoCodeJSON from "../types/GeoCode/GeoCodeJSON";
import CoordGPS from "../types/CoordGPS";

export default class AdresseDataGouvFrService{
    public static readonly SERVICE_NAME:string = "adresseDataGouvFrService";
    public static readonly BASE_URL:string = "http://api-adresse.data.gouv.fr";

    //Injections
    private $http:IHttpService;
    public static $inject = ["$http"];
    constructor($http:IHttpService) {
        this.$http = $http;
    }

    search(adresse:string, postcode?:number, citycode?:number, autocomplete?:0|1, coordGPS?:CoordGPS, type?:string) : IHttpPromise<GeoCodeJSON>{
        return this.$http.get(AdresseDataGouvFrService.BASE_URL+'/search',{
            params : {
                q : adresse,
                lat : coordGPS ? coordGPS.lat : null,
                lon : coordGPS ? coordGPS.lon : null,
                autocomplete,
                postcode,
                citycode,
                type
            }
        }).then((response) => {
            return response.data;
        });
    }

    reverse(coordGPS:CoordGPS, type?:string) : IHttpPromise<GeoCodeJSON>{
        return this.$http.get(AdresseDataGouvFrService.BASE_URL+'/reverse', {
            params : {
                lat : coordGPS.lat,
                lon : coordGPS.lon,
                type
            }
        }).then((response) => {
            return response.data;
        });
    }

    searchCSV(adresse:string, postcode?:number, citycode?:number, autocomplete?:0|1, coordGPS?:CoordGPS, type?:string) : IHttpPromise<string>{
        return this.$http.post(AdresseDataGouvFrService.BASE_URL+'/search/csv',{
            q : adresse,
            lat : coordGPS ? coordGPS.lat : null,
            lon : coordGPS ? coordGPS.lon : null,
            autocomplete,
            postcode,
            citycode,
            type
        }).then((response) => {
            return response.data;
        });
    }

    reverseCSV(coordGPS:CoordGPS, type?:string) : IHttpPromise<string>{
        return this.$http.post(AdresseDataGouvFrService.BASE_URL+'/reverse/csv', {
            lat : coordGPS.lat,
            lon : coordGPS.lon,
            type
        }).then((response) => {
            return response.data;
        });
    }
}