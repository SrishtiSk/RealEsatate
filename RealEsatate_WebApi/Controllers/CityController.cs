using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEsatate_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get() 
        {
            return new string[] { "Atlanta, NewYork, Canada, Boston" };
        }

        [HttpGet("{id}")]
        public  string  Get(int id)
        {
            return "Atlanta";
        }

    }
}
