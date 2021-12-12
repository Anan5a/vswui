import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Upload} from "tus-js-client";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

// upload url
  baseApiUrl = `${environment.backend}/upload`
  private uploadProgress: number | undefined;
  private changeDetectionRef: any;

  constructor(private http: HttpClient) {
  }

// Returns an observable
  private cat_id?: string;

  upload(video: any, thumb: any, cat: any, title: any, desc: any): Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    //@ts-ignore
    formData.append("video", video);
    formData.append("thumb", thumb);
    formData.append("cat", cat);
    formData.append("title", title);
    formData.append("desc", desc);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }
}
