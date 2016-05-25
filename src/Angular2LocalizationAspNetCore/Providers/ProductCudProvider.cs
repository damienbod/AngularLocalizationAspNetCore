using System;
using System.Collections.Generic;
using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.Resources;
using Angular2LocalizationAspNetCore.ViewModels;
using Localization.SqlLocalizer.DbStringLocalizer;

namespace Angular2LocalizationAspNetCore.Providers
{
    public class ProductCudProvider : IProductCudProvider
    {
        private LocalizationModelContext _localizationModelContext;
        private ProductContext _productContext;

        public ProductCudProvider(ProductContext productContext, LocalizationModelContext localizationModelContext)
        {
            _productContext = productContext;
            _localizationModelContext = localizationModelContext;
        }

        public void AddProduct(ProductDto product, List<LocalizationRecordDto> localizationRecords)
        {
            _productContext.Products.Add(new Product
            {
                Description = product.Description,
                ImagePath = product.ImagePath,
                Name = product.Name,
                PriceCHF = product.PriceCHF,
                PriceEUR = product.PriceEUR
            });

            _productContext.SaveChanges();

            foreach(var record in localizationRecords)
            {
                _localizationModelContext.Add(new LocalizationRecord
                {
                    Key = record.Key,
                    Text = record.Text,
                    LocalizationCulture = record.LocalizationCulture,
                    ResourceKey = typeof(ShopResource).FullName
                });
            }

            _localizationModelContext.SaveChanges();
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
