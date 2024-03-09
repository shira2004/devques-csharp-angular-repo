using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionForUserController : ControllerBase
    {
        private readonly IService<QuestionForUserDto> _service;

        public QuestionForUserController(IService<QuestionForUserDto> service)
        {
            _service = service;
        }
        // GET: api/<QuestionForUserController>
        [HttpGet]
        public List<QuestionForUserDto> Get()
        {
            return _service.GetAll();
        }

        // GET api/<QuestionForUserController>/5
        [HttpGet("{id}")]
        public QuestionForUserDto Get(int id)
        {
            return _service.GetById(id);
        }

        // POST api/<QuestionForUserController>
        [HttpPost]
       public IActionResult AddQuestionForUser([FromBody] QuestionForUserDto questionForUserDto)
        {
            try
            {
                var addedQuestionForUser = _service.Add(questionForUserDto);
                return Ok(addedQuestionForUser);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
        // PUT api/<QuestionForUserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<QuestionForUserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
