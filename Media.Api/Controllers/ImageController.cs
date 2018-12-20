using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Media.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Media.Api.Controllers
{
    [Route("api/Image")]
    public class ImageController : Controller
    {
        private readonly MediaContext _context;

        public ImageController(MediaContext context)
        {
            _context = context;
        }

        [HttpGet("get-all")]
        public List<Image> GetAll()
        {
            var images = _context.Images.ToList();

            return images;
        }

        [HttpGet("get-by-id/{id}")]
        public Image GetById(int id)
        {
            var image = _context.Images.First(x => x.Id == id);
            return image;
        }

        [HttpPost("add")]
        public int Add([FromBody] Image image)
        {
            throw new Exception("TRATATATATA_TA");
            _context.Images.Add(image);
            _context.SaveChanges();

            return image.Id;
        }

        [HttpDelete("remove/{id}")]
        public bool Remove(int id)
        {
            var val = _context.Images.FirstOrDefault(x => x.Id == id);
            if (val != null)
            {
                _context.Images.Remove(val);
                _context.SaveChanges();
            }
            return true;
        }
    }
}