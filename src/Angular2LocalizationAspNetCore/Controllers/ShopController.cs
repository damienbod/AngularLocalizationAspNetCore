using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Angular2LocalizationAspNetCore.Controllers
{
    public class ShopController : Controller
    {
        [HttpGet("ResouceData")]
        public string GetResouceData()
        {
            return "great data";
        }


    }
}
