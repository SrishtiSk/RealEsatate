using System.Threading.Tasks;
using System.Collections.Generic;
using WebApi_Code.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApi_Code.Data.Repo
{
    public class CityRepository : ICityRepository
    {
        private readonly DataContext dc;

        public CityRepository(DataContext dc)
        {
            this.dc = dc;
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
        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            return await dc.Cities.ToListAsync();
        }

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}