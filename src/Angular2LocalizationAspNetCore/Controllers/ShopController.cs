using Angular2LocalizationAspNetCore.Providers;
using Microsoft.AspNet.Mvc;

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
