using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Angular2LocalizationAspNetCore.Controllers
{
    public class I18nController : Controller
    {
        [HttpGet("ResouceData")]
        public I18nResourceData GetResouceData()
        {
            return new I18nResourceData();
        }


    }
}
