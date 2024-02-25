using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
        public class QuestionDto
        {
        public int QuestionId { get; set; }
        public int CategoryId { get; set; }
       // public int UserId { get; set; }
       public UserDto User { get; set; }
        public int CompanyId { get; set; }
        public string Content { get; set; }
    }
    }
