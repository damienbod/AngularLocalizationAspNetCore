using System.Collections.Generic;
using Angular2LocalizationAspNetCore.Models;

namespace Angular2LocalizationAspNetCore.Providers
{
    public interface IProductProvider
    {
        List<Product> GetAvailableProducts();
    }
}