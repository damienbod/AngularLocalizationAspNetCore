using System.Collections.Generic;
using Angular2LocalizationAspNetCore.ViewModels;

namespace Angular2LocalizationAspNetCore.Providers
{
    public interface IProductRequestProvider
    {
        List<ProductDto> GetAvailableProducts();
    }
}