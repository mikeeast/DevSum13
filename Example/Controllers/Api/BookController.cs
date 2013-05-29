using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Example.Data;
using Example.Models;

namespace Example.Controllers.Api
{
    public class BookController : ApiController
    {
        public IEnumerable<Book> Get()
        {
            return BookRepository.GetAll();
        }
    }
}
