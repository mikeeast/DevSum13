using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using Example.Models;

namespace Example.Controllers
{
    public class BeerController : ApiController
    {
        public IEnumerable<Beer> Get()
        {
            var beers = new List<Beer>()
            {
                new Beer { Name = "Brooklyn Lager", Price = 54 },
                new Beer { Name = "Twisted Thistle", Price = 49 },
                new Beer { Name = "Newcastle Brown Ale", Price = 59 },
                new Beer { Name = "Old Speckled Hen", Price = 64 },
            };

            return beers;
        }
    }
}
