using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public enum QuestionLevel
    {
        Level1 = 1,
        Level2 = 2,
        Level3 = 3
    }
    public class QuestionForUserDto
    {
        public int IdQues { get; set; }
        public int UserId { get; set; }
       

        public long QuestionId { get; set; }
       
        public Kind kind { get; set; }

      public QuestionLevel level { get; set; }

    }
}
