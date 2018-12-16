using System;
using System.Collections.Generic;
using System.Text;

namespace Media.DAL
{
    public static class MediaSeed
    {
        public static void Seed(MediaContext context)
        {
            CreateUsers(context);
        }

        private static void CreateUsers(MediaContext context)
        {
            context.Users.Add(new User
            {
                Name = "Test1s"
            });

            context.SaveChanges();
        }
    }
}
