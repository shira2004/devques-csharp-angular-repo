using Microsoft.Extensions.DependencyInjection;
using Repository.Entities;
using Repository.Interface;
using Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public static class RepositoryExtension
    {
        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            services.AddScoped<IRepository<User> , UserRepository>();
            services.AddScoped<IRepository<Category> , CategoryRepository>();
            services.AddScoped<IRepository<Company>, CompanyRepository>();
            services.AddScoped<IRepository<Question>, QuestionRepository>();
            services.AddScoped<IRepository<Answer>, AnswerRepository>();

            return services;
        }
    }
}
