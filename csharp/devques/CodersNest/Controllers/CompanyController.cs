using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly IService<CompanyDto> _service;

        public CompanyController(IService<CompanyDto> service)
        {
            _service = service;
        }
        // GET: api/<CompanyController>
        [HttpGet]
        public List<CompanyDto> Get()
        {
            return _service.GetAll();
        }

        // GET api/<CompanyController>/5
        [HttpGet("{id}")]
        public CompanyDto Get(int id)
        {
            return _service.GetById(id);
        }

        // POST api/<CompanyController>
        [HttpPost]
        public CompanyDto Post([FromBody] CompanyDto value)
        {
            return _service.Add(value);
        }

        // PUT api/<CompanyController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<CompanyController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
