using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class AnswerDto
    {
        //  public int CategoryId { get; set; }
        public int? AnswerId { get; set; }
        public int QuestionId { get; set; }
        public int UserId { get; set; }
        public UserDto? User { get; set; }

        public string Content { get; set; }
        public string? Code { get; set; }

        public int? Rating { get; set; }

        public int categoryId { get; set; }
        public string? Image { get; set; }

        public int Score { get; set; }
    }
}
