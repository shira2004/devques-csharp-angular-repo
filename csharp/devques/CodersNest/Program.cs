using AutoMapper;
using CodeFirst;
using Common.Dto;
using Repository;
using Repository.Entities;
using Repository.Interface;
using Repository.Repositories;
using Service;
using Service.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.AddScoped<UserService>();
//builder.Services.AddScoped<IRepository<UserDto>, UserRepository>();
//builder.Services.AddScoped<IMapper>();
//builder.Services.AddDbContext<IContext,DataContext>();
//builder.Services.AddAutoMapper(typeof(m))

builder.Services.AddServises() ;
builder.Services.AddDbContext<IContext,DataContext > ();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
