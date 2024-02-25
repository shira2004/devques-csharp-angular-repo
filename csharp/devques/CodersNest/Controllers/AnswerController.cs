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



        [HttpGet("GetAnswersByQuestionId/{questionId}")]
        public IActionResult GetAnswersByQuestionId(int questionId)
        {
            try
            {
                List<AnswerDto> answers = _service.GetAll().Where(answer => answer.QuestionId == questionId).ToList();

                if (answers == null || answers.Count == 0)
                {
                    return NotFound($"No answers found for question with ID {questionId}");
                }

                return Ok(answers);
            }
            catch (Exception ex)
            {
                
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

     [HttpPost("category")]
     public List<AnswerDto> GetByCategory([FromBody] int[] categoryIds)
     {
         if (categoryIds == null || categoryIds.Length == 0)
         {
             return _service.GetAll();
         }
     
         var answersInCategories =_service.GetAll().Where(a =>categoryIds.Contains(a.categoryId)).ToList();
            // _service.GetAll().Where(a => categoryIds.Contains(a.CategoryId)).ToList();

            return answersInCategories;
     }
      
    }
}
