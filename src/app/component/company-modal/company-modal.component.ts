// Angular imports
import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// PrimeNG imports
import {PrimeNGConfig} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import {Company} from '../../model/company';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.css']
})
export class CompanyModalComponent {
  @Input() showDialog: boolean;
  @Input() header: string;
  company: Company;
  companyForm: FormGroup;

  constructor(private primengConfig: PrimeNGConfig, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.company = this.config.data.company;
    this.companyForm = new FormGroup({
      id: new FormControl({value: this.company.id, disabled: this.company.id != null}, [Validators.required]),
      name: new FormControl(this.company.name, [Validators.required]),
      email: new FormControl(this.company.email, [Validators.required]),
      address: new FormControl(this.company.address, [Validators.required]),
      phoneNr: new FormControl(this.company.phoneNr, [Validators.required]),
    });
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    this.formValuesToCompany();
    this.ref.close(this.company);
  }

  hideDialog() {
    this.ref.close(null);
  }

  formValuesToCompany() {
    this.company = this.companyForm.getRawValue();
  }


}
