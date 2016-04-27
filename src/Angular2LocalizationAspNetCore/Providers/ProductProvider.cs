using System;
using System.Collections.Generic;
using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.Resources;
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

        public List<Product> GetAvailableProducts()
        {
            // return _htmlLocalizer["Name"];
            throw new NotImplementedException();
        }
    }
}
