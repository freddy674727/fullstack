import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


export class GenericService<T, K>{
    
    constructor(protected http: HttpClient, protected url: string){}

    post(t: T): Observable<T> {
        return this.http.post<T>(this.url, t);
    }
    
    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }
    
    getById(id: K): Observable<T> {
        return this.http.get<T>(this.url+ "/"+ id);
    }
    
    put(id: K, t: T): Observable<T> {
        return this.http.put<T>(this.url+ "/"+ id, t, {});
    }
   
    deleteById(id: K): Observable<T> {
        return this.http.delete<T>(this.url+ "/"+ id);
    }
}
