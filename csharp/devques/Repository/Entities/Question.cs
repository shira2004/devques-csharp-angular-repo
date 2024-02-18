using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
        public class Question
        {
            public int QuestionId { get; set; }
            public virtual Category category { get; set; }
            public DateTime DateUpload { get; set; }
            
            public string Content { get; set; }
            public int Score { get; set; }
            public virtual ICollection<Answer> Answers { get; set; }
            //public virtual ICollection<User> UsersMarked { get; set; }
            public virtual Company Company { get; set; } 
            public virtual User user { get; set; }
        }
    }
