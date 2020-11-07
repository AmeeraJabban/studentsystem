import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class StudentServiceService {
  private apiServer = 'http://localhost:3000/API/patient';
  constructor(private http: HttpClient) { }
 
  getstudents():Observable<any>{
    return this.http.get(this.apiServer);
  }
  getstudent(id: number):Observable<any>{
    return this.http.get(`${this.apiServer}/ID/${id}`);
  }
  Add(Student):Observable<any>{
    return this.http.post(`${this.apiServer}/add`,Student);
  }
  update(Student):Observable<any>{
    return this.http.put(`${this.apiServer}/Edit`,Student);
  }
  Delete(id:number):Observable<any>{
    return this.http.delete(`${this.apiServer}/Delete/ID/${id}`);
  }
}
