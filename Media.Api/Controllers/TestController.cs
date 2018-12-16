using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Media.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Media.Api.Controllers
{
    [Route("api/Test")]
    public class TestController : Controller
    {
        private readonly MediaContext _context;

        public TestController(MediaContext context)
        {
            _context = context;
        }

        [HttpGet("get-users")]
        public List<User> GetUsers()
        {
            var users = _context.Users.ToList();

            return users;
        }
    }
}