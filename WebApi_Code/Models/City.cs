using System;

namespace WebApi_Code.Models
{
    public class City
    {
        public int CityId { get; set; }
        public string Name { get; set; }
        public DateTime LastUpdatedOn { get; set; }
        public int LastUpdatedBy { get; set; }
    }
}