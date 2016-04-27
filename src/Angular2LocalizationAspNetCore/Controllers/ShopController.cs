using Angular2LocalizationAspNetCore.Resources;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Localization;

namespace Angular2LocalizationAspNetCore.Controllers
{
    public class ShopController : Controller
    {
        private IHtmlLocalizer<ShopResource> _htmlLocalizer;

        public ShopController(IHtmlLocalizer<ShopResource> localizer)
        {
            _htmlLocalizer = localizer;
        }

        [HttpGet("ResouceData")]
        public string GetResouceData()
        {
            // return _htmlLocalizer["Name"];
            return "great data";
        }


    }
}
