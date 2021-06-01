using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using WebApi_Code.Data;
using WebApi_Code.Interfaces;
using WebApi_Code.Models;

namespace WebApi_Code.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
       // private readonly DataContext dc;
       // private readonly ICityRepository repo;

        public IUnitOfWork Uow { get; }

        //public CityController(DataContext dataContext, ICityRepository repo)
        //public CityController(ICityRepository repo)
        public CityController(IUnitOfWork uow)
        {
           // this.repo = repo;
            Uow = uow;
            //this.dc = dataContext;
        }

        //GET /api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            //var cities = await dc.Cities.ToListAsync();
           // var cities = await repo.GetCitiesAsync();
            var cities = await Uow._iCityRepository.GetCitiesAsync();
            return Ok(cities);
        }

        [HttpGet("{id}")]
        public string GetCity(int id)
        {
            return "Atlanta";
        }

        // //POST /api/city/add?cityname=Miami
        // //POST /api/city/add/Los Angeles
        // [HttpPost("add")]
        // [HttpPost("add/{cityName}")]
        // public async Task<IActionResult> AddCity(string cityName)
        // {
        //     City city = new City();
        //     city.Name = cityName;
        //     await dc.Cities.AddAsync(city);
        //     await dc.SaveChangesAsync();
        //     return Ok(city);
        // }

        //POST /api/city/add/post  --post the data in JSON Format
        
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {
            // await dc.Cities.AddAsync(city);
            // await dc.SaveChangesAsync();
            // return Ok(city);

            // repo.AddCity(city);
            // await repo.SaveAsync();
            // return StatusCode(201);
            
            Uow._iCityRepository.AddCity(city);
            await Uow.SaveAsync();
            return StatusCode(201);
        }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            // var city = await dc.Cities.FindAsync(id);
            // dc.Cities.Remove(city);
            // await dc.SaveChangesAsync();

            // repo.DeleteCity(id);
            // await repo.SaveAsync();
            // return Ok(id);

            Uow._iCityRepository.DeleteCity(id);
            await Uow.SaveAsync();
            return Ok(id);

        }

    }
}