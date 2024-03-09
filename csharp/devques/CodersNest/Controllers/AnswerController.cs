using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Repository.Entities;
using Service.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IAnswer<AnswerDto> _service;
        private readonly ImageUploadService _imageUploadService;
        public AnswerController(ImageUploadService imageUploadService, IAnswer<AnswerDto> service)
        {
            _imageUploadService = imageUploadService;
            _service = service;
        }

        // GET: api/<AnswerController>
        [HttpGet]
        public List<AnswerDto> Get()
        {
            List<AnswerDto> answers = _service.GetAll();

            return answers;
        }

        // GET api/<AnswerController>/5
        [HttpGet("{id}")]
        public AnswerDto Get(int id)
        {
            return _service.GetById(id);
        }

        // POST api/<AnswerController>
        [HttpPost]
        public AnswerDto Post([FromBody] AnswerDto value)
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

        // PUT api/<AnswerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            var existingResource = _service.GetById(id);
            existingResource.Content = value;

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

   //[HttpPost("category")]
   //public List<AnswerDto> GetByCategory([FromBody] int[] categoryIds)
   //{
   //    if (categoryIds == null || categoryIds.Length == 0)
   //    {
   //        return _service.GetAll();
   //    }
   //
   //    var answersInCategories =_service.GetAll().Where(a =>categoryIds.Contains(a.categoryId)).ToList();
   //       
   //       return answersInCategories;
   //}
   //

        [HttpGet("category")]
        public List<AnswerDto> GetByCategory([FromQuery] int[] categoryIds)
        {
            if (categoryIds == null || categoryIds.Length == 0)
            {
                return _service.GetAll();
            }

            var answersInCategories = _service.GetByCategory(categoryIds);
            foreach (var answer in answersInCategories)
            {
                if (!string.IsNullOrEmpty(answer.Image))
                {
                    answer.Image = _service.EncodeImageToBase64(answer.Image);
                }
            }

            return answersInCategories;
        }

    }
}
