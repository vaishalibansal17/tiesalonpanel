import { Injectable } from '@angular/core';
import { MESSAGE } from '../constants/constant';
import { Helper } from './helper.service';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  url: string | ArrayBuffer;
  fileObject: any;

  constructor(private helper: Helper, private httpService: HttpRequestService) { }

  readUrl(event: any) {
    var response = [];
    if (event.target.files && event.target.files[0]) {
      if (this.helper.isImage(event.target.files[0].type)) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
        }
        setTimeout(()=>{
          reader.readAsDataURL(event.target.files[0]);
          this.fileObject = event.target.files[0];
          return [this.url, this.fileObject]
        },3000)
       
        
        
      } else {
        // this.httpService.showError(MESSAGE.IMG_MSG, MESSAGE.IMG_ERROR, MESSAGE.MSGTIME);
      }
     
    }
  }
}
