using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Repository.Entities;
using Repository.Interface;
using Repository.Repositories;
using Service.Interface;
using Service.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IService<UserDto> _service;

        public UserController(IService<UserDto> service)
        {
            _service = service;
        }

        // GET: api/<UserController>
        [HttpGet]
        public List<UserDto> Get()
        {
            return _service.GetAll();
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public UserDto Get(int id)
        {
            return _service.GetById(id);
        }

        // POST api/<UserController>
        [HttpPost]
        public UserDto Post([FromBody] UserDto value)
        {
            return _service.Add(value);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
