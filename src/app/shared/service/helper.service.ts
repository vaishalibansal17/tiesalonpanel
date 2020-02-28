import { Injectable } from '@angular/core';
import moment from 'moment-timezone';
import { MessageService } from 'primeng/api';

@Injectable()

export class Helper {
    constructor(private messageService: MessageService) { }

    convertTimestampToISODate(value) {
        let year = new Date(value).getFullYear();
        let month = ((new Date(value).getMonth() + 1) < 10) ? '0' + (new Date(value).getMonth() + 1) : (new Date(value).getMonth() + 1);
        let day = (new Date(value).getDate() < 10) ? '0' + new Date(value).getDate() : new Date(value).getDate();

        return year + '-' + month + '-' + day;
    }

    isLoggednIn() {
        return localStorage.getItem("access_token");
    }

    isImage(fileType: string) {
        var fileExtention = ['image/jpeg', 'image/bmp', 'image/jpg', 'image/png'];
        return fileExtention.includes(fileType);
    }

    parseObject(data: any) {
        return JSON.parse(data);
    }

    checkDateFormat(value) {
        var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    parseDate(data, time?: any) {
        var date = new Date(data),
            mnth = ("0" + (date.getMonth())).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        let bac = moment.utc(date);
        console.log(bac,'---------');
        
        return bac.valueOf();
    }

    utcDate(data?: any, time?: any, isUTC = true) {
        var date = new Date(data),
            mnth = ("0" + (date.getMonth())).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        var dateTime = new Date(time)

        var timeStamp = new Date(Number(date.getFullYear()), Number(mnth), Number(day), 5,30,0);
        let bac = moment.utc(timeStamp)
          if (isUTC)
            return bac.valueOf();
        else
            return timeStamp.getTime();
    }

    parsehhmm(data) {
        if(data!==null){
            var date = new Date(data)
            return {hh:date.getHours(), mm:date.getMinutes()}
        } else{
            return {hh:null, mm:null};
        }
    }

    getTimeZone(dateTime, timeZone?) {
        var testDateUtc = moment.tz(dateTime, timeZone).format('DD-MM-YYYY H:mm:s');
        return new Date(new Date(dateTime).toLocaleString("en-US", { timeZone: timeZone }));
    }

    errTostr(title, msg) {
        this.messageService.add({ severity: 'error', summary: title, detail: msg });
        // this.toastr.error(msg, title,
        //     {
        //         timeOut: 5000,
        //         closeButton: true,
        //         progressBar: true,
        //         progressAnimation: 'decreasing',
        //         positionClass: 'toast-bottom-left'
        //     });
    }
    sucsTostr(title, msg) {
        this.messageService.clear();
        this.messageService.add({ severity: 'success', summary: title, detail: msg, sticky: true });

        // this.toastr.success(msg, title,
        //     {
        //         timeOut: 5000,
        //         closeButton: true,
        //         progressBar: true,
        //         progressAnimation: 'decreasing',
        //         positionClass: 'toast-bottom-left'
        //     });
    }

    checkImageValidationMultiple(event) {

        let files = event.target.files;
        if (files) {
            for (let file of files) {
                if (files && files[0]) {
                    if (files[0].size > 5000000) {
                        this.errTostr('', 'error');
                        return false
                    } else if (this.isImage(files[0].type)) {
                        return true;
                    } else {
                        this.errTostr('', 'image error');
                        return false
                    }
                }
            }
        }


    }
}