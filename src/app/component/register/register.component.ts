import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { CompanyModalComponent } from './../company-modal/company-modal.component';
import { Company } from './../../model/company';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  companies: Company[];
  selectedCompany: Company[];
  showImage = false;

  constructor(private companyService: CompanyService, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  openCreateModal() {
    const ref = this.openModal(new Company(), 'Add company');
    ref.onClose.subscribe((company: Company) => {
      if (company) {
        this.companyService.create(company).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Company created'});
        });
      }
    });
  }

  openModal(company: Company, header: string): DynamicDialogRef{
    return this.dialogService.open(CompanyModalComponent, {
      data: {company},
      header,
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      baseZIndex: 10000
    });
  }

}
