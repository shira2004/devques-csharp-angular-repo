using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public  virtual Question question { get; set; }
        public virtual User User { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
    }
}
