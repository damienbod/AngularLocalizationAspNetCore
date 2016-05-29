using System.Collections.Generic;
using Angular2LocalizationAspNetCore.Models;

namespace Angular2LocalizationAspNetCore.ViewModels
{
    public class ProductCreateEditDto
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ImagePath { get; set; }

        public double PriceEUR { get; set; }

        public double PriceCHF { get; set; }

        public List<LocalizationRecordDto> LocalizationRecords { get; set; }
    }
}
