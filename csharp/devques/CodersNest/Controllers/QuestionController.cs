using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CodersNest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IService<QuestionDto> _service;

        public QuestionController(IService<QuestionDto> service)
        {
            _service = service;
        }
        // GET: api/<QuestionController>
        [HttpGet]
        public List<QuestionDto> Get()
        {
            return _service.GetAll();
        }

        // GET api/<QuestionController>/5
        [HttpGet("{id}")]
        public QuestionDto Get(int id)
        {
            return _service.GetById(id);
        }

        // POST api/<QuestionController>
        [HttpPost]
        public QuestionDto Post([FromBody] QuestionDto value)
        {
            return _service.Add(value);
        }

        // PUT api/<QuestionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<QuestionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
