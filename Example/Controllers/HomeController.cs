﻿using System.Linq;
using System.Web.Mvc;
using Example.Data;

namespace Example.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
