using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Question
    {
        //כל שאלה קשורה להרבה קטגוריות 
        public int QuestionId { get; set; }
        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public virtual Category category { get; set; }
        public DateTime DateUpload { get; set; }

        public string Content { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }

        [ForeignKey("Company")]
        public int CompanyId { get; set; }  
        public virtual Company Company { get; set; }

        public int Score { get; set; }
    }
}