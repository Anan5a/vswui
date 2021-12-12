import {Component, OnInit} from '@angular/core';
import {FileUploadService} from "../file-upload.service";
import {Category} from "../../interface/category";
import {CategoryListService} from "../../category-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  loading: boolean = false; // Flag variable
  file: null = null; // Variable to store file
  categoryList?: Category[]
  selectedFiles: any = []
  thumbFile: any = [];
  upload_str: any = 'Upload';

  uploadGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    desc: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    fileSourceThumb: new FormControl('', [Validators.required]),
    main_file: new FormControl('', [Validators.required]),
    thumb: new FormControl('', [Validators.required]),
    cat: new FormControl('', [Validators.required]),
  });

  // Inject service
  constructor(private fileUploadService: FileUploadService, private category: CategoryListService, private router:Router) {
  }

  ngOnInit(): void {
    this.category.getList().subscribe((res) => this.categoryList = res)
  }

  // On file Select

  onChange(event: any) {


  }


  onUpload() {
    this.upload_str = 'Uploading...'
    //@ts-ignore
    const fval = this.uploadGroup.value
    this.fileUploadService.upload(this.uploadGroup.get('fileSource')?.value, this.uploadGroup.get('fileSourceThumb')?.value, fval.cat, fval.title, fval.desc).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.upload_str = 'Finished!'
          this.router.navigate(['/user/dashboard'])
        }
      }
    );
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files[0];
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadGroup.patchValue({
        fileSource: file
      });
    }
  }

  selectThumbFile(event: any) {
    this.thumbFile = event.target.files[0];
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadGroup.patchValue({
        fileSourceThumb: file
      });

    }
  }
}
