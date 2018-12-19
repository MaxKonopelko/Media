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
        public DbSet<Music> Music { get; set; }
        public DbSet<Video> Video { get; set; }
    }

    public class Image
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string AuthorFullName { get; set; }
    }

    public class Music
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string LinkImage { get; set; }
        public string AuthorFullName { get; set; }
    }

    public class Video
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
    }
}