package com.adrian.books.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adrian.books.entity.dao.IBookDao;
import com.adrian.books.entity.model.Book;

@Service
public class BookServiceImpl implements IBookService{
	
	@Autowired
	private IBookDao bookDao;

	@Override
	public List<Book> getAll() {
		return (List<Book>)bookDao.findAll();
	}

	@Override
	//Get
	public Book get(long id) {
		return bookDao.findById(id).get();
	}

	@Override
	//Post
	public void post(Book book) {
		bookDao.save(book);
	}

	//Put
	@Override
	public void put(Book book, long id) {
		bookDao.findById(id).ifPresent((x) ->{
			book.setId(id);
			bookDao.save(book);
		});
	}
	//Delete
	@Override
	public void delete(long id) {
		bookDao.deleteById(id);
	}
}