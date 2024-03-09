using Common.Dto;
using Microsoft.AspNetCore.Mvc;
using Service.Interface;
using Service.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevQues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRatingsController : ControllerBase
    {
        private readonly IService<UserRatingsDto> _service;

        public UserRatingsController(IService<UserRatingsDto> service)
        {
            _service = service;
        }
        // GET: api/<UserRatingsController>
        [HttpGet]
        public List<UserRatingsDto> Get()
        {
            return _service.GetAll();
        }

        // GET api/<UserRatingsController>/5
        [HttpGet("{id}")]
        public UserRatingsDto Get(int id)
        {
            return _service.GetById(id);
        }

        [HttpPost]
        public IActionResult AddUserRating([FromBody] UserRatingsDto userRatingsDto)
        {
            try
            {
                var addedUserRating = _service.Add(userRatingsDto);
                return Ok(addedUserRating);
            }
            catch (InvalidOperationException ex)
            {
                // Handle the case where the user has already dragged the answer
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                // Handle other exceptions if necessary
                return StatusCode(500, "Internal server error");
            }
        }


        // PUT api/<UserRatingsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<UserRatingsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
