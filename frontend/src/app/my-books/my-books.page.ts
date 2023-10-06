import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {

  booksList: any = [];
  authorUpdate: string = "";
  titleUpdate: string = "";
  title: string = "";
  author: string = "";

  public alertButtons = ['OK'];

  constructor(private bookService: BookService, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.getAllBooks();
  }

  //Get books from db
  getAllBooks() {
    this.bookService.getBooks().subscribe(response => {
      this.booksList = response;
    });
  }

  // Delete book
  deleteBook(id: string) {
    console.log("delete book: " + id);
    //this.bookService.deleteBooks(id);
    this.bookService.deleteBooks(id).subscribe(response => {
      this.booksList = response;
      this.getAllBooks();//listaResult update
    })
  }

  //Update
  updateBook(id: string, title: string, author: string) {
    console.log("update book with id: " + id);
    if (this.titleUpdate && this.authorUpdate) {
      this.title = this.titleUpdate;
      this.author = this.authorUpdate;
    } else {
      if (this.titleUpdate) {
        this.title = this.titleUpdate;
      } else
        if (this.authorUpdate) {
          this.author = this.authorUpdate;
        }
    }
    let booksList = {
      title: this.title,
      author: this.author,
    }
    this.bookService.updateBooks(id, booksList).subscribe(response => {
      this.booksList = response;
      this.getAllBooks();//listaResult update
    });
  }
}
