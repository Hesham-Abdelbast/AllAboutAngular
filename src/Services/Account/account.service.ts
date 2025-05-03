import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Account } from '../../Model/Account';
import { BaseServiceService } from '../base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly apiUrl = 'https://run.mocky.io/v3/3159cc18-b4a6-4d57-942c-50dcb58d174a';

  constructor(private baseServices: BaseServiceService) { }

  public getAll(): Observable<Account[]> {
    return this.baseServices.GetRequest<Account[]>(this.apiUrl)
  }
  
}
