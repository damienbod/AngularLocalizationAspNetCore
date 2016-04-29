using System.Collections.Generic;
using Angular2LocalizationAspNetCore.ViewModels;

namespace Angular2LocalizationAspNetCore.Providers
{
    public interface IProductProvider
    {
        List<ProductDto> GetAvailableProducts();
    }
}