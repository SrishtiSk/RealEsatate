using System.Threading.Tasks;
using WebApi_Code.Interfaces;
using WebApi_Code.Data.Repo;

namespace WebApi_Code.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;
        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }

        public ICityRepository _iCityRepository => new CityRepository(dc);

        
        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
            // SaveChangesAsync() returns the number of records impacted.
            // and if changes is saved for '>0'(more than one) file SaveAsync() [this method] returns true.
        }
    }
}