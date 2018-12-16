using System;
using Microsoft.EntityFrameworkCore;

namespace Media.DAL
{
    public class MediaContext : DbContext
    {
        public MediaContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
