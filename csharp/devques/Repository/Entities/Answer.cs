using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public DateTime date { get; set; }

        [ForeignKey("Question")]
        public int QuestionId { get; set; }
        public  virtual Question question { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; } 

        public virtual User User { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
    }
}
