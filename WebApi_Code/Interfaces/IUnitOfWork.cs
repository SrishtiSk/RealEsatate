using System.Threading.Tasks;

namespace WebApi_Code.Interfaces
{
    public interface IUnitOfWork
    {
        ICityRepository _iCityRepository{ get; }
        Task<bool> SaveAsync();
    }
}