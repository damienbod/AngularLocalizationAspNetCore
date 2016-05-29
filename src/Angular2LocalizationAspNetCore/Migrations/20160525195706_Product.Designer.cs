using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Angular2LocalizationAspNetCore.Models;

namespace Angular2LocalizationAspNetCore.Migrations
{
    [DbContext(typeof(ProductContext))]
    [Migration("20160525195706_Product")]
    partial class Product
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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
