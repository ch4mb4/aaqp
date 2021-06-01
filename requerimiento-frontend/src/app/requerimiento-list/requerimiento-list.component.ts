import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Requerimiento } from '../requerimiento';
import { RequerimientoService } from '../requerimiento.service';

@Component({
  selector: 'app-requerimiento-list',
  templateUrl: './requerimiento-list.component.html',
  styleUrls: ['./requerimiento-list.component.css']
})
export class RequerimientoListComponent implements OnInit {

  constructor(private requerimientoService:RequerimientoService) { }

  requerimientosArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  requerimientos: Observable<Requerimiento[]>;
  requerimientoSingle: Requerimiento;
  requerimiento : Requerimiento=new Requerimiento();
  deleteMessage=false;
  requerimientolist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.requerimientoService.list().subscribe(data =>{
    this.requerimientos =data;
    this.dtTrigger.next();
    })
  }
  
  deleteRequerimiento(id: number) {
    this.requerimientoService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.requerimientoService.list().subscribe(data =>{
            this.requerimientos =data
            })
        },
        error => console.log(error));
  }


  getRequerimiento(id: number){
    this.requerimientoService.get(id)
      .subscribe(
        data => {
          this.requerimientoSingle=data     
          console.log(this.requerimientoSingle);      
        },
        error => console.log(error));
  }

  updateFormGroup=new FormGroup({
    id:new FormControl(),
    nombre:new FormControl(),
    apellidos:new FormControl(),
    area:new FormControl()
  });

  updateRequerimiento(any){
    this.requerimiento=new Requerimiento(); 
   this.requerimiento.id=this.Id.value;
   this.requerimiento.nombre=this.Nombre.value;
   this.requerimiento.apellidos=this.Apellidos.value;
   this.requerimiento.area=this.Area.value;
   console.log(this.Area.value);
   

   this.requerimientoService.update(this.requerimiento.id,this.requerimiento).subscribe(
    data => {     
      this.isupdated=true;
      this.requerimientoService.list().subscribe(data =>{
        this.requerimientos =data
        })
    },
    error => console.log(error));
  }

  get Nombre(){
    return this.updateFormGroup.get('nombre');
  }

  get Apellidos(){
    return this.updateFormGroup.get('apellidos');
  }

  get Area(){
    return this.updateFormGroup.get('area');
  }

  get Id(){
    return this.updateFormGroup.get('id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
