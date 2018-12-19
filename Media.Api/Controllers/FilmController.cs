using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Media.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Film")]
    public class FilmController : Controller
    {
    }
}