using Common.Dto;
using Microsoft.Extensions.DependencyInjection;
using Service.Interface;
using Service.Services;
using Service;
using Repository;

public static class ExtensionServices
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddRepository();
        services.AddScoped<IService<UserDto>, UserService>();
        services.AddScoped<IService<CategoryDto>, CategoryService>();
        services.AddScoped<IService<CompanyDto>, CompanyService>();
        services.AddScoped<IAnswer<AnswerDto>, AnswerService>();
        services.AddScoped<IQuestion<QuestionDto>, QuestionService>();
        services.AddScoped<IService<QuestionForUserDto>, QuestionForUserService>();
        services.AddScoped<IService<UserRatingsDto>, UserRatingsService>();

        services.AddScoped<ImageUploadService>();
        services.AddAutoMapper(typeof(MapperProfile));
        return services;
    }
}
