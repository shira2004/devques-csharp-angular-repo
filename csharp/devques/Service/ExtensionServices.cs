using Common.Dto;
using Microsoft.Extensions.DependencyInjection;
using Repository;
using Service.Interface;
using Service.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public static  class ExtensionServices
    {

        public static IServiceCollection AddServises(this IServiceCollection Services)
        {
            Services.AddRepository();
            Services.AddScoped<IService<UserDto>, UserService>();
            Services.AddScoped<IService<CategoryDto>, CategoryService>();
            Services.AddScoped<IService<CompanyDto>, CompanyService>();
            Services.AddScoped<IService<AnswerDto>, AnswerService>();
            Services.AddScoped<IService<QuestionDto>, QuestionService>();
            Services.AddAutoMapper(typeof(MapperProfile));
            return Services;
        } 
    }
}
