using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Repository.Entities;
using Service.Interface;
using System.IO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestion<QuestionDto> _service;
        private readonly ImageUploadService _imageUploadService;
        public QuestionController(ImageUploadService imageUploadService, IQuestion<QuestionDto> service)
        {
            _imageUploadService = imageUploadService;
            _service = service;
        }
        // GET: api/<QuestionController>
        [HttpGet]
        [HttpGet]
        public List<QuestionDto> Get()
        {
            List<QuestionDto> ques = _service.GetAll();
            foreach (var question in ques)
            {
                if (!string.IsNullOrEmpty(question.Image))
                {
                    question.Image = _service.EncodeImageToBase64(question.Image);
                }
            }

          
            return ques;
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

        // PUT api/<QuestionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

            {
                var existingResource = _service.GetById(id);
                existingResource.Content = value;

            }
        }

        // DELETE api/<QuestionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpPost("category")]
        public List<QuestionDto> GetByCategory([FromBody] int[] categoryIds)
        {
            if (categoryIds == null || categoryIds.Length == 0)
            {
                return _service.GetAll();
            }

            var questionsInCategories = _service.GetByCategory(categoryIds);
            foreach (var question in questionsInCategories)
            {
                if (!string.IsNullOrEmpty(question.Image))
                {
                    question.Image = _service.EncodeImageToBase64(question.Image);
                }
            }

            return questionsInCategories;
        }

       

    }
}