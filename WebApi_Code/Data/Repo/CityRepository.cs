using System.Threading.Tasks;
using System.Collections.Generic;
using WebApi_Code.Models;
using Microsoft.EntityFrameworkCore;
using WebApi_Code.Interfaces;

namespace WebApi_Code.Data.Repo
{
    public class CityRepository : ICityRepository
    {
        private readonly DataContext dc;

        public CityRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            return await dc.Cities.ToListAsync();
        }

        public void AddCity(City city)
        {
            dc.Cities.Add(city);
        }
        public void DeleteCity(int CityId)
        {
            var city = dc.Cities.Find(CityId);
            dc.Cities.Remove(city);
        }

        // public async Task<bool> SaveAsync()
        // {
        //     return await dc.SaveChangesAsync() > 0;
        // }

        public async Task<City> FindCity(int cityId)
        {
            return await dc.Cities.FindAsync(cityId);
        }
    }
}