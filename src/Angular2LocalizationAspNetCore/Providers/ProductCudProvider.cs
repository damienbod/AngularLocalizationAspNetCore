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
        private IStringExtendedLocalizerFactory _stringLocalizerFactory;

        public ProductCudProvider(ProductContext productContext, 
            LocalizationModelContext localizationModelContext,
            IStringExtendedLocalizerFactory stringLocalizerFactory)
        {
            _productContext = productContext;
            _localizationModelContext = localizationModelContext;
            _stringLocalizerFactory = stringLocalizerFactory;
        }

        public void AddProduct(ProductCreateEditDto product)
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

            foreach(var record in product.LocalizationRecords)
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
            _stringLocalizerFactory.ResetCache();
        }
    }
}
