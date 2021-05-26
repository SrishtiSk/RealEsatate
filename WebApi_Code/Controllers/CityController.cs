using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApi_Code.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController()
        {
        }

        //GET /api/city
        [HttpGet("")]
        public IEnumerable<string> GetStrings()
        {
            return new string[] {"Atlanta", "New York", "Canada", "boston", "Chicago"};
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "Atlanta";
        }

    }
}