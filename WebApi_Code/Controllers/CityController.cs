using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using WebApi_Code.Data;
using Microsoft.AspNetCore.JsonPatch;
using AutoMapper;

using WebApi_Code.Dtos;
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
        private readonly IMapper mapper;
        public readonly IUnitOfWork Uow;

        //public CityController(DataContext dataContext, ICityRepository repo)
        //public CityController(ICityRepository repo)
        public CityController(IUnitOfWork uow, IMapper mapper)
        {
           // this.repo = repo;
            this.Uow = uow;
            this.mapper = mapper;
            //this.dc = dataContext;
        }

        //GET /api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            //var cities = await dc.Cities.ToListAsync();
           // var cities = await repo.GetCitiesAsync();
            var cities = await Uow._iCityRepository.GetCitiesAsync();
            
            // var citiesDto = from c in cities
            //                 select new CityDto(){
            //                     CityId= c.CityId,
            //                     Name = c.Name
            //                 };
            
            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
            
            return Ok(citiesDto);
        }

        [HttpGet("{id}")]
        public string GetCity(int id)
        {
            return "Atlanta";
        }

        #region post
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
        #endregion
        

        //POST /api/city/add/post  --post the data in JSON Format
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            {// await dc.Cities.AddAsync(city);
            // await dc.SaveChangesAsync();
            // return Ok(city);

            // repo.AddCity(city);
            // await repo.SaveAsync();
            // return StatusCode(201);
            }
                
            {
            // var city = new City{
            //     Name = cityDto.Name,
            //     LastUpdatedBy = 1,
            //     LastUpdatedOn = DateTime.Now
            // };
            }

            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;
            Uow._iCityRepository.AddCity(city);
            await Uow.SaveAsync();
            return StatusCode(201);
        }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            {// var city = await dc.Cities.FindAsync(id);
            // dc.Cities.Remove(city);
            // await dc.SaveChangesAsync();

            // repo.DeleteCity(id);
            // await repo.SaveAsync();
            // return Ok(id);
            }
            Uow._iCityRepository.DeleteCity(id);
            await Uow.SaveAsync();
            return Ok(id);
        }

        //Update PUT /api/city/update/{id}
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityDto cityDto)
        {
            var cityFromDb = await Uow._iCityRepository.FindCity(id);
            cityFromDb.LastUpdatedBy =1;
            cityFromDb.LastUpdatedOn = DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
            await Uow.SaveAsync();
            return StatusCode(200);
        }

        //Update PUT /api/city/update/{id}
        [HttpPut("updateCityName/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityUpdateDto cityDto)
        {
            var cityFromDb = await Uow._iCityRepository.FindCity(id);
            cityFromDb.LastUpdatedBy =1;
            cityFromDb.LastUpdatedOn = DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
            await Uow.SaveAsync();
            return StatusCode(200);
        }

        #region HttpPATCH
        //Update PATCH /api/city/update/{id}
        [HttpPatch("update/{id}")]
        public async Task<IActionResult> UpdateCityPatch(int id, JsonPatchDocument<City> cityToPatch)
        {
            var cityFromDb = await Uow._iCityRepository.FindCity(id);
            cityFromDb.LastUpdatedBy =1;
            cityFromDb.LastUpdatedOn = DateTime.Now;

            cityToPatch.ApplyTo(cityFromDb, ModelState);
            await Uow.SaveAsync();
            return StatusCode(200);
        }

        /*Why not use http patch in asp.net:
        moving away form newtonsoft JSON, 
        moving to System.text.Json- performance, security, std Json compliance
        */ 

        #endregion
        

    }
}