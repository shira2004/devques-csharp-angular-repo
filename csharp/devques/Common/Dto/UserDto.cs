using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class UserDto
    {
      
            public int UserId { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        public string? Image { get; set; }


        // public virtual ICollection<Question> MarkedQuestions { get; set; } 
        //public virtual ICollection<Answer> GivenAnswers { get; set; } 

    }
}
