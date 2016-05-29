using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Localization.SqlLocalizer.DbStringLocalizer;

namespace Angular2LocalizationAspNetCore.Migrations.LocalizationModel
{
    [DbContext(typeof(LocalizationModelContext))]
    [Migration("20160526185044_Localization")]
    partial class Localization
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20896");

            modelBuilder.Entity("Localization.SqlLocalizer.DbStringLocalizer.LocalizationRecord", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Key")
                        .IsRequired();

                    b.Property<string>("LocalizationCulture")
                        .IsRequired();

                    b.Property<string>("ResourceKey");

                    b.Property<string>("Text");

                    b.Property<DateTime>("UpdatedTimestamp");

                    b.HasKey("Id");

                    b.HasAlternateKey("Key", "LocalizationCulture");

                    b.ToTable("LocalizationRecords");
                });
        }
    }
}
