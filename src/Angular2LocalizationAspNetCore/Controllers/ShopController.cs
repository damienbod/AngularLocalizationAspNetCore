using Angular2LocalizationAspNetCore.Providers;
using Angular2LocalizationAspNetCore.Resources;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Localization;

namespace Angular2LocalizationAspNetCore.Controllers
{
    public class ShopController : Controller
    {
        private readonly IProductProvider _productProvider;

        public ShopController(IProductProvider productProvider)
        {
            _productProvider = productProvider;
        }

        [HttpGet("ResouceData")]
        public string GetResouceData()
        {
            
            return "great data";
        }


    }
}
