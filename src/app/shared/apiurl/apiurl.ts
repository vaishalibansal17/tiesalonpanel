import { environment } from '../../../environments/environment';

export const BASE_URL = environment.END_POINT;
console.log(environment.END_POINT);

export const APIURLS = {
    ORGANISER_EVENT_LIST: BASE_URL + 'organiser/eventList',
};
