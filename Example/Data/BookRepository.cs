using System.Collections.Generic;
using Example.Models;

namespace Example.Data
{
    public static class BookRepository
    {
        static IList<Book> store = new List<Book>()
        {
            new Book
            {
                Name = "Patterns of Enterprise Application Architecture ", 
                Price = 44, 
                ImageUrl = "eaa.jpg",
                Author = new Author
                {
                    FirstName = "Martin", 
                    LastName = "Fowler"
                }
            },
            new Book
            {
                Name = "Domain-Driven Design", 
                Price = 47, 
                ImageUrl = "ddd.jpg",
                Author = new Author
                {
                    FirstName = "Eric", 
                    LastName = "Evans"
                }
            },
            new Book
            {
                Name = "Clean Code", 
                Price = 37, 
                ImageUrl = "cc.jpg",
                Author = new Author
                {
                    FirstName = "Robert", 
                    LastName = "Martin"
                }
            },
            new Book
            {
                Name = "Test Driven Development", 
                Price = 33, 
                ImageUrl = "tdd.jpg",
                Author = new Author
                {
                    FirstName = "Kent", 
                    LastName = "Beck"
                }
            },
            new Book
            {
                Name = "Domain-Specific Languages", 
                Price = 36, 
                ImageUrl = "dsl.jpg",
                Author = new Author
                {
                    FirstName = "Martin", 
                    LastName = "Fowler"
                }
            },
        };

        public static IEnumerable<Book> GetAll()
        {
            return store;
        }
    }
}