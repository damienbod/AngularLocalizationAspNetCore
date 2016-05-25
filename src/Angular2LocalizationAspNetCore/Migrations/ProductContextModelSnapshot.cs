using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Angular2LocalizationAspNetCore.Providers;

namespace Angular2LocalizationAspNetCore.Migrations
{
    [DbContext(typeof(ProductContext))]
    partial class ProductContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20896");

            modelBuilder.Entity("Angular2LocalizationAspNetCore.Models.Product", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("ImagePath");

                    b.Property<string>("Name");

                    b.Property<double>("PriceCHF");

                    b.Property<double>("PriceEUR");

                    b.Property<DateTime>("UpdatedTimestamp");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });
        }
    }
}
