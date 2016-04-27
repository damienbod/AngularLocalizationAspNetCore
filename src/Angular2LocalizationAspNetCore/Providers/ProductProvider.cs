using System;
using System.Collections.Generic;
using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.Resources;
using Angular2LocalizationAspNetCore.ViewModels;
using Microsoft.AspNet.Mvc.Localization;

namespace Angular2LocalizationAspNetCore.Providers
{
    public class ProductProvider : IProductProvider
    {
        private IHtmlLocalizer<ShopResource> _htmlLocalizer;

        public ProductProvider(IHtmlLocalizer<ShopResource> localizer)
        {
            _htmlLocalizer = localizer;
        }

        public List<ProductDto> GetAvailableProducts()
        {
            var dataSimi = InitDummyData();
            List<ProductDto> data = new List<ProductDto>();
            foreach(var t in dataSimi)
            {
                data.Add(new ProductDto() {
                    Id = t.Id,
                    Description = _htmlLocalizer[t.Description],
                    Name = _htmlLocalizer[t.Name],
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
