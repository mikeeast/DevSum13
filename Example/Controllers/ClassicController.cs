using System.Linq;
using System.Web.Mvc;
using Example.Data;

namespace Example.Controllers
{
    public class ClassicController : Controller
    {
        public ActionResult Index(string sortOrder)
        {
            var books = BookRepository.GetAll();

            switch (sortOrder)
            {
                case "Name":
                    books = books.OrderBy(b => b.Name);
                    break;
                case "Name desc":
                    books = books.OrderByDescending(b => b.Name);
                    break;
                case "Price":
                    books = books.OrderBy(b => b.Price);
                    break;
                case "Price desc":
                    books = books.OrderByDescending(b => b.Price);
                    break;
            }

            ViewBag.NameSortParm = sortOrder == "Name" ? "Name desc" : "Name";
            ViewBag.PriceSortParm = sortOrder == "Price" ? "Price desc" : "Price";

            return View(books);
        }
    }
}
