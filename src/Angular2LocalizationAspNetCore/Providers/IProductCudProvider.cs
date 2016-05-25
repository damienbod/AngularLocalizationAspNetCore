using System.Collections.Generic;
using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.ViewModels;

namespace Angular2LocalizationAspNetCore.Providers
{
    public interface IProductCudProvider
    {
        void AddProduct(ProductDto product, List<LocalizationRecordDto> localizationRecords);
    }
}