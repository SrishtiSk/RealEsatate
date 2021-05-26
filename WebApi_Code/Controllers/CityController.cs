using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi_Code.Data;

namespace WebApi_Code.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext dc;

        public CityController(DataContext dataContext)
        {
            this.dc = dataContext;
        }

        //GET /api/city
        [HttpGet("")]
        public IActionResult GetCities()
        {
            var cities =  dc.Cities.ToList();
            return Ok(cities);
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "Atlanta";
        }

    }
}