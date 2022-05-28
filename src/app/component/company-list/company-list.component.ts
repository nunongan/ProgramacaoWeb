import { CompanyModalComponent } from './../company-modal/company-modal.component';
import { Company } from './../../model/company';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  selectedCompany: Company[];
  showImage = false;

  constructor(private companyService: CompanyService, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
  }

  ngOnInit() {
    this.companyService.getAll().subscribe(data => this.companies = data);
    this.primengConfig.ripple = true;
  }

  toggleImage(): void {
    this.showImage != this.showImage;
  }

  deleteCompany(company: Company) {
    this.companyService.delete(company.id).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Company deleted'});
    });
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

  openEditModal(selectedCompany: Company) {
    const ref = this.openModal(selectedCompany, 'Edit company');
    ref.onClose.subscribe((company: Company) => {
      if (company) {
        this.companyService.update(company.id, company).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Company updated'});
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
