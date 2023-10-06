package com.adrian.books.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.adrian.books.entity.model.Book;


public interface IBookDao extends CrudRepository<Book, Long>{
}
