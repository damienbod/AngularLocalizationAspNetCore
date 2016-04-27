using Angular2LocalizationAspNetCore.Providers;
using Angular2LocalizationAspNetCore.Resources;
using Angular2LocalizationAspNetCore.ViewModels;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Localization;

namespace Angular2LocalizationAspNetCore.Controllers
{
    [Route("api/[controller]")]
    public class ShopController : Controller
    {
        private readonly IProductProvider _productProvider;

        public ShopController(IProductProvider productProvider)
        {
            _productProvider = productProvider;
        }

        // http://localhost:5000/api/shop/AvailableProducts
        [HttpGet("AvailableProducts")]
        public IActionResult GetAvailableProducts()
        {
            return Ok(_productProvider.GetAvailableProducts());
        }


    }
}
