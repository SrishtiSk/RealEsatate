using Microsoft.EntityFrameworkCore;
using WebApi_Code.Models;

namespace WebApi_Code.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) {}
    
        public DbSet<City> Cities { get; set; }

    }
}