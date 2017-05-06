import * as angular from 'angular';
import AdresseDataGouvFrService from "./adresseDataGouvFr/service/AdresseDataGouvFrService";

let MODULE_NAME = 'angular.adresse.data.gouv.fr';
export default angular.module(MODULE_NAME,[])
    .service(AdresseDataGouvFrService.SERVICE_NAME, AdresseDataGouvFrService)
;
export {MODULE_NAME};