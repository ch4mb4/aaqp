import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Requerimiento } from '../requerimiento';
import { RequerimientoService } from '../requerimiento.service';

@Component({
  selector: 'app-add-requerimiento',
  templateUrl: './add-requerimiento.component.html',
  styleUrls: ['./add-requerimiento.component.css']
})
export class AddRequerimientoComponent implements OnInit {

  constructor(private requerimientoService:RequerimientoService) { }

  formData:FormData = new FormData();
  readytoupload:boolean=false;

  requerimiento : Requerimiento=new Requerimiento();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  saveFormGroup=new FormGroup({
    nombre:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    apellidos:new FormControl('',[Validators.required,Validators.minLength(5)]),
    area:new FormControl()
  });

  saveRequerimiento(saveRequerimiento){
    this.requerimiento=new Requerimiento();   
    this.requerimiento.nombre=this.Nombre.value;
    this.requerimiento.apellidos=this.Apellidos.value;
    this.requerimiento.area=this.Area.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.requerimientoService.insert(this.requerimiento)
      .subscribe(data => console.log(data), error => console.log(error));
    this.requerimiento = new Requerimiento();
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {    
        let file: File = fileList[0];    
        this.formData.append('file', file);
        this.readytoupload =true;
    }
  }
  // uploadFile(){
  //      if(this.readytoupload){
  //       this.featureservice.uploadFIle(this.formData).subscribe(data => {
  //         const a = data.json();
  //         this.goToProcess(a.process_id)
  //       });
  //      }
  // }

  get Nombre(){
    return this.saveFormGroup.get('nombre');
  }

  get Apellidos(){
    return this.saveFormGroup.get('apellidos');
  }

  get Area(){
    return this.saveFormGroup.get('area');
  }

  get Id(){
    return this.saveFormGroup.get('id');
  }

  addRequerimientoForm(){
    this.submitted=false;
    this.saveFormGroup.reset();
  }
}
