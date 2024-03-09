using AutoMapper;
using Common.Dto;
using Repository.Entities;
using System;

namespace Service
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            //byte[] imageBytes = System.IO.File.ReadAllBytes(imagePath);
            CreateMap<User, UserDto>()
     .ForMember(
         dest => dest.Image,
         opt => opt.MapFrom(src =>
             src.Image != null
                 ? Convert.ToBase64String(System.IO.File.ReadAllBytes(src.Image))
                 : null
         )
     );

            CreateMap<UserDto, User>();

            CreateMap<Answer, AnswerDto>().ReverseMap();
            CreateMap<QuestionForUser, QuestionForUserDto>().ReverseMap();
            CreateMap<UserRatings, UserRatingsDto>().ReverseMap();
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<Company, CompanyDto>().ReverseMap();
            CreateMap<Question, QuestionDto>().ReverseMap();

            //  CreateMap<Question, QuestionDto>()
            //      .ForMember(
            //          dest => dest.Image,
            //          opt => opt.MapFrom(src =>
            //              src.Image != null
            //                  ? Convert.ToBase64String(System.IO.File.ReadAllBytes(src.Image))
            //                  : null
            //          )
            //      );
            //
            //  CreateMap<QuestionDto, Question>();

        }
    }
}
