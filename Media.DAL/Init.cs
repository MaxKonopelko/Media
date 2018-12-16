using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;

namespace Media.DAL
{
    public static class InitDb
    {
        public static void InitConnectionString(IServiceCollection services)
        {
            services.AddDbContext<MediaContext>(x => x.UseSqlServer("Data Source=DESKTOP-P5T4DB7;Initial Catalog=Media;Integrated Security=True;"));
        }

        public static void Init(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<MediaContext>();

                Create(context);
            }
        }

        private static void Create(MediaContext context)
        {
            if (context.Database.EnsureCreated())
            {
                MediaSeed.Seed(context);
            }
        }
    }
}
