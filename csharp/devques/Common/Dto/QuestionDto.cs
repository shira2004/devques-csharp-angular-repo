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
           // public virtual Category category { get; set; }
            
            public string Content { get; set; }
           // public virtual ICollection<Answer> Answers { get; set; }
            //public virtual ICollection<User> UsersMarked { get; set; }
            //public virtual Company Company { get; set; } 
        }
    }
