import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  configGroup : FormGroup;

  constructor(public navCtrl: NavController, 
    private formBuilder: FormBuilder, private alertCtrl: AlertController) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.configGroup = this.formBuilder.group({
        confRadio: ['01', Validators.required],
    });
  }

  dateSelected(e){
    console.log(e);
  }

  Submit(){
    this.showAlert(
      'Form Submition',
      'The form has been submited'
    );
  }

  showAlert(title,descr) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: descr,
      buttons: ['OK']
    });
    alert.present();
  }

}
