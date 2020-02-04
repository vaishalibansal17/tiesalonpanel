import { environment } from '../../../environments/environment';

export const BASE_URL = environment.END_POINT;

export const APIURLS = {
    LOGIN: BASE_URL + 'salon/login',
    RESET: BASE_URL + 'salon/reset/pass',
    FORGOT: BASE_URL + 'salon/forgot/pass',
    CHANGEPASS: BASE_URL + 'salon/change/pass',
    PROFILE: BASE_URL + 'salon/detail',
    EDIT : BASE_URL + 'salon',
    WRKNGHRS : BASE_URL + 'salon/working/hour',
    FREELNCERESET : BASE_URL + 'freelance/reset/pass',
    STAFF : BASE_URL + 'staff',
    STAFF_REVIEW : BASE_URL + 'staff/user/review',
    STAFF_DETAIL : BASE_URL + 'staff/detail',
    SERVICES: BASE_URL + 'service'

};
