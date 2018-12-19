using System;
using Microsoft.EntityFrameworkCore;

namespace Media.DAL
{
    public class MediaContext : DbContext
    {
        public MediaContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Image> Images { get; set; }
    }

    public class Image
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string AuthorFullName { get; set; }
    }
}