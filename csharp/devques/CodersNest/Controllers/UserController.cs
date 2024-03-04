using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Repository.Entities;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using CodeFirst;

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IService<UserDto> _service;
        private readonly IConfiguration _configuration;
        private readonly DataContext _dbContext;
        private readonly ImageUploadService _imageUploadService;

        public UserController(ImageUploadService imageUploadService ,
                                IService<UserDto> service, 
                                IConfiguration configuration)
        {
            _service = service;
            _configuration = configuration;
            _imageUploadService = imageUploadService;
            //_dbContext = dbContext;
        }

        // GET: api/<UserController>
        [HttpGet]
        public List<UserDto> Get()
        {
            List<UserDto> users = _service.GetAll();
            return users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
           UserDto user = _service.GetById(id);
        
            return Ok(user);
        }

        // POST api/<UserController>
        // [HttpPost]
        // public IActionResult Post(string username, string password)
        // {
        //     var user = Authenticate(username, password);
        //     if (user != null)
        //     {
        //         var token = GenerateToken(user);
        //         return Ok(new { Token = token });
        //     }
        //     return NotFound("User not found");
        // }
        //
        // private UserDto Authenticate(string username, string password)
        // {
        //     var user = _service.GetAll().FirstOrDefault(x => x.FirstName == username && x.Password == password);
        //     return user;
        // }
        //
        // private string GenerateToken(UserDto user)
        // {
        //     using (var cryptoProvider = new RNGCryptoServiceProvider())
        //     {
        //         var keyBytes = new byte[32];
        //         cryptoProvider.GetBytes(keyBytes);
        //         var securityKey = new SymmetricSecurityKey(keyBytes);
        //
        //         var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
        //
        //         var claims = new[]
        //         {
        //             new Claim(ClaimTypes.NameIdentifier, user.FirstName),
        //             new Claim(ClaimTypes.Email, user.Email),
        //         };
        //
        //         var token = new JwtSecurityToken(
        //             _configuration["Jwt:Issuer"],
        //             _configuration["Jwt:Audience"],
        //             claims,
        //             expires: DateTime.Now.AddMinutes(15),
        //             signingCredentials: credentials
        //         );
        //
        //         return new JwtSecurityTokenHandler().WriteToken(token);
        //     }
        // }
        // POST api/<UserController>
        [HttpPost]
        public UserDto Post([FromBody] UserDto value)
        {
            try
            {
                if (!string.IsNullOrEmpty(value.Image))
                {
                    string fileExtension = "PNG";
                    string folderPath = "wwwroot/images";

                    value.Image = _imageUploadService.UploadImage(value.Image.Split(',')[1], folderPath, fileExtension);
                }

                var result = _service.Add(value);

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            return null;
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            // Your update logic here
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            // Your delete logic here
        }


    }
}
