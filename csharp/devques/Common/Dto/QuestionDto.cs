using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
        public class QuestionDto
        {
        public int CategoryId { get; set; }
            public int QuestionId { get; set; }
            //public  CategoryDto category { get; set; }
             public int UserId { get; set; }
             public int CompanyId { get; set; }

        

        //public int CategoryId { get; set; }

        public string Content { get; set; }
           // public virtual ICollection<Answer> Answers { get; set; }
            //public virtual ICollection<User> UsersMarked { get; set; }
            //public virtual Company Company { get; set; } 
        }
    }
