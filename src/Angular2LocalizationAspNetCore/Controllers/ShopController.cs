using Angular2LocalizationAspNetCore.Providers;
using Microsoft.AspNetCore.Mvc;

namespace Angular2LocalizationAspNetCore.Controllers
{
    [Route("api/[controller]")]
    public class ShopController : Controller
    {
        private readonly IProductRequestProvider _productRequestProvider;

        public ShopController(IProductRequestProvider productProvider)
        {
            _productRequestProvider = productProvider;
        }

        // http://localhost:5000/api/shop/AvailableProducts
        [HttpGet("AvailableProducts")]
        public IActionResult GetAvailableProducts()
        {
            return Ok(_productRequestProvider.GetAvailableProducts());
        }
    }
}
