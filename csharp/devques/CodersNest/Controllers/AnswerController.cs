using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IService<AnswerDto> _service;

        public AnswerController(IService<AnswerDto> service)
        {
            _service = service;
        }
        // GET: api/<AnswerController>
        [HttpGet]
        public List<AnswerDto> Get()
        {
            return _service.GetAll();
        }

        // GET api/<AnswerController>/5
        [HttpGet("{id}")]
        public AnswerDto Get(int id)
        {
            return _service.GetById(id);
        }

        // POST api/<AnswerController>
        [HttpPost]
        public AnswerDto Post([FromBody] AnswerDto  value)
        {
            return _service.Add(value); 
        }

        // PUT api/<AnswerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            
        }

        // DELETE api/<AnswerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
