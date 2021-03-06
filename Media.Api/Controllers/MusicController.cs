﻿using System;
using System.Collections.Generic;
using System.Linq;
using Media.DAL;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Media.Api.Controllers
{
    [Route("api/Music")]
    public class MusicController : Controller
    {
        private readonly MediaContext _context;

        public MusicController(MediaContext context)
        {
            _context = context;
        }

        [HttpGet("get-all")]
        public List<Music> GetAll()
        {
            var music = _context.Music.ToList();

            return music;
        }

        [HttpGet("get-by-id/{id}")]
        public Music GetById(int id)
        {
            var music = _context.Music.First(x => x.Id == id);
            return music;
        }

        [HttpPost("add")]
        public int Add([FromBody] Music music)
        {
            _context.Music.Add(music);
            _context.SaveChanges();

            return music.Id;
        }

        [HttpDelete("remove/{id}")]
        public bool Remove(int id)
        {
            var val = _context.Music.FirstOrDefault(x => x.Id == id);
            if (val != null)
            {
                _context.Music.Remove(val);
                _context.SaveChanges();
            }
            return true;
        }
    }
}