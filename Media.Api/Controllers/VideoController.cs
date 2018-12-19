using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Media.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Media.Api.Controllers
{
    [Route("api/Video")]
    public class VideoController : Controller
    {
        private readonly MediaContext _context;

        public VideoController(MediaContext context)
        {
            _context = context;
        }

        [HttpGet("get-all")]
        public List<Video> GetAll()
        {
            var video = _context.Video.ToList();

            return video;
        }

        [HttpGet("get-by-id/{id}")]
        public Video GetById(int id)
        {
            var video = _context.Video.First(x => x.Id == id);
            return video;
        }

        [HttpPost("add")]
        public int Add([FromBody] Video video)
        {
            _context.Video.Add(video);
            _context.SaveChanges();

            return video.Id;
        }

        [HttpDelete("remove/{id}")]
        public bool Remove(int id)
        {
            var val = _context.Video.FirstOrDefault(x => x.Id == id);
            if (val != null)
            {
                _context.Video.Remove(val);
                _context.SaveChanges();
            }
            return true;
        }
    }
}