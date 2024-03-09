using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public enum QuestionLevel
    {
        Level1 = 1,
        Level2 = 2,
        Level3 = 3
    }
    public class QuestionForUser
    {
        [Key]
        public int IdQues { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        public long QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public virtual Question Question { get; set; }
        public Kind kind { get; set; }

      public QuestionLevel level { get; set; }
    }
}
