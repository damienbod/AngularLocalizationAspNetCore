using Angular2LocalizationAspNetCore.ViewModels;

namespace Angular2LocalizationAspNetCore.Providers
{
    public interface IProductCudProvider
    {
        void AddProduct(ProductCreateEditDto product);
    }
}