import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// Local imports
import {Company} from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesUrl = 'http://localhost:8000/companies';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Company[]> {
    return this.http.get<any>(this.companiesUrl);
  }

  get(id: string): Observable<Company> {
    return this.http.get<any>(this.companiesUrl + '/' + id);
  }

  create(company: Company) {
    return this.http.post<any>(this.companiesUrl, company);
  }

  update(id: string, company: Company): Observable<Company> {
    return this.http.put<any>(this.companiesUrl + '/' + id, company);
  }

  delete(id: string) {
    return this.http.delete<any>(this.companiesUrl + '/' + id);
  }
}
