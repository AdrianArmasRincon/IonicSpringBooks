package com.adrian.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adrian.books.entity.model.Book;
import com.adrian.books.services.IBookService;

@RestController
@CrossOrigin(origins = "*")
public class BookController {
	
	@Autowired
	IBookService bookService;
	
	//getId
	@GetMapping("/books/{id}")
	public Book getOne(@PathVariable(value = "id")long id){
		return bookService.get(id);
	}
	
	//getBooks
	@GetMapping("/books")
	public List<Book> getAllBook(){		
		return bookService.getAll();
	}
	
	//addBook
	@PostMapping("/books")
	public void post(Book book) {
		bookService.post(book);
	}
	
	//updateBook
	@PutMapping("/books/{id}")
	public void put(Book book, @PathVariable(value = "id") long id) {
		bookService.put(book, id);
	}
	
	//deleteBook
	@DeleteMapping("/books/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		bookService.delete(id);
	}	
}
