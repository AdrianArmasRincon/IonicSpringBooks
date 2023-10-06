package com.adrian.books.services;

import java.util.List;

import com.adrian.books.entity.model.Book;

public interface IBookService {
	public List<Book> getAll();
	public Book get(long id);
	public void post(Book book);
	public void put(Book book, long id);
	public void delete(long id);
}
