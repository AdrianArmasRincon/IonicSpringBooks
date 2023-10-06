import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Encoder
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  }),
};

//Encoder Put
const httpOptionsPut = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  endpoint = 'http://localhost:8080/books';

  constructor(private httpClient: HttpClient) { }

  //Get books
  getBooks() {
    return this.httpClient.get(this.endpoint);
  }

  //Post book
  addBooks(task: any) {
    let body = new URLSearchParams();
    body.append("title", task.book);
    body.append("author", task.author);

    return this.httpClient.post(this.endpoint, body, httpOptions);
  }

  // Delete a book by ID
  deleteBooks(id: string) {
    console.log("Deleting book with ID:", id);
    return this.httpClient.delete(this.endpoint + `/${id}`, httpOptions);
  }

  //Put
  updateBooks(id: string, task: any) {
    //const putEndpoint = this.endpoint+`/${id}`;

    let body = new URLSearchParams();
    //bodyEncoded.append("id", bookId);
    body.append("title", task.title);
    body.append("author", task.author);

    return this.httpClient.put(this.endpoint + `/${id}`, body, httpOptions);
  }
}
