using AutoMapper;
using WebApi_Code.Models;
using WebApi_Code.Dtos;

namespace WebApi_Code.Helper
{
    public class AutoMapperProfiles :Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityDto>().ReverseMap();
           // CreateMap<CityDto, City>();
            CreateMap<City, CityUpdateDto>().ReverseMap();
        }


    }
}