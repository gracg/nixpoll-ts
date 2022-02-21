import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Poll } from '../models/Poll';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NixPollHelperService {
  private baseUrl :string = environment.nixPollDomain;

  constructor(private http: HttpClient) { }

  public NewPoll(poll :Poll) :Observable<Poll> {
    let url :string = `${this.baseUrl}/api/polls`;
    return this.http.post<Poll>(url,poll);
  }

  public getPoll(pollId :number) :Observable<Poll> {
    let url :string = `${this.baseUrl}/api/polls/${pollId}`;
    return this.http.get<Poll>(url);
  }

  
  public getPolls() :Observable<Poll[]> {
    let url :string = `${this.baseUrl}/api/polls/`;
    return this.http.get<Poll[]>(url);
  }

  public voteForOption(optionId: number) :void {
    let url :string = `${this.baseUrl}/api/options/increment/${optionId}`;
    let observableObj :Observable<any> = this.http.get<any>(url); 
    observableObj.subscribe();
  }
}
