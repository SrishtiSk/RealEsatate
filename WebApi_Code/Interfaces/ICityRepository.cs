using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi_Code.Models;

namespace WebApi_Code.Interfaces
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetCitiesAsync();
        void AddCity(City city);
        void DeleteCity(int CityId);
        // Task<bool> SaveAsync();
        Task<City> FindCity(int CityId);
    }
}