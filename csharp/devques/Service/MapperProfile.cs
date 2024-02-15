using AutoMapper;
using Common.Dto;
using Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class MapperProfile :Profile
    {
        public MapperProfile() 
        {
        CreateMap<User , UserDto>().ReverseMap();
        CreateMap<Answer , AnswerDto>().ReverseMap();
        CreateMap<Category , CategoryDto>().ReverseMap();
        CreateMap<Company , CompanyDto>().ReverseMap();
        CreateMap<Question , QuestionDto>().ReverseMap();
        }
    }
}
