using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.Providers;
using Angular2LocalizationAspNetCore.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Angular2LocalizationAspNetCore.Controllers
{
    [Route("api/[controller]")]
    public class ShopAdminController : Controller
    {
        private readonly IProductCudProvider _productCudProvider;

        public ShopAdminController(IProductCudProvider productCudProvider)
        {
            _productCudProvider = productCudProvider;
        }

        //[HttpGet("{id}")]
        //public IActionResult Get(long id)
        //{
        //    return Ok(_productCudProvider.GetProductCudProvider(id));
        //}

        [HttpPost]
        public void Post([FromBody]ProductCreateEditDto value)
        {
            _productCudProvider.AddProduct(value);
        }

        [HttpGet]
        [Route("AddTestData/{description}/{name}")]
        public IActionResult AddTestData(string description, string name)
        {
            var product = new ProductCreateEditDto
            {
                Description = description,
                Name = name,
                ImagePath = "",
                PriceCHF = 2.40,
                PriceEUR = 2.20,
                LocalizationRecords = new System.Collections.Generic.List<Models.LocalizationRecordDto>
                {
                    new LocalizationRecordDto { Key= description, LocalizationCulture = "de-CH", Text = $"{description} de-CH" },
                    new LocalizationRecordDto { Key= description, LocalizationCulture = "it-CH", Text = $"{description} it-CH" },
                    new LocalizationRecordDto { Key= description, LocalizationCulture = "fr-CH", Text = $"{description} fr-CH" },
                    new LocalizationRecordDto { Key= description, LocalizationCulture = "en-US", Text = $"{description} en-US" },
                    new LocalizationRecordDto { Key= name, LocalizationCulture = "de-CH", Text = $"{name} de-CH" },
                    new LocalizationRecordDto { Key= name, LocalizationCulture = "it-CH", Text = $"{name} it-CH" },
                    new LocalizationRecordDto { Key= name, LocalizationCulture = "fr-CH", Text = $"{name} fr-CH" },
                    new LocalizationRecordDto { Key= name, LocalizationCulture = "en-US", Text = $"{name} en-US" }
                }
            };
            _productCudProvider.AddProduct(product);
            return Ok("completed");
        }

        //private List<Product> InitDummyData()
        //{
        //    List<Product> data = new List<Product>();
        //    data.Add(new Product() { Id = 1, Description = "Mini HTML for content", Name = "HTML wiz", ImagePath = "", PriceCHF = 2.40, PriceEUR = 2.20 });
        //    data.Add(new Product() { Id = 2, Description = "R editor for data anaylsis", Name = "R editor", ImagePath = "", PriceCHF = 45.00, PriceEUR = 40 });
        //    return data;
        //}
    }
}
