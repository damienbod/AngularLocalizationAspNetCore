using System;
using System.Collections.Generic;
using System.Linq;
using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.Resources;
using Angular2LocalizationAspNetCore.ViewModels;
using Localization.SqlLocalizer.DbStringLocalizer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;

namespace Angular2LocalizationAspNetCore.Providers
{
    public class ProductRequestProvider : IProductRequestProvider
    {
        private IStringLocalizer _stringLocalizer;
        private IStringExtendedLocalizerFactory _stringLocalizerFactory;
        private ProductContext _productContext;

        public ProductRequestProvider(IStringExtendedLocalizerFactory stringLocalizerFactory,
            ProductContext productContext)
        {
            _stringLocalizerFactory = stringLocalizerFactory;
            _stringLocalizer = _stringLocalizerFactory.Create(typeof(ShopResource));
            _productContext = productContext;
        }

        public List<ProductDto> GetAvailableProducts()
        {
            var products = _productContext.Products.OrderByDescending(dataEventRecord => EF.Property<DateTime>(dataEventRecord, "UpdatedTimestamp")).ToList(); 
            List<ProductDto> data = new List<ProductDto>();
            foreach(var t in products)
            {
                data.Add(new ProductDto() {
                    Id = t.Id,
                    Description = _stringLocalizer[$"{t.Id}.{t.Description}"],
                    Name = _stringLocalizer[$"{t.Id}.{t.Name}"],
                    ImagePath = t.ImagePath,
                    PriceCHF = t.PriceCHF,
                    PriceEUR = t.PriceEUR
                });
            }

            return data;
        }
    }
}
