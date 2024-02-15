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

        public static IServiceCollection AddServises(this IServiceCollection services)
        {
            services.AddRepository();
            services.AddScoped<IService<UserDto> , UserService>();
            services.AddAutoMapper(typeof(MapperProfile));
            return services;
        } 
    }
}
