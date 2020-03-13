import { environment } from '../../../environments/environment';

export const BASE_URL = environment.END_POINT;

export const APIURLS = {
    LOGIN: BASE_URL + 'salon/login',
    RESET: BASE_URL + 'salon/reset/pass',
    FORGOT: BASE_URL + 'salon/forgot/pass',
    CHANGEPASS: BASE_URL + 'salon/change/pass',
    PROFILE: BASE_URL + 'salon/detail',
    EDIT: BASE_URL + 'salon',
    WRKNGHRS: BASE_URL + 'salon/working/hour',
    FREELNCERESET: BASE_URL + 'freelance/reset/pass',
    STAFF: BASE_URL + 'staff',
    STAFF_REVIEW: BASE_URL + 'staff/user/review',
    STAFF_DETAIL: BASE_URL + 'staff/detail',
    SERVICES: BASE_URL + 'service',
    WALKING: BASE_URL + 'walking',
    WLK_DETAIL: BASE_URL + 'walking/booking',
    WALKING_CHK: BASE_URL + 'walking/check',
    WALKING_ADD: BASE_URL + 'walking/user',
    WALKING_BOOK: BASE_URL + 'walking/booking',
    PROMO: BASE_URL + 'promocode',
    PROMO_DETAIL: BASE_URL + 'promocode/detail',
    BOOKING: BASE_URL + 'salon/booking/list',
    BOOKING_VIEW: BASE_URL + 'booking/salon',
    FEEDBCK: BASE_URL + 'feedback',
    CANCELPOLICY: BASE_URL + 'salon/policy',
    HELP_CENTER: BASE_URL + 'compPortfolio',

    SLOT: BASE_URL + 'salon/slot/duration',
    DASHBOARD: BASE_URL + 'salon/dashboard',

    BOOKING_ACPT: BASE_URL + 'booking/accept/reject',
    BOOKING_SLOT: BASE_URL + 'booking/slot',
    SND_MAIL: BASE_URL + 'booking/send/invoice',

    NOTI_LIST: BASE_URL + 'notification/salon/list',
    NOTI_READ: BASE_URL + 'notification/salon/read',

    WLKBOOKING_ACPT: BASE_URL + 'walking/accept/reject',




};
