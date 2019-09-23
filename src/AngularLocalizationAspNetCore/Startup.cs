using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Angular2LocalizationAspNetCore.Models;
using Angular2LocalizationAspNetCore.Providers;
using Localization.SqlLocalizer.DbStringLocalizer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Angular2LocalizationAspNetCore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IProductRequestProvider, ProductRequestProvider>();
            services.AddTransient<IProductCudProvider, ProductCudProvider>();

            // init database for localization
            var sqlConnectionString = Configuration["DbStringLocalizer:ConnectionString"];

            services.AddDbContext<LocalizationModelContext>(options =>
                options.UseSqlite(
                    sqlConnectionString,
                    b => b.MigrationsAssembly("Angular2LocalizationAspNetCore")
                ),
                ServiceLifetime.Singleton,
                ServiceLifetime.Singleton
            );

            services.AddDbContext<ProductContext>(options =>
              options.UseSqlite(sqlConnectionString)
            );

            // Requires that LocalizationModelContext is defined
            services.AddSqlLocalization(options => options.UseTypeFullNames = true);
            // services.AddLocalization(options => options.ResourcesPath = "Resources");

            services.Configure<RequestLocalizationOptions>(
                options =>
                    {
                        var supportedCultures = new List<CultureInfo>
                        {
                            new CultureInfo("en-US"),
                            new CultureInfo("de-CH"),
                            new CultureInfo("fr-CH"),
                            new CultureInfo("it-CH")
                        };

                        options.DefaultRequestCulture = new RequestCulture(culture: "en-US", uiCulture: "en-US");
                        options.SupportedCultures = supportedCultures;
                        options.SupportedUICultures = supportedCultures;
                    });

            services.AddControllersWithViews()
               .AddViewLocalization()
               .AddDataAnnotationsLocalization()
               .SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
        }

        public void Configure(IApplicationBuilder app)
        {
            
            var angularRoutes = new[] {
                "/home",
                "/forbidden",
                "/shop"
            };

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.HasValue && null != angularRoutes.FirstOrDefault(
                    (ar) => context.Request.Path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase)))
                {
                    context.Request.Path = new PathString("/");
                }

                await next();
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
