using System.Collections.Generic;
using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.Resources;
using Angular2LocalizationAspNetCore.ViewModels;
using Microsoft.Extensions.Localization;

namespace Angular2LocalizationAspNetCore.Providers
{
    public class ProductProvider : IProductProvider
    {
        private IStringLocalizer<ShopResource> _stringLocalizer;

        public ProductProvider(IStringLocalizer<ShopResource> localizer)
        {
            _stringLocalizer = localizer;
        }

        public List<ProductDto> GetAvailableProducts()
        {
            var dataSimi = InitDummyData();
            List<ProductDto> data = new List<ProductDto>();
            foreach(var t in dataSimi)
            {
                data.Add(new ProductDto() {
                    Id = t.Id,
                    Description = _stringLocalizer[t.Description],
                    Name = _stringLocalizer[t.Name],
                    ImagePath = t.ImagePath,
                    PriceCHF = t.PriceCHF,
                    PriceEUR = t.PriceEUR
                });
            }

            return data;
        }

        private List<Product> InitDummyData()
        {
            List<Product> data = new List<Product>();
            data.Add(new Product() { Id = 1, Description = "Mini HTML for content", Name="HTML wiz", ImagePath="", PriceCHF = 2.40, PriceEUR= 2.20  });
            data.Add(new Product() { Id = 2, Description = "R editor for data anaylsis", Name = "R editor", ImagePath = "", PriceCHF = 45.00, PriceEUR = 40 });
            return data;
        }
    }
}
