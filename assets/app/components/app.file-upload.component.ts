/**
 * Created by syed-muhammad-taha on 8/7/16.
 */

import { Component, OnInit } from '@angular/core';

import { UploadFile } from './../interfaces/uploadFile.interface';

@Component({
    selector: 'stp-file-upload',
    templateUrl: 'js/app/templates/app.file-upload.template.html'
})
export class StpFileUpload implements OnInit{

    public uploadFile: UploadFile;

    constructor(){

    }

    ngOnInit(){
        this.uploadFile = {
            title: '',
            dept: '',
            semester: '',
            subject: '',
            file: '',
            note: ''
        }
    }

    upload(form, valid: boolean){
        console.log(form.value, valid);
    }
}